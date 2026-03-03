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
    id: 'econ',
    name: 'Economía',
    facultyId: 'fcs',
    subjects: [
      { id: 'eco1', code: 'ECOG1001', name: 'Microeconomía I', credits: 4, prerequisites: [], period: '100 - I' },
      { id: 'eco2', code: 'ECOG1002', name: 'Macroeconomía I', credits: 4, prerequisites: [], period: '100 - I' },
      { id: 'eco3', code: 'ECOG1003', name: 'Microeconomía II', credits: 4, prerequisites: ['eco1'], period: '100 - II' },
      { id: 'eco4', code: 'ECOG1004', name: 'Macroeconomía II', credits: 4, prerequisites: ['eco2'], period: '100 - II' },
    ],
  },
  { id: 'cdia-h', name: 'Ciencias de Datos e Inteligencia Artificial (Híbrido)', facultyId: 'fiec', subjects: [] },
  { id: 'cdia-o', name: 'Ciencias de Datos e Inteligencia Artificial (Online)', facultyId: 'fiec', subjects: [] },
  { id: 'elec', name: 'Electricidad', facultyId: 'fiec', subjects: [] },
  { id: 'elau', name: 'Electrónica y automatización', facultyId: 'fiec', subjects: [] },
  { id: 'tele', name: 'Telecomunicaciones', facultyId: 'fiec', subjects: [] },
  { id: 'telm', name: 'Telemática', facultyId: 'fiec', subjects: [] },
  { id: 'biol', name: 'Biología', facultyId: 'fcv', subjects: [] },
  { id: 'agbi', name: 'Agricultura y Biología', facultyId: 'fcv', subjects: [] },
  { id: 'nudi', name: 'Nutrición y Dietética', facultyId: 'fcv', subjects: [] },
  { id: 'dipr', name: 'Diseño de productos', facultyId: 'fadcom', subjects: [] },
  { id: 'digr', name: 'Diseño Gráfico', facultyId: 'fadcom', subjects: [] },
  { id: 'prmc', name: 'Producción para Medios de Comunicación', facultyId: 'fadcom', subjects: [] },
  { id: 'alim', name: 'Alimentos', facultyId: 'fimcp', subjects: [] },
  { id: 'indu', name: 'Industrial', facultyId: 'fimcp', subjects: [] },
  { id: 'mate', name: 'Materiales', facultyId: 'fimcp', subjects: [] },
  { id: 'meca', name: 'Mecánica', facultyId: 'fimcp', subjects: [] },
  { id: 'mect', name: 'Mecatrónica', facultyId: 'fimcp', subjects: [] },
  { id: 'acui', name: 'Acuicultura', facultyId: 'fimcm', subjects: [] },
  { id: 'nava', name: 'Naval', facultyId: 'fimcm', subjects: [] },
  { id: 'ocea', name: 'Oceaografía', facultyId: 'fimcm', subjects: [] },
  { id: 'esta', name: 'Estadística', facultyId: 'fcnm', subjects: [] },
  { id: 'quim', name: 'Química', facultyId: 'fcnm', subjects: [] },
  { id: 'lotr', name: 'Logística y Transporte', facultyId: 'fcnm', subjects: [] },
  { id: 'matm', name: 'Matemática', facultyId: 'fcnm', subjects: [] },
  { id: 'geol', name: 'Geología', facultyId: 'fict', subjects: [] },
  { id: 'civi', name: 'Civil', facultyId: 'fict', subjects: [] },
  { id: 'mina', name: 'Minas', facultyId: 'fict', subjects: [] },
  { id: 'petr', name: 'Petróleos', facultyId: 'fict', subjects: [] }
];
