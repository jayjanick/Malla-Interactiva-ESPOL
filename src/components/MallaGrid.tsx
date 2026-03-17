import { useMallaStore } from '../store/useMallaStore';
import { Career, Subject } from '../data/espol';
import { SubjectCard } from './SubjectCard';
import { motion } from 'motion/react';
import { translations } from '../i18n/translations';

interface MallaGridProps {
  career: Career;
}

export function MallaGrid({ career }: MallaGridProps) {
  const { approvedSubjects, language } = useMallaStore();
  const t = translations[language];

  // Sort periods alphabetically (works for "100 - I", "100 - II", etc.)
  const periods = Array.from(new Set(career.subjects.map(s => s.period))).sort();

  return (
    <div className="w-full flex flex-col gap-8 pb-8">
      {periods.map(period => {
        const subjectsInPeriod = career.subjects.filter(s => s.period === period);
        const totalCredits = subjectsInPeriod.reduce((sum, s) => sum + s.credits, 0);
        const approvedInPeriod = subjectsInPeriod.filter(s => approvedSubjects.includes(s.id)).length;
        const approvedCredits = subjectsInPeriod.filter(s => approvedSubjects.includes(s.id)).reduce((sum, s) => sum + s.credits, 0);
        
        return (
          <div key={period} className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-2 border-b border-white/10 pb-2">
              <h3 className="text-sm font-medium text-white/70 uppercase tracking-widest">
                {t.malla.level} {period}
              </h3>
              <span className="text-xs font-mono text-white/40 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                {approvedInPeriod}/{subjectsInPeriod.length} - {approvedCredits}/{totalCredits} CR
              </span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4">
              {subjectsInPeriod.map((subject, index) => (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="h-full min-w-0"
                >
                  <SubjectCard subject={subject} career={career} />
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
