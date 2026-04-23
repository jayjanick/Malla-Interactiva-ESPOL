import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language } from '../i18n/translations';

export interface Period {
  id: string;
  name: string;
}

export interface PlannedSubject {
  id: string; // unique id for the planned entry
  subjectId: string;
  periodId: string;
  professor: string;
  parallel?: string;
}

export type Theme = 'light' | 'dark';

interface MallaState {
  selectedFacultyId: string;
  selectedCareerId: string;
  approvedSubjects: string[];
  plannedSubjects: PlannedSubject[];
  periods: Period[];
  itinerarySelections: Record<string, string>;
  language: Language;
  theme: Theme;
  
  setFaculty: (id: string) => void;
  setCareer: (id: string) => void;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
  toggleApproved: (subjectId: string) => void;
  setItinerarySelection: (subjectId: string, optionId: string) => void;
  addPlanned: (subject: Omit<PlannedSubject, 'id'>) => void;
  updatePlanned: (id: string, updates: Partial<Omit<PlannedSubject, 'id'>>) => void;
  removePlanned: (id: string) => void;
  addPeriod: (name: string) => void;
  updatePeriod: (id: string, name: string) => void;
  removePeriod: (id: string) => void;
  clearAll: () => void;
}

export const useMallaStore = create<MallaState>()(
  persist(
    (set) => ({
      selectedFacultyId: 'fiec',
      selectedCareerId: 'comp',
      approvedSubjects: [],
      plannedSubjects: [],
      periods: [
        { id: 'default-1', name: 'PAO I' },
        { id: 'default-2', name: 'PAO II' }
      ],
      itinerarySelections: {},
      language: 'es',
      theme: 'dark',

      setFaculty: (id) => set({ selectedFacultyId: id, selectedCareerId: '' }),
      setCareer: (id) => set({ selectedCareerId: id }),
      setLanguage: (lang) => set({ language: lang }),
      setTheme: (theme) => set({ theme }),
      
      toggleApproved: (subjectId) => set((state) => {
        const isApproved = state.approvedSubjects.includes(subjectId);
        if (isApproved) {
          return { approvedSubjects: state.approvedSubjects.filter(id => id !== subjectId) };
        } else {
          return { approvedSubjects: [...state.approvedSubjects, subjectId] };
        }
      }),

      setItinerarySelection: (subjectId, optionId) => set((state) => ({
        itinerarySelections: {
          ...state.itinerarySelections,
          [subjectId]: optionId
        }
      })),

      addPlanned: (subject) => set((state) => ({
        plannedSubjects: [
          ...state.plannedSubjects,
          { ...subject, id: crypto.randomUUID() }
        ]
      })),

      updatePlanned: (id, updates) => set((state) => ({
        plannedSubjects: state.plannedSubjects.map(sub => 
          sub.id === id ? { ...sub, ...updates } : sub
        )
      })),

      removePlanned: (id) => set((state) => ({
        plannedSubjects: state.plannedSubjects.filter(sub => sub.id !== id)
      })),

      addPeriod: (name) => set((state) => ({
        periods: [...state.periods, { id: crypto.randomUUID(), name }]
      })),

      updatePeriod: (id, name) => set((state) => ({
        periods: state.periods.map(p => p.id === id ? { ...p, name } : p)
      })),

      removePeriod: (id) => set((state) => ({
        periods: state.periods.filter(p => p.id !== id),
        plannedSubjects: state.plannedSubjects.filter(sub => sub.periodId !== id)
      })),

      clearAll: () => set({ approvedSubjects: [], plannedSubjects: [], periods: [{ id: 'default-1', name: 'PAO I' }, { id: 'default-2', name: 'PAO II' }], itinerarySelections: {} }),
    }),
    {
      name: 'espol-malla-storage',
    }
  )
);
