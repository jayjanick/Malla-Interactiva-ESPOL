export interface ItineraryOption {
  id: string;
  code: string;
  name: string;
  track: string;
  hoursTotal: number;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  credits: number;
  hoursTotal?: number;
  hoursDetail?: string;
  prerequisites: string[]; // array of subject ids
  corequisites?: string[]; // array of subject ids
  minApprovedSubjects?: number; // min number of approved subjects required
  period: string; // e.g., "100 - I"
  isItinerary?: boolean;
  itineraryOptions?: ItineraryOption[];
  isComplementary?: boolean;
}

export const itineraryOptions: ItineraryOption[] = [
  { id: 'ticg1019', code: 'TICG1019', name: 'Sistemas de bases de datos avanzados', track: 'Gestión y Analítica de Datos', hoursTotal: 9 },
  { id: 'ccpg1047', code: 'CCPG1047', name: 'Introducción a la ciencia de datos', track: 'Gestión y Analítica de Datos', hoursTotal: 9 },
  { id: 'ccpg1040', code: 'CCPG1040', name: 'Desarrollo de Juegos de Video', track: 'Multimedia', hoursTotal: 9 },
  { id: 'pdi1001', code: 'PDI1001', name: 'Procesamiento Digital de imágenes', track: 'Multimedia', hoursTotal: 9 },
];

export interface Career {
  id: string;
  name: string;
  facultyId: string;
  subjects: Subject[];
}

export interface Faculty {
  id: string;
  name: string;
  acronym: string;
}

export const faculties: Faculty[] = [
  { id: 'fiec', name: 'Facultad de Ingeniería en Electricidad y Computación', acronym: 'FIEC' },
  { id: 'fcs', name: 'Facultad de Ciencias Sociales y Humanísticas', acronym: 'FCSH' },
  { id: 'fcv', name: 'Facultad de Ciencias de la Vida', acronym: 'FCV' },
  { id: 'fadcom', name: 'Facultad de Arte, Diseño y Comunicación Audiovisual', acronym: 'FADCOM' },
  { id: 'fimcp', name: 'Facultad de Ingeniería en Mecánica y Ciencias de la Producción', acronym: 'FIMCP' },
  { id: 'fimcm', name: 'Facultad de Ingeniería Marítima y Ciencias del Mar', acronym: 'FIMCM' },
  { id: 'fcnm', name: 'Facultad de Ciencias Naturales y Matemáticas', acronym: 'FCNM' },
  { id: 'fict', name: 'Facultad de Ingeniería en Ciencias de la Tierra', acronym: 'FICT' },
];

