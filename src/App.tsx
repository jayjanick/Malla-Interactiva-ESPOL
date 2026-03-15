/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useMallaStore } from './store/useMallaStore';
import { faculties, careers } from './data/espol';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { MallaGrid } from './components/MallaGrid';
import { PlannerModal } from './components/PlannerModal';
import { PlannerPage } from './components/PlannerPage';
import { Sidebar } from './components/Sidebar';
import { AdSenseFooter } from './components/AdSenseFooter';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { translations } from './i18n/translations';

export default function App() {
  const { selectedCareerId, language } = useMallaStore();
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'dashboard' | 'planner' | 'privacy' | 'terms'>('dashboard');

  const selectedCareer = careers.find(c => c.id === selectedCareerId);
  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30 flex">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <div className="flex-1 flex flex-col relative z-10 min-h-screen pb-24 md:pb-0">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
        </div>

        <Header />
        
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 relative z-10">
          <AnimatePresence mode="wait">
            {currentView === 'privacy' ? (
              <PrivacyPolicy key="privacy" />
            ) : currentView === 'terms' ? (
              <TermsOfService key="terms" />
            ) : selectedCareer ? (
              currentView === 'dashboard' ? (
                <motion.div 
                  key="dashboard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col gap-8"
                >
                  <Dashboard career={selectedCareer} />
                  <MallaGrid career={selectedCareer} />
                </motion.div>
              ) : (
                <motion.div
                  key="planner"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <PlannerPage career={selectedCareer} />
                </motion.div>
              )
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center text-center opacity-50"
              >
                <BookOpen className="w-16 h-16 mb-4" />
                <h2 className="text-2xl font-medium">{t.dashboard.selectCareer}</h2>
                <p className="text-sm mt-2">{t.dashboard.selectCareerDesc}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <footer className="w-full text-center py-8 px-4 text-[11px] text-white/30 relative z-10 mt-auto flex flex-col items-center justify-center border-t border-white/5 bg-black/20">
          <div className="max-w-4xl mx-auto mb-6 text-left space-y-3 hidden md:block">
            <h3 className="text-white/50 font-medium text-xs uppercase tracking-wider">Sobre el Planificador de Mallas ESPOL</h3>
            <p className="leading-relaxed">
              El Planificador Interactivo de Mallas Curriculares es una herramienta no oficial diseñada para ayudar a los estudiantes de la Escuela Superior Politécnica del Litoral (ESPOL) a organizar su progreso académico. Permite visualizar las materias por semestre, verificar prerrequisitos y correquisitos, y calcular automáticamente los créditos aprobados.
            </p>
            <p className="leading-relaxed">
              Nuestra plataforma soporta múltiples facultades incluyendo FIEC, FCSH, FCV, FADCOM y FIMCM. Esta aplicación web facilita la toma de decisiones durante el proceso de registro de materias, ofreciendo una interfaz clara y moderna para la comunidad politécnica.
            </p>
          </div>

          <AdSenseFooter />
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full">
            <span className="hidden xl:inline-block font-mono bg-white/5 px-2 py-0.5 rounded-md border border-white/10">v1.0.2</span>
            <span className="hidden xl:inline">•</span>
            <span>© {new Date().getFullYear()} - Hecho con ❤️ por <a href="https://github.com/jayjanick" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">Jay</a></span>
            <span className="hidden sm:inline">•</span>
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  setCurrentView('privacy');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="hover:text-white/80 transition-colors underline decoration-white/20 underline-offset-2"
              >
                Políticas de Privacidad
              </button>
              <button 
                onClick={() => {
                  setCurrentView('terms');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="hover:text-white/80 transition-colors underline decoration-white/20 underline-offset-2"
              >
                Términos de Uso
              </button>
            </div>
          </div>
        </footer>

        {selectedCareer && currentView === 'dashboard' && (
          <button
            onClick={() => setIsPlannerOpen(true)}
            className="fixed bottom-24 md:bottom-8 right-4 sm:right-8 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-full shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center group"
            aria-label="Abrir planificador"
          >
            <BookOpen className="w-5 h-5" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out ml-0 group-hover:ml-2 font-medium text-sm">
              {t.dashboard.expressPlanner}
            </span>
          </button>
        )}

        <AnimatePresence>
          {isPlannerOpen && selectedCareer && (
            <PlannerModal 
              onClose={() => setIsPlannerOpen(false)} 
              career={selectedCareer} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
