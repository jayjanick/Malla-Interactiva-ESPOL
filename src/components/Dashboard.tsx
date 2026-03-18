import { useMallaStore } from '../store/useMallaStore';
import { Career } from '../data/espol';
import { motion } from 'motion/react';
import { BookCheck, BookMarked, Target } from 'lucide-react';
import { cn } from '../lib/utils';
import { ReactNode } from 'react';
import { translations } from '../i18n/translations';

interface DashboardProps {
  career: Career;
}

export function Dashboard({ career }: DashboardProps) {
  const { approvedSubjects, language } = useMallaStore();
  const t = translations[language];

  const totalCredits = career.subjects.reduce((sum, s) => sum + s.credits, 0);
  const approvedCredits = career.subjects
    .filter(s => approvedSubjects.includes(s.id))
    .reduce((sum, s) => sum + s.credits, 0);
  
  const percentage = totalCredits > 0 ? (approvedCredits / totalCredits) * 100 : 0;
  
  const totalSubjects = career.subjects.length;
  const approvedCount = approvedSubjects.length;

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-6">
      <CircularStatCard 
        title={t.dashboard.progress} 
        value={`${percentage.toFixed(1)}%`}
        progress={percentage}
      />
      <StatCard 
        title={t.dashboard.credits} 
        value={`${approvedCredits} / ${totalCredits}`}
        icon={<BookCheck className="w-4 h-4 text-indigo-400" />}
        progress={(approvedCredits / totalCredits) * 100}
        color="indigo"
      />
      <StatCard 
        title={t.dashboard.approvedSubjects} 
        value={`${approvedCount} / ${totalSubjects}`}
        icon={<BookMarked className="w-4 h-4 text-amber-400" />}
        progress={(approvedCount / totalSubjects) * 100}
        color="amber"
      />
    </div>
  );
}

function CircularStatCard({ title, value, progress }: { title: string, value: string, progress: number }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] rounded-xl sm:rounded-2xl p-2 sm:p-4 relative overflow-hidden group flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center sm:text-left"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 dark:from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex flex-col justify-center h-full w-full">
        <p className="text-slate-500 dark:text-white/50 text-[9px] sm:text-[11px] font-medium uppercase tracking-wider mb-0.5 sm:mb-1 truncate">{title}</p>
        <h3 className="text-base sm:text-2xl font-mono font-medium tracking-tight text-slate-900 dark:text-white">{value}</h3>
      </div>

      <div className="hidden sm:flex relative z-10 items-center justify-center w-16 h-16 shrink-0">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            className="text-slate-200 dark:text-white/5"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="text-emerald-500"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Target className="w-5 h-5 text-emerald-400 opacity-50" />
        </div>
      </div>
      
      {/* Mobile progress bar */}
      <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden relative z-10 mt-2 sm:hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-emerald-500"
        />
      </div>
    </motion.div>
  );
}

function StatCard({ title, value, icon, progress, color }: { title: string, value: string, icon: ReactNode, progress: number, color: 'emerald' | 'indigo' | 'amber' }) {
  const bgColors = {
    emerald: 'bg-emerald-500',
    indigo: 'bg-indigo-500',
    amber: 'bg-amber-500',
  };

  const textColors = {
    emerald: 'text-emerald-400',
    indigo: 'text-indigo-400',
    amber: 'text-amber-400',
  };

  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] rounded-xl sm:rounded-2xl p-2 sm:p-4 relative overflow-hidden group flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 dark:from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2 sm:mb-3 relative z-10 text-center sm:text-left w-full">
        <div className="w-full">
          <p className="text-slate-500 dark:text-white/50 text-[9px] sm:text-[11px] font-medium uppercase tracking-wider mb-0.5 sm:mb-1 truncate">{title}</p>
          <h3 className="text-base sm:text-2xl font-mono font-medium tracking-tight text-slate-900 dark:text-white">{value}</h3>
        </div>
        <div className={cn("hidden sm:flex p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05]", textColors[color])}>
          {icon}
        </div>
      </div>

      <div className="w-full h-1 sm:h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden relative z-10 mt-auto">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={cn("h-full rounded-full", bgColors[color])}
        />
      </div>
    </motion.div>
  );
}
