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
            : "text-foreground/70 hover:bg-foreground/[0.03] hover:text-foreground"
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
            ? "opacity-50 cursor-not-allowed bg-foreground/[0.02] border-border text-foreground/30" 
            : "bg-foreground/[0.02] dark:bg-white/5 border-border hover:bg-foreground/[0.05] dark:hover:bg-white/[0.05] hover:border-foreground/20 dark:hover:border-white/15 text-foreground/80 hover:text-foreground cursor-pointer"
        )}
      >
        <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200 text-foreground/50 shrink-0", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "absolute z-50 w-full min-w-[200px] mt-2 overflow-hidden border shadow-2xl bg-card border-border rounded-xl shadow-foreground/5 dark:shadow-black/50 transition-colors duration-500",
              alignClass,
              dropdownClassName
            )}
          >
            <div className="flex flex-col max-h-60 overflow-y-auto custom-scrollbar p-1.5 gap-0.5">
              {options.map((item, index) => {
                if ('options' in item) {
                  return (
                    <div key={`group-${index}`} className="mb-2 last:mb-0">
                      <div className="px-3 py-1.5 text-xs font-semibold text-foreground/40 uppercase tracking-wider sticky top-0 bg-card/95 backdrop-blur-xl z-10">
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
