import { useState } from 'react';
import { Home, CalendarDays, Settings, X, RotateCcw, GraduationCap } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { useMallaStore } from '../store/useMallaStore';
import { translations, Language } from '../i18n/translations';
import { CustomSelect } from './CustomSelect';

interface SidebarProps {
  currentView: 'dashboard' | 'planner';
  setCurrentView: (view: 'dashboard' | 'planner') => void;
}

export function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isConfirmingReset, setIsConfirmingReset] = useState(false);
  const { clearAll, language, setLanguage } = useMallaStore();
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
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-[#0a0a0a] border-r border-white/5 flex-col h-screen sticky top-0 shrink-0">
        <div className="p-6 flex items-center gap-3 border-b border-white/5">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight leading-tight">{t.sidebar.logo}</span>
            <span className="text-xs font-bold text-emerald-500 leading-tight">{t.sidebar.university}</span>
          </div>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-2">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium",
              currentView === 'dashboard' 
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                : "text-white/50 hover:text-white hover:bg-white/5 border border-transparent"
            )}
          >
            <Home className="w-5 h-5" />
            {t.sidebar.dashboard}
          </button>
          <button
            onClick={() => setCurrentView('planner')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium",
              currentView === 'planner' 
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                : "text-white/50 hover:text-white hover:bg-white/5 border border-transparent"
            )}
          >
            <CalendarDays className="w-5 h-5" />
            {t.sidebar.planner}
          </button>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium text-white/50 hover:text-white hover:bg-white/5"
          >
            <Settings className="w-5 h-5" />
            {t.settings.title}
          </button>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] z-50">
        <div className="bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-around py-2.5 px-3 shadow-2xl shadow-black/50">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={cn(
              "p-2.5 rounded-xl transition-all flex items-center justify-center",
              currentView === 'dashboard' 
                ? "bg-emerald-500/20 text-emerald-400" 
                : "text-white/50 hover:text-white hover:bg-white/5"
            )}
          >
            <Home className="w-6 h-6 shrink-0" />
          </button>
          <button
            onClick={() => setCurrentView('planner')}
            className={cn(
              "p-2.5 rounded-xl transition-all flex items-center justify-center",
              currentView === 'planner' 
                ? "bg-emerald-500/20 text-emerald-400" 
                : "text-white/50 hover:text-white hover:bg-white/5"
            )}
          >
            <CalendarDays className="w-6 h-6 shrink-0" />
          </button>
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="p-2.5 rounded-xl transition-all flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5"
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
              className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col"
            >
              <div className="flex flex-col items-center justify-center p-6 border-b border-white/5 relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-medium tracking-tight leading-tight">{t.sidebar.logo}</span>
                    <span className="text-[10px] font-bold text-emerald-500 leading-tight">{t.sidebar.university}</span>
                  </div>
                </div>
                <h2 className="text-sm font-medium tracking-tight flex items-center gap-1.5 text-white/50">
                  <Settings className="w-4 h-4" />
                  {t.settings.title}
                </h2>
                <button 
                  onClick={() => {
                    setIsSettingsOpen(false);
                    setIsConfirmingReset(false);
                  }}
                  className="absolute right-4 top-4 p-2 rounded-lg hover:bg-white/5 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
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

                  <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                    <div className="flex flex-col">
                      <span className="font-medium">{t.settings.university}</span>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400">
                      ESPOL
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                    <div className="flex flex-col">
                      <span className="font-medium">{t.settings.version}</span>
                    </div>
                    <span className="text-sm font-mono text-white/50">
                      v1.0.2
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
