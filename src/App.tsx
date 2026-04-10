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
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { LandingPage } from './components/LandingPage';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Github, Mail, Linkedin } from 'lucide-react';
import { translations } from './i18n/translations';
import { Analytics } from "@vercel/analytics/next";

export default function App() {
  const { selectedCareerId, language } = useMallaStore();
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'dashboard' | 'planner' | 'privacy' | 'terms'>('dashboard');

  const selectedCareer = careers.find(c => c.id === selectedCareerId);
  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <div className="flex flex-col relative z-10 min-h-screen pb-24 md:pb-0 md:ml-24 min-w-0">
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
              <LandingPage key="empty" />
            )}
          </AnimatePresence>
        </main>

        <footer className="w-full py-8 px-6 sm:px-8 lg:px-12 text-[11px] text-white/30 relative z-10 mt-auto border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between gap-10 md:gap-8">
            
            {/* Left Column (75%) */}
            <div className="w-full md:w-[75%] flex flex-col gap-6 text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <span>© {new Date().getFullYear()} - Hecho con ❤️ por <a href="https://github.com/jayjanick" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">Jay</a></span>
                <span className="hidden sm:inline">•</span>
                <div className="flex flex-wrap gap-4">
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
                <span className="hidden xl:inline-block font-mono bg-white/5 px-2 py-0.5 rounded-md border border-white/10 sm:ml-auto">v1.0.2</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-white/50 font-medium text-xs uppercase tracking-wider">Sobre el Planificador de Mallas ESPOL</h3>
                <p className="leading-relaxed">
                  Creé este Planificador Interactivo como una herramienta no oficial esperando que, al igual que a mí, les sirva a mis compañeros de la ESPOL para organizarse con tiempo y proyectar su carrera. Nos permite visualizar las materias por semestre, verificar prerrequisitos y calcular automáticamente los créditos aprobados.
                </p>
                <p className="leading-relaxed">
                  Actualmente he agregado soporte para múltiples facultades incluyendo FIEC, FCSH, FCV, FADCOM, FIMCM y FCNM. Mi objetivo con esta aplicación web es facilitarnos la toma de decisiones durante el proceso de registro de materias, ofreciendo una interfaz clara y moderna que nos sea de gran utilidad a toda la comunidad politécnica.
                </p>
              </div>
            </div>

            {/* Right Column (25%) */}
            <div className="w-full md:w-[25%] flex flex-col items-center justify-center gap-4">
              <h3 className="text-white/50 font-medium text-xs uppercase tracking-wider text-center">Contacto</h3>
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://github.com/jayjanick" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/jay-janick" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:jay.palacios2111@gmail.com" 
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors"
                  aria-label="Correo Electrónico"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
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
      <Analytics />
    </div>
  );
}
