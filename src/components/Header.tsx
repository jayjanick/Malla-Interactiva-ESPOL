import { useMallaStore } from '../store/useMallaStore';
import { faculties, careers } from '../data/espol';
import { motion } from 'motion/react';
import { CustomSelect } from './CustomSelect';
import { translations } from '../i18n/translations';

export function Header() {
  const { selectedFacultyId, selectedCareerId, setFaculty, setCareer, language } = useMallaStore();
  const t = translations[language];

  const filteredCareers = careers.filter(c => c.facultyId === selectedFacultyId);

  const facultyOptions = faculties.map(f => ({ value: f.id, label: f.acronym }));
  const careerOptions = filteredCareers.map(c => ({ value: c.id, label: c.name }));

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border bg-background/80 backdrop-blur-xl transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center justify-between w-full">
          <CustomSelect
            value={selectedFacultyId}
            onChange={setFaculty}
            options={facultyOptions}
            placeholder={t.header.faculty}
            className="w-[calc(50%-0.5rem)] sm:w-[200px]"
            dropdownClassName="w-[200px] sm:w-[240px]"
            align="left"
          />

          <CustomSelect
            value={selectedCareerId}
            onChange={setCareer}
            options={careerOptions}
            placeholder={t.header.career}
            disabled={!selectedFacultyId}
            className="w-[calc(50%-0.5rem)] sm:w-[200px]"
            dropdownClassName="w-[200px] sm:w-[280px]"
            align="right"
          />
        </div>
      </div>
    </header>
  );
}
