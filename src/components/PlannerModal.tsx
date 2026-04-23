import React, { useState } from 'react';
import { useMallaStore, PlannedSubject } from '../store/useMallaStore';
import { Career, Subject, itineraryOptions } from '../data/espol';
import { motion } from 'motion/react';
import { X, Plus, Trash2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { CustomSelect, OptionGroup } from './CustomSelect';
import { translations } from '../i18n/translations';
import { materiasComplementarias } from '../data/complementarias';

interface PlannerModalProps {
  onClose: () => void;
  career: Career;
}

export function PlannerModal({ onClose, career }: PlannerModalProps) {
  const { plannedSubjects, addPlanned, removePlanned, approvedSubjects, periods, language } = useMallaStore();
  const t = translations[language];
  const [selectedPeriod, setSelectedPeriod] = useState<string>(periods[0]?.id || '');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');
  const [selectedOptionId, setSelectedOptionId] = useState<string>('');
  const [professor, setProfessor] = useState('');
  const [parallel, setParallel] = useState('');

  // Filter subjects that are not approved yet
  const availableSubjects = career.subjects.filter(s => !approvedSubjects.includes(s.id));

  const handleAdd = () => {
    if (!selectedSubjectId) return;
    
    addPlanned({
      subjectId: selectedSubjectId,
      periodId: selectedPeriod,
      professor: professor.trim() || 'Por definir',
      parallel: parallel.trim() || ''
    });

    if (selectedOptionId) {
      useMallaStore.getState().setItinerarySelection(selectedSubjectId, selectedOptionId);
    }
    
    setSelectedSubjectId('');
    setSelectedOptionId('');
    setProfessor('');
    setParallel('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const selectedSubject = career.subjects.find(s => s.id === selectedSubjectId);
  const currentItineraryOptions = selectedSubject?.itineraryOptions || [];
  const itineraryGroupedOptions = Array.from(new Set(currentItineraryOptions.map(o => o.track))).map(track => ({
    label: track,
    options: currentItineraryOptions.filter(o => o.track === track).map(o => ({
      value: o.id,
      label: `${o.name} - ${o.code} - ${o.hoursTotal} horas`
    }))
  }));

  const plannedForPeriod = plannedSubjects.filter(p => p.periodId === selectedPeriod);
  const totalCredits = plannedForPeriod.reduce((sum, p) => {
    const subject = career.subjects.find(s => s.id === p.subjectId);
    return sum + (subject?.credits || 0);
  }, 0);

  const isRegular = totalCredits >= 9;
  const availableCredits = Math.max(0, 15 - totalCredits);
  const isOverLimit = totalCredits > 15;

  const periodOptions = periods.map(p => ({
    value: p.id,
    label: p.name
  }));

  const subjectsByPeriod = availableSubjects.reduce((groups, s) => {
    const periodName = s.period || 'Otros';
    const group = groups.find(g => g.labelRaw === periodName);
    const option = { value: s.id, label: `${s.name} (${s.credits} CR)` };
    if (group) {
      group.options.push(option);
    } else {
      groups.push({ label: periodName, labelRaw: periodName, options: [option] });
    }
    return groups;
  }, [] as (OptionGroup & { labelRaw: string })[]);

  const subjectOptions: OptionGroup[] = subjectsByPeriod
    .sort((a, b) => {
      if (a.labelRaw.match(/^\d/) && !b.labelRaw.match(/^\d/)) return -1;
      if (!a.labelRaw.match(/^\d/) && b.labelRaw.match(/^\d/)) return 1;
      return a.labelRaw.localeCompare(b.labelRaw);
    })
    .map(g => ({
      label: g.labelRaw.includes('-') ? `Nivel ${g.labelRaw.replace(/\s+/g, '')}` : g.labelRaw.toUpperCase(),
      options: g.options
    }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col max-h-[90vh] transition-colors duration-500"
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-medium tracking-tight">{t.planner.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-foreground/5 text-foreground/50 hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar" onKeyDown={handleKeyDown}>
          {/* Form */}
          <div className="flex flex-col gap-4 bg-foreground/[0.02] border border-border rounded-xl p-5 transition-colors duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground/50 uppercase tracking-wider">{t.planner.period}</label>
                <CustomSelect
                  value={selectedPeriod}
                  onChange={(val) => setSelectedPeriod(val as any)}
                  options={periodOptions}
                  placeholder={t.planner.selectPeriod}
                  dropdownClassName="left-0 w-full"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground/50 uppercase tracking-wider">{t.planner.addSubject}</label>
                <CustomSelect
                  value={selectedSubjectId}
                  onChange={setSelectedSubjectId}
                  options={subjectOptions}
                  placeholder={t.planner.selectSubject}
                  dropdownClassName="left-0 w-full"
                />
              </div>
            </div>

            {selectedSubject?.isComplementary && (
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Materia Específica</label>
                <CustomSelect
                  value={selectedOptionId}
                  onChange={setSelectedOptionId}
                  options={materiasComplementarias.filter(comp => {
                    const isAlreadySelectedInOtherComp = Object.entries(useMallaStore.getState().itinerarySelections).some(
                      ([key, val]) => val === comp.value && key !== selectedSubjectId && career.subjects.find(s => s.id === key)?.isComplementary
                    );
                    return !isAlreadySelectedInOtherComp;
                  }).map(c => ({ value: c.value, label: c.label.split('] - ')[1]?.replace(' (1 CR)', '') || c.label }))}
                  placeholder="Selecciona la materia complementaria"
                  dropdownClassName="left-0 w-full"
                />
              </div>
            )}

            {selectedSubject?.isItinerary && (
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Opción de Itinerario</label>
                <CustomSelect
                  value={selectedOptionId}
                  onChange={setSelectedOptionId}
                  options={itineraryGroupedOptions.map(group => ({
                    label: group.label,
                    options: group.options.filter(opt => {
                      const isAlreadySelected = Object.entries(useMallaStore.getState().itinerarySelections).some(
                        ([key, val]) => val === opt.value && key !== selectedSubjectId && career.subjects.find(s => s.id === key)?.isItinerary
                      );
                      return !isAlreadySelected;
                    })
                  })).filter(group => group.options.length > 0)}
                  placeholder="Selecciona la opción de itinerario"
                  dropdownClassName="left-0 w-full"
                />
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex flex-col gap-1.5 flex-[2] w-full">
                <label className="text-xs font-medium text-foreground/50 uppercase tracking-wider">{t.planner.professor}</label>
                <input 
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  value={professor}
                  onChange={(e) => setProfessor(e.target.value)}
                  className="bg-foreground/5 border border-border hover:border-emerald-500/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-foreground placeholder:text-foreground/20 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5 flex-[1] w-full">
                <label className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Paralelo</label>
                <input 
                  type="text"
                  placeholder="Ej. 101"
                  value={parallel}
                  onChange={(e) => setParallel(e.target.value)}
                  className="bg-foreground/5 border border-border hover:border-emerald-500/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-foreground placeholder:text-foreground/20 transition-all"
                />
              </div>
              
              <button
                onClick={handleAdd}
                disabled={!selectedSubjectId || ((selectedSubject?.isComplementary || selectedSubject?.isItinerary) && !selectedOptionId)}
                className="w-full sm:w-auto px-6 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-foreground/5 disabled:text-foreground/30 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 h-[38px]"
              >
                <Plus className="w-4 h-4" />
                {t.planner.add}
              </button>
            </div>
          </div>

          {/* List */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-foreground/70">{t.planner.plannedSubjects} - {periods.find(p => p.id === selectedPeriod)?.name || ''}</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className={cn("p-3 rounded-xl border flex flex-col gap-1 transition-colors", isRegular ? "bg-emerald-500/10 border-emerald-500/20" : "bg-amber-500/10 border-amber-500/20")}>
                <span className="text-[10px] font-medium text-foreground/50 uppercase tracking-wider">{t.planner.studentState}</span>
                <span className={cn("text-sm font-medium flex items-center gap-1.5", isRegular ? "text-emerald-500 dark:text-emerald-400" : "text-amber-500 dark:text-amber-400")}>
                  {isRegular ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                  {isRegular ? `${t.planner.regular} (≥9 CR)` : `${t.planner.irregular} (<9 CR)`}
                </span>
              </div>
              <div className={cn("p-3 rounded-xl border flex flex-col gap-1 transition-colors", isOverLimit ? "bg-red-500/10 border-red-500/20" : "bg-indigo-500/10 border-indigo-500/20")}>
                <span className="text-[10px] font-medium text-foreground/50 uppercase tracking-wider">{t.planner.availableCredits}</span>
                <span className={cn("text-sm font-medium flex items-center gap-1.5", isOverLimit ? "text-red-500 dark:text-red-400" : "text-indigo-500 dark:text-indigo-400")}>
                  {isOverLimit ? <AlertCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                  {availableCredits} / 15 CR {isOverLimit && `(${t.planner.exceeded})`}
                </span>
              </div>
            </div>

            {plannedForPeriod.length === 0 ? (
              <div className="text-center py-8 text-foreground/30 text-sm border border-dashed border-border rounded-xl mt-2">
                {t.planner.noPlannedSubjects}
              </div>
            ) : (
              <div className="flex flex-col gap-2 mt-2">
                {plannedForPeriod.map(planned => {
                  const subject = career.subjects.find(s => s.id === planned.subjectId);
                  if (!subject) return null;

                  const itinerarySelection = useMallaStore.getState().itinerarySelections[subject.id];
                  const displayTitle = subject.isComplementary && itinerarySelection
                    ? materiasComplementarias.find(o => o.value === itinerarySelection)?.label.split('] - ')[1]?.replace(' (1 CR)', '') || subject.name
                    : subject.isItinerary && itinerarySelection
                    ? subject.itineraryOptions?.find(o => o.id === itinerarySelection)?.name || subject.name
                    : subject.name;

                  return (
                    <div key={planned.id} className="flex items-center justify-between p-3 rounded-lg bg-foreground/[0.02] border border-border group hover:bg-foreground/[0.04] transition-colors duration-300">
                      <div className="flex flex-col flex-1 min-w-0 mr-3">
                        <span className="text-sm font-medium text-foreground/90 truncate" title={displayTitle}>
                          {displayTitle}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-mono text-foreground/40 shrink-0">{subject.code}</span>
                          {planned.parallel && (
                            <>
                              <span className="text-foreground/20 text-[10px] shrink-0">•</span>
                              <span className="text-[11px] font-mono font-medium text-foreground/50 uppercase shrink-0">PAR {planned.parallel}</span>
                            </>
                          )}
                        </div>
                        <span className="text-xs text-foreground/50 mt-0.5 truncate" title={planned.professor}>{planned.professor}</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="text-xs font-medium px-2 py-1 rounded-md bg-foreground/5 text-foreground/50 shrink-0 whitespace-nowrap">
                          {subject.credits} CR
                        </span>
                        <button
                          onClick={() => {
                            setProfessor(planned.professor);
                            setParallel(planned.parallel || '');
                            setSelectedSubjectId(planned.subjectId);
                            setSelectedPeriod(planned.periodId);
                            // Set itinerary if needed
                            if (itinerarySelection) setSelectedOptionId(itinerarySelection);
                            removePlanned(planned.id);
                          }}
                          className="p-1.5 rounded-md text-foreground/40 hover:text-emerald-500 hover:bg-emerald-500/10 transition-colors"
                          title="Editar"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                        </button>
                        <button
                          onClick={() => removePlanned(planned.id)}
                          className="p-1.5 rounded-md text-foreground/40 hover:text-red-500 hover:bg-red-500/10 transition-colors"
                          title={t.planner.removeSubject}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