export const careers: Career[] = [
  {
    id: 'comp',
    name: 'Computación',
    facultyId: 'fiec',
    subjects: [
      // NIVEL 100 - I
      { id: 'matg1045', code: 'MATG1045', name: 'Cálculo de Una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'indg1033', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'ccpg1043', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'fisg1005', code: 'FISG1005', name: 'Física: Mecánica', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], corequisites: ['matg1045'], period: '100 - I' },
      { id: 'idig1006', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // NIVEL 100 - II
      { id: 'matg1046', code: 'MATG1046', name: 'Cálculo Vectorial', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'matg1049', code: 'MATG1049', name: 'Álgebra Lineal', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'ccpg1039', code: 'CCPG1039', name: 'Computación y Sociedad', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], period: '100 - II' },
      { id: 'ccpg1052', code: 'CCPG1052', name: 'Programación Orientada a Objetos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1043'], period: '100 - II' },
      { id: 'idig2012', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '100 - II' },
      { id: 'idig1007', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006'], period: '100 - II' },

      // NIVEL 200 - I
      { id: 'matg1051', code: 'MATG1051', name: 'Matemáticas Discretas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '200 - I' },
      { id: 'ticg1018', code: 'TICG1018', name: 'Sistema de Bases de Datos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1043'], period: '200 - I' },
      { id: 'eyag1037', code: 'EYAG1037', name: 'Fundamentos de Electricidad y Sistemas Digitales', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 8, period: '200 - I' },
      { id: 'ccpg1034', code: 'CCPG1034', name: 'Estructuras de Datos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1052'], corequisites: ['matg1051'], period: '200 - I' },
      { id: 'ccpg1042', code: 'CCPG1042', name: 'Diseño de Software', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ccpg1052'], period: '200 - I' },
      { id: 'idig1008', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007'], period: '200 - I' },

      // NIVEL 200 - II
      { id: 'ccpg1049', code: 'CCPG1049', name: 'Organización de Computadores', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['eyag1037'], corequisites: ['ccpg1051'], period: '200 - II' },
      { id: 'ccpg1051', code: 'CCPG1051', name: 'Programación de Sistemas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1052'], period: '200 - II' },
      { id: 'ccpg1046', code: 'CCPG1046', name: 'Interacción Humano Computador', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['indg1033', 'ccpg1052'], period: '200 - II' },
      { id: 'estg1034', code: 'ESTG1034', name: 'Estadística', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1043', 'matg1046'], period: '200 - II' },
      { id: 'tlmg1032', code: 'TLMG1032', name: 'Redes de Datos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 14, period: '200 - II' },
      { id: 'idig1009', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008'], period: '200 - II' },

      // NIVEL 300 - I
      { id: 'ccpg1056', code: 'CCPG1056', name: 'Sistemas Operativos', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ccpg1049'], period: '300 - I' },
      { id: 'ccpg1036', code: 'CCPG1036', name: 'Análisis de Algoritmos', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['ccpg1034'], period: '300 - I' },
      { id: 'sofg1006', code: 'SOFG1006', name: 'Desarrollo de Aplicaciones Web y Móviles', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1042'], period: '300 - I' },
      { id: 'sofg1007', code: 'SOFG1007', name: 'Ingeniería de Software I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ccpg1042', 'ccpg1046'], corequisites: ['sofg1006'], period: '300 - I' },
      { id: 'admg1005', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'idig1010', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009'], period: '300 - I' },

      // NIVEL 300 - II
      { id: 'ccpg1048', code: 'CCPG1048', name: 'Metodología de la Investigación en Computación', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['estg1034'], period: '300 - II' },
      { id: 'ccpg1053', code: 'CCPG1053', name: 'Seguridad de la Información', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['ccpg1051'], period: '300 - II' },
      { id: 'sofg1009', code: 'SOFG1009', name: 'Lenguajes de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'sofg1008', code: 'SOFG1008', name: 'Ingeniería de Software II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['sofg1007'], period: '300 - II' },
      { id: 'adsg1026', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'psc', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // NIVEL 400 - I
      { id: 'ccpg1044', code: 'CCPG1044', name: 'Inteligencia Artificial', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['estg1034', 'sofg1009'], period: '400 - I' },
      { id: 'ccpg1054', code: 'CCPG1054', name: 'Sistemas de Información', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 30, period: '400 - I' },
      { id: 'ccpg1055', code: 'CCPG1055', name: 'Sistemas Distribuidos y Computación en la Nube', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1051', 'tlmg1032'], period: '400 - I' },
      { id: 'ccpg1041', code: 'CCPG1041', name: 'Dirección de Proyectos Informáticos', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['admg1005'], period: '400 - I' },
      { id: 'itin1', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 30, period: '400 - I', isItinerary: true, itineraryOptions },

      // NIVEL 400 - II
      { id: 'ccpg1035', code: 'CCPG1035', name: 'Materia Integradora de Computación', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 39, period: '400 - II' },
      { id: 'itin2', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 30, period: '400 - II', isItinerary: true, itineraryOptions },

      // COMPLEMENTARIAS
      { id: 'comp1', code: 'COMP1', name: 'Materia Complementaria 1', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp3', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
    ],
  },
  {
    id: 'adme',
    name: 'Administración de Empresas',
    facultyId: 'fcs',
    subjects: [
      // NIVEL 100 - I
      { id: 'matg1045', code: 'MATG1045', name: 'Cálculo de Una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'indg1033', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'ecog2067', code: 'ECOG2067', name: 'Introducción a la Economía', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: [], period: '100 - I' },
      { id: 'ccag2022', code: 'CCAG2022', name: 'Estudio de Casos de Ciencias Sociales', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], period: '100 - I' },
      { id: 'audg2034', code: 'AUDG2034', name: 'Contabilidad Financiera', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },
      { id: 'idig1006', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // NIVEL 100 - II
      { id: 'matg1047', code: 'MATG1047', name: 'Cálculo de Varias Variables', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'ecog2063', code: 'ECOG2063', name: 'Macroeconomía I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2067'], period: '100 - II' },
      { id: 'ecog2047', code: 'ECOG2047', name: 'Economía Gerencial', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2067'], period: '100 - II' },
      { id: 'admg2029', code: 'ADMG2029', name: 'Fundamentos de Administración', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ccag2022', 'ecog2067'], period: '100 - II' },
      { id: 'matg2008', code: 'MATG2008', name: 'Matemáticas Financieras', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 5, period: '100 - II' },
      { id: 'idig1007', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006'], period: '100 - II' },

      // NIVEL 200 - I
      { id: 'estg1036', code: 'ESTG1036', name: 'Estadística I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1047'], period: '200 - I' },
      { id: 'ccpg1043', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045'], period: '200 - I' },
      { id: 'admg2025', code: 'ADMG2025', name: 'Comportamiento Organizacional', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ecog2063', 'ecog2047'], period: '200 - I' },
      { id: 'admg2034', code: 'ADMG2034', name: 'Gestión de Recursos Humanos', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['admg2029'], period: '200 - I' },
      { id: 'idig2012', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'idig1008', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007'], period: '200 - I' },

      // NIVEL 200 - II
      { id: 'estg1037', code: 'ESTG1037', name: 'Estadística II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['estg1036'], period: '200 - II' },
      { id: 'admg2030', code: 'ADMG2030', name: 'Fundamentos de Marketing', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 15, period: '200 - II' },
      { id: 'ccag2023', code: 'CCAG2023', name: 'Sociología', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 15, period: '200 - II' },
      { id: 'ecog2042', code: 'ECOG2042', name: 'Análisis Financiero', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['matg2008', 'audg2034'], period: '200 - II' },
      { id: 'audg2033', code: 'AUDG2033', name: 'Contabilidad de Costos', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['audg2034'], period: '200 - II' },
      { id: 'idig1009', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008'], period: '200 - II' },

      // NIVEL 300 - I
      { id: 'admg1005', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'admg2035', code: 'ADMG2035', name: 'Investigación de Mercados', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['admg2030'], period: '300 - I' },
      { id: 'ccpg1054', code: 'CCPG1054', name: 'Sistemas de Información', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 15, period: '300 - I' },
      { id: 'admg2022', code: 'ADMG2022', name: 'Administración de Operaciones', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['admg2029'], period: '300 - I' },
      { id: 'ecog2055', code: 'ECOG2055', name: 'Fundamentos de Inversiones', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ecog2042'], period: '300 - I' },
      { id: 'idig1010', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009'], period: '300 - I' },

      // NIVEL 300 - II
      { id: 'adsg1026', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'admg2033', code: 'ADMG2033', name: 'Gestión de Marketing', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['admg2035'], period: '300 - II' },
      { id: 'admg2032', code: 'ADMG2032', name: 'Gestión Comercial', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['admg2025', 'admg2034', 'ccpg1054'], period: '300 - II' },
      { id: 'ecog2065', code: 'ECOG2065', name: 'Gestión Tributaria', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['audg2033', 'ecog2055'], period: '300 - II' },
      { id: 'jurg2005', code: 'JURG2005', name: 'Derecho Societario y Laboral', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['admg2029'], period: '300 - II' },
      { id: 'psc_adme', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // NIVEL 400 - I
      { id: 'admg2028', code: 'ADMG2028', name: 'Estrategias Corporativas y de Negocios', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['admg2033', 'admg2032'], period: '400 - I' },
      { id: 'indg1060', code: 'INDG1060', name: 'Administración Logística', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['admg2022'], period: '400 - I' },
      { id: 'admg2024', code: 'ADMG2024', name: 'Comercio Exterior', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ecog2065'], period: '400 - I' },
      { id: 'ecog2066', code: 'ECOG2066', name: 'Planificación y Control Financiero', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ecog2065'], period: '400 - I' },
      { id: 'admg2037', code: 'ADMG2037', name: 'Gestión de Proyectos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ecog2065'], period: '400 - I' },
      { id: 'itin1_adme', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // NIVEL 400 - II
      { id: 'admg2036', code: 'ADMG2036', name: 'Planificación Estratégica', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ccag2023', 'admg2033'], period: '400 - II' },
      { id: 'admg2031', code: 'ADMG2031', name: 'Materia Integradora de Administración de Empresas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 42, period: '400 - II' },
      { id: 'itin2_adme', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // NIVEL 500 - I
      { id: 'ppp_adme', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // COMPLEMENTARIAS
      { id: 'comp1_adme', code: 'COMP1', name: 'Materia Complementaria 1', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_adme', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp3_adme', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
    ]
  },
  {
    id: 'arq',
    name: 'Arqueología',
    facultyId: 'fcs',
    subjects: [
      // NIVEL 100 - I
      { id: 'matg2007', code: 'MATG2007', name: 'Matemáticas', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'hisg2002', code: 'HISG2002', name: 'Introducción a la Historia y Etnohistoria', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'arqg2042', code: 'ARQG2042', name: 'Introducción a la Antropología y Arqueología', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], period: '100 - I' },
      { id: 'arqg2041', code: 'ARQG2041', name: 'Geografía Física', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },
      { id: 'indg1033', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'idig1006', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // NIVEL 100 - II
      { id: 'ccpg1043', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg2007'], period: '100 - II' },
      { id: 'arqg2033', code: 'ARQG2033', name: 'Arqueología del Ecuador I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['hisg2002', 'arqg2042'], period: '100 - II' },
      { id: 'arqg2039', code: 'ARQG2039', name: 'Teoría Antropológica y Arqueológica', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['arqg2042'], period: '100 - II' },
      { id: 'arqg2034', code: 'ARQG2034', name: 'Arqueología del Viejo Mundo', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['arqg2042'], period: '100 - II' },
      { id: 'idig2012', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '100 - II' },
      { id: 'idig1007', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006'], period: '100 - II' },

      // NIVEL 200 - I
      { id: 'estg2004', code: 'ESTG2004', name: 'Estadística', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['ccpg1043'], period: '200 - I' },
      { id: 'arqg2035', code: 'ARQG2035', name: 'Arqueología Social Latinoamericana', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['arqg2039'], period: '200 - I' },
      { id: 'arqg2025', code: 'ARQG2025', name: 'Arqueología del Ecuador II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['arqg2033'], period: '200 - I' },
      { id: 'arqg2038', code: 'ARQG2038', name: 'Primer Poblamiento Americano', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['arqg2034'], period: '200 - I' },
      { id: 'arqg2040', code: 'ARQG2040', name: 'Geomática', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['arqg2041', 'matg2007'], period: '200 - I' },
      { id: 'idig1008', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007'], period: '200 - I' },

      // NIVEL 200 - II
      { id: 'admg1005', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 15, period: '200 - II' },
      { id: 'arqg2020', code: 'ARQG2020', name: 'Antropología Biológica', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['arqg2034'], period: '200 - II' },
      { id: 'arqg2031', code: 'ARQG2031', name: 'Arqueología Andinoamericana', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['arqg2038', 'arqg2025'], period: '200 - II' },
      { id: 'arqg2021', code: 'ARQG2021', name: 'Arqueología de Mesoamérica', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['arqg2035'], period: '200 - II' },
      { id: 'arqg2032', code: 'ARQG2032', name: 'Arqueología de las Tierras Bajas de Sudamérica y del Caribe', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['arqg2038', 'arqg2025'], period: '200 - II' },
      { id: 'idig1009', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008'], period: '200 - II' },

      // NIVEL 300 - I
      { id: 'arqg2030', code: 'ARQG2030', name: 'Campo de Arqueología I', credits: 5, hoursTotal: 15, hoursDetail: '5/9/1', prerequisites: ['arqg2031', 'arqg2040'], period: '300 - I' },
      { id: 'arqg2022', code: 'ARQG2022', name: 'Bioarqueología', credits: 3, hoursTotal: 9, hoursDetail: '3/4/2', prerequisites: ['arqg2020'], corequisites: ['arqg2030'], period: '300 - I' },
      { id: 'arqg2036', code: 'ARQG2036', name: 'Campo de Antropología Sociocultural I', credits: 4, hoursTotal: 12, hoursDetail: '4/6/2', prerequisites: ['arqg2025', 'arqg2039'], period: '300 - I' },
      { id: 'psc_arq', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - I' },

      // NIVEL 300 - II
      { id: 'arqg2029', code: 'ARQG2029', name: 'Laboratorio de Arqueología I', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['arqg2030', 'estg2004'], period: '300 - II' },
      { id: 'itin1_arq', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '300 - II', isItinerary: true },
      { id: 'arqg2037', code: 'ARQG2037', name: 'Orígenes de los Estados Prehispánicos', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['arqg2031', 'arqg2021'], period: '300 - II' },
      { id: 'adsg1026', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'idig1010', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009'], period: '300 - II' },

      // NIVEL 400 - I
      { id: 'arqg2043', code: 'ARQG2043', name: 'Campo de Arqueología II', credits: 7, hoursTotal: 21, hoursDetail: '7/12/2', prerequisites: ['arqg2029', 'arqg2032'], period: '400 - I' },
      { id: 'arqg2028', code: 'ARQG2028', name: 'Campo de Antropología Sociocultural II', credits: 4, hoursTotal: 12, hoursDetail: '4/6/2', prerequisites: ['arqg2036'], period: '400 - I' },
      { id: 'arqg2023', code: 'ARQG2023', name: 'Proyectos de Investigación Arqueológica', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['arqg2036'], corequisites: ['arqg2028'], period: '400 - I' },

      // NIVEL 400 - II
      { id: 'arqg2026', code: 'ARQG2026', name: 'Laboratorio de Arqueología II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['arqg2043'], period: '400 - II' },
      { id: 'itin2_arq', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },
      { id: 'arqg2024', code: 'ARQG2024', name: 'Materia Integradora en Arqueología', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['arqg2043'], period: '400 - II' },

      // NIVEL 500 - I
      { id: 'ppp_arq', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // COMPLEMENTARIAS
      { id: 'comp1_arq', code: 'COMP1', name: 'Materia Complementaria 1', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_arq', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp3_arq', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
    ]
  },
  {
    id: 'aud',
    name: 'Auditoría y Control de Gestión',
    facultyId: 'fcs',
    subjects: [
      // NIVEL 100 - I
      { id: 'matg1045', code: 'MATG1045', name: 'Cálculo de Una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'indg1033', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'ecog2067', code: 'ECOG2067', name: 'Introducción a la Economía', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: [], period: '100 - I' },
      { id: 'ccag2022', code: 'CCAG2022', name: 'Estudio de Casos de Ciencias Sociales', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], period: '100 - I' },
      { id: 'audg2034', code: 'AUDG2034', name: 'Contabilidad Financiera', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },
      { id: 'idig1006', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // NIVEL 100 - II
      { id: 'matg1047', code: 'MATG1047', name: 'Cálculo de Varias Variables', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'ecog2063', code: 'ECOG2063', name: 'Macroeconomía I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2067'], period: '100 - II' },
      { id: 'ecog2047', code: 'ECOG2047', name: 'Economía Gerencial', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2067'], period: '100 - II' },
      { id: 'admg2029', code: 'ADMG2029', name: 'Fundamentos de Administración', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ccag2022', 'ecog2067'], period: '100 - II' },
      { id: 'matg2008', code: 'MATG2008', name: 'Matemáticas Financieras', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 5, period: '100 - II' },
      { id: 'idig1007', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006'], period: '100 - II' },

      // NIVEL 200 - I
      { id: 'estg1036', code: 'ESTG1036', name: 'Estadística I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1047'], period: '200 - I' },
      { id: 'ccpg1043', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045'], period: '200 - I' },
      { id: 'admg2025', code: 'ADMG2025', name: 'Comportamiento Organizacional', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ecog2063', 'ecog2047'], period: '200 - I' },
      { id: 'audg2035', code: 'AUDG2035', name: 'Contabilidad Intermedia', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['audg2034'], period: '200 - I' },
      { id: 'idig2012', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'idig1008', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007'], period: '200 - I' },

      // NIVEL 200 - II
      { id: 'estg1037', code: 'ESTG1037', name: 'Estadística II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['estg1036'], period: '200 - II' },
      { id: 'audg2036', code: 'AUDG2036', name: 'Contabilidad Avanzada', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['audg2035'], period: '200 - II' },
      { id: 'ccag2023', code: 'CCAG2023', name: 'Sociología', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 15, period: '200 - II' },
      { id: 'ecog2042', code: 'ECOG2042', name: 'Análisis Financiero', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['matg2008', 'audg2034'], period: '200 - II' },
      { id: 'audg2033', code: 'AUDG2033', name: 'Contabilidad de Costos', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['audg2034'], period: '200 - II' },
      { id: 'idig1009', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008'], period: '200 - II' },

      // NIVEL 300 - I
      { id: 'admg1005', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'audg2039', code: 'AUDG2039', name: 'Fundamentos de Auditoría', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['audg2036'], period: '300 - I' },
      { id: 'ccpg1054', code: 'CCPG1054', name: 'Sistemas de Información', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 15, period: '300 - I' },
      { id: 'audg2037', code: 'AUDG2037', name: 'Contabilidad Gerencial', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['audg2033'], period: '300 - I' },
      { id: 'ecog2055', code: 'ECOG2055', name: 'Fundamentos de Inversiones', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ecog2042'], period: '300 - I' },
      { id: 'idig1010', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009'], period: '300 - I' },

      // NIVEL 300 - II
      { id: 'adsg1026', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'audg2038', code: 'AUDG2038', name: 'Auditoría Financiera', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['audg2039'], period: '300 - II' },
      { id: 'audg2040', code: 'AUDG2040', name: 'Control Interno', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['audg2039'], period: '300 - II' },
      { id: 'ecog2065', code: 'ECOG2065', name: 'Gestión Tributaria', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['audg2033', 'ecog2055'], period: '300 - II' },
      { id: 'jurg2005', code: 'JURG2005', name: 'Derecho Societario y Laboral', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['admg2029'], period: '300 - II' },
      { id: 'psc_aud', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // NIVEL 400 - I
      { id: 'audg2041', code: 'AUDG2041', name: 'Auditoría de Gestión', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['audg2038', 'audg2040'], period: '400 - I' },
      { id: 'audg2042', code: 'AUDG2042', name: 'Auditoría de Sistemas', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['audg2040', 'ccpg1054'], period: '400 - I' },
      { id: 'admg2036', code: 'ADMG2036', name: 'Planificación Estratégica', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ccag2023', 'audg2037'], period: '400 - I' },
      { id: 'ecog2066', code: 'ECOG2066', name: 'Planificación y Control Financiero', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ecog2065'], period: '400 - I' },
      { id: 'admg2037', code: 'ADMG2037', name: 'Gestión de Proyectos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ecog2065'], period: '400 - I' },
      { id: 'itin1_aud', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // NIVEL 400 - II
      { id: 'audg2044', code: 'AUDG2044', name: 'Gestión de Riesgos', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['audg2041'], period: '400 - II' },
      { id: 'audg2043', code: 'AUDG2043', name: 'Materia Integradora de Auditoría y Control de Gestión', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 42, period: '400 - II' },
      { id: 'itin2_aud', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // NIVEL 500 - I
      { id: 'ppp_aud', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // COMPLEMENTARIAS
      { id: 'comp1_aud', code: 'COMP1', name: 'Materia Complementaria 1', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_aud', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp3_aud', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
    ]
  },
  {
    id: 'eco',
    name: 'Economía',
    facultyId: 'fcs',
    subjects: [
      // NIVEL 100 - I
      { id: 'matg1045', code: 'MATG1045', name: 'Cálculo de Una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'indg1033', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'ecog2067', code: 'ECOG2067', name: 'Introducción a la Economía', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: [], period: '100 - I' },
      { id: 'ccag2022', code: 'CCAG2022', name: 'Estudio de Casos de Ciencias Sociales', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], period: '100 - I' },
      { id: 'audg2034', code: 'AUDG2034', name: 'Contabilidad Financiera', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },
      { id: 'idig1006', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // NIVEL 100 - II
      { id: 'matg1047', code: 'MATG1047', name: 'Cálculo de Varias Variables', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'ecog2063', code: 'ECOG2063', name: 'Macroeconomía I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2067'], period: '100 - II' },
      { id: 'ecog2047', code: 'ECOG2047', name: 'Economía Gerencial', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2067'], period: '100 - II' },
      { id: 'admg2029', code: 'ADMG2029', name: 'Fundamentos de Administración', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ccag2022', 'ecog2067'], period: '100 - II' },
      { id: 'matg2008', code: 'MATG2008', name: 'Matemáticas Financieras', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 5, period: '100 - II' },
      { id: 'idig1007', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006'], period: '100 - II' },

      // NIVEL 200 - I
      { id: 'estg1036', code: 'ESTG1036', name: 'Estadística I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1047'], period: '200 - I' },
      { id: 'ccpg1043', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045'], period: '200 - I' },
      { id: 'ecog2064', code: 'ECOG2064', name: 'Macroeconomía II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2063'], period: '200 - I' },
      { id: 'ecog2048', code: 'ECOG2048', name: 'Microeconomía I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2047'], period: '200 - I' },
      { id: 'idig2012', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'idig1008', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007'], period: '200 - I' },

      // NIVEL 200 - II
      { id: 'estg1037', code: 'ESTG1037', name: 'Estadística II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['estg1036'], period: '200 - II' },
      { id: 'ecog2049', code: 'ECOG2049', name: 'Microeconomía II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2048'], period: '200 - II' },
      { id: 'ccag2023', code: 'CCAG2023', name: 'Sociología', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 15, period: '200 - II' },
      { id: 'ecog2042', code: 'ECOG2042', name: 'Análisis Financiero', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['matg2008', 'audg2034'], period: '200 - II' },
      { id: 'ecog2051', code: 'ECOG2051', name: 'Historia Económica', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ecog2063'], period: '200 - II' },
      { id: 'idig1009', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008'], period: '200 - II' },

      // NIVEL 300 - I
      { id: 'admg1005', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'ecog2052', code: 'ECOG2052', name: 'Econometría I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['estg1037'], period: '300 - I' },
      { id: 'ccpg1054', code: 'CCPG1054', name: 'Sistemas de Información', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 15, period: '300 - I' },
      { id: 'ecog2050', code: 'ECOG2050', name: 'Economía Internacional', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2049', 'ecog2064'], period: '300 - I' },
      { id: 'ecog2055', code: 'ECOG2055', name: 'Fundamentos de Inversiones', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ecog2042'], period: '300 - I' },
      { id: 'idig1010', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009'], period: '300 - I' },

      // NIVEL 300 - II
      { id: 'adsg1026', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'ecog2053', code: 'ECOG2053', name: 'Econometría II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ecog2052'], period: '300 - II' },
      { id: 'ecog2054', code: 'ECOG2054', name: 'Economía Pública', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2049', 'ecog2064'], period: '300 - II' },
      { id: 'ecog2056', code: 'ECOG2056', name: 'Economía del Desarrollo', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ecog2049', 'ecog2064'], period: '300 - II' },
      { id: 'jurg2005', code: 'JURG2005', name: 'Derecho Societario y Laboral', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['admg2029'], period: '300 - II' },
      { id: 'psc_eco', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // NIVEL 400 - I
      { id: 'ecog2057', code: 'ECOG2057', name: 'Evaluación de Proyectos Sociales', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ecog2054'], period: '400 - I' },
      { id: 'ecog2058', code: 'ECOG2058', name: 'Política Económica', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2054'], period: '400 - I' },
      { id: 'ecog2059', code: 'ECOG2059', name: 'Economía Empresarial', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ecog2049'], period: '400 - I' },
      { id: 'admg2037', code: 'ADMG2037', name: 'Gestión de Proyectos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ecog2042'], period: '400 - I' },
      { id: 'itin1_eco', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // NIVEL 400 - II
      { id: 'ecog2060', code: 'ECOG2060', name: 'Economía Ecuatoriana', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2051', 'ecog2058'], period: '400 - II' },
      { id: 'ecog2061', code: 'ECOG2061', name: 'Materia Integradora de Economía', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 42, period: '400 - II' },
      { id: 'itin2_eco', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // NIVEL 500 - I
      { id: 'ppp_eco', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // COMPLEMENTARIAS
      { id: 'comp1_eco', code: 'COMP1', name: 'Materia Complementaria 1', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_eco', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp3_eco', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
    ]
  },
  {
    id: 'tur',
    name: 'Turismo',
    facultyId: 'fcs',
    subjects: [
      // NIVEL 100 - I
      { id: 'matg1045', code: 'MATG1045', name: 'Cálculo de Una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'indg1033', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'ecog2067', code: 'ECOG2067', name: 'Introducción a la Economía', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: [], period: '100 - I' },
      { id: 'ccag2022', code: 'CCAG2022', name: 'Estudio de Casos de Ciencias Sociales', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], period: '100 - I' },
      { id: 'turg2025', code: 'TURG2025', name: 'Fundamentos de Turismo', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: [], period: '100 - I' },
      { id: 'idig1006', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // NIVEL 100 - II
      { id: 'matg1047', code: 'MATG1047', name: 'Cálculo de Varias Variables', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'ecog2063', code: 'ECOG2063', name: 'Macroeconomía I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2067'], period: '100 - II' },
      { id: 'ecog2047', code: 'ECOG2047', name: 'Economía Gerencial', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ecog2067'], period: '100 - II' },
      { id: 'admg2029', code: 'ADMG2029', name: 'Fundamentos de Administración', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ccag2022', 'ecog2067'], period: '100 - II' },
      { id: 'turg2026', code: 'TURG2026', name: 'Geografía del Turismo', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['turg2025'], period: '100 - II' },
      { id: 'idig1007', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006'], period: '100 - II' },

      // NIVEL 200 - I
      { id: 'estg1036', code: 'ESTG1036', name: 'Estadística I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1047'], period: '200 - I' },
      { id: 'ccpg1043', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045'], period: '200 - I' },
      { id: 'audg2034', code: 'AUDG2034', name: 'Contabilidad Financiera', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 5, period: '200 - I' },
      { id: 'turg2027', code: 'TURG2027', name: 'Patrimonio Natural y Cultural', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['turg2026'], period: '200 - I' },
      { id: 'idig2012', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'idig1008', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007'], period: '200 - I' },

      // NIVEL 200 - II
      { id: 'estg1037', code: 'ESTG1037', name: 'Estadística II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['estg1036'], period: '200 - II' },
      { id: 'admg2030', code: 'ADMG2030', name: 'Fundamentos de Marketing', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 15, period: '200 - II' },
      { id: 'ccag2023', code: 'CCAG2023', name: 'Sociología', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 15, period: '200 - II' },
      { id: 'matg2008', code: 'MATG2008', name: 'Matemáticas Financieras', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 5, period: '200 - II' },
      { id: 'turg2028', code: 'TURG2028', name: 'Operación de Servicios Turísticos', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['turg2027'], period: '200 - II' },
      { id: 'idig1009', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008'], period: '200 - II' },

      // NIVEL 300 - I
      { id: 'admg1005', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'admg2035', code: 'ADMG2035', name: 'Investigación de Mercados', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['admg2030'], period: '300 - I' },
      { id: 'ccpg1054', code: 'CCPG1054', name: 'Sistemas de Información', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 15, period: '300 - I' },
      { id: 'ecog2042', code: 'ECOG2042', name: 'Análisis Financiero', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['matg2008', 'audg2034'], period: '300 - I' },
      { id: 'turg2029', code: 'TURG2029', name: 'Gestión de Destinos Turísticos', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['turg2028'], period: '300 - I' },
      { id: 'idig1010', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009'], period: '300 - I' },

      // NIVEL 300 - II
      { id: 'adsg1026', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'turg2030', code: 'TURG2030', name: 'Marketing Turístico', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['admg2035'], period: '300 - II' },
      { id: 'turg2031', code: 'TURG2031', name: 'Planificación Turística', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['turg2029'], period: '300 - II' },
      { id: 'turg2032', code: 'TURG2032', name: 'Gestión de Empresas Turísticas', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['turg2029', 'admg2029'], period: '300 - II' },
      { id: 'jurg2005', code: 'JURG2005', name: 'Derecho Societario y Laboral', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['admg2029'], period: '300 - II' },
      { id: 'psc_tur', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // NIVEL 400 - I
      { id: 'turg2033', code: 'TURG2033', name: 'Desarrollo de Productos Turísticos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['turg2031'], period: '400 - I' },
      { id: 'turg2034', code: 'TURG2034', name: 'Evaluación de Proyectos Turísticos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['turg2031', 'ecog2042'], period: '400 - I' },
      { id: 'admg2036', code: 'ADMG2036', name: 'Planificación Estratégica', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ccag2023', 'turg2032'], period: '400 - I' },
      { id: 'turg2035', code: 'TURG2035', name: 'Turismo Sostenible', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['turg2031'], period: '400 - I' },
      { id: 'itin1_tur', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // NIVEL 400 - II
      { id: 'turg2036', code: 'TURG2036', name: 'Materia Integradora de Turismo', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 42, period: '400 - II' },
      { id: 'itin2_tur', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // NIVEL 500 - I
      { id: 'ppp_tur', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // COMPLEMENTARIAS
      { id: 'comp1_tur', code: 'COMP1', name: 'Materia Complementaria 1', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_tur', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp3_tur', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
    ]
  },
  {
    id: 'cdia-h',
    name: 'Ciencias de Datos e Inteligencia Artificial (Híbrido)',
    facultyId: 'fiec',
    subjects: [
      // NIVEL 100 - I
      { id: 'indg1033', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'matg1045', code: 'MATG1045', name: 'Cálculo de Una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'matg1049', code: 'MATG1049', name: 'Álgebra Lineal', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], corequisites: ['matg1045'], period: '100 - I' },
      { id: 'ccpg1043', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'idig1006', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // NIVEL 100 - II
      { id: 'ticg1018', code: 'TICG1018', name: 'Sistema de Bases de Datos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1043'], period: '100 - II' },
      { id: 'matg1046', code: 'MATG1046', name: 'Cálculo Vectorial', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'cdiag1003', code: 'CDIAG1003', name: 'Fundamentos de Ciencia de Datos e Inteligencia Artificial', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 6, period: '100 - II' },
      { id: 'ccpg1052', code: 'CCPG1052', name: 'Programación Orientada a Objetos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1043'], period: '100 - II' },
      { id: 'idig1007', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006'], period: '100 - II' },

      // NIVEL 200 - I
      { id: 'ccpg1034', code: 'CCPG1034', name: 'Estructuras de Datos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1052'], period: '200 - I' },
      { id: 'estg1036', code: 'ESTG1036', name: 'Estadística I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1046'], period: '200 - I' },
      { id: 'ccpg1046', code: 'CCPG1046', name: 'Interacción Humano Computador', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['indg1033', 'ccpg1052'], period: '200 - I' },
      { id: 'idig2012', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'cdiag1002', code: 'CDIAG1002', name: 'Machine Learning', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['cdiag1003', 'ccpg1052'], period: '200 - I' },
      { id: 'idig1008', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007'], period: '200 - I' },

      // NIVEL 200 - II
      { id: 'ccpg1036', code: 'CCPG1036', name: 'Análisis de Algoritmos', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['ccpg1034'], period: '200 - II' },
      { id: 'sofg1006', code: 'SOFG1006', name: 'Desarrollo de Aplicaciones Web y Móviles', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 12, period: '200 - II' },
      { id: 'sofg007', code: 'SOFG007', name: 'Ingeniería de Software I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ccpg1046'], corequisites: ['sofg1006'], period: '200 - II' },
      { id: 'cdiag1001', code: 'CDIAG1001', name: 'Algoritmos de Optimización', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1049', 'ccpg1043'], period: '200 - II' },
      { id: 'estg1803', code: 'ESTG1803', name: 'Estadística II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['estg1036'], period: '200 - II' },
      { id: 'idig1009', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008'], period: '200 - II' },

      // NIVEL 300 - I
      { id: 'admg1801', code: 'ADMG1801', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'cdiag1804', code: 'CDIAG1804', name: 'Visualización de Información', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['sofg1006'], period: '300 - I' },
      { id: 'estg1801', code: 'ESTG1801', name: 'Datos y Pronósticos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['estg1803'], period: '300 - I' },
      { id: 'cdiag1806', code: 'CDIAG1806', name: 'Ética en Ciencia de Datos y Sistemas Inteligentes', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cdiag1002'], period: '300 - I' },
      { id: 'ccpg1809', code: 'CCPG1809', name: 'Inteligencia Artificial', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['estg1803'], period: '300 - I' },
      { id: 'idig1010', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009'], period: '300 - I' },

      // NIVEL 300 - II
      { id: 'ccpg1810', code: 'CCPG1810', name: 'Sistemas Distribuidos y Computación en la Nube', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'adsg1801', code: 'ADSG1801', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'ccpg1812', code: 'CCPG1812', name: 'Seguridad de la Información', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'cdiag1802', code: 'CDIAG1802', name: 'Estrategia de Datos', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cdiag1806'], period: '300 - II' },
      { id: 'cdiag1807', code: 'CDIAG1807', name: 'Deep Learning', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['cdiag1806', 'ccpg1809'], period: '300 - II' },
      { id: 'psc_h', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // NIVEL 400 - I
      { id: 'tlmg1801', code: 'TLMG1801', name: 'Ambientes Inteligentes', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 30, period: '400 - I' },
      { id: 'cdiag1808', code: 'CDIAG1808', name: 'Sistemas de Machine Learning', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['cdiag1806', 'ccpg1810'], period: '400 - I' },
      { id: 'ticg1801', code: 'TICG1801', name: 'Bases de Datos Avanzadas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 30, period: '400 - I' },
      { id: 'cdiag1809', code: 'CDIAG1809', name: 'Procesamiento de Lenguaje Natural', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['estg1801'], period: '400 - I' },
      { id: 'itin1_h', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 30, period: '400 - I', isItinerary: true, itineraryOptions },

      // NIVEL 400 - II
      { id: 'ppp_h', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/5/0', prerequisites: [], period: '400 - II' },
      { id: 'cdiag1812', code: 'CDIAG1812', name: 'Materia Integradora de Ciencia de Datos e Inteligencia Artificial', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 30, period: '400 - II' },
      { id: 'itin2_h', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 30, period: '400 - II', isItinerary: true, itineraryOptions },

      // COMPLEMENTARIAS
      { id: 'comp1_h', code: 'COMP1', name: 'Materia Complementaria 1', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_h', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp3_h', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
    ]
  },
  {
    id: 'cdia-o',
    name: 'Ciencias de Datos e Inteligencia Artificial (Online)',
    facultyId: 'fiec',
    subjects: [
      // NIVEL 100 - I
      { id: 'indg1801', code: 'INDG1801', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'matg1801', code: 'MATG1801', name: 'Cálculo de Una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'matg1803', code: 'MATG1803', name: 'Álgebra Lineal', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], corequisites: ['matg1801'], period: '100 - I' },
      { id: 'ccpg1801', code: 'CCPG1801', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'idig1802', code: 'IDIG1802', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // NIVEL 100 - II
      { id: 'ticg1802', code: 'TICG1802', name: 'Sistema de Bases de Datos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1801'], period: '100 - II' },
      { id: 'matg1802', code: 'MATG1802', name: 'Cálculo Vectorial', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1801'], period: '100 - II' },
      { id: 'cdiag1811', code: 'CDIAG1811', name: 'Fundamentos de Ciencia de Datos e Inteligencia Artificial', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 6, period: '100 - II' },
      { id: 'ccpg1803', code: 'CCPG1803', name: 'Programación Orientada a Objetos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1801'], period: '100 - II' },
      { id: 'idig1806', code: 'IDIG1806', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1802'], period: '100 - II' },

      // NIVEL 200 - I
      { id: 'ccpg1804', code: 'CCPG1804', name: 'Estructuras de Datos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1803'], period: '200 - I' },
      { id: 'estg1802', code: 'ESTG1802', name: 'Estadística I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1802'], period: '200 - I' },
      { id: 'ccpg1805', code: 'CCPG1805', name: 'Interacción Humano Computador', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['indg1801', 'ccpg1803'], period: '200 - I' },
      { id: 'idig1801', code: 'IDIG1801', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'cdiag1801', code: 'CDIAG1801', name: 'Machine Learning', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['cdiag1811', 'ccpg1803'], period: '200 - I' },
      { id: 'idig1803', code: 'IDIG1803', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1806'], period: '200 - I' },

      // NIVEL 200 - II
      { id: 'ccpg1806', code: 'CCPG1806', name: 'Análisis de Algoritmos', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['ccpg1804'], period: '200 - II' },
      { id: 'sofg1801', code: 'SOFG1801', name: 'Desarrollo de Aplicaciones Web y Móviles', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 12, period: '200 - II' },
      { id: 'sofg1802', code: 'SOFG1802', name: 'Ingeniería de Software I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ccpg1805'], corequisites: ['sofg1801'], period: '200 - II' },
      { id: 'cdiag1803', code: 'CDIAG1803', name: 'Algoritmos de Optimización', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1803', 'ccpg1801'], period: '200 - II' },
      { id: 'estg1803_o', code: 'ESTG1803', name: 'Estadística II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['estg1802'], period: '200 - II' },
      { id: 'idig1804', code: 'IDIG1804', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1803'], period: '200 - II' },

      // NIVEL 300 - I
      { id: 'admg1801_o', code: 'ADMG1801', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'cdiag1804_o', code: 'CDIAG1804', name: 'Visualización de Información', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['sofg1801'], period: '300 - I' },
      { id: 'estg1801_o', code: 'ESTG1801', name: 'Datos y Pronósticos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['estg1803_o'], period: '300 - I' },
      { id: 'cdiag1806_o', code: 'CDIAG1806', name: 'Ética en Ciencia de Datos y Sistemas Inteligentes', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cdiag1801'], period: '300 - I' },
      { id: 'ccpg1809_o', code: 'CCPG1809', name: 'Inteligencia Artificial', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['estg1803_o'], period: '300 - I' },
      { id: 'idig1805', code: 'IDIG1805', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1804'], period: '300 - I' },

      // NIVEL 300 - II
      { id: 'ccpg1810_o', code: 'CCPG1810', name: 'Sistemas Distribuidos y Computación en la Nube', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'adsg1801_o', code: 'ADSG1801', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'ccpg1812_o', code: 'CCPG1812', name: 'Seguridad de la Información', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'cdiag1802_o', code: 'CDIAG1802', name: 'Estrategia de Datos', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cdiag1806_o'], period: '300 - II' },
      { id: 'cdiag1807_o', code: 'CDIAG1807', name: 'Deep Learning', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['cdiag1806_o', 'ccpg1809_o'], period: '300 - II' },
      { id: 'psc_o', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // NIVEL 400 - I
      { id: 'tlmg1801_o', code: 'TLMG1801', name: 'Ambientes Inteligentes', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 30, period: '400 - I' },
      { id: 'cdiag1808_o', code: 'CDIAG1808', name: 'Sistemas de Machine Learning', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['cdiag1806_o', 'ccpg1810_o'], period: '400 - I' },
      { id: 'ticg1801_o', code: 'TICG1801', name: 'Bases de Datos Avanzadas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 30, period: '400 - I' },
      { id: 'cdiag1809_o', code: 'CDIAG1809', name: 'Procesamiento de Lenguaje Natural', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['estg1801_o'], period: '400 - I' },
      { id: 'itin1_o', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 30, period: '400 - I', isItinerary: true, itineraryOptions },

      // NIVEL 400 - II
      { id: 'ppp_o', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/5/0', prerequisites: [], period: '400 - II' },
      { id: 'cdiag1812_o', code: 'CDIAG1812', name: 'Materia Integradora de Ciencia de Datos e Inteligencia Artificial', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 30, period: '400 - II' },
      { id: 'itin2_o', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 30, period: '400 - II', isItinerary: true, itineraryOptions },

      // COMPLEMENTARIAS
      { id: 'comp1_o', code: 'COMP1', name: 'Materia Complementaria 1', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_o', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp3_o', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
    ]
  },
  {
    id: 'elec',
    name: 'Electricidad',
    facultyId: 'fiec',
    subjects: [
      // NIVEL 100 - I
      { id: 'matg1045', code: 'MATG1045', name: 'Cálculo de Una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'fisg1005', code: 'FISG1005', name: 'Física: Mecánica', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], corequisites: ['matg1045'], period: '100 - I' },
      { id: 'quig1032', code: 'QUIG1032', name: 'Química General', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'indg1033', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'idig1006', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // NIVEL 100 - II
      { id: 'matg1049', code: 'MATG1049', name: 'Álgebra Lineal', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'matg1046', code: 'MATG1046', name: 'Cálculo Vectorial', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'fisg1006', code: 'FISG1006', name: 'Física: Electricidad y Magnetismo', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['fisg1005'], corequisites: ['matg1046'], period: '100 - II' },
      { id: 'ccpg1043', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'idig1007', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006'], period: '100 - II' },

      // NIVEL 200 - I
      { id: 'matg1050', code: 'MATG1050', name: 'Ecuaciones Diferenciales', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1049'], period: '200 - I' },
      { id: 'idig2012', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'estg1034', code: 'ESTG1034', name: 'Estadística', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1046', 'ccpg1043'], period: '200 - I' },
      { id: 'eleg1030', code: 'ELEG1030', name: 'Circuitos Eléctricos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['fisg1006'], period: '200 - I' },
      { id: 'eyag1044', code: 'EYAG1044', name: 'Sistemas Digitales I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['fisg1006'], period: '200 - I' },
      { id: 'idig1008', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007'], period: '200 - I' },

      // NIVEL 200 - II
      { id: 'matg1052', code: 'MATG1052', name: 'Métodos Numéricos', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['matg1046'], period: '200 - II' },
      { id: 'eyag1040', code: 'EYAG1040', name: 'Principios de Electrónica', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1030'], period: '200 - II' },
      { id: 'eleg1028', code: 'ELEG1028', name: 'Análisis de Redes Eléctricas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1030'], period: '200 - II' },
      { id: 'eyag1043', code: 'EYAG1043', name: 'Sistemas de Control', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], corequisites: ['eleg1028'], period: '200 - II' },
      { id: 'eleg1051', code: 'ELEG1051', name: 'Teoría Electromagnética', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['fisg1006'], period: '200 - II' },
      { id: 'idig1009', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008'], period: '200 - II' },

      // NIVEL 300 - I
      { id: 'admg1005', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'eleg1049', code: 'ELEG1049', name: 'Sistemas de Potencia I', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['matg1052', 'eleg1028'], period: '300 - I' },
      { id: 'eleg1038', code: 'ELEG1038', name: 'Instalaciones Eléctricas', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['eleg1030'], period: '300 - I' },
      { id: 'eleg1040', code: 'ELEG1040', name: 'Maquinaria Eléctrica I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1028', 'eleg1051'], period: '300 - I' },
      { id: 'idig1010', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009'], period: '300 - I' },

      // NIVEL 300 - II
      { id: 'eyag1035', code: 'EYAG1035', name: 'Electrónica de Potencia I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eyag1040', 'eyag1043', 'eleg1040'], period: '300 - II' },
      { id: 'eleg1050', code: 'ELEG1050', name: 'Sistemas de Potencia II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1049'], corequisites: ['eleg1041'], period: '300 - II' },
      { id: 'eleg1041', code: 'ELEG1041', name: 'Maquinaria Eléctrica II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1040'], period: '300 - II' },
      { id: 'adsg1026', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'psc_e', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // NIVEL 400 - I
      { id: 'matg1054', code: 'MATG1054', name: 'Matemáticas Superiores', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1046'], period: '400 - I' },
      { id: 'eleg1044', code: 'ELEG1044', name: 'Operación de Sistemas de Potencia', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['eleg1050', 'eleg1049'], period: '400 - I' },
      { id: 'eleg1032', code: 'ELEG1032', name: 'Distribución Eléctrica I', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['eyag1035', 'eleg1041'], period: '400 - I' },
      { id: 'eleg1035', code: 'ELEG1035', name: 'Energías Renovables', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1041', 'eyag1043'], period: '400 - I' },
      { id: 'eleg1029', code: 'ELEG1029', name: 'Centrales Eléctricas', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['eyag1043', 'eleg1041'], period: '400 - I' },
      { id: 'eleg1031', code: 'ELEG1031', name: 'Controles Eléctricos Industriales', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1041', 'eyag1044'], period: '400 - I' },

      // NIVEL 400 - II
      { id: 'eleg1047', code: 'ELEG1047', name: 'Protecciones Eléctricas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1050'], period: '400 - II' },
      { id: 'eleg1046', code: 'ELEG1046', name: 'Planificación de Sistemas de Potencia', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['eleg1044'], period: '400 - II' },
      { id: 'eleg1033', code: 'ELEG1033', name: 'Distribución Eléctrica II', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['eleg1032'], period: '400 - II' },
      { id: 'eleg1036', code: 'ELEG1036', name: 'Estabilidad y Control de Sistemas de Potencia', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['eleg1050'], period: '400 - II' },
      { id: 'eleg1039', code: 'ELEG1039', name: 'Líneas de Transmisión y Subestaciones', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1050'], period: '400 - II' },
      { id: 'itin1_e', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // NIVEL 500 - I
      { id: 'eleg1037', code: 'ELEG1037', name: 'Gestión y Marco Regulatorio del Sector Eléctrico', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['eleg1033'], period: '500 - I' },
      { id: 'eleg1042', code: 'ELEG1042', name: 'Materia Integradora de Electricidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 44, period: '500 - I' },
      { id: 'itin2_e', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '500 - I', isItinerary: true },

      // NIVEL 500 - II
      { id: 'ppp_e', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - II' },

      // COMPLEMENTARIAS
      { id: 'comp1_e', code: 'COMP1', name: 'Materia Complementaria 1', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_e', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp3_e', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
    ]
  },
  {
    id: 'elau',
    name: 'Electrónica y automatización',
    facultyId: 'fiec',
    subjects: [
      // NIVEL 100 - I
      { id: 'matg1045', code: 'MATG1045', name: 'Cálculo de Una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'fisg1005', code: 'FISG1005', name: 'Física: Mecánica', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], corequisites: ['matg1045'], period: '100 - I' },
      { id: 'quig1032', code: 'QUIG1032', name: 'Química General', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'indg1033', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'idig1006', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // NIVEL 100 - II
      { id: 'matg1049', code: 'MATG1049', name: 'Álgebra Lineal', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'matg1046', code: 'MATG1046', name: 'Cálculo Vectorial', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'fisg1006', code: 'FISG1006', name: 'Física: Electricidad y Magnetismo', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['fisg1005'], corequisites: ['matg1046'], period: '100 - II' },
      { id: 'ccpg1043', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'idig1007', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006'], period: '100 - II' },

      // NIVEL 200 - I
      { id: 'matg1050', code: 'MATG1050', name: 'Ecuaciones Diferenciales', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1049'], period: '200 - I' },
      { id: 'idig2012', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'estg1034', code: 'ESTG1034', name: 'Estadística', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1046', 'ccpg1043'], period: '200 - I' },
      { id: 'eleg1030', code: 'ELEG1030', name: 'Circuitos Eléctricos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['fisg1006'], period: '200 - I' },
      { id: 'eyag1044', code: 'EYAG1044', name: 'Sistemas Digitales I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['fisg1006'], period: '200 - I' },
      { id: 'idig1008', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007'], period: '200 - I' },

      // NIVEL 200 - II
      { id: 'eyag1041', code: 'EYAG1041', name: 'Programación Aplicada a la Automatización', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ccpg1043'], period: '200 - II' },
      { id: 'eyag1040', code: 'EYAG1040', name: 'Principios de Electrónica', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1030'], period: '200 - II' },
      { id: 'eleg1028', code: 'ELEG1028', name: 'Análisis de Redes Eléctricas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1030', 'matg1050'], period: '200 - II' },
      { id: 'eyag1043', code: 'EYAG1043', name: 'Sistemas de Control', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], corequisites: ['eleg1028'], period: '200 - II' },
      { id: 'eyag1045', code: 'EYAG1045', name: 'Sistemas Digitales II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['eyag1044'], period: '200 - II' },
      { id: 'idig1009', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008'], period: '200 - II' },

      // NIVEL 300 - I
      { id: 'admg1005', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'eyag1038', code: 'EYAG1038', name: 'Instrumentación Industrial', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['eyag1040', 'eyag1043'], period: '300 - I' },
      { id: 'eleg1038', code: 'ELEG1038', name: 'Instalaciones Eléctricas', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['eleg1030'], period: '300 - I' },
      { id: 'eleg1043', code: 'ELEG1043', name: 'Maquinarias y Transformadores', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1028'], period: '300 - I' },
      { id: 'eyag1030', code: 'EYAG1030', name: 'Control Avanzado', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['eyag1043'], period: '300 - I' },
      { id: 'idig1010', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009'], period: '300 - I' },

      // NIVEL 300 - II
      { id: 'eyag1046', code: 'EYAG1046', name: 'Sistemas Embebidos', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['eyag1041', 'eyag1044'], period: '300 - II' },
      { id: 'eyag1035', code: 'EYAG1035', name: 'Electrónica de Potencia I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eyag1040', 'eyag1043', 'eleg1043'], period: '300 - II' },
      { id: 'eyag1027', code: 'EYAG1027', name: 'Aplicaciones Electrónicas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eyag1040'], period: '300 - II' },
      { id: 'eyag1028', code: 'EYAG1028', name: 'Automatización de Procesos Industriales', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1043'], period: '300 - II' },
      { id: 'adsg1026', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },

      // NIVEL 400 - I
      { id: 'eyag1042', code: 'EYAG1042', name: 'Robótica Industrial', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eyag1046', 'eyag1030'], period: '400 - I' },
      { id: 'eyag1036', code: 'EYAG1036', name: 'Electrónica de Potencia II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eyag1035'], period: '400 - I' },
      { id: 'eyag1029', code: 'EYAG1029', name: 'Comunicaciones Industriales y Sistemas SCADA', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eyag1028'], period: '400 - I' },
      { id: 'psc_ea', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '400 - I' },
      { id: 'itin1_ea', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // NIVEL 400 - II
      { id: 'eyag1039', code: 'EYAG1039', name: 'Materia Integradora de Electrónica y Automatización', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 37, period: '400 - II' },
      { id: 'itin2_ea', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // NIVEL 500 - I
      { id: 'ppp_ea', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // COMPLEMENTARIAS
      { id: 'comp1_ea', code: 'COMP1', name: 'Materia Complementaria 1', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_ea', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp3_ea', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
    ]
  },
  {
    id: 'tele',
    name: 'Telecomunicaciones',
    facultyId: 'fiec',
    subjects: [
      // NIVEL 100 - I
      { id: 'quig1032', code: 'QUIG1032', name: 'Química General', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'matg1045', code: 'MATG1045', name: 'Cálculo de Una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'fisg1005', code: 'FISG1005', name: 'Física Mecánica', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], corequisites: ['matg1045'], period: '100 - I' },
      { id: 'indg1033', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'idig1006', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // NIVEL 100 - II
      { id: 'matg1049', code: 'MATG1049', name: 'Álgebra Lineal', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'ccpg1043', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'matg1046', code: 'MATG1046', name: 'Cálculo Vectorial', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'fisg1006', code: 'FISG1006', name: 'Física Electricidad y Magnetismo', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['fisg1005'], corequisites: ['matg1046'], period: '100 - II' },
      { id: 'idig1007', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006'], period: '100 - II' },

      // NIVEL 200 - I
      { id: 'matg1050', code: 'MATG1050', name: 'Ecuaciones Diferenciales', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1049'], period: '200 - I' },
      { id: 'telg1037', code: 'TELG1037', name: 'Señales y Sistemas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], corequisites: ['matg1050'], period: '200 - I' },
      { id: 'estg1034', code: 'ESTG1034', name: 'Estadística', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1046', 'ccpg1043'], period: '200 - I' },
      { id: 'idig2012', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'telg1032', code: 'TELG1032', name: 'Introducción a las Telecomunicaciones', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['indg1033'], period: '200 - I' },
      { id: 'idig1008', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007'], period: '200 - I' },

      // NIVEL 200 - II
      { id: 'eleg1051', code: 'ELEG1051', name: 'Teoría Electromagnética', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['matg1050', 'fisg1006'], period: '200 - II' },
      { id: 'telg1034', code: 'TELG1034', name: 'Procesamiento Digital de Señales', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['telg1037'], period: '200 - II' },
      { id: 'telg1038', code: 'TELG1038', name: 'Sistemas de Comunicaciones I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['telg1037', 'estg1034'], period: '200 - II' },
      { id: 'eleg1034', code: 'ELEG1034', name: 'Electricidad Básica', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['fisg1006'], period: '200 - II' },
      { id: 'eyag1040', code: 'EYAG1040', name: 'Principios de Electrónica', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], corequisites: ['eleg1034'], period: '200 - II' },
      { id: 'idig1009', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008'], period: '200 - II' },

      // NIVEL 300 - I
      { id: 'telg1027', code: 'TELG1027', name: 'Circuitos de Alta Frecuencia y Microondas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eleg1051', 'eleg1034'], period: '300 - I' },
      { id: 'telg1039', code: 'TELG1039', name: 'Sistemas de Comunicaciones II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['telg1038'], period: '300 - I' },
      { id: 'eyag1027', code: 'EYAG1027', name: 'Aplicaciones Electrónicas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['eyag1040'], period: '300 - I' },
      { id: 'telg1030', code: 'TELG1030', name: 'Diseño de Redes Conmutadas', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['telg1032'], period: '300 - I' },
      { id: 'idig1010', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009'], period: '300 - I' },

      // NIVEL 300 - II
      { id: 'admg1005', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'telg1035', code: 'TELG1035', name: 'Propagación', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['telg1027'], period: '300 - II' },
      { id: 'eyag1044', code: 'EYAG1044', name: 'Sistemas Digitales I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['fisg1006'], period: '300 - II' },
      { id: 'adsg1026', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'telg1040', code: 'TELG1040', name: 'Sistemas de Redes', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['telg1030'], period: '300 - II' },
      { id: 'admg1006', code: 'ADMG1006', name: 'Gestión de Proyectos y Regulación en Telecomunicaciones', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['telg1032'], period: '300 - II' },

      // NIVEL 400 - I
      { id: 'psc_t', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '400 - I' },
      { id: 'telg1028', code: 'TELG1028', name: 'Comunicaciones Inalámbricas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['telg1035', 'telg1039'], period: '400 - I' },
      { id: 'telg1029', code: 'TELG1029', name: 'Diseño de Aplicaciones en Telecomunicaciones', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['telg1034', 'eyag1044', 'telg1039'], period: '400 - I' },
      { id: 'telg1031', code: 'TELG1031', name: 'Fibras Ópticas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['telg1030'], period: '400 - I' },
      { id: 'telg1042', code: 'TELG1042', name: 'Transmisión de Servicios Multimedia', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['telg1040'], period: '400 - I' },
      { id: 'itin1_t', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // NIVEL 400 - II
      { id: 'telg1033', code: 'TELG1033', name: 'Materia Integradora de Telecomunicaciones', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 38, period: '400 - II' },
      { id: 'itin2_t', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // NIVEL 500 - I
      { id: 'ppp_t', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // COMPLEMENTARIAS
      { id: 'comp1_t', code: 'COMP1', name: 'Materia Complementaria 1', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_t', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp3_t', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
    ]
  },
  {
    id: 'telm',
    name: 'Telemática',
    facultyId: 'fiec',
    subjects: [
      // NIVEL 100 - I
      { id: 'matg1045', code: 'MATG1045', name: 'Cálculo de Una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'fisg1005', code: 'FISG1005', name: 'Física Mecánica', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], corequisites: ['matg1045'], period: '100 - I' },
      { id: 'ccpg1043', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'indg1033', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'idig1006', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // NIVEL 100 - II
      { id: 'matg1046', code: 'MATG1046', name: 'Cálculo Vectorial', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'fisg1006', code: 'FISG1006', name: 'Física Electricidad y Magnetismo', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['fisg1005'], corequisites: ['matg1046'], period: '100 - II' },
      { id: 'idig2012', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '100 - II' },
      { id: 'ccpg1052', code: 'CCPG1052', name: 'Programación Orientada a Objetos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1043'], period: '100 - II' },
      { id: 'tlmg1036', code: 'TLMG1036', name: 'Telemática y Transformación Digital', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['ccpg1043'], period: '100 - II' },
      { id: 'idig1007', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006'], period: '100 - II' },

      // NIVEL 200 - I
      { id: 'matg1049', code: 'MATG1049', name: 'Álgebra Lineal', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045'], period: '200 - I' },
      { id: 'matg1051', code: 'MATG1051', name: 'Matemáticas Discretas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '200 - I' },
      { id: 'tlmg1032', code: 'TLMG1032', name: 'Redes de Datos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'ticg1018', code: 'TICG1018', name: 'Sistema de Bases de Datos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1043'], period: '200 - I' },
      { id: 'idig1008', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007'], period: '200 - I' },

      // NIVEL 200 - II
      { id: 'matg1050', code: 'MATG1050', name: 'Ecuaciones Diferenciales', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1049'], period: '200 - II' },
      { id: 'estg1034', code: 'ESTG1034', name: 'Estadística', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1046', 'ccpg1043'], period: '200 - II' },
      { id: 'eyag1044', code: 'EYAG1044', name: 'Sistemas Digitales I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['fisg1006'], period: '200 - II' },
      { id: 'eleg1034', code: 'ELEG1034', name: 'Electricidad Básica', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['fisg1006'], period: '200 - II' },
      { id: 'tlmg1030', code: 'TLMG1030', name: 'Internetworking', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['tlmg1032'], period: '200 - II' },
      { id: 'idig1009', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008'], period: '200 - II' },

      // NIVEL 300 - I
      { id: 'admg1005', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'ccpg1051', code: 'CCPG1051', name: 'Programación de Sistemas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1052'], period: '300 - I' },
      { id: 'eyag1046', code: 'EYAG1046', name: 'Sistemas Embebidos', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['eyag1044'], period: '300 - I' },
      { id: 'eyag1034', code: 'EYAG1034', name: 'Electrónica', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['eleg1034'], period: '300 - I' },
      { id: 'tlmg1022', code: 'TLMG1022', name: 'Administración de Sistemas y Servicios en Red', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['tlmg1036'], period: '300 - I' },
      { id: 'idig1010', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009'], period: '300 - I' },

      // NIVEL 300 - II
      { id: 'adsg1026', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'tlmg1028', code: 'TLMG1028', name: 'Evaluación y Simulación de Redes', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['estg1034', 'tlmg1030'], period: '300 - II' },
      { id: 'tlmg1033', code: 'TLMG1033', name: 'Redes Inalámbricas y de Sensores', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['tlmg1032'], period: '300 - II' },
      { id: 'tlmg1026', code: 'TLMG1026', name: 'Ciberseguridad y Gestión de Redes', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['tlmg1022'], period: '300 - II' },
      { id: 'tlmg1034', code: 'TLMG1034', name: 'Sistemas en la Nube', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['tlmg1022'], period: '300 - II' },
      { id: 'psc_tm', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // NIVEL 400 - I
      { id: 'tlmg1035', code: 'TLMG1035', name: 'Telemetría y Sistemas Ciberfísicos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['tlmg1033', 'ccpg1051'], period: '400 - I' },
      { id: 'tlmg1027', code: 'TLMG1027', name: 'Comunicación Digital de Datos', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['tlmg1028', 'matg1050'], period: '400 - I' },
      { id: 'ccpg1055', code: 'CCPG1055', name: 'Sistemas Distribuidos y Computación en la Nube', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ccpg1051', 'tlmg1032'], period: '400 - I' },
      { id: 'tlmg1025', code: 'TLMG1025', name: 'Calidad de Servicio y Redes Multimedia', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['tlmg1030'], period: '400 - I' },
      { id: 'tlmg1029', code: 'TLMG1029', name: 'Gestión de Infraestructura y Servicios TI', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['tlmg1022'], period: '400 - I' },
      { id: 'itin1_tm', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // NIVEL 400 - II
      { id: 'tlmg1031', code: 'TLMG1031', name: 'Materia Integradora de Telemática', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 39, period: '400 - II' },
      { id: 'itin2_tm', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // NIVEL 500 - I
      { id: 'ppp_tm', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // COMPLEMENTARIAS
      { id: 'comp1_tm', code: 'COMP1', name: 'Materia Complementaria 1', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_tm', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp3_tm', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true },
    ]
  },
  {
    id: 'biol',
    name: 'Biología',
    facultyId: 'fcv',
    subjects: [
      // Nivel 100 - I
      { id: 'matg1045', code: 'MATG1045', name: 'Cálculo de una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'fisg2002', code: 'FISG2002', name: 'Física General', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'indg1033', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'quig1032', code: 'QUIG1032', name: 'Química General', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'idig1006', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // Nivel 100 - II
      { id: 'matg1047', code: 'MATG1047', name: 'Cálculo de Varias Variables', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'ccpg1043', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045'], period: '100 - II' },
      { id: 'quig1035', code: 'QUIG1035', name: 'Química Orgánica', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['quig1032'], period: '100 - II' },
      { id: 'biog1022', code: 'BIOG1022', name: 'Biología General', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['quig1032'], period: '100 - II' },
      { id: 'medg1017', code: 'MEDG1017', name: 'Botánica General', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], corequisites: ['biog1022'], period: '100 - II' },
      { id: 'idig1007', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006'], period: '100 - II' },

      // Nivel 200 - I
      { id: 'estg1034', code: 'ESTG1034', name: 'Estadística', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1047', 'ccpg1043'], period: '200 - I' },
      { id: 'idig2012', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'biog1024', code: 'BIOG1024', name: 'Bioquímica', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['quig1035'], period: '200 - I' },
      { id: 'biog1021', code: 'BIOG1021', name: 'Biología Celular y Molecular', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['biog1022'], period: '200 - I' },
      { id: 'medg1026', code: 'MEDG1026', name: 'Zoología de Invertebrados', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['biog1022'], period: '200 - I' },
      { id: 'medg1018', code: 'MEDG1018', name: 'Botánica Sistemática', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['medg1017'], period: '200 - I' },
      { id: 'idig1008', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007'], period: '200 - I' },

      // Nivel 200 - II
      { id: 'biog1026', code: 'BIOG1026', name: 'Investigación en Ciencias de la Vida', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], period: '200 - II' },
      { id: 'adsg1026', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['adsg1022'], minApprovedSubjects: 20, period: '200 - II' },
      { id: 'adsg1022', code: 'ADSG1022', name: 'Ecología General', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['biog1022'], period: '200 - II' },
      { id: 'biog1028', code: 'BIOG1028', name: 'Microbiología General', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['biog1021'], period: '200 - II' },
      { id: 'medg1020', code: 'MEDG1020', name: 'Entomología', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['medg1026'], period: '200 - II' },
      { id: 'medg1025', code: 'MEDG1025', name: 'Zoología de Vertebrados', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['medg1026'], period: '200 - II' },
      { id: 'idig1009', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008'], period: '200 - II' },

      // Nivel 300 - I
      { id: 'admg1005', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'estg1063', code: 'ESTG1063', name: 'Bioestadística', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['estg1034'], period: '300 - I' },
      { id: 'adsg1021', code: 'ADSG1021', name: 'Ecología de Ecosistemas', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['adsg1022'], period: '300 - I' },
      { id: 'medg1023', code: 'MEDG1023', name: 'Genética', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['biog1028'], period: '300 - I' },
      { id: 'medg1019', code: 'MEDG1019', name: 'Embriología', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['medg1025', 'biog1028'], period: '300 - I' },
      { id: 'agrg1027', code: 'AGRG1027', name: 'Fisiología Vegetal', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['medg1018', 'biog1024'], period: '300 - I' },
      { id: 'idig1010', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009'], period: '300 - I' },

      // Nivel 300 - II
      { id: 'adsg1019', code: 'ADSG1019', name: 'Contaminación Ambiental', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['adsg1021'], period: '300 - II' },
      { id: 'biog1030', code: 'BIOG1030', name: 'Bioinformática', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['estg1063', 'medg1023'], period: '300 - II' },
      { id: 'adsg1020', code: 'ADSG1020', name: 'Ecología Acuática', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['adsg1021'], period: '300 - II' },
      { id: 'medg1021', code: 'MEDG1021', name: 'Evolución', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['medg1023'], period: '300 - II' },
      { id: 'biog1029', code: 'BIOG1029', name: 'Virología', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['medg1019'], period: '300 - II' },
      { id: 'psc_biol', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // Nivel 400 - I
      { id: 'biog1025', code: 'BIOG1025', name: 'Introducción a las Herramientas Ómicas', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['biog1030'], period: '400 - I' },
      { id: 'adsg1024', code: 'ADSG1024', name: 'Principios de Ecotoxicología', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['adsg1020'], period: '400 - I' },
      { id: 'medg1015', code: 'MEDG1015', name: 'Biogeografía', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['medg1021'], period: '400 - I' },
      { id: 'medg1024', code: 'MEDG1024', name: 'Inmunología', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['biog1029'], period: '400 - I' },
      { id: 'biog1023', code: 'BIOG1023', name: 'Fisiología Animal', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['medg1019'], period: '400 - I' },
      { id: 'itin1_biol', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // Nivel 400 - II
      { id: 'adsg1023', code: 'ADSG1023', name: 'Remediación Ambiental', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['adsg1024'], period: '400 - II' },
      { id: 'biog1027', code: 'BIOG1027', name: 'Materia Integradora de Biología', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 44, period: '400 - II' },
      { id: 'itin2_biol', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // Nivel 500
      { id: 'ppp_biol', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // Complementarias
      { id: 'comp1_biol', code: 'COMP1', name: 'Complementaria de Artes, Deportes e Idiomas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_biol', code: 'COMP2', name: 'Complementaria de Humanísticas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true }
    ]
  },
  {
    id: 'agbi',
    name: 'Ingeniería Agrícola y Biológica',
    facultyId: 'fcv',
    subjects: [
      // Nivel 100 - I
      { id: 'matg1045_ag', code: 'MATG1045', name: 'Cálculo de una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'fisg2002_ag', code: 'FISG2002', name: 'Física General', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'indg1033_ag', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'quig1032_ag', code: 'QUIG1032', name: 'Química General', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'idig1006_ag', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // Nivel 100 - II
      { id: 'matg1047_ag', code: 'MATG1047', name: 'Cálculo de Varias Variables', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045_ag'], period: '100 - II' },
      { id: 'ccpg1043_ag', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045_ag'], period: '100 - II' },
      { id: 'agrg1027_ag', code: 'AGRG1027', name: 'Fisiología Vegetal', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['fisg2002_ag'], period: '100 - II' },
      { id: 'biog1022_ag', code: 'BIOG1022', name: 'Biología General', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['quig1032_ag'], period: '100 - II' },
      { id: 'quig1035_ag', code: 'QUIG1035', name: 'Química Orgánica', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['quig1032_ag'], period: '100 - II' },
      { id: 'idig1007_ag', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006_ag'], period: '100 - II' },

      // Nivel 200 - I
      { id: 'estg1034_ag', code: 'ESTG1034', name: 'Estadística', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1047_ag', 'ccpg1043_ag'], period: '200 - I' },
      { id: 'agrg1041', code: 'AGRG1041', name: 'Semilleros y Viveros', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['agrg1027_ag'], corequisites: ['medg1017_ag'], period: '200 - I' },
      { id: 'medg1017_ag', code: 'MEDG1017', name: 'Botánica General', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['agrg1027_ag'], period: '200 - I' },
      { id: 'biog1021_ag', code: 'BIOG1021', name: 'Biología Celular y Molecular', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['biog1022_ag'], period: '200 - I' },
      { id: 'biog1024_ag', code: 'BIOG1024', name: 'Bioquímica', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['quig1035_ag'], period: '200 - I' },
      { id: 'idig2012_ag', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'idig1008_ag', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007_ag'], period: '200 - I' },

      // Nivel 200 - II
      { id: 'estg1063_ag', code: 'ESTG1063', name: 'Bioestadística', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['estg1034_ag'], period: '200 - II' },
      { id: 'agrg1025', code: 'AGRG1025', name: 'Diagnóstico y Protección Vegetal I', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['agrg1041'], period: '200 - II' },
      { id: 'agrg1032', code: 'AGRG1032', name: 'Producción Vegetal I', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['agrg1025'], corequisites: ['agrg1025'], period: '200 - II' },
      { id: 'biog1028_ag', code: 'BIOG1028', name: 'Microbiología General', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['biog1021_ag'], period: '200 - II' },
      { id: 'agrg1026', code: 'AGRG1026', name: 'Edafología', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['biog1024_ag'], period: '200 - II' },
      { id: 'idig1009_ag', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008_ag'], period: '200 - II' },

      // Nivel 300 - I
      { id: 'admg1005_ag', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'agrg1024', code: 'AGRG1024', name: 'Diagnóstico y Protección Vegetal II', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['agrg1025'], period: '300 - I' },
      { id: 'agrg1033', code: 'AGRG1033', name: 'Producción Vegetal II', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['agrg1032'], corequisites: ['agrg1024'], period: '300 - I' },
      { id: 'medg1023_ag', code: 'MEDG1023', name: 'Genética', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['biog1028_ag'], period: '300 - I' },
      { id: 'agrg1039', code: 'AGRG1039', name: 'Producción Pecuaria I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['quig1032_ag'], period: '300 - I' }, // Asumiendo BIOG1032 era typo por QUIG1032 o similar, ajustado a QUIG1032 por ahora
      { id: 'agrg1037', code: 'AGRG1037', name: 'Nutrición Vegetal', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['agrg1026'], period: '300 - I' },
      { id: 'idig1010_ag', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009_ag'], period: '300 - I' },

      // Nivel 300 - II
      { id: 'adsg1026_ag', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'ccag1002', code: 'CCAG1002', name: 'Extensionismo', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['agrg1033'], period: '300 - II' },
      { id: 'agrg1035', code: 'AGRG1035', name: 'Riego y Drenaje', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['agrg1033'], period: '300 - II' },
      { id: 'medg1022', code: 'MEDG1022', name: 'Genotecnia', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['medg1023_ag', 'estg1063_ag'], period: '300 - II' },
      { id: 'agrg1038', code: 'AGRG1038', name: 'Producción Pecuaria II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['agrg1039'], period: '300 - II' },
      { id: 'psc_ag', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // Nivel 400 - I
      { id: 'agrg1028', code: 'AGRG1028', name: 'Gestión de Unidades de Producción Agropecuaria', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ccag1002'], period: '400 - I' },
      { id: 'ecog1008', code: 'ECOG1008', name: 'Proyectos Agrícolas', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['ccag1002'], period: '400 - I' }, // Asumiendo CCAG1008 era CCAG1002
      { id: 'agrg1040', code: 'AGRG1040', name: 'Producción Vegetal III', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['agrg1035'], period: '400 - I' },
      { id: 'agrg1030', code: 'AGRG1030', name: 'Mecanización Agrícola', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['agrg1035'], period: '400 - I' },
      { id: 'agrg1022', code: 'AGRG1022', name: 'Agricultura de Precisión', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['agrg1038'], period: '400 - I' },
      { id: 'agrg1036', code: 'AGRG1036', name: 'Silvicultura', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['agrg1037'], period: '400 - I' },
      { id: 'itin1_ag', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // Nivel 400 - II
      { id: 'agrg1029', code: 'AGRG1029', name: 'Materia Integradora de Ingeniería Agrícola y Biológica', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 44, period: '400 - II' },
      { id: 'agrg1023', code: 'AGRG1023', name: 'Agroecosistemas', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['agrg1036'], period: '400 - II' },
      { id: 'itin2_ag', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // Nivel 500
      { id: 'ppp_ag', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // Complementarias
      { id: 'comp1_ag', code: 'COMP1', name: 'Complementaria de Artes, Deportes e Idiomas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_ag', code: 'COMP2', name: 'Complementaria de Humanísticas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true }
    ]
  },
  {
    id: 'nudi',
    name: 'Nutrición y Dietética',
    facultyId: 'fcv',
    subjects: [
      // Nivel 100 - I
      { id: 'quig1032_nu', code: 'QUIG1032', name: 'Química General', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'indg1033_nu', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'matg2007', code: 'MATG2007', name: 'Matemáticas', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'medg2012', code: 'MEDG2012', name: 'Antropología Nutricional', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: [], period: '100 - I' },
      { id: 'nutg2043', code: 'NUTG2043', name: 'Técnicas Culinarias', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },
      { id: 'idig1006_nu', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // Nivel 100 - II
      { id: 'biog1022_nu', code: 'BIOG1022', name: 'Biología General', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['quig1032_nu'], period: '100 - II' },
      { id: 'quig1035_nu', code: 'QUIG1035', name: 'Química Orgánica', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], corequisites: ['biog1022_nu'], period: '100 - II' },
      { id: 'ccpg1043_nu', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg2007'], period: '100 - II' },
      { id: 'medg2018', code: 'MEDG2018', name: 'Morfofisiología Humana I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['medg2012'], period: '100 - II' },
      { id: 'medg2017', code: 'MEDG2017', name: 'Legislación y Soberanía Alimentaria', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['nutg2043'], period: '100 - II' },
      { id: 'idig2012_nu', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '100 - II' },
      { id: 'idig1007_nu', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006_nu'], period: '100 - II' },

      // Nivel 200 - I
      { id: 'biog1024_nu', code: 'BIOG1024', name: 'Bioquímica', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['biog1022_nu'], period: '200 - I' },
      { id: 'medg2013', code: 'MEDG2013', name: 'Análisis Nutricional de los Alimentos', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['quig1035_nu'], period: '200 - I' },
      { id: 'estg2004', code: 'ESTG2004', name: 'Estadística', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['ccpg1043_nu'], period: '200 - I' },
      { id: 'biog1021_nu', code: 'BIOG1021', name: 'Biología Celular y Molecular', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['quig1035_nu'], period: '200 - I' }, // Asumiendo BIOG1035 era QUIG1035
      { id: 'medg2019', code: 'MEDG2019', name: 'Morfofisiología Humana II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['medg2018'], period: '200 - I' },
      { id: 'idig1008_nu', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007_nu'], period: '200 - I' },

      // Nivel 200 - II
      { id: 'nutg2041', code: 'NUTG2041', name: 'Nutrición Humana y Metabolismo', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['biog1024_nu', 'medg2019'], period: '200 - II' },
      { id: 'nutg2042', code: 'NUTG2042', name: 'Técnicas Dietéticas', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['medg2013'], period: '200 - II' },
      { id: 'estg1063_nu', code: 'ESTG1063', name: 'Bioestadística', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['estg2004'], period: '200 - II' },
      { id: 'biog1028_nu', code: 'BIOG1028', name: 'Microbiología General', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['biog1021_nu'], period: '200 - II' },
      { id: 'biog1026_nu', code: 'BIOG1026', name: 'Investigación en Ciencias de la Vida', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], period: '200 - II' },
      { id: 'nutg2026', code: 'NUTG2026', name: 'Bioética', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['biog1026_nu'], period: '200 - II' },
      { id: 'idig1009_nu', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008_nu'], period: '200 - II' },

      // Nivel 300 - I
      { id: 'medg2016', code: 'MEDG2016', name: 'Farmacología y Nutrición', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['nutg2041'], period: '300 - I' },
      { id: 'nutg2036', code: 'NUTG2036', name: 'Nutrición en el Ciclo de la Vida I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['nutg2041'], period: '300 - I' },
      { id: 'nutg2029', code: 'NUTG2029', name: 'Evaluación del Estado Nutricional I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['nutg2042'], corequisites: ['nutg2036'], period: '300 - I' },
      { id: 'medg2015', code: 'MEDG2015', name: 'Epidemiología y Salud Pública', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['estg1063_nu'], period: '300 - I' },
      { id: 'admg1005_nu', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'idig1010_nu', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009_nu'], period: '300 - I' },

      // Nivel 300 - II
      { id: 'nutg2032', code: 'NUTG2032', name: 'Nutrición Clínica I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['medg2016'], corequisites: ['nutg2028'], period: '300 - II' },
      { id: 'nutg2037', code: 'NUTG2037', name: 'Nutrición en el Ciclo de la Vida II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['nutg2036'], period: '300 - II' },
      { id: 'nutg2030', code: 'NUTG2030', name: 'Evaluación del Estado Nutricional II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['nutg2029'], period: '300 - II' },
      { id: 'nutg2028', code: 'NUTG2028', name: 'Dietoterapia Básica', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['nutg2029'], period: '300 - II' },
      { id: 'medg2020', code: 'MEDG2020', name: 'Salud Comunitaria', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['medg2015'], period: '300 - II' },
      { id: 'adsg1026_nu', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },

      // Nivel 400 - I
      { id: 'nutg2033', code: 'NUTG2033', name: 'Nutrición Clínica II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['nutg2032'], period: '400 - I' },
      { id: 'nutg2040', code: 'NUTG2040', name: 'Toxicología Nutricional y Alimentaria', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['nutg2037'], period: '400 - I' },
      { id: 'nutg2035', code: 'NUTG2035', name: 'Nutrición Deportiva', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['nutg2030'], period: '400 - I' },
      { id: 'nutg2027', code: 'NUTG2027', name: 'Dietoterapia Avanzada', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['nutg2028'], period: '400 - I' },
      { id: 'nutg2039', code: 'NUTG2039', name: 'Servicios de Alimentación', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['nutg2028'], period: '400 - I' },
      { id: 'medg2014', code: 'MEDG2014', name: 'Consejería Nutricional', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['medg2020'], period: '400 - I' },
      { id: 'nutg2038', code: 'NUTG2038', name: 'Tendencias en Nutrición', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: [], corequisites: ['medg2014'], period: '400 - I' },

      // Nivel 400 - II
      { id: 'nutg2034', code: 'NUTG2034', name: 'Nutrición Clínica III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['nutg2033'], period: '400 - II' },
      { id: 'int_nu', code: 'INT', name: 'Internado Rotativo', credits: 0, hoursTotal: 0, prerequisites: [], period: '400 - II' }, // Asumiendo 0 créditos/horas por falta de datos
      { id: 'nutg2031', code: 'NUTG2031', name: 'Materia Integradora de Nutrición y Dietética', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 44, period: '400 - II' },

      // Complementarias
      { id: 'comp1_nu', code: 'COMP1', name: 'Complementaria de Artes, Deportes e Idiomas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_nu', code: 'COMP2', name: 'Complementaria de Humanísticas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp3_nu', code: 'COMP3', name: 'Complementaria de Humanísticas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true }
    ]
  },
  {
    id: 'dipr',
    name: 'Diseño de Productos',
    facultyId: 'fadcom',
    subjects: [
      // Nivel 100 - I
      { id: 'artg2024_dp', code: 'ARTG2024', name: 'Arte y Tecnología', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },
      { id: 'indg1033_dp', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'matg2009_dp', code: 'MATG2009', name: 'Matemáticas', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'artg2025_dp', code: 'ARTG2025', name: 'Dibujo I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'idig1006_dp', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // Nivel 100 - II
      { id: 'ding2031', code: 'DING2031', name: 'Historia del Diseño Industrial', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['artg2024_dp'], period: '100 - II' },
      { id: 'ding2043', code: 'DING2043', name: 'Teoría del Diseño', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['artg2024_dp'], period: '100 - II' },
      { id: 'fisg2002_dp', code: 'FISG2002', name: 'Física General', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg2009_dp'], period: '100 - II' },
      { id: 'ccpg1043_dp', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg2009_dp'], period: '100 - II' },
      { id: 'artg2026_dp', code: 'ARTG2026', name: 'Dibujo II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['artg2025_dp'], period: '100 - II' },
      { id: 'idig1007_dp', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006_dp'], period: '100 - II' },

      // Nivel 200 - I
      { id: 'ding2023', code: 'DING2023', name: 'Diseño de Productos I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ding2031', 'ding2043'], period: '200 - I' },
      { id: 'ding2039', code: 'DING2039', name: 'Taller de Diseño I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ding2043'], period: '200 - I' },
      { id: 'ding2033', code: 'DING2033', name: 'Materiales y Manufactura I', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['fisg2002_dp'], period: '200 - I' },
      { id: 'ding2029', code: 'DING2029', name: 'Estructuras y Mecanismos I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['fisg2002_dp'], period: '200 - I' },
      { id: 'estg2004_dp', code: 'ESTG2004', name: 'Estadística', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['ccpg1043_dp'], period: '200 - I' },
      { id: 'idig1008_dp', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007_dp'], period: '200 - I' },

      // Nivel 200 - II
      { id: 'idig2012_dp', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - II' },
      { id: 'ding2024', code: 'DING2024', name: 'Diseño de Productos II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ding2023', 'ding2029'], period: '200 - II' },
      { id: 'ding2040', code: 'DING2040', name: 'Taller de Diseño II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ding2039', 'ding2029'], period: '200 - II' },
      { id: 'ding2034', code: 'DING2034', name: 'Materiales y Manufactura II', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['ding2033'], period: '200 - II' },
      { id: 'admg2030', code: 'ADMG2030', name: 'Fundamentos de Marketing', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 15, period: '200 - II' },
      { id: 'ding2027', code: 'DING2027', name: 'Diseño Digital', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['artg2026_dp'], period: '200 - II' },
      { id: 'idig1009_dp', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008_dp'], period: '200 - II' },

      // Nivel 300 - I
      { id: 'admg1005_dp', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'ding2028', code: 'DING2028', name: 'Ergonomía', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['ding2024', 'ding2040'], period: '300 - I' },
      { id: 'ding2041', code: 'DING2041', name: 'Taller de Diseño III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ding2040', 'ding2034'], period: '300 - I' },
      { id: 'ding2030', code: 'DING2030', name: 'Estructuras y Mecanismos II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ding2029', 'ding2027'], period: '300 - I' },
      { id: 'ding2036', code: 'DING2036', name: 'Modelado Tridimensional', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['ding2027'], period: '300 - I' },
      { id: 'idig1010_dp', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009_dp'], period: '300 - I' },

      // Nivel 300 - II
      { id: 'adsg1026_dp', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'ding2025', code: 'DING2025', name: 'Diseño de Productos III', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ding2028', 'ding2041'], period: '300 - II' },
      { id: 'ding2042', code: 'DING2042', name: 'Taller de Diseño IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ding2041'], period: '300 - II' },
      { id: 'ding2035', code: 'DING2035', name: 'Materiales y Manufactura III', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ding2030', 'ding2034'], period: '300 - II' },
      { id: 'digg2041_dp', code: 'DIGG2041', name: 'Investigación Aplicada al Diseño', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['estg2004_dp'], period: '300 - II' },
      { id: 'psc_dp', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // Nivel 400 - I
      { id: 'ding2026', code: 'DING2026', name: 'Diseño de Productos IV', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['ding2025'], period: '400 - I' },
      { id: 'ding2037', code: 'DING2037', name: 'Portafolio', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 25, period: '400 - I' },
      { id: 'ding2038', code: 'DING2038', name: 'Prototipado Avanzado', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ding2035', 'ding2036'], period: '400 - I' },
      { id: 'digg2028_dp', code: 'DIGG2028', name: 'Diseño Estratégico', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], corequisites: ['ecog2041_dp'], period: '400 - I' },
      { id: 'ecog2041_dp', code: 'ECOG2041', name: 'Gestión del Diseño', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['digg2041_dp'], period: '400 - I' },
      { id: 'itin1_dp', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // Nivel 400 - II
      { id: 'ding2032', code: 'DING2032', name: 'Materia Integradora de Diseño de Productos', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 41, period: '400 - II' },
      { id: 'itin2_dp', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // Nivel 500
      { id: 'ppp_dp', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // Complementarias
      { id: 'comp1_dp', code: 'COMP1', name: 'Complementaria de Artes, Deportes e Idiomas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_dp', code: 'COMP2', name: 'Complementaria de Humanísticas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true }
    ]
  },
  {
    id: 'digr',
    name: 'Diseño Gráfico',
    facultyId: 'fadcom',
    subjects: [
      // Nivel 100 - I
      { id: 'artg2024_dg', code: 'ARTG2024', name: 'Arte y Tecnología', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },
      { id: 'artg2025_dg', code: 'ARTG2025', name: 'Dibujo I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'indg1033_dg', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'matg2009_dg', code: 'MATG2009', name: 'Matemáticas', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'idig1006_dg', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // Nivel 100 - II
      { id: 'artg2028_dg', code: 'ARTG2028', name: 'Historia del Arte', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['artg2024_dg'], period: '100 - II' },
      { id: 'artg2026_dg', code: 'ARTG2026', name: 'Dibujo II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['artg2025_dg'], period: '100 - II' },
      { id: 'artg2023_dg', code: 'ARTG2023', name: 'Arte y Ciencia', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - II' },
      { id: 'ccpg1043_dg', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg2009_dg'], period: '100 - II' },
      { id: 'idig1007_dg', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006_dg'], period: '100 - II' },

      // Nivel 200 - I
      { id: 'idig2012_dg', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'digg2033', code: 'DIGG2033', name: 'Historia del Diseño', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['artg2028_dg'], period: '200 - I' },
      { id: 'artg2033', code: 'ARTG2033', name: 'Técnicas Pictóricas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['artg2026_dg'], period: '200 - I' },
      { id: 'comg2002_dg', code: 'COMG2002', name: 'Teoría de la Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['artg2023_dg'], period: '200 - I' },
      { id: 'estg2004_dg', code: 'ESTG2004', name: 'Estadística', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['ccpg1043_dg'], period: '200 - I' },
      { id: 'idig1008_dg', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007_dg'], period: '200 - I' },

      // Nivel 200 - II
      { id: 'digg2036', code: 'DIGG2036', name: 'Tipografía', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['digg2033'], period: '200 - II' },
      { id: 'digg2029', code: 'DIGG2029', name: 'Diseño Gráfico I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['digg2033'], period: '200 - II' },
      { id: 'artg2032', code: 'ARTG2032', name: 'Taller de Ilustración', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['artg2033'], period: '200 - II' },
      { id: 'digg2040', code: 'DIGG2040', name: 'Antropología del Diseño', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['comg2002_dg'], corequisites: ['digg2040'], period: '200 - II' }, // CO-R a sí misma en el txt, lo dejo así
      { id: 'digg2039_dg', code: 'DIGG2039', name: 'Redacción Creativa', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['comg2002_dg'], period: '200 - II' },
      { id: 'idig1009_dg', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008_dg'], period: '200 - II' },

      // Nivel 300 - I
      { id: 'admg1005_dg', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'digg2030', code: 'DIGG2030', name: 'Diseño Gráfico II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['digg2029', 'digg2036'], period: '300 - I' },
      { id: 'ccag2021', code: 'CCAG2021', name: 'Semiótica', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['digg2040'], period: '300 - I' },
      { id: 'cadg2045_dg', code: 'CADG2045', name: 'Fotografía Digital', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], corequisites: ['ccag2021'], period: '300 - I' },
      { id: 'digg2041_dg', code: 'DIGG2041', name: 'Investigación Aplicada al Diseño', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['estg2004_dg'], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'idig1010_dg', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009_dg'], period: '300 - I' },

      // Nivel 300 - II
      { id: 'digg2037', code: 'DIGG2037', name: 'Técnicas de Impresión', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['digg2030'], period: '300 - II' },
      { id: 'digg2031', code: 'DIGG2031', name: 'Diseño Gráfico III', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['digg2030'], period: '300 - II' },
      { id: 'digg2027', code: 'DIGG2027', name: 'Diseño Editorial', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['digg2030', 'artg2032'], period: '300 - II' },
      { id: 'digg2023_dg', code: 'DIGG2023', name: 'Dirección de Arte', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['cadg2045_dg'], period: '300 - II' },
      { id: 'digg2026', code: 'DIGG2026', name: 'Diseño de Marca', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['digg2041_dg'], period: '300 - II' },
      { id: 'adsg1026_dg', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'psc_dg', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // Nivel 400 - I
      { id: 'digg2025', code: 'DIGG2025', name: 'Diseño de Información', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['digg2037'], period: '400 - I' },
      { id: 'digg2032', code: 'DIGG2032', name: 'Diseño Gráfico IV', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['digg2031', 'digg2026'], period: '400 - I' },
      { id: 'digg2035', code: 'DIGG2035', name: 'Proyecto de Diseño', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['digg2023_dg', 'digg2031'], period: '400 - I' },
      { id: 'ecog2041_dg', code: 'ECOG2041', name: 'Gestión del Diseño', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['digg2023_dg'], period: '400 - I' },
      { id: 'digg2028_dg', code: 'DIGG2028', name: 'Diseño Estratégico', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], corequisites: ['ecog2041_dg'], period: '400 - I' },
      { id: 'itin1_dg', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // Nivel 400 - II
      { id: 'digg2034', code: 'DIGG2034', name: 'Materia Integradora de Diseño Gráfico', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 40, period: '400 - II' },
      { id: 'itin2_dg', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // Nivel 500
      { id: 'ppp_dg', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // Complementarias
      { id: 'comp1_dg', code: 'COMP1', name: 'Complementaria de Artes, Deportes e Idiomas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_dg', code: 'COMP2', name: 'Complementaria de Humanísticas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true }
    ]
  },
  {
    id: 'prmc',
    name: 'Producción para Medios Audiovisuales',
    facultyId: 'fadcom',
    subjects: [
      // Nivel 100 - I
      { id: 'artg2024_pm', code: 'ARTG2024', name: 'Arte y Tecnología', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },
      { id: 'matg2009_pm', code: 'MATG2009', name: 'Matemáticas', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'indg1033_pm', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'artg2025_pm', code: 'ARTG2025', name: 'Dibujo I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'idig1006_pm', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // Nivel 100 - II
      { id: 'artg2028_pm', code: 'ARTG2028', name: 'Historia del Arte', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['artg2024_pm'], period: '100 - II' },
      { id: 'ccpg1043_pm', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg2009_pm'], period: '100 - II' },
      { id: 'artg2023_pm', code: 'ARTG2023', name: 'Arte y Ciencia', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - II' },
      { id: 'artg2026_pm', code: 'ARTG2026', name: 'Dibujo II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['artg2025_pm'], period: '100 - II' },
      { id: 'idig1007_pm', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006_pm'], period: '100 - II' },

      // Nivel 200 - I
      { id: 'comg2002_pm', code: 'COMG2002', name: 'Teoría de la Comunicación', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['artg2028_pm'], period: '200 - I' },
      { id: 'artg2030', code: 'ARTG2030', name: 'Investigación Audiovisual', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['artg2028_pm'], corequisites: ['estg2004_pm'], period: '200 - I' },
      { id: 'estg2004_pm', code: 'ESTG2004', name: 'Estadística', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['ccpg1043_pm'], period: '200 - I' },
      { id: 'artg2029', code: 'ARTG2029', name: 'Historia del Cine', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['artg2023_pm'], period: '200 - I' },
      { id: 'cadg2036', code: 'CADG2036', name: 'Preproducción', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['artg2026_pm'], period: '200 - I' },
      { id: 'idig1008_pm', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007_pm'], period: '200 - I' },

      // Nivel 200 - II
      { id: 'cadg2034', code: 'CADG2034', name: 'Narrativa Audiovisual', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['comg2002_pm'], period: '200 - II' },
      { id: 'digg2039_pm', code: 'DIGG2039', name: 'Redacción Creativa', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['artg2030'], corequisites: ['cadg2034'], period: '200 - II' },
      { id: 'idig2012_pm', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - II' },
      { id: 'cadg2031', code: 'CADG2031', name: 'Fotografía para Medios', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['artg2029'], period: '200 - II' },
      { id: 'cadg2029', code: 'CADG2029', name: 'Diseño de Producción', credits: 3, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cadg2036'], period: '200 - II' }, // 3CR pero 2/1/3 = 6h en el txt, mantengo 3CR y 6h
      { id: 'idig1009_pm', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008_pm'], period: '200 - II' },

      // Nivel 300 - I
      { id: 'cadg2030', code: 'CADG2030', name: 'Edición y Montaje', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cadg2034'], period: '300 - I' },
      { id: 'cadg2032', code: 'CADG2032', name: 'Guion', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['digg2039_pm'], period: '300 - I' },
      { id: 'admg1005_pm', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'cadg2046', code: 'CADG2046', name: 'Videografía', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['cadg2031', 'cadg2029'], period: '300 - I' },
      { id: 'cadg2042', code: 'CADG2042', name: 'Diseño de Sonido', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cadg2029'], period: '300 - I' },
      { id: 'idig1010_pm', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009_pm'], period: '300 - I' },

      // Nivel 300 - II
      { id: 'cadg2039', code: 'CADG2039', name: 'Proyecto Audiovisual I', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cadg2030', 'cadg2032'], period: '300 - II' },
      { id: 'cadg2038', code: 'CADG2038', name: 'Producción para Nuevos Medios', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cadg2032'], period: '300 - II' },
      { id: 'adsg1026_pm', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'cadg2025', code: 'CADG2025', name: 'Animación I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['cadg2046'], period: '300 - II' },
      { id: 'cadg2028', code: 'CADG2028', name: 'Dirección Escénica', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cadg2042'], period: '300 - II' },
      { id: 'psc_pm', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 24, period: '300 - II' },

      // Nivel 400 - I
      { id: 'cadg2040', code: 'CADG2040', name: 'Proyecto Audiovisual II', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cadg2039'], period: '400 - I' },
      { id: 'cadg2035', code: 'CADG2035', name: 'Postproducción', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cadg2038'], corequisites: ['cadg2040'], period: '400 - I' },
      { id: 'cadg2037', code: 'CADG2037', name: 'Producción Ejecutiva', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cadg2038'], period: '400 - I' },
      { id: 'cadg2026', code: 'CADG2026', name: 'Animación II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['cadg2025'], period: '400 - I' },
      { id: 'cadg2027', code: 'CADG2027', name: 'Dirección Audiovisual', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['cadg2028'], period: '400 - I' },
      { id: 'itin1_pm', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // Nivel 400 - II
      { id: 'cadg2033', code: 'CADG2033', name: 'Legislación Audiovisual', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['cadg2037'], period: '400 - II' },
      { id: 'cadg2043', code: 'CADG2043', name: 'Materia Integradora de Producción para Medios de Comunicación', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 40, period: '400 - II' },
      { id: 'itin2_pm', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // Nivel 500
      { id: 'ppp_pm', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // Complementarias
      { id: 'comp1_pm', code: 'COMP1', name: 'Complementaria de Artes, Deportes e Idiomas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_pm', code: 'COMP2', name: 'Complementaria de Humanísticas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true }
    ]
  },
  { id: 'alim', name: 'Alimentos', facultyId: 'fimcp', subjects: [] },
  { id: 'indu', name: 'Industrial', facultyId: 'fimcp', subjects: [] },
  { id: 'mate', name: 'Materiales', facultyId: 'fimcp', subjects: [] },
  { id: 'meca', name: 'Mecánica', facultyId: 'fimcp', subjects: [] },
  { id: 'mect', name: 'Mecatrónica', facultyId: 'fimcp', subjects: [] },
  {
    id: 'acui',
    name: 'Acuicultura',
    facultyId: 'fimcm',
    subjects: [
      // Nivel 100 - I
      { id: 'matg1045_ac', code: 'MATG1045', name: 'Cálculo de una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'fisg1005_ac', code: 'FISG1005', name: 'Física: Mecánica', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'indg1033_ac', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'quig1032_ac', code: 'QUIG1032', name: 'Química General', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'idig1006_ac', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // Nivel 100 - II
      { id: 'matg1047_ac', code: 'MATG1047', name: 'Cálculo de Varias Variables', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045_ac'], period: '100 - II' },
      { id: 'ccpg1043_ac', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045_ac'], period: '100 - II' },
      { id: 'acug1055', code: 'ACUG1055', name: 'Problemas de la Actualidad Acuícola', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['indg1033_ac'], period: '100 - II' },
      { id: 'biog1022_ac', code: 'BIOG1022', name: 'Biología General', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['quig1032_ac'], period: '100 - II' },
      { id: 'quig1035_ac', code: 'QUIG1035', name: 'Química Orgánica', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['quig1032_ac'], period: '100 - II' },
      { id: 'idig1007_ac', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006_ac'], period: '100 - II' },

      // Nivel 200 - I
      { id: 'idig2012_ac', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'estg1034_ac', code: 'ESTG1034', name: 'Estadística', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1047_ac', 'ccpg1043_ac'], period: '200 - I' },
      { id: 'acug1041', code: 'ACUG1041', name: 'Ecosistemas Acuícolas', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['acug1055'], period: '200 - I' },
      { id: 'acug1054', code: 'ACUG1054', name: 'Introducción a la Acuicultura', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['biog1022_ac'], period: '200 - I' },
      { id: 'biog1024_ac', code: 'BIOG1024', name: 'Bioquímica', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['quig1035_ac'], period: '200 - I' },
      { id: 'idig1008_ac', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007_ac'], period: '200 - I' },

      // Nivel 200 - II
      { id: 'acug1042', code: 'ACUG1042', name: 'Fundamentos de Ingeniería Acuícola', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 15, period: '200 - II' },
      { id: 'acug1036', code: 'ACUG1036', name: 'Análisis de Datos Acuícolas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['estg1034_ac'], period: '200 - II' },
      { id: 'acug1053', code: 'ACUG1053', name: 'Manejo Acuícola', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['acug1041'], period: '200 - II' },
      { id: 'acug1052', code: 'ACUG1052', name: 'Morfología y Fisiología de Organismos Acuícolas', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['acug1054'], period: '200 - II' },
      { id: 'acug1051', code: 'ACUG1051', name: 'Nutrición Acuícola', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['biog1024_ac'], period: '200 - II' },
      { id: 'idig1009_ac', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008_ac'], period: '200 - II' },

      // Nivel 300 - I
      { id: 'acug1050', code: 'ACUG1050', name: 'Ingeniería para la Acuicultura I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['acug1042'], period: '300 - I' },
      { id: 'admg1005_ac', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'acug1059', code: 'ACUG1059', name: 'Buenas Prácticas en Acuicultura', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['acug1053'], period: '300 - I' },
      { id: 'acug1057', code: 'ACUG1057', name: 'Patología Acuícola I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['acug1052'], period: '300 - I' },
      { id: 'idig1010_ac', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009_ac'], period: '300 - I' },

      // Nivel 300 - II
      { id: 'acug1049', code: 'ACUG1049', name: 'Ingeniería para la Acuicultura II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['acug1050'], period: '300 - II' },
      { id: 'acug1048', code: 'ACUG1048', name: 'Sistemas Acuícolas', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['acug1036'], period: '300 - II' },
      { id: 'adsg1026_ac', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'acug1056', code: 'ACUG1056', name: 'Patología Acuícola II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['acug1057'], period: '300 - II' },
      { id: 'acug1040', code: 'ACUG1040', name: 'Cultivo de Plancton', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['acug1051'], period: '300 - II' },
      { id: 'psc_ac', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '300 - II' },

      // Nivel 400 - I
      { id: 'acug1047', code: 'ACUG1047', name: 'Piscicultura', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['acug1049'], period: '400 - I' },
      { id: 'acug1035', code: 'ACUG1035', name: 'Acuicultura Ornamental', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['acug1048'], period: '400 - I' },
      { id: 'acug1039', code: 'ACUG1039', name: 'Cultivo de Especies No Tradicionales', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['adsg1026_ac'], period: '400 - I' }, // ADSG1040 en txt, asumo ADSG1026
      { id: 'acug1043', code: 'ACUG1043', name: 'Herramientas para el Diagnóstico de Enfermedades Acuícolas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['acug1056'], period: '400 - I' },
      { id: 'acug1046', code: 'ACUG1046', name: 'Producción Acuícola I', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['acug1040'], period: '400 - I' },
      { id: 'itin1_ac', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // Nivel 400 - II
      { id: 'acug1058', code: 'ACUG1058', name: 'Materia Integradora de Acuicultura', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 40, period: '400 - II' },
      { id: 'acug1045', code: 'ACUG1045', name: 'Producción Acuícola II', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['acug1046'], period: '400 - II' },
      { id: 'itin2_ac', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // Nivel 500
      { id: 'ppp_ac', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // Complementarias
      { id: 'comp1_ac', code: 'COMP1', name: 'Complementaria de Artes, Deportes e Idiomas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_ac', code: 'COMP2', name: 'Complementaria de Humanísticas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true }
    ]
  },
  {
    id: 'nava',
    name: 'Ingeniería Naval',
    facultyId: 'fimcm',
    subjects: [
      // Nivel 100 - I
      { id: 'matg1045_na', code: 'MATG1045', name: 'Cálculo de una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'fisg1005_na', code: 'FISG1005', name: 'Física: Mecánica', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], corequisites: ['matg1045_na'], period: '100 - I' },
      { id: 'indg1033_na', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'quig1032_na', code: 'QUIG1032', name: 'Química General', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'idig1006_na', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // Nivel 100 - II
      { id: 'matg1046_na', code: 'MATG1046', name: 'Cálculo Vectorial', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045_na'], period: '100 - II' },
      { id: 'fisg1006_na', code: 'FISG1006', name: 'Física: Electricidad y Magnetismo', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['fisg1005_na'], period: '100 - II' },
      { id: 'ccpg1043_na', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045_na'], period: '100 - II' },
      { id: 'idig2012_na', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '100 - II' },
      { id: 'navg1040', code: 'NAVG1040', name: 'Materiales en Medios Marinos', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['quig1032_na'], period: '100 - II' },
      { id: 'idig1007_na', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006_na'], period: '100 - II' },

      // Nivel 200 - I
      { id: 'matg1048_na', code: 'MATG1048', name: 'Ecuaciones Diferenciales y Álgebra Lineal', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1046_na'], period: '200 - I' },
      { id: 'matg1052_na', code: 'MATG1052', name: 'Métodos Numéricos', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['ccpg1043_na', 'matg1048_na'], period: '200 - I' },
      { id: 'estg1034_na', code: 'ESTG1034', name: 'Estadística', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1046_na', 'ccpg1043_na'], period: '200 - I' },
      { id: 'mecg1052_na', code: 'MECG1052', name: 'Mecánica Vectorial', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['fisg1006_na'], period: '200 - I' },
      { id: 'idig1008_na', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007_na'], period: '200 - I' },

      // Nivel 200 - II
      { id: 'mecg1061_na', code: 'MECG1061', name: 'Termodinámica', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['fisg1005_na'], minApprovedSubjects: 15, period: '200 - II' },
      { id: 'navg1032', code: 'NAVG1032', name: 'Formas e Hidrostática del Buque', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1052_na', 'estg1034_na'], period: '200 - II' },
      { id: 'mecg1050_na', code: 'MECG1050', name: 'Mecánica de Sólidos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1052_na'], period: '200 - II' },
      { id: 'adsg1026_na', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 16, period: '200 - II' },
      { id: 'idig1009_na', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008_na'], period: '200 - II' },

      // Nivel 300 - I
      { id: 'navg1039', code: 'NAVG1039', name: 'Maquinaria Marítima I', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['mecg1061_na', 'navg1032'], period: '300 - I' },
      { id: 'navg1030', code: 'NAVG1030', name: 'Estabilidad del Buque', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['navg1032'], period: '300 - I' },
      { id: 'mecg1049_na', code: 'MECG1049', name: 'Mecánica de Fluidos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['fisg1005_na'], minApprovedSubjects: 15, period: '300 - I' },
      { id: 'navg1031', code: 'NAVG1031', name: 'Estructura del Buque', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['mecg1050_na'], period: '300 - I' },
      { id: 'idig1010_na', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009_na'], period: '300 - I' },

      // Nivel 300 - II
      { id: 'navg1037', code: 'NAVG1037', name: 'Maquinaria Marítima II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['navg1039', 'mecg1049_na'], period: '300 - II' },
      { id: 'navg1029', code: 'NAVG1029', name: 'Electricidad y Electrónica para Buques', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'navg1038', code: 'NAVG1038', name: 'Resistencia y Propulsión de Buques', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['mecg1049_na'], period: '300 - II' },
      { id: 'navg1041', code: 'NAVG1041', name: 'Vibraciones Mecánicas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['navg1031'], period: '300 - II' },
      { id: 'navg1042', code: 'NAVG1042', name: 'Elementos Finitos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['navg1031'], period: '300 - II' },
      { id: 'psc_na', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },

      // Nivel 400 - I
      { id: 'navg1025', code: 'NAVG1025', name: 'Construcciones Metálicas de Buques', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['navg1037'], period: '400 - I' },
      { id: 'navg1028', code: 'NAVG1028', name: 'Diseño de Buques', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['navg1029', 'navg1042', 'navg1030'], corequisites: ['navg1025', 'navg1027'], period: '400 - I' },
      { id: 'navg1027', code: 'NAVG1027', name: 'Dinámica del Buque', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['navg1038', 'navg1041', 'navg1030'], period: '400 - I' },
      { id: 'navg1033', code: 'NAVG1033', name: 'Gestión Marítima Portuaria', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 30, period: '400 - I' },
      { id: 'admg1005_na', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '400 - I' },
      { id: 'itin1_na', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - I', isItinerary: true },

      // Nivel 400 - II
      { id: 'navg1034', code: 'NAVG1034', name: 'Materia Integradora de Ingeniería Naval', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['navg1028'], period: '400 - II' },
      { id: 'navg1035', code: 'NAVG1035', name: 'Transporte Marítimo', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['navg1033'], period: '400 - II' },
      { id: 'itin2_na', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // Nivel 500
      { id: 'ppp_na', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - I' },

      // Complementarias
      { id: 'comp1_na', code: 'COMP1', name: 'Complementaria de Artes, Deportes e Idiomas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_na', code: 'COMP2', name: 'Complementaria de Humanísticas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true }
    ]
  },
  {
    id: 'ocea',
    name: 'Oceanografía',
    facultyId: 'fimcm',
    subjects: [
      // Nivel 100 - I
      { id: 'matg1045_oc', code: 'MATG1045', name: 'Cálculo de una Variable', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], period: '100 - I' },
      { id: 'fisg1005_oc', code: 'FISG1005', name: 'Física: Mecánica', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: [], corequisites: ['matg1045_oc'], period: '100 - I' },
      { id: 'quig1032_oc', code: 'QUIG1032', name: 'Química General', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], period: '100 - I' },
      { id: 'indg1033_oc', code: 'INDG1033', name: 'Análisis y Resolución de Problemas', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '100 - I' },
      { id: 'idig1006_oc', code: 'IDIG1006', name: 'Inglés I', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], period: '100 - I' },

      // Nivel 100 - II
      { id: 'matg1046_oc', code: 'MATG1046', name: 'Cálculo Vectorial', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['matg1045_oc'], period: '100 - II' },
      { id: 'ccpg1043_oc', code: 'CCPG1043', name: 'Fundamentos de Programación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1045_oc'], period: '100 - II' },
      { id: 'fisg1009_oc', code: 'FISG1009', name: 'Física: Termodinámica y Óptica', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['fisg1005_oc'], period: '100 - II' },
      { id: 'oceg1035', code: 'OCEG1035', name: 'Fundamentos de Ingeniería Oceanográfica', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], period: '100 - II' },
      { id: 'oceg1051', code: 'OCEG1051', name: 'Oceanografía Descriptiva', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['oceg1035'], period: '100 - II' },
      { id: 'idig1007_oc', code: 'IDIG1007', name: 'Inglés II', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1006_oc'], period: '100 - II' },

      // Nivel 200 - I
      { id: 'estg1034_oc', code: 'ESTG1034', name: 'Estadística', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1046_oc', 'ccpg1043_oc'], period: '200 - I' },
      { id: 'matg1048_oc', code: 'MATG1048', name: 'Ecuaciones Diferenciales y Álgebra Lineal', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1046_oc', 'ccpg1043_oc'], period: '200 - I' },
      { id: 'matg1052_oc', code: 'MATG1052', name: 'Métodos Numéricos', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], corequisites: ['matg1048_oc'], period: '200 - I' },
      { id: 'idig2012_oc', code: 'IDIG2012', name: 'Comunicación', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 6, period: '200 - I' },
      { id: 'oceg1030', code: 'OCEG1030', name: 'Climatología y Meteorología', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['oceg1051'], period: '200 - I' },
      { id: 'idig1008_oc', code: 'IDIG1008', name: 'Inglés III', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1007_oc'], period: '200 - I' },

      // Nivel 200 - II
      { id: 'mecg1052_oc', code: 'MECG1052', name: 'Mecánica Vectorial', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['fisg1005_oc'], minApprovedSubjects: 12, period: '200 - II' },
      { id: 'mecg1049_oc', code: 'MECG1049', name: 'Mecánica de Fluidos', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['matg1048_oc', 'fisg1009_oc', 'matg1052_oc'], period: '200 - II' },
      { id: 'oceg1050', code: 'OCEG1050', name: 'Oceanografía Física', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['fisg1009_oc', 'oceg1030'], period: '200 - II' },
      { id: 'oceg1036', code: 'OCEG1036', name: 'Geología Marina', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['oceg1030'], period: '200 - II' },
      { id: 'oceg1029', code: 'OCEG1029', name: 'Biogeoquímica Marina', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['oceg1032', 'oceg1030'], period: '200 - II' }, // OCEG1032 is in 300-II, might be a typo in source, keeping as requested
      { id: 'idig1009_oc', code: 'IDIG1009', name: 'Inglés IV', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1008_oc'], period: '200 - II' },

      // Nivel 300 - I
      { id: 'civg1056_oc', code: 'CIVG1056', name: 'Resistencia de Materiales', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['mecg1052_oc'], period: '300 - I' },
      { id: 'oceg1049', code: 'OCEG1049', name: 'Ondas Marinas', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['mecg1049_oc', 'oceg1030', 'estg1034_oc'], period: '300 - I' },
      { id: 'civg1060_oc', code: 'CIVG1060', name: 'Mecánica de Suelos y Rocas', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['oceg1036'], period: '300 - I' },
      { id: 'admg1005_oc', code: 'ADMG1005', name: 'Emprendimiento e Innovación', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: [], minApprovedSubjects: 20, period: '300 - I' },
      { id: 'idig1010_oc', code: 'IDIG1010', name: 'Inglés V', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['idig1009_oc'], period: '300 - I' },

      // Nivel 300 - II
      { id: 'civg1034_oc', code: 'CIVG1034', name: 'Análisis Estructural', credits: 3, hoursTotal: 9, hoursDetail: '3/2/4', prerequisites: ['civg1056_oc'], period: '300 - II' },
      { id: 'oceg1028', code: 'OCEG1028', name: 'Análisis de Información Oceanográfica', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['oceg1050', 'estg1034_oc'], period: '300 - II' },
      { id: 'oceg1048', code: 'OCEG1048', name: 'Oceanografía Costera', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['oceg1049'], period: '300 - II' },
      { id: 'adsg1026_oc', code: 'ADSG1026', name: 'Ciencias de la Sostenibilidad', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], minApprovedSubjects: 20, period: '300 - II' },
      { id: 'oceg1032', code: 'OCEG1032', name: 'Contaminación Marina', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['oceg1029'], period: '300 - II' },
      { id: 'psc_oc', code: 'PSC', name: 'Prácticas de Servicio Comunitario', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: [], minApprovedSubjects: 24, period: '300 - II' },

      // Nivel 400 - I
      { id: 'civg1045_oc', code: 'CIVG1045', name: 'Hormigón Armado', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['civg1034_oc'], period: '400 - I' },
      { id: 'oceg1040', code: 'OCEG1040', name: 'Planificación de Dragados', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['civg1060_oc'], minApprovedSubjects: 33, period: '400 - I' },
      { id: 'oceg1047', code: 'OCEG1047', name: 'Modelaje Costero', credits: 2, hoursTotal: 6, hoursDetail: '2/2/2', prerequisites: ['oceg1048'], period: '400 - I' },
      { id: 'oceg1046', code: 'OCEG1046', name: 'Procesos Estuarinos', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['oceg1048'], period: '400 - I' },
      { id: 'oceg1039', code: 'OCEG1039', name: 'Impacto Ambiental Marino-Costero', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['oceg1032'], period: '400 - I' },
      { id: 'oceg1033', code: 'OCEG1033', name: 'Dimensionamiento Portuario', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: [], minApprovedSubjects: 33, period: '400 - I' },

      // Nivel 400 - II
      { id: 'oceg1031', code: 'OCEG1031', name: 'Construcción de Obras Portuarias', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['civg1045_oc', 'oceg1033'], period: '400 - II' },
      { id: 'oceg1037', code: 'OCEG1037', name: 'Gestión de Dragados', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['oceg1040'], period: '400 - II' },
      { id: 'oceg1034', code: 'OCEG1034', name: 'Diseño Costero', credits: 3, hoursTotal: 9, hoursDetail: '3/1/5', prerequisites: ['oceg1047', 'civg1045_oc'], period: '400 - II' }, // CIVIG1045 in txt, corrected to CIVG1045
      { id: 'oceg1044', code: 'OCEG1044', name: 'Técnicas de Manejo Costero', credits: 2, hoursTotal: 6, hoursDetail: '2/1/3', prerequisites: ['oceg1046'], period: '400 - II' },
      { id: 'oceg1045', code: 'OCEG1045', name: 'Planificación y Construcción', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['oceg1033'], period: '400 - II' },
      { id: 'itin1_oc', code: 'ITIN1', name: 'Itinerario I', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '400 - II', isItinerary: true },

      // Nivel 500 - I
      { id: 'oceg1043', code: 'OCEG1043', name: 'Materia Integradora de Oceanografía', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: ['oceg1034'], period: '500 - I' },
      { id: 'oceg1038', code: 'OCEG1038', name: 'Gestión de Zonas Marino-Costeras', credits: 2, hoursTotal: 6, hoursDetail: '2/0/4', prerequisites: ['oceg1034'], period: '500 - I' },
      { id: 'itin2_oc', code: 'ITIN2', name: 'Itinerario II', credits: 3, hoursTotal: 9, hoursDetail: '3/0/6', prerequisites: [], period: '500 - I', isItinerary: true },

      // Nivel 500 - II
      { id: 'ppp_oc', code: 'PPP', name: 'Prácticas Preprofesionales Empresariales', credits: 5, hoursTotal: 5, hoursDetail: '5/0/0', prerequisites: [], period: '500 - II' },

      // Complementarias
      { id: 'comp1_oc', code: 'COMP1', name: 'Complementaria de Artes, Deportes e Idiomas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true },
      { id: 'comp2_oc', code: 'COMP2', name: 'Complementaria de Humanísticas', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true }
    ]
  },
  { id: 'esta', name: 'Estadística', facultyId: 'fcnm', subjects: [] },
  { id: 'quim', name: 'Química', facultyId: 'fcnm', subjects: [] },
  { id: 'lotr', name: 'Logística y Transporte', facultyId: 'fcnm', subjects: [] },
  { id: 'matm', name: 'Matemática', facultyId: 'fcnm', subjects: [] },
  { id: 'geol', name: 'Geología', facultyId: 'fict', subjects: [] },
  { id: 'civi', name: 'Civil', facultyId: 'fict', subjects: [] },
  { id: 'mina', name: 'Minas', facultyId: 'fict', subjects: [] },
  { id: 'petr', name: 'Petróleos', facultyId: 'fict', subjects: [] }
];
