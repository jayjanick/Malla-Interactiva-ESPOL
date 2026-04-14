import { motion } from 'motion/react';
import { BookOpen, Map, CheckCircle2, GraduationCap, Clock } from 'lucide-react';
import { faculties, careers } from '../data/espol';

export function LandingPage() {
  return (
    <motion.div 
      key="empty"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-12 px-4"
    >
      <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-8">
        <BookOpen className="w-10 h-10" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
        Mallin <span className="text-emerald-500">ESPOL</span>
      </h1>
      
      <p className="text-lg text-slate-500 dark:text-white/60 mb-12 max-w-2xl leading-relaxed">
        ¡Hola! Bienvenido a <strong>Mallin ESPOL</strong>, una herramienta no oficial creada para ayudarnos a organizar nuestras mallas curriculares con tiempo y proyectar nuestra carrera académica. Selecciona tu facultad y carrera en el menú superior para comenzar.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left mt-8">
        <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-6 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors">
          <Map className="w-8 h-8 text-emerald-500 mb-4" />
          <h2 className="text-xl font-medium mb-2">Visualiza tu Malla</h2>
          <p className="text-sm text-slate-500 dark:text-white/50 leading-relaxed">
            Explora el plan de estudios completo de tu carrera. Revisa todas las materias organizadas por semestres y conoce los prerrequisitos y correquisitos necesarios para que no te tome por sorpresa ninguna asignatura.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-6 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors">
          <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-4" />
          <h2 className="text-xl font-medium mb-2">Calcula tus Créditos</h2>
          <p className="text-sm text-slate-500 dark:text-white/50 leading-relaxed">
            Marca las materias que ya has aprobado y deja que el sistema calcule automáticamente tu progreso. Así podrás mantener un registro claro de cuántos créditos te faltan para graduarte.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-6 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors">
          <Clock className="w-8 h-8 text-emerald-500 mb-4" />
          <h2 className="text-xl font-medium mb-2">Proyecta tus Semestres</h2>
          <p className="text-sm text-slate-500 dark:text-white/50 leading-relaxed">
            Diseñé el planificador interactivo para que podamos simular qué materias tomaremos en los próximos términos académicos, evitando errores en el registro y asegurándonos de cumplir con las reglas de la universidad.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-6 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors">
          <GraduationCap className="w-8 h-8 text-emerald-500 mb-4" />
          <h2 className="text-xl font-medium mb-2">Múltiples Facultades</h2>
          <p className="text-sm text-slate-500 dark:text-white/50 leading-relaxed">
            He ido agregando carreras de FIEC, FCSH, FCV, FADCOM, FIMCM y FCNM. La idea es mantener la base de datos actualizada para incluir a más compañeros de otras facultades de la ESPOL.
          </p>
        </div>
      </div>
      
      <div className="mt-16 w-full text-left">
        <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white/90">Carreras Soportadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {faculties.map(faculty => {
            const facultyCareers = careers.filter(c => c.facultyId === faculty.id);
            if (facultyCareers.length === 0) return null;
            return (
              <div key={faculty.id} className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-5 rounded-xl">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-3">{faculty.name} ({faculty.acronym})</h3>
                <ul className="space-y-2">
                  {facultyCareers.map(career => (
                    <li key={career.id} className="text-sm text-slate-500 dark:text-white/60 flex items-start gap-2">
                      <span className="text-emerald-500/50 mt-0.5">•</span>
                      <span>{career.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-16 text-sm text-slate-400 dark:text-white/40 max-w-3xl text-left bg-slate-100 dark:bg-black/20 p-6 rounded-xl border border-slate-200 dark:border-white/5">
        <h3 className="font-medium text-slate-500 dark:text-white/60 mb-2">Nota sobre esta herramienta:</h3>
        <p>
          Esta aplicación es un proyecto personal e independiente que hice como estudiante y no está afiliada oficialmente a la Escuela Superior Politécnica del Litoral (ESPOL). Mi propósito es facilitarnos la planificación académica, pero recuerda siempre verificar la información oficial en los canales institucionales de la universidad al momento de realizar tu registro de materias.
        </p>
      </div>
    </motion.div>
  );
}
