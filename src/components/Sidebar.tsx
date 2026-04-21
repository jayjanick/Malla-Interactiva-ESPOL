import { useState } from 'react';
import { Home, CalendarDays, Settings, X, RotateCcw, GraduationCap, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { useMallaStore } from '../store/useMallaStore';
import { translations, Language } from '../i18n/translations';
import { CustomSelect } from './CustomSelect';

interface SidebarProps {
  currentView: 'dashboard' | 'planner' | 'privacy' | 'terms';
  setCurrentView: (view: 'dashboard' | 'planner' | 'privacy' | 'terms') => void;
}

export function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isConfirmingReset, setIsConfirmingReset] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { clearAll, language, setLanguage, theme, setTheme } = useMallaStore();
  const [tempLanguage, setTempLanguage] = useState<Language>(language);

  const t = translations[language];

  const handleReset = () => {
    setIsConfirmingReset(true);
  };

  const confirmReset = () => {
    clearAll();
    setIsConfirmingReset(false);
    setIsSettingsOpen(false);
  };

  const cancelReset = () => {
    setIsConfirmingReset(false);
  };

  const handleApplyChanges = () => {
    setLanguage(tempLanguage);
    setIsSettingsOpen(false);
    setIsConfirmingReset(false);
  };

  return (
    <>
      <motion.div 
        className="hidden md:flex flex-col h-[calc(100vh-2rem)] fixed top-4 left-4 rounded-3xl shrink-0 z-50 overflow-hidden ios-glass ios-shadow transition-colors duration-500"
        animate={{ width: isHovered ? 256 : 80 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className={cn("p-6 flex items-center gap-3 border-b border-border h-[88px]", !isHovered && "p-4 justify-center gap-0")}>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-500 shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className={cn("flex flex-col overflow-hidden transition-all duration-300 whitespace-nowrap", isHovered ? "w-auto opacity-100" : "w-0 opacity-0")}>
            <span className="font-bold tracking-tight leading-tight">{t.sidebar.logo}</span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-500 leading-tight">{t.sidebar.university}</span>
          </div>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-2">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium",
              !isHovered && "justify-center",
              currentView === 'dashboard' 
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" 
                : "text-foreground/50 hover:text-foreground hover:bg-foreground/[0.02] border border-transparent"
            )}
          >
            <Home className="w-5 h-5 shrink-0" />
            {isHovered && t.sidebar.dashboard}
          </button>
          <button
            onClick={() => setCurrentView('planner')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium",
              !isHovered && "justify-center",
              currentView === 'planner' 
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 border border-emerald-500/20" 
                : "text-foreground/50 hover:text-foreground hover:bg-foreground/[0.05] border border-transparent"
            )}
          >
            <CalendarDays className="w-5 h-5 shrink-0" />
            {isHovered && t.sidebar.planner}
          </button>
        </nav>

        <div className="p-4 border-t border-border">
          <button
            onClick={() => setIsSettingsOpen(true)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium text-foreground/50 hover:text-foreground hover:bg-foreground/[0.05]",
              !isHovered && "justify-center"
            )}
          >
            <Settings className="w-5 h-5 shrink-0" />
            {isHovered && t.settings.title}
          </button>
        </div>
      </motion.div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] z-50">
        <div className="ios-glass ios-shadow rounded-3xl flex items-center justify-around py-2.5 px-3 transition-colors duration-500">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={cn(
              "p-2.5 rounded-xl transition-all flex items-center justify-center",
              currentView === 'dashboard' 
                ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-500" 
                : "text-foreground/50 hover:text-foreground hover:bg-foreground/5"
            )}
          >
            <Home className="w-6 h-6 shrink-0" />
          </button>
          <button
            onClick={() => setCurrentView('planner')}
            className={cn(
              "p-2.5 rounded-xl transition-all flex items-center justify-center",
              currentView === 'planner' 
                ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-500" 
                : "text-foreground/50 hover:text-foreground hover:bg-foreground/5"
            )}
          >
            <CalendarDays className="w-6 h-6 shrink-0" />
          </button>
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="p-2.5 rounded-xl transition-all flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-foreground/5"
          >
            <Settings className="w-6 h-6 shrink-0" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isSettingsOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsSettingsOpen(false);
                setIsConfirmingReset(false);
              }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-card shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] shadow-2xl border border-border rounded-3xl overflow-hidden flex flex-col transition-colors duration-500"
            >
              <div className="flex flex-col items-center justify-center p-6 border-b border-border relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-medium tracking-tight leading-tight">{t.sidebar.logo}</span>
                    <span className="text-[10px] font-bold text-emerald-500 leading-tight">{t.sidebar.university}</span>
                  </div>
                </div>
                <h2 className="text-sm font-medium tracking-tight flex items-center gap-1.5 text-foreground/50">
                  <Settings className="w-4 h-4" />
                  {t.settings.title}
                </h2>
                <button 
                  onClick={() => {
                    setIsSettingsOpen(false);
                    setIsConfirmingReset(false);
                  }}
                  className="absolute right-4 top-4 p-2 rounded-lg hover:bg-foreground/5 text-foreground/50 hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between p-4 bg-foreground/[0.02] border border-border rounded-xl transition-colors duration-500">
                    <div className="flex flex-col">
                      <span className="font-medium">Modo Claro</span>
                      <span className="text-[10px] text-foreground/50">Cambia la interfaz a colores claros</span>
                    </div>
                    <button
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className={cn(
                        "relative w-20 h-10 rounded-full transition-all duration-300 flex items-center p-1",
                        theme === 'light' 
                          ? "bg-[#EAEAEA] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,1)]" 
                          : "bg-[#18181a] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.8),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]"
                      )}
                    >
                      <motion.div
                        layout
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 relative z-10",
                          theme === 'light' 
                            ? "bg-[#EAEAEA] shadow-[3px_3px_6px_rgba(0,0,0,0.15),-3px_-3px_6px_rgba(255,255,255,1)] ml-0" 
                            : "bg-[#1f1f22] shadow-[3px_3px_6px_rgba(0,0,0,0.6),-3px_-3px_6px_rgba(255,255,255,0.05)] ml-auto"
                        )}
                      >
                        {theme === 'light' ? (
                          <Sun className="w-4 h-4 text-amber-500 drop-shadow-[0_0_4px_rgba(245,158,11,0.6)]" />
                        ) : (
                          <Moon className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_4px_rgba(52,211,153,0.8)] fill-emerald-400/20" />
                        )}
                      </motion.div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-foreground/[0.02] border border-border rounded-xl">
                    <div className="flex flex-col">
                      <span className="font-medium">{t.settings.language}</span>
                    </div>
                    <div className="w-40">
                      <CustomSelect
                        value={tempLanguage}
                        onChange={(val) => setTempLanguage(val as Language)}
                        options={[
                          { value: 'es', label: t.settings.spanish },
                          { value: 'en', label: t.settings.english }
                        ]}
                        placeholder={t.settings.language}
                        align="right"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-foreground/[0.02] border border-border rounded-xl">
                    <div className="flex flex-col">
                      <span className="font-medium">{t.settings.university}</span>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-500">
                      ESPOL
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-foreground/[0.02] border border-border rounded-xl">
                    <div className="flex flex-col">
                      <span className="font-medium">{t.settings.version}</span>
                    </div>
                    <span className="text-sm font-mono text-foreground/50">
                      v1.2.3
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    {isConfirmingReset ? (
                      <div className="flex flex-col gap-2 p-3 bg-red-500/5 border border-red-500/10 rounded-lg">
                        <span className="text-xs text-red-300/80 font-medium text-center">{t.settings.resetConfirm}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={cancelReset}
                            className="flex-1 py-1.5 bg-white/5 hover:bg-white/10 text-white/70 rounded text-xs font-medium transition-colors"
                          >
                            {t.settings.cancel}
                          </button>
                          <button
                            onClick={confirmReset}
                            className="flex-1 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400/80 rounded text-xs font-medium transition-colors"
                          >
                            {t.settings.resetAll}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={handleReset}
                        className="w-full flex items-center justify-center gap-1.5 p-2 text-white/30 hover:text-red-400/80 hover:bg-red-500/5 rounded-lg transition-colors text-xs font-medium"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        {t.settings.resetAll}
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/5 flex justify-center">
                  <button
                    onClick={handleApplyChanges}
                    className="px-8 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-colors w-full sm:w-auto"
                  >
                    {t.settings.applyChanges}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
