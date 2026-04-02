const fs = require('fs');

const text = `
Ingeniería en Geología

Nivel 100-I

* CÁLCULO DE UNA VARIABLE - MATG1045 - 3CR - 3/2/4 9h.
* FÍSICA: MECÁNICA - FISG1005 - 3CR - 3/2/4 9h. CO-R: MATG1045
* ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS - INDG1033 - 3CR - 3/0/6 9h.
* MINERALOGÍA - GEOG1041 - 2CR - 2/2/2 6h.
* GEOLOGÍA GENERAL - GEOG1033 - 2CR - 2/2/2 6h. CO-R: GEOG1041
* INGLÉS I - IDIG1006 - 2CR - 2/2/2 6h.

Nivel 100-II

* FUNDAMENTOS DE PROGRAMACIÓN - CCPG1043 - 3CR - 3/1/5 9h. PRE: MATG1045
* CÁLCULO VECTORIAL - MATG1046 - 3CR - 3/2/4 9h. PRE: MATG1045
* QUÍMICA GENERAL - QUIG1032 - 3CR - 3/1/5 9h. 
* MINERALOGÍA ÓPTICA - GEOG1042 - 2CR - 2/2/2 6h. 
* PALEONTOLOGÍA APLICADA - GEOG1044 - 2CR - 2/2/2 6h. PRE: GEOG1033
* INGLÉS II - IDIG1007 - 2CR - 2/2/2 6h. PRE: IDIG1006

Nivel 200-I

* ECUACIONES DIFERENCIALES Y ÁLGEBRA LINEAL - MATG1048 - 3CR - 3/1/5 9h. PRE: MATG1046, CCPG1043
* COMUNICACIÓN - IDIG2012 - 2CR - 2/2/2 6h. PRE: 6 MATERIAS AP.
* MECÁNICA DE MATERIALES GEOLÓGICOS - GEOG1051 - 3CR - 3/1/5 9h. PRE: FISG1005
* PETROLOGÍA SEDIMENTARIA - GEOG1045 - 2CR - 2/2/2 6h. PRE: GEOG1042, QUIG1032
* ESTRATIGRAFÍA Y SEDIMENTACIÓN - GEOG1028 - 2CR - 2/1/3 6h. PRE: GEOG1044
* INGLÉS III - IDIG1008 - 2CR - 2/2/2 6h. PRE: IDIG1007

Nivel 200-II

* ESTADÍSTICA - ESTG1034 - 3CR - 3/1/5 9h. PRE: CCPG1043
* FÍSICA: ELECTRICIDAD Y MAGNETISMO - FISG1006 - 3CR - 3/2/4 9h. PRE: FISG1005
* GEOLOGÍA DE ECUADOR - GEOG1030 - 2CR - 2/1/3 6h. CO-R: GEOG1046
* PETROLOGÍA ÍGNEA Y METAMÓRFICA - GEOG1046 - 3CR - 3/2/4 9h. PRE: GEOG1045
* GEOLOGÍA ESTRUCTURAL - GEOG1032 - 2CR - 2/2/2 6h. PRE: GEOG1028, GEOG1051
* INGLÉS IV - IDIG1009 - 2CR - 2/2/2 6h. PRE: IDIG1008

Nivel 300-I

* EMPRENDIMIENTO E INNOVACIÓN - ADMG1005 - 3CR - 3/1/5 9h. PRE: 20 MATERIAS AP.
* SISTEMAS DE INFORMACIÓN GEOGRÁFICA - GEOG1047 - 2CR - 2/1/3 6h. PRE: MATG1048
* GEOESTADÍSTICA - ESTG1033 - 3CR - 3/1/5 9h. PRE: ESTG1034
* GEOQUÍMICA - GEOG1035 - 2CR - 2/1/3 6h. PRE: GEOG1046
* TECTÓNICA - GEOG1048 - 2CR - 2/1/3 6h. PRE: GEOG1032
* INGLÉS V - IDIG1010 - 2CR - 2/2/2 6h. PRE: IDIG1009

Nivel 300-II

* CIENCIAS DE LA SOSTENIBILIDAD - ADSG1026 - 3CR - 3/0/6 9h. PRE: 20 MATERIAS AP.
* GEOMORFOLOGÍA - GEOG1034 - 2CR - 2/1/3 6h. PRE: GEOG1047
* MÉTODOS GEOFÍSICOS - GEOG1040 - 2CR - 2/1/3 6h. PRE: FISG1006
* DEPÓSITOS MINERALES - GEOG1026 - 2CR - 2/1/3 6h. PRE: GEOG1035
* INGENIERÍA GEOLÓGICA - GEOG1037 - 3CR - 3/1/5 9h. PRE: GEOG1048
* PRÁCTICAS DE SERVICIO COMUNITARIO - 2CR - 2/2/2 6h.

Nivel 400-I

* VULNERABILIDAD Y RIESGO GEOLÓGICO - GEOG1050 - 2CR - 2/1/3 6h. PRE: GEOG1034
* HIDROGEOLOGÍA - GEOG1036 - 2CR - 2/1/3 6h. PRE: GEOG1040
* GEOLOGÍA DEL PETRÓLEO - GEOG1031 - 2CR - 2/2/2 6h. PRE: GEOG1040
* EVALUACIÓN DE YACIMIENTOS MINERALES - GEOG1029 - 2CR - 2/1/3 6h. PRE: GEOG1026
* DISEÑO DE CAMPO GEOLÓGICO - GEOG1027 - 2CR - 2/2/2 6h. PRE: GEOG1037
* ITINERARIO - (Sin código) - 3CR - 3/0/6 9h.

Nivel 400-II

* LEGISLACIÓN Y MITIGACIÓN AMBIENTAL - GEOG1038 - 2CR - 2/0/4 6h. PRE: GEOG1037
* MATERIA INTEGRADORA DE GEOLOGÍA - GEOG1039 - 3CR - 3/0/6 9h. PRE: 42 MATERIAS AP.
* ITINERARIO - (Sin código) - 3CR - 3/0/6 9h.

Nivel 500
* PRÁCTICAS PREPROFESIONALES EMPRESARIALES - (Sin código) - 5CR - 5/0/0 5h.

------------------------------------------------------------------------------------------------------------

Ingeniería Civil

Nivel 100-I

* ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS - INDG1033 - 3CR - 3/0/6 9h.
* CÁLCULO DE UNA VARIABLE - MATG1045 - 3CR - 3/2/4 9h.
* FÍSICA: MECÁNICA - FISG1005 - 3CR - 3/2/4 9h. CO-R: MATG1045
* QUÍMICA GENERAL - QUIG1032 - 3CR - 3/1/5 9h.
* INGLÉS I - IDIG1006 - 2CR - 2/2/2 6h.

Nivel 100-II

* FUNDAMENTOS DE PROGRAMACIÓN - CCPG1043 - 3CR - 3/1/5 9h. PRE: MATG1045
* CÁLCULO VECTORIAL - MATG1046 - 3CR - 3/2/4 9h. PRE: MATG1045
* ECUACIONES DIFERENCIALES Y ÁLGEBRA LINEAL - MATG1048 - 3CR - 3/1/5 9h. PRE: MATG1045
* FÍSICA: TERMODINÁMICA Y ELECTRÓNICA - FISG1008 - 3CR - 3/2/4 9h. PRE: FISG1005
* INGLÉS II - IDIG1007 - 2CR - 2/2/2 6h. PRE: IDIG1006

Nivel 200 - I
ESTADÍSTICA - ESTG1034 - 3CR - 3/1/5 9h. PRE: CCPG1043, MATG1046
MATEMÁTICA APLICADA A LA INGENIERÍA - MATG1053 - 3CR - 3/1/5 9h. PRE: MATG1048
ESTÁTICA - MECG1060 - 3CR - 3/1/5 9h. PRE: FISG1005
HORMIGÓN Y MATERIALES DE CONSTRUCCIÓN - CIVG1047 - 2CR - 2/2/2 6h. PRE: QUIG1032
INGLÉS III - IDIG1008 - 2CR - 2/2/2 6h. PRE: IDIG1007

Nivel 200 - II
COMUNICACIÓN - IDIG2012 - 2CR - 2/2/2 6h. PRE: 6 MATERIAS AP.
SISTEMAS DE INFORMACIÓN GEOGRÁFICA - GEOG1047 - 2CR - 2/1/3 6h. PRE: ESTG1034
MECÁNICA DE FLUIDOS - MECG1049 - 3CR - 3/1/5 9h. PRE: FISG1005
RESISTENCIA DE MATERIALES - CIVG1056 - 3CR - 3/1/5 9h. PRE: MECG1060
DIBUJO TÉCNICO Y PLANOS - CIVG1035 - 2CR - 2/2/2 6h. PRE: CIVG1047
INGLÉS IV - IDIG1009 - 2CR - 2/2/2 6h. PRE: IDIG1008

Nivel 300 - I
EMPRENDIMIENTO E INNOVACIÓN - ADMG1005 - 3CR - 3/1/5 9h. PRE: 20 MATERIAS AP.
HIDROLOGÍA - CIVG1043 - 3CR - 3/1/5 9h. PRE: GEOG1047, MECG1049
ANÁLISIS ESTRUCTURAL - CIVG1034 - 3CR - 3/2/4 9h. PRE: CIVG1056, CIVG1047
TOPOGRAFÍA - CIVG1059 - 3CR - 3/1/5 9h. PRE: CIVG1035
INGLÉS V - IDIG1010 - 2CR - 2/2/2 6h. PRE: IDIG1009

Nivel 300 - II
CIENCIAS DE LA SOSTENIBILIDAD - ADSG1026 - 3CR - 3/0/6 9h. PRE: 20 MATERIAS AP.
HIDRÁULICA - CIVG1044 - 3CR - 3/1/5 9h. PRE: CIVG1043, MATG1053
MECÁNICA DE SUELOS Y ROCAS - CIVG1060 - 3CR - 3/2/4 9h. PRE: CIVG1056
HORMIGÓN ARMADO - CIVG1045 - 3CR - 3/1/5 9h. PRE: CIVG1034
DISEÑO DE VÍAS - CIVG1038 - 3CR - 3/1/5 9h. PRE: CIVG1059

Nivel 400 - I
SISTEMAS DE RECOLECCIÓN Y DISTRIBUCIÓN DE AGUA - CIVG1058 - 3CR - 3/1/5 9h. PRE: CIVG1044
INGENIERÍA DE CIMENTACIÓN - CIVG1049 - 3CR - 3/1/5 9h. PRE: CIVG1060, CIVG1045
DISEÑO ESTRUCTURAL - CIVG1039 - 3CR - 3/1/5 9h. PRE: CIVG1045 - CO-R: CIVG1049
DISEÑO DE PAVIMENTOS - CIVG1036 - 3CR - 3/1/5 9h. PRE: CIVG1038, CIVG1060
PRÁCTICAS DE SERVICIO COMUNITARIO - (Sin código) - 2CR - 2/2/2 6h.

Nivel 400 - II
GESTIÓN DE OBRAS CIVILES - CIVG1041 - 2CR - 2/2/2 6h. PRE: 35 MATERIAS AP.
POTABILIZACIÓN Y TRATAMIENTO DEL AGUA - CIVG1055 - 3CR - 3/1/5 9h. PRE: CIVG1058
ESTRUCTURAS METÁLICAS - CIVG1040 - 3CR - 3/1/5 9h. PRE: CIVG1039
DISEÑO DE PUENTES - CIVG1037 - 2CR - 2/1/3 6h. PRE: CIVG1039
HORMIGÓN PREFORZADO - CIVG1046 - 2CR - 2/0/4 6h. PRE: CIVG1045
ITINERARIO - (Sin código) - 3CR - 3/0/6 9h.

Nivel 500 - I
INGENIERÍA DE LA CONSTRUCCIÓN - CIVG1050 - 2CR - 2/2/2 6h. PRE: CIVG1041
INSTALACIONES - CIVG1053 - 2CR - 2/2/2 6h. PRE: CIVG1058
MATERIA INTEGRADORA DE INGENIERÍA CIVIL - CIVG1054 - 3CR - 3/0/6 9h. PRE: 43 MATERIAS AP.
ITINERARIO - (Sin código) - 3CR - 3/0/6 9h.

Nivel 500-II
PRÁCTICAS PREPROFESIONALES EMPRESARIALES - (Sin código) - 5CR - 5/0/0 5h.

------------------------------------------------------------------------------------------------------------

Ingeniería de Minas

Nivel 100-I

* CÁLCULO DE UNA VARIABLE - MATG1045 - 3CR - 3/2/4 9h.
* FÍSICA: MECÁNICA - FISG1005 - 3CR - 3/2/4 9h. CO-R: MATG1045
* FUNDAMENTOS DE MINERÍA - MING1025 - 2CR - 2/0/4 6h.
* MINERALOGÍA - GEOG1041 - 2CR - 2/2/2 6h.
* ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS - INDG1033 - 3CR - 3/0/6 9h.
* INGLÉS I - IDIG1006 - 2CR - 2/2/2 6h.

Nivel 100-II

* CÁLCULO VECTORIAL - MATG1046 - 3CR - 3/2/4 9h. PRE: MATG1045
* FUNDAMENTOS DE PROGRAMACIÓN - CCPG1043 - 3CR - 3/1/5 9h. PRE: MATG1045
* QUÍMICA GENERAL - QUIG1032 - 3CR - 3/1/5 9h. 
* PETROGRAFÍA - MING1036 - 2CR - 2/2/2 6h. PRE: GEOG1041, MING1025. CO-R: QUIG1032
* COMUNICACIÓN - IDIG2012 - 2CR - 2/2/2 6h. PRE: 6 MATERIAS AP.
* INGLÉS II - IDIG1007 - 2CR - 2/2/2 6h. PRE: IDIG1006

Nivel 200-I

* ÁLGEBRA LINEAL - MATG1049 - 3CR - 3/1/5 9h. PRE: MATG1045
* ESTADÍSTICA - ESTG1034 - 3CR - 3/1/5 9h. PRE: MATG1046, CCPG1043
* TOPOGRAFÍA MINERA - MING1033 - 2CR - 2/2/2 6h. PRE: 10 MATERIAS AP.
* ESTÁTICA - MECG1060 - 3CR - 3/1/5 9h. PRE: FISG1005
* GEOLOGÍA ESTRUCTURAL - GEOG1032 - 2CR - 2/2/2 6h. 
* INGLÉS III - IDIG1008 - 2CR - 2/2/2 6h. PRE: IDIG1007

Nivel 200-II

* ECUACIONES DIFERENCIALES - MATG1050 - 3CR - 3/2/4 9h. PRE: MATG1049
* GEOMÁTICA MINERA - MING1026 - 2CR - 2/2/2 6h. PRE: MING1033
* FÍSICA: TERMODINÁMICA Y ELECTRÓNICA - FISG1008 - 3CR - 3/2/4 9h. PRE: FISG1005
* GEOLOGÍA MINERA - MING1034 - 2CR - 2/1/3 6h. PRE: GEOG1036
* RESISTENCIA DE MATERIALES - CIVG1056 - 3CR - 3/1/5 9h. PRE: MECG1060
* INGLÉS IV - IDIG1009 - 2CR - 2/2/2 6h. PRE: IDIG1008

Nivel 300-I

* EMPRENDIMIENTO E INNOVACIÓN - ADMG1005 - 3CR - 3/1/5 9h. PRE: 20 MATERIAS AP.
* MECÁNICA DE FLUIDOS - MECG1049 - 3CR - 3/1/5 9h. PRE: FISG1005
* TECNOLOGÍA DE EQUIPAMIENTOS MINEROS - MING1038 - 2CR - 2/1/3 6h.
* PERFORACIÓN Y VOLADURA - MING1030 - 2CR - 2/1/3 6h. PRE: FISG1008
* GEOMECÁNICA - MING1035 - 2CR - 2/2/2 6h. PRE: CIVG1056, GEOG1032
* INGLÉS V - IDIG1010 - 2CR - 2/2/2 6h. PRE: IDIG1009

Nivel 300-II

* CIENCIAS DE LA SOSTENIBILIDAD - ADSG1026 - 3CR - 3/0/6 9h. PRE: 20 MATERIAS AP.
* PREPARACIÓN MECÁNICA - MING1041 - 2CR - 2/1/3 6h. PRE: 25 MATERIAS AP
* SEGURIDAD MINERA - MING1037 - 2CR - 2/0/4 6h. PRE: MING1030
* EXPLOTACIÓN A CIELO ABIERTO - MING1040 - 2CR - 2/0/4 6h. PRE: MING1030, CO-R: MING1027
* GEOTECNIA MINERA - MING1027 - 2CR - 2/2/2 6h. PRE: MING1035. 
* EXPLOTACIÓN SUBTERRÁNEA - MING1024 - 2CR - 2/0/4 6h. PRE: MING1030
* PRÁCTICAS DE SERVICIO COMUNITARIO - (Sin código) - 2CR - 2/2/2 6h.

Nivel 400-I

* MINERALURGIA Y METALURGIA EXTRACTIVA - MING1029 - 3CR - 3/1/5 9h. PRE: MING1041
* VENTILACIÓN, DRENAJE Y SISTEMAS ELÉCTRICOS - MING1032 - 2CR - 2/1/3 6h. PRE: MECG1049
* AMBIENTE Y GESTIÓN DE RESIDUOS MINEROS - MING1023 - 2CR - 2/0/4 6h. PRE: 30 MATERIAS AP
* PLANEAMIENTO Y DISEÑO MINERO - MING1031 - 3CR - 3/1/5 9h. PRE: MING1040, MING1024
* ITINERARIO - (Sin código) - 3CR - 3/0/6 9h.

Nivel 400-II

* MATERIA INTEGRADORA DE MINAS - MING1039 - 3CR - 3/0/6 9h. PRE: 41 MATERIAS AP.
* ITINERARIO - (Sin código) - 3CR - 3/0/6 9h.

Nivel 500
* PRÁCTICAS PREPROFESIONALES EMPRESARIALES - (Sin código) - 5CR - 5/0/0 5h.

------------------------------------------------------------------------------------------------------------

Ingeniería en Petróleos

Nivel 100-I

* CÁLCULO DE UNA VARIABLE - MATG1045 - 3CR - 3/2/4 9h.
* FÍSICA: MECÁNICA - FISG1005 - 3CR - 3/2/4 9h. CO-R: MATG1045
* QUÍMICA GENERAL - QUIG1032 - 3CR - 3/1/5 9h.
* ANÁLISIS Y RESOLUCIÓN DE PROBLEMAS - INDG1033 - 3CR - 3/0/6 9h.
* INGLÉS I - IDIG1006 - 2CR - 2/2/2 6h.

Nivel 100-II

* CÁLCULO VECTORIAL - MATG1046 - 3CR - 3/2/4 9h. PRE: MATG1045
* FUNDAMENTOS DE PROGRAMACIÓN - CCPG1043 - 3CR - 3/1/5 9h. PRE: MATG1045
* FÍSICA: TERMODINÁMICA Y ELECTRÓNICA - FISG1008 - 3CR - 3/2/4 9h. PRE: FISG1005 
* INTRODUCCIÓN A LA INDUSTRIA HIDROCARBURÍFERA - PETG1032 - 2CR - 2/0/4 6h. PRE: INDG1033
* GEOLOGÍA PARA INGENIEROS EN PETRÓLEO - GEOG1052 - 2CR - 2/0/4 6h. CO-R: PETG1032
* INGLÉS II - IDIG1007 - 2CR - 2/2/2 6h. PRE: IDIG1006

Nivel 200-I

* ESTADÍSTICA - ESTG1034 - 3CR - 3/1/5 9h. PRE: CCPG1043
* TERMODINÁMICA - MECG1061 - 3CR - 3/1/5 9h. PRE: FISG1008
* ESTÁTICA - MECG1060 - 3CR - 3/1/5 9h. PRE: FISG1005
* COMUNICACIÓN - IDIG2012 - 2CR - 2/2/2 6h. PRE: 6 MATERIAS AP.
* INGLÉS III - IDIG1008 - 2CR - 2/2/2 6h. PRE: IDIG1007

Nivel 200-II

* ECUACIONES DIFERENCIALES Y ÁLGEBRA LINEAL - MATG1048 - 3CR - 3/1/5 9h. PRE: MATG1045
* MÉTODOS NUMÉRICOS - MATG1052 - 2CR - 2/2/2 6h. PRE: MATG1046
* PROPIEDADES DE HIDROCARBUROS Y COMPORTAMIENTO DE FASES - PETG1031 - 2CR - 2/1/3 6h. PRE: MECG1061, QUIG1032
* PETROFÍSICA - PETG1027 - 3CR - 3/1/5 9h. PRE: MECG1060, GEOG1052
* PERFORACIÓN - PETG1025 - 3CR - 3/1/5 9h. CO-R: PETG1027
* INGLÉS IV - IDIG1009 - 2CR - 2/2/2 6h. PRE: IDIG1008

Nivel 300-I

* EMPRENDIMIENTO E INNOVACIÓN - ADMG1005 - 3CR - 3/1/5 9h. PRE: 20 MATERIAS AP.
* MECÁNICA DE FLUIDOS - MECG1049 - 3CR - 3/1/5 9h. PRE: 15 MATERIAS AP., MATG1048, FISG1005
* EVALUACIÓN DE FORMACIONES I - PETG1030 - 3CR - 3/1/5 9h. PRE: PETG1031, ESTG1034
* PERFORACIÓN DIRECCIONAL - PETG1026 - 3CR - 3/1/5 9h. PRE: PETG1025
* INGLÉS V - IDIG1010 - 2CR - 2/2/2 6h. PRE: IDIG1009

Nivel 300-II

* CIENCIAS DE LA SOSTENIBILIDAD - ADSG1026 - 3CR - 3/0/6 9h. PRE: 20 MATERIAS AP.
* INGENIERÍA DE PRODUCCIÓN I - PETG1021 - 3CR - 3/1/5 9h. PRE: MECG1049
* EVALUACIÓN DE FORMACIONES II - PETG1034 - 3CR - 3/1/5 9h. PRE: PETG1030
* INGENIERÍA DE YACIMIENTOS I - PETG1023 - 3CR - 3/1/5 9h. PRE: 
* COMPLETACIÓN Y REACONDICIONAMIENTO DE POZOS - PETG1020 - 2CR - 2/0/4 6h. PRE: PETG1026

Nivel 400-I
* INGENIERÍA DE PRODUCCIÓN II - PETG1022 - 3CR - 3/1/5 9h. PRE: PETG1021
* SIMULACIÓN DE RESERVORIOS - PETG1028 - 2CR - 2/1/3 6h. CO-R: PETG1024
* INGENIERÍA DE YACIMIENTOS II - PETG1024 - 3CR - 3/1/5 9h. PRE: PETG1023
* HSEQ EN LA INDUSTRIA HIDROCARBURÍFERA - INDG1061 - 2CR - 2/0/4 6h. PRE: 25 MATERIAS AP.
* PRÁCTICAS DE SERVICIO COMUNITARIO - (Sin código) - 2CR - 2/2/2 6h. PRE: 20 MATERIAS AP.
* ITINERARIO - (Sin código) - 3CR - 3/0/6 9h.

Nivel 400-II

* EVALUACIÓN DE PROYECTOS HIDROCARBURÍFEROS - ECOG1009 - 2CR - 2/0/4 6h. PRE: 30 MATERIAS AP.
* MATERIA INTEGRADORA PARA PETRÓLEOS - PETG1033 - 3CR - 3/0/6 9h. PRE: 38 MATERIAS AP.
* ITINERARIO - (Sin código) - 3CR - 3/0/6 9h.

Nivel 500
* PRÁCTICAS PREPROFESIONALES EMPRESARIALES - (Sin código) - 5CR - 5/0/0 5h.
`;

