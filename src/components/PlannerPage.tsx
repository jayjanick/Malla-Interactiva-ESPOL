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

  const availableSubjects = career.subjects.filter(s => !approvedSubjects.includes(s.id) && !plannedSubjects.some(p => p.subjectId === s.id));
  
  // Group subjects by level
  const subjectsByLevel = availableSubjects.reduce((acc, subject) => {
    const level = parseInt(subject.period.split(' ')[0], 10) || 0;
    if (!acc[level]) {
      acc[level] = [];
    }
    acc[level].push(subject);
    return acc;
  }, {} as Record<number, typeof availableSubjects>);

  const subjectOptions = Object.entries(subjectsByLevel)
    .sort(([levelA], [levelB]) => Number(levelA) - Number(levelB))
    .map(([level, subjects]) => ({
      label: level === '0' ? 'COMPLEMENTARIAS' : `Nivel ${level}`,
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
    
    addPlanned({
      subjectId: selectedSubjectId,
      periodId,
      professor: professor.trim() || 'Por definir'
    });

    if (selectedOptionId) {
      useMallaStore.getState().setItinerarySelection(selectedSubjectId, selectedOptionId);
    }
    
    setSelectedSubjectId('');
    setSelectedOptionId('');
    setProfessor('');
    setAddingToPeriodId(null);
  };

  const selectedSubject = career.subjects.find(s => s.id === selectedSubjectId);

  const itineraryGroupedOptions = Array.from(new Set(itineraryOptions.map(o => o.track))).map(track => ({
    label: track,
    options: itineraryOptions.filter(o => o.track === track).map(o => ({
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
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white"
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
              className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg font-medium transition-colors"
            >
              {t.planner.cancel}
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {periods.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/10 rounded-2xl bg-white/[0.02]">
            <p className="text-lg text-white/50 mb-4">{t.planner.emptyState}</p>
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
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 relative"
              >
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
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
                      className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white w-full"
                    />
                    <button
                      onClick={() => handleSavePeriodName(period.id)}
                      className="p-1.5 text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-colors"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setEditingPeriodId(null)}
                      className="p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
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
                      className="p-1.5 text-white/30 hover:text-white hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover/title:opacity-100"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/5 text-emerald-400">
                    {totalCredits} CR
                  </span>
                  <button
                    onClick={() => removePeriod(period.id)}
                    className="p-1.5 text-white/30 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                    title={t.planner.removePeriod}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {addingToPeriodId === period.id ? (
                <div className="flex flex-col gap-4 bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-white/50 uppercase tracking-wider">{t.planner.addSubject}</label>
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
                      <label className="text-xs font-medium text-white/50 uppercase tracking-wider">Materia Específica</label>
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
                      <label className="text-xs font-medium text-white/50 uppercase tracking-wider">Opción de Itinerario</label>
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
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-white/50 uppercase tracking-wider">{t.planner.professor}</label>
                    <input 
                      type="text"
                      placeholder="Ej. Juan Pérez"
                      value={professor}
                      onChange={(e) => setProfessor(e.target.value)}
                      className="bg-white/5 border border-white/10 hover:border-white/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white placeholder:text-white/20 transition-all"
                    />
                  </div>
                  <div className="flex items-center gap-2 justify-end mt-2">
                    <button
                      onClick={() => {
                        setAddingToPeriodId(null);
                        setSelectedSubjectId('');
                        setSelectedOptionId('');
                        setProfessor('');
                      }}
                      className="px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors"
                    >
                      {t.planner.cancel}
                    </button>
                    <button
                      onClick={() => handleAddSubject(period.id)}
                      disabled={!selectedSubjectId || ((selectedSubject?.isComplementary || selectedSubject?.isItinerary) && !selectedOptionId)}
                      className="px-3 py-1.5 text-sm bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-lg transition-colors"
                    >
                      {t.planner.add}
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setAddingToPeriodId(period.id)}
                  className="w-full py-3 border border-dashed border-white/20 hover:border-emerald-500/50 hover:bg-emerald-500/5 rounded-xl text-white/50 hover:text-emerald-400 transition-all flex items-center justify-center gap-2 text-sm font-medium"
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
                    <div key={planned.id} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-colors">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-white/90">{displayTitle}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-mono text-white/40">{subject.code}</span>
                          <span className="text-white/20 text-xs">•</span>
                          <span className="text-xs text-white/50">{planned.professor}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-white/50">
                          {subject.credits} CR
                        </span>
                        <button
                          onClick={() => removePlanned(planned.id)}
                          className="p-1.5 rounded-md text-white/20 hover:text-red-400 hover:bg-red-400/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
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
