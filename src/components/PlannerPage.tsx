import { useState, useRef, useEffect } from 'react';
import { useMallaStore } from '../store/useMallaStore';
import { Career, itineraryOptions } from '../data/espol';
import { Plus, Trash2, Edit2, Check, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { CustomSelect } from './CustomSelect';
import { motion } from 'motion/react';
import { translations } from '../i18n/translations';
import { materiasComplementarias } from '../data/complementarias';

interface PlannerPageProps {
  career: Career;
}

export function PlannerPage({ career }: PlannerPageProps) {
  const { periods, plannedSubjects, addPeriod, updatePeriod, removePeriod, addPlanned, removePlanned, approvedSubjects, language, itinerarySelections } = useMallaStore();
  const t = translations[language];
  const [newPeriodName, setNewPeriodName] = useState('');
  const [isAddingPeriod, setIsAddingPeriod] = useState(false);

  // State for editing period name
  const [editingPeriodId, setEditingPeriodId] = useState<string | null>(null);
  const [editingPeriodName, setEditingPeriodName] = useState('');
  const editInputRef = useRef<HTMLInputElement>(null);

  // State for adding subject to a specific period
  const [addingToPeriodId, setAddingToPeriodId] = useState<string | null>(null);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');
  const [selectedOptionId, setSelectedOptionId] = useState<string>('');
  const [professor, setProfessor] = useState('');
  const [parallel, setParallel] = useState('');
  const [editingPlannedSubjectId, setEditingPlannedSubjectId] = useState<string | null>(null);

  const availableSubjects = career.subjects.filter(s => 
    !approvedSubjects.includes(s.id) && 
    (!plannedSubjects.some(p => p.subjectId === s.id) || editingPlannedSubjectId === plannedSubjects.find(p => p.subjectId === s.id)?.id)
  );
  
  // Group subjects by their exact period string
  const subjectsByPeriod = availableSubjects.reduce((acc, subject) => {
    const periodName = subject.period || 'Otros';
    if (!acc[periodName]) {
      acc[periodName] = [];
    }
    acc[periodName].push(subject);
    return acc;
  }, {} as Record<string, typeof availableSubjects>);

  const subjectOptions = Object.entries(subjectsByPeriod)
    .sort(([periodA], [periodB]) => {
      // Sort so '100 - I' comes before '100 - II', '200 - I', etc., and others go to the end
      if (periodA.match(/^\d/) && !periodB.match(/^\d/)) return -1;
      if (!periodA.match(/^\d/) && periodB.match(/^\d/)) return 1;
      return periodA.localeCompare(periodB);
    })
    .map(([periodName, subjects]) => ({
      label: periodName.includes('-') ? `Nivel ${periodName.replace(/\s+/g, '')}` : periodName.toUpperCase(),
      options: subjects.map(s => ({
        value: s.id,
        label: `${s.name} (${s.credits} CR)`
      }))
    }));

  useEffect(() => {
    if (editingPeriodId && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingPeriodId]);

  const handleAddPeriod = () => {
    if (newPeriodName.trim()) {
      addPeriod(newPeriodName.trim());
      setNewPeriodName('');
      setIsAddingPeriod(false);
    }
  };

  const handleSavePeriodName = (id: string) => {
    if (editingPeriodName.trim()) {
      updatePeriod(id, editingPeriodName.trim());
    }
    setEditingPeriodId(null);
  };

  const handleAddSubject = (periodId: string) => {
    if (!selectedSubjectId) return;
    
    if (editingPlannedSubjectId) {
      useMallaStore.getState().updatePlanned(editingPlannedSubjectId, {
        subjectId: selectedSubjectId,
        periodId,
        professor: professor.trim() || 'Por definir',
        parallel: parallel.trim() || ''
      });
      setEditingPlannedSubjectId(null);
    } else {
      useMallaStore.getState().addPlanned({
        subjectId: selectedSubjectId,
        periodId,
        professor: professor.trim() || 'Por definir',
        parallel: parallel.trim() || ''
      });
    }

    if (selectedOptionId) {
      useMallaStore.getState().setItinerarySelection(selectedSubjectId, selectedOptionId);
    }
    
    setSelectedSubjectId('');
    setSelectedOptionId('');
    setProfessor('');
    setParallel('');
    setAddingToPeriodId(null);
  };

  const handleCancelAddEdit = () => {
    setSelectedSubjectId('');
    setSelectedOptionId('');
    setProfessor('');
    setParallel('');
    setAddingToPeriodId(null);
    setEditingPlannedSubjectId(null);
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

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-medium tracking-tight">{t.planner.title}</h2>
        
        {!isAddingPeriod ? (
          <button
            onClick={() => setIsAddingPeriod(true)}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            {t.planner.addPeriod}
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder={t.planner.periodName}
              value={newPeriodName}
              onChange={(e) => setNewPeriodName(e.target.value)}
              className="bg-foreground/5 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-foreground"
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleAddPeriod()}
            />
            <button
              onClick={handleAddPeriod}
              disabled={!newPeriodName.trim()}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-lg font-medium transition-colors"
            >
              {t.planner.add}
            </button>
            <button
              onClick={() => {
                setIsAddingPeriod(false);
                setNewPeriodName('');
              }}
              className="px-4 py-2 bg-foreground/5 hover:bg-foreground/10 text-foreground rounded-lg font-medium transition-colors"
            >
              {t.planner.cancel}
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {periods.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center border border-dashed border-border rounded-2xl bg-foreground/[0.02]">
            <p className="text-lg text-foreground/50 mb-4">{t.planner.emptyState}</p>
            <button
              onClick={() => setIsAddingPeriod(true)}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              {t.planner.createFirst}
            </button>
          </div>
        ) : (
          periods.map(period => {
            const plannedForPeriod = plannedSubjects.filter(p => p.periodId === period.id);
            const totalCredits = plannedForPeriod.reduce((sum, p) => {
              const subject = career.subjects.find(s => s.id === p.subjectId);
              return sum + (subject?.credits || 0);
            }, 0);

            return (
              <motion.div
                key={period.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="ios-glass ios-shadow rounded-3xl p-6 flex flex-col gap-4 relative transition-colors duration-500"
              >
              <div className="flex items-center justify-between border-b border-border pb-4">
                {editingPeriodId === period.id ? (
                  <div className="flex items-center gap-2 flex-1 mr-4">
                    <input
                      ref={editInputRef}
                      type="text"
                      value={editingPeriodName}
                      onChange={(e) => setEditingPeriodName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSavePeriodName(period.id);
                        if (e.key === 'Escape') setEditingPeriodId(null);
                      }}
                      className="bg-foreground/5 border border-border rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-foreground w-full transition-colors"
                    />
                    <button
                      onClick={() => handleSavePeriodName(period.id)}
                      className="p-1.5 text-emerald-500 hover:bg-emerald-500/10 rounded-lg transition-colors overflow-hidden"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setEditingPeriodId(null)}
                      className="p-1.5 text-foreground/50 hover:text-foreground hover:bg-foreground/10 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 group/title">
                    <h3 className="text-lg font-medium">{period.name}</h3>
                    <button
                      onClick={() => {
                        setEditingPeriodName(period.name);
                        setEditingPeriodId(period.id);
                      }}
                      className="p-1.5 text-foreground/40 hover:text-foreground hover:bg-foreground/10 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                    {totalCredits} CR
                  </span>
                  <button
                    onClick={() => removePeriod(period.id)}
                    className="p-1.5 text-foreground/30 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                    title={t.planner.removePeriod}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {addingToPeriodId === period.id ? (
                <div 
                  className="flex flex-col gap-4 bg-foreground/[0.02] border border-border rounded-xl p-4 transition-colors duration-500"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && selectedSubjectId) {
                      if (!((selectedSubject?.isComplementary || selectedSubject?.isItinerary) && !selectedOptionId)) {
                        handleAddSubject(period.id);
                      }
                    }
                  }}
                >
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
                  <div className="flex flex-col sm:flex-row gap-4">
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
                  </div>
                  <div className="flex items-center gap-2 justify-end mt-2">
                    <button
                      onClick={handleCancelAddEdit}
                      className="px-3 py-1.5 text-sm bg-foreground/5 hover:bg-foreground/10 text-foreground rounded-lg transition-colors"
                    >
                      {t.planner.cancel}
                    </button>
                    <button
                      onClick={() => handleAddSubject(period.id)}
                      disabled={!selectedSubjectId || ((selectedSubject?.isComplementary || selectedSubject?.isItinerary) && !selectedOptionId)}
                      className="px-3 py-1.5 text-sm bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-lg transition-colors"
                    >
                      {editingPlannedSubjectId ? "Guardar" : t.planner.add}
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setAddingToPeriodId(period.id)}
                  className="w-full py-3 border border-dashed border-border hover:border-emerald-500/50 hover:bg-emerald-500/5 rounded-xl text-foreground/50 hover:text-emerald-500 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                >
                  <Plus className="w-4 h-4" />
                  {t.planner.addSubject}
                </button>
              )}

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
                    <div key={planned.id} className="flex items-center justify-between p-3 rounded-xl bg-card border border-border group hover:ios-float hover:border-emerald-500/30 ios-shadow transition-all duration-300">
                      <div className="flex flex-col flex-1 min-w-0 mr-3">
                        <span className="text-sm font-medium text-foreground/90 truncate" title={displayTitle}>{displayTitle}</span>
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
                      
                      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <span className="text-xs font-medium px-2 py-1 rounded-md bg-foreground/5 text-foreground/50 shrink-0 whitespace-nowrap">
                          {subject.credits} CR
                        </span>
                        <button
                          onClick={() => {
                            setProfessor(planned.professor);
                            setParallel(planned.parallel || '');
                            setSelectedSubjectId(planned.subjectId);
                            setAddingToPeriodId(planned.periodId);
                            // Set itinerary if needed
                            if (itinerarySelection) setSelectedOptionId(itinerarySelection);
                            setEditingPlannedSubjectId(planned.id);
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
            </motion.div>
          );
        })
        )}
      </div>
    </div>
  );
}