const lines = text.split('\n');
let currentPeriod = '';

const careers = {
  'Geología': { id: 'geol', subjects: [] },
  'Civil': { id: 'civi', subjects: [] },
  'Minas': { id: 'mina', subjects: [] },
  'Petróleos': { id: 'petr', subjects: [] },
};

let careerObj = null;
let idCounter = 1;

for (let line of lines) {
  line = line.trim();
  if (!line || line.startsWith('---')) continue;

  if (line.startsWith('Ingeniería')) {
    let name = line.replace('Ingeniería en ', '').replace('Ingeniería de ', '').replace('Ingeniería ', '');
    careerObj = careers[name];
    continue;
  }

  if (line.startsWith('Nivel')) {
    currentPeriod = line.replace('Nivel ', '').trim();
    if (currentPeriod === '500') currentPeriod = '500 - I';
    if (currentPeriod.includes('-')) {
        let parts = currentPeriod.split('-');
        currentPeriod = parts[0].trim() + ' - ' + parts[1].trim();
    }
    continue;
  }

  if (line.startsWith('*') || /^[A-ZÁÉÍÓÚÑ]/.test(line)) {
    let cleanLine = line.replace(/^\*\s*/, '');
    let parts = cleanLine.split(' - ');
    
    let name = '';
    let code = '';
    let credits = 0;
    let hoursDetail = '';
    let hoursTotal = 0;
    let prerequisites = [];
    let corequisites = [];
    let minApprovedSubjects = undefined;
    let isItinerary = false;
    
    let preMatch = cleanLine.match(/PRE:\s*(.+?)(?=\s*CO-R:|$)/);
    if (preMatch) {
      let preStr = preMatch[1].trim();
      let preItems = preStr.split(',').map(s => s.trim().replace(/\.$/, ''));
      for (let item of preItems) {
        if (item.includes('MATERIAS AP')) {
          minApprovedSubjects = parseInt(item);
        } else if (item) {
          prerequisites.push(item.toLowerCase());
        }
      }
    }
    
    let coMatch = cleanLine.match(/CO-R:\s*(.+?)(?=\s*PRE:|$)/);
    if (coMatch) {
      let coStr = coMatch[1].trim();
      let coItems = coStr.split(',').map(s => s.trim().replace(/\.$/, ''));
      for (let item of coItems) {
        if (item) corequisites.push(item.toLowerCase());
      }
    }
    
    let baseLine = cleanLine.replace(/PRE:.*$/, '').replace(/CO-R:.*$/, '').trim();
    
    let crMatch = baseLine.match(/(\d+)CR/);
    if (crMatch) credits = parseInt(crMatch[1]);
    
    let hMatch = baseLine.match(/(\d+h\.)/);
    if (hMatch) hoursTotal = parseInt(hMatch[1]);
    
    let detailMatch = baseLine.match(/(\d+\/\d+\/\d+)/);
    if (detailMatch) hoursDetail = detailMatch[1];
    
    let nameCodeParts = baseLine.split(' - ');
    name = nameCodeParts[0].trim();
    
    if (name === 'ITINERARIO') {
        isItinerary = true;
        code = `ITI${idCounter++}`;
    } else if (name === 'PRÁCTICAS PREPROFESIONALES EMPRESARIALES') {
        code = `PPE_${careerObj.id.toUpperCase()}`;
    } else if (name === 'PRÁCTICAS DE SERVICIO COMUNITARIO') {
        code = `PSC_${careerObj.id.toUpperCase()}`;
    } else if (nameCodeParts.length >= 2 && !nameCodeParts[1].includes('CR')) {
        code = nameCodeParts[1].trim();
    } else {
        code = `CODE${idCounter++}`;
    }
    
    if (code === '(Sin código)') {
        code = `CODE${idCounter++}`;
    }
    
    let subject = {
      id: code.toLowerCase(),
      code: code,
      name: name,
      credits: credits,
      hoursTotal: hoursTotal,
      hoursDetail: hoursDetail,
      prerequisites: prerequisites,
      period: currentPeriod
    };
    
    if (corequisites.length > 0) subject.corequisites = corequisites;
    if (minApprovedSubjects !== undefined) subject.minApprovedSubjects = minApprovedSubjects;
    if (isItinerary) subject.isItinerary = true;
    
    careerObj.subjects.push(subject);
  }
}

for (let key in careers) {
  let c = careers[key];
  c.subjects.push({
    id: `comp1_${c.id}`,
    code: 'COMP1',
    name: 'Materia Complementaria 1',
    credits: 1,
    hoursTotal: 3,
    prerequisites: [],
    period: 'Complementarias',
    isComplementary: true
  });
  c.subjects.push({
    id: `comp2_${c.id}`,
    code: 'COMP2',
    name: 'Materia Complementaria 2',
    credits: 1,
    hoursTotal: 3,
    prerequisites: [],
    period: 'Complementarias',
    isComplementary: true
  });
  c.subjects.push({
    id: `comp3_${c.id}`,
    code: 'COMP3',
    name: 'Materia Complementaria 3',
    credits: 1,
    hoursTotal: 3,
    prerequisites: [],
    period: 'Complementarias',
    isComplementary: true
  });
}

fs.writeFileSync('fict_careers.json', JSON.stringify(careers, null, 2));
