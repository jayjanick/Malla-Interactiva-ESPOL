import { useState } from 'react';
import { useMallaStore } from '../store/useMallaStore';
import { Career, Subject } from '../data/espol';
import { cn } from '../lib/utils';
import { CheckCircle2, Lock, Unlock, X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../i18n/translations';
import { materiasComplementarias } from '../data/complementarias';

interface SubjectCardProps {
  subject: Subject;
  career: Career;
}

export function SubjectCard({ subject, career }: SubjectCardProps) {
  const { approvedSubjects, toggleApproved, itinerarySelections, setItinerarySelection, language } = useMallaStore();
  const t = translations[language];
  const [showAlert, setShowAlert] = useState(false);
  const [showItineraryOptions, setShowItineraryOptions] = useState(false);
  const [showComplementaryOptions, setShowComplementaryOptions] = useState(false);

  const isApproved = approvedSubjects.includes(subject.id);
  
  // Check if prerequisites are met
  const arePrerequisitesMet = subject.prerequisites.every(prereqId => 
    approvedSubjects.includes(prereqId)
  );

  const isMinSubjectsMet = subject.minApprovedSubjects ? approvedSubjects.length >= subject.minApprovedSubjects : true;

  const isLocked = !isApproved && (!arePrerequisitesMet || !isMinSubjectsMet) && (subject.prerequisites.length > 0 || !!subject.minApprovedSubjects);

  const hasRequisites = subject.prerequisites.length > 0 || (subject.corequisites && subject.corequisites.length > 0) || !!subject.minApprovedSubjects;

  return (
    <motion.div
      layout
      whileHover={!isLocked ? { opacity: 0.95 } : {}}
      transition={{ duration: 0.3 }}
      onClick={() => {
        if (isLocked && !isApproved) {
          setShowAlert(true);
        } else if (subject.isItinerary) {
          setShowItineraryOptions(true);
        } else if (subject.isComplementary) {
          setShowComplementaryOptions(true);
        } else {
          toggleApproved(subject.id);
        }
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (isLocked && !isApproved) {
            setShowAlert(true);
          } else if (subject.isItinerary) {
            setShowItineraryOptions(true);
          } else if (subject.isComplementary) {
            setShowComplementaryOptions(true);
          } else {
            toggleApproved(subject.id);
          }
        }
      }}
      className={cn(
        "w-full h-full text-left p-4 rounded-3xl transition-all duration-300 relative group flex flex-col focus:outline-none focus:ring-2 focus:ring-emerald-500/50",
        isApproved 
          ? "bg-emerald-500/10 ring-1 ring-emerald-500/40 ring-inset ios-float" 
          : isLocked
            ? "bg-foreground/[0.01] ring-1 ring-border/50 ring-inset opacity-60 cursor-pointer"
            : "ios-glass hover:bg-foreground/[0.03] hover:ring-1 hover:ring-emerald-500/40 hover:ring-inset cursor-pointer ios-shadow hover:ios-float hover:z-10"
      )}
    >
      {/* Background glow effect on hover */}
      {!isLocked && !isApproved && (
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
      {isApproved && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.05] to-transparent opacity-100" />
      )}

      <div className="relative z-10 flex flex-col gap-2 flex-1 min-w-0">
        {/* Row 1: Code and Total Hours */}
        <div className="flex items-center justify-between w-full">
          <span className="text-xs font-mono text-foreground/40">{subject.code}</span>
          <div className="flex items-center gap-2">
            {isApproved ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            ) : isLocked ? (
              <Lock className="w-4 h-4 text-foreground/20 shrink-0" />
            ) : (
              <Unlock className="w-4 h-4 text-foreground/20 shrink-0 transition-opacity" />
            )}
            {subject.hoursTotal && (
              <span className="text-xs font-mono text-foreground/40">{subject.hoursTotal}h</span>
            )}
          </div>
        </div>
        
        {/* Row 2: Title and Detailed Hours */}
        <div className="flex items-start justify-between gap-2 mt-1 flex-1 min-w-0">
          <div className="flex flex-col min-w-0">
            <h4 className={cn(
              "text-[11px] sm:text-sm md:text-xs lg:text-sm font-medium leading-tight break-words",
              isApproved ? "text-emerald-900 dark:text-emerald-50" : isLocked ? "text-foreground/50" : "text-foreground/90"
            )}>
              {(() => {
                if (!isApproved) return subject.name;
                if (subject.isItinerary && itinerarySelections[subject.id]) {
                  return subject.itineraryOptions?.find(o => o.id === itinerarySelections[subject.id])?.name || subject.name;
                }
                if (subject.isComplementary && itinerarySelections[subject.id]) {
                  const comp = materiasComplementarias.find(o => o.value === itinerarySelections[subject.id]);
                  if (comp) {
                    return comp.label.replace(/^\[.*?\]\s*-\s*/, '').replace(/\s*\(1\s*CR\)$/, '') || subject.name;
                  }
                  return subject.name;
                }
                return subject.name;
              })()}
            </h4>
            {isApproved && subject.isItinerary && itinerarySelections[subject.id] && (
              <span className="text-[10px] text-emerald-600/80 dark:text-emerald-400/80 mt-1 leading-tight font-medium">
                {subject.itineraryOptions?.find(o => o.id === itinerarySelections[subject.id])?.track}
              </span>
            )}
            {isApproved && subject.isComplementary && itinerarySelections[subject.id] && (
              <span className="text-[10px] text-emerald-600/80 dark:text-emerald-400/80 mt-1 leading-tight font-medium">
                Opción: {itinerarySelections[subject.id]}
              </span>
            )}
          </div>
          {subject.hoursDetail && (
            <span className="text-[10px] font-mono text-foreground/30 shrink-0 text-right mt-0.5">
              {subject.hoursDetail}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-border">
          <div className="flex items-center justify-between">
            <span className={cn(
              "text-xs font-medium px-2 py-0.5 rounded-md",
              isApproved ? "bg-emerald-500/20 text-emerald-800 dark:text-emerald-300" : "bg-foreground/5 text-foreground/50"
            )}>
              {subject.credits} CR
            </span>
            
            <div className="flex flex-col items-end gap-1">
              {subject.minApprovedSubjects && (
                <div 
                  className="flex gap-1 items-center cursor-pointer hover:bg-foreground/5 p-1 -mr-1 rounded transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAlert(true);
                  }}
                >
                  <span className="text-[9px] text-foreground/30 uppercase tracking-wider mr-1">{t.malla.min}</span>
                  <div 
                    className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      isMinSubjectsMet ? "bg-emerald-500" : "bg-red-500"
                    )}
                  />
                </div>
              )}
              {subject.prerequisites.length > 0 && (
                <div 
                  className="flex gap-1 items-center cursor-pointer hover:bg-foreground/5 p-1 -mr-1 rounded transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAlert(true);
                  }}
                >
                  <span className="text-[9px] text-foreground/30 uppercase tracking-wider mr-1">{t.malla.req}</span>
                  {subject.prerequisites.map(prereqId => {
                    const isPrereqApproved = approvedSubjects.includes(prereqId);
                    return (
                      <div 
                        key={prereqId}
                        className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          isPrereqApproved ? "bg-emerald-500" : "bg-red-500"
                        )}
                      />
                    );
                  })}
                </div>
              )}
              {subject.corequisites && subject.corequisites.length > 0 && (
                <div 
                  className="flex gap-1 items-center cursor-pointer hover:bg-foreground/5 p-1 -mr-1 rounded transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAlert(true);
                  }}
                >
                  <span className="text-[9px] text-foreground/30 uppercase tracking-wider mr-1">{t.malla.coreq}</span>
                  {subject.corequisites.map(coreqId => {
                    const isCoreqApproved = approvedSubjects.includes(coreqId);
                    return (
                      <div 
                        key={coreqId}
                        className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          isCoreqApproved ? "bg-emerald-500" : "bg-amber-500"
                        )}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Requisites Alert Overlay */}
      <AnimatePresence>
        {showAlert && hasRequisites && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 inset-y-0 z-20 bg-card/95 backdrop-blur-md p-4 flex flex-col gap-3 rounded-3xl transition-colors duration-500 overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-foreground/90 uppercase tracking-wider">{t.malla.prerequisitesNotMet}</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAlert(false);
                }} 
                className="p-1.5 bg-foreground/5 hover:bg-foreground/10 rounded-lg text-foreground/50 hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-col gap-2 overflow-y-auto custom-scrollbar pr-1 pb-2">
              {subject.minApprovedSubjects && (
                <div className={cn(
                  "text-xs flex items-start gap-2 p-2 rounded-lg border",
                  isMinSubjectsMet ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-red-500/10 border-red-500/20 text-red-400"
                )}>
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-semibold uppercase text-[10px] opacity-80">{t.malla.minSubjects} {isMinSubjectsMet ? t.malla.met : t.malla.missing}</span>
                    <span>{t.malla.requires} {subject.minApprovedSubjects} {t.malla.approvedSubjects} {approvedSubjects.length})</span>
                  </div>
                </div>
              )}
              {subject.prerequisites.map(prereqId => {
                const prereq = career.subjects.find(s => s.id === prereqId);
                const isMet = approvedSubjects.includes(prereqId);
                if (!prereq) return null;
                return (
                  <div key={prereqId} className={cn(
                    "text-xs flex items-start gap-2 p-2 rounded-lg border",
                    isMet ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-red-500/10 border-red-500/20 text-red-400"
                  )}>
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-semibold uppercase text-[10px] opacity-80">{t.malla.prerequisite} {isMet ? t.malla.met : t.malla.missing}</span>
                      <span>{prereq.name}</span>
                    </div>
                  </div>
                );
              })}
              {subject.corequisites?.map(coreqId => {
                const coreq = career.subjects.find(s => s.id === coreqId);
                const isMet = approvedSubjects.includes(coreqId);
                if (!coreq) return null;
                return (
                  <div key={coreqId} className={cn(
                    "text-xs flex items-start gap-2 p-2 rounded-lg border",
                    isMet ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-amber-500/10 border-amber-500/20 text-amber-400"
                  )}>
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-semibold uppercase text-[10px] opacity-80">{t.malla.corequisite} {isMet ? t.malla.met : t.malla.missing}</span>
                      <span>{coreq.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Itinerary Options Overlay */}
      <AnimatePresence>
        {showItineraryOptions && subject.isItinerary && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 inset-y-0 z-30 bg-card/95 backdrop-blur-md p-4 flex flex-col gap-3 rounded-3xl transition-colors duration-500 overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-foreground/90 uppercase tracking-wider">{t.malla.chooseOption}</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowItineraryOptions(false);
                }} 
                className="p-1.5 bg-foreground/5 hover:bg-foreground/10 rounded-lg text-foreground/50 hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-col gap-2 overflow-y-auto custom-scrollbar pr-1 pb-2">
              {isApproved && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleApproved(subject.id);
                    setShowItineraryOptions(false);
                  }}
                  className="w-full text-left text-xs p-2 rounded-lg border border-red-500/20 bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                >
                  {t.malla.clickToRemoveItinerary}
                </button>
              )}
              {subject.itineraryOptions?.map(option => {
                const isSelected = itinerarySelections[subject.id] === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setItinerarySelection(subject.id, option.id);
                      if (!isApproved) {
                        toggleApproved(subject.id);
                      }
                      setShowItineraryOptions(false);
                    }}
                    className={cn(
                      "text-xs flex flex-col gap-1 p-2 rounded-lg border transition-colors text-left",
                      isSelected 
                        ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-800 dark:text-emerald-100" 
                        : "bg-foreground/5 border-border text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
                    )}
                  >
                    <span className="font-semibold">{option.name}</span>
                    <div className="flex justify-between items-center opacity-70 text-[10px]">
                      <span>{option.track}</span>
                      <span>{option.hoursTotal}h</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Complementary Options Overlay */}
      <AnimatePresence>
        {showComplementaryOptions && subject.isComplementary && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 inset-y-0 z-30 bg-card/95 backdrop-blur-md p-4 flex flex-col gap-3 rounded-3xl transition-colors duration-500 overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-foreground/90 uppercase tracking-wider">{t.malla.chooseOption}</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowComplementaryOptions(false);
                }} 
                className="p-1.5 bg-foreground/5 hover:bg-foreground/10 rounded-lg text-foreground/50 hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-col gap-2 overflow-y-auto custom-scrollbar pr-1 pb-2">
              {isApproved && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleApproved(subject.id);
                    setShowComplementaryOptions(false);
                  }}
                  className="w-full text-left text-xs p-2 rounded-lg border border-red-500/20 bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                >
                  {t.malla.clickToRemoveComplementary}
                </button>
              )}
              {materiasComplementarias.map(option => {
                const isSelected = itinerarySelections[subject.id] === option.value;
                const isAlreadySelectedInOtherComp = Object.entries(itinerarySelections).some(
                  ([key, val]) => val === option.value && key !== subject.id && career.subjects.find(s => s.id === key)?.isComplementary
                );

                if (isAlreadySelectedInOtherComp) return null; // Don't show options already selected elsewhere

                return (
                  <button
                    key={option.value}
                    onClick={(e) => {
                      e.stopPropagation();
                      setItinerarySelection(subject.id, option.value);
                      if (!isApproved) {
                        toggleApproved(subject.id);
                      }
                      setShowComplementaryOptions(false);
                    }}
                    className={cn(
                      "text-xs flex flex-col gap-1 p-2 rounded-lg border transition-colors text-left",
                      isSelected 
                        ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-800 dark:text-emerald-100" 
                        : "bg-foreground/5 border-border text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
                    )}
                  >
                    <span className="font-semibold">{option.label.split('] - ')[1]?.replace(' (1 CR)', '') || option.label}</span>
                    <div className="flex justify-between items-center opacity-70 text-[10px]">
                      <span>{option.value}</span>
                      <span>1 CR</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
