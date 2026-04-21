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
      whileHover={{ y: -4 }}
      className="ios-glass ios-shadow rounded-2xl sm:rounded-3xl p-3 sm:p-5 relative overflow-hidden group flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center sm:text-left transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex flex-col justify-center h-full w-full">
        <p className="text-foreground/50 text-[9px] sm:text-[11px] font-medium uppercase tracking-wider mb-0.5 sm:mb-1 truncate">{title}</p>
        <h3 className="text-base sm:text-2xl font-mono font-medium tracking-tight text-foreground uppercase">{value}</h3>
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
            className="text-foreground/10"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="text-emerald-600 dark:text-emerald-500"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400 opacity-50" />
        </div>
      </div>
      
      {/* Mobile progress bar */}
      <div className="w-full h-1 bg-foreground/10 rounded-full overflow-hidden relative z-10 mt-2 sm:hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-emerald-600 dark:bg-emerald-500"
        />
      </div>
    </motion.div>
  );
}

function StatCard({ title, value, icon, progress, color }: { title: string, value: string, icon: ReactNode, progress: number, color: 'emerald' | 'indigo' | 'amber' }) {
  const bgColors = {
    emerald: 'bg-emerald-600 dark:bg-emerald-500',
    indigo: 'bg-indigo-500',
    amber: 'bg-amber-500',
  };

  const textColors = {
    emerald: 'text-emerald-600 dark:text-emerald-500',
    indigo: 'text-indigo-500',
    amber: 'text-amber-500',
  };

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="ios-glass ios-shadow rounded-2xl sm:rounded-3xl p-3 sm:p-5 relative overflow-hidden group flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center sm:text-left transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex flex-col justify-center h-full w-full">
        <p className="text-foreground/50 text-[9px] sm:text-[11px] font-medium uppercase tracking-wider mb-0.5 sm:mb-1 truncate">{title}</p>
        <h3 className="text-base sm:text-2xl font-mono font-medium tracking-tight text-foreground uppercase">{value}</h3>
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
            className="text-foreground/10"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className={textColors[color]}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      {/* Mobile progress bar */}
      <div className="w-full h-1 bg-foreground/10 rounded-full overflow-hidden relative z-10 mt-2 sm:hidden">
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
