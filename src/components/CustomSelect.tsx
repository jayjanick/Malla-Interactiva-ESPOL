import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '../lib/utils';

export interface Option {
  value: string;
  label: string;
}

export interface OptionGroup {
  label: string;
  options: Option[];
}

export type SelectOption = Option | OptionGroup;

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder: string;
  disabled?: boolean;
  className?: string;
  dropdownClassName?: string;
  align?: 'left' | 'right';
}

export function CustomSelect({ 
  value, 
  onChange, 
  options, 
  placeholder, 
  disabled, 
  className, 
  dropdownClassName,
  align = 'left'
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const flatOptions = options.reduce<Option[]>((acc, curr) => {
    if ('options' in curr) {
      return [...acc, ...curr.options];
    }
    return [...acc, curr];
  }, []);

  const selectedOption = flatOptions.find(opt => opt.value === value);
  const alignClass = align === 'right' ? 'right-0 origin-top-right' : 'left-0 origin-top-left';

  const renderOption = (option: Option) => {
    const isSelected = option.value === value;
    return (
      <button
        key={option.value}
        onClick={() => {
          onChange(option.value);
          setIsOpen(false);
        }}
        className={cn(
          "flex items-center justify-between w-full px-3 py-2 text-sm transition-colors rounded-lg text-left group",
          isSelected 
            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium" 
            : "text-slate-600 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/[0.03] hover:text-slate-900 dark:hover:text-white"
        )}
      >
        <span className="truncate">{option.label}</span>
        {isSelected && <Check className="w-4 h-4 shrink-0" />}
      </button>
    );
  };

  return (
    <div className={cn("relative", className)} ref={ref}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          "flex items-center justify-between w-full gap-2 px-3 py-2 text-sm font-medium transition-all border rounded-lg outline-none focus:ring-2 focus:ring-emerald-500/50",
          disabled 
            ? "opacity-50 cursor-not-allowed bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 text-slate-400 dark:text-white/30" 
            : "bg-slate-100 dark:bg-white/5 border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/[0.05] hover:border-slate-400 dark:hover:border-white/15 text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white cursor-pointer"
        )}
      >
        <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200 text-slate-500 dark:text-white/50 shrink-0", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "absolute z-50 w-full min-w-[200px] mt-2 overflow-hidden border shadow-2xl bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-slate-300 dark:border-white/10 rounded-xl shadow-slate-200/50 dark:shadow-black/50",
              alignClass,
              dropdownClassName
            )}
          >
            <div className="flex flex-col max-h-60 overflow-y-auto custom-scrollbar p-1.5 gap-0.5">
              {options.map((item, index) => {
                if ('options' in item) {
                  return (
                    <div key={`group-${index}`} className="mb-2 last:mb-0">
                      <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 dark:text-white/40 uppercase tracking-wider sticky top-0 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl z-10">
                        {item.label}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        {item.options.map(renderOption)}
                      </div>
                    </div>
                  );
                }
                return renderOption(item);
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
