/* ========================================================
   C.E.A. MAN CESPED - LÓGICA INTERACTIVA EN JAVASCRIPT PURO
   Manejo de Vistas (SPA), Filtros, Detalle, Galería, Plantel Docente
   y Test Vocacional Dual (Rápido + CHASIDE Oficial 98 Preguntas)
   Actualización: Carreras Vigentes (Sistemas, Textil, Contaduría, Bachillerato)
   ======================================================== */

// ==========================================
// 1. BASE DE DATOS DE CARRERAS VIGENTES (R.M. 1040/2022)
// ==========================================
const CAREERS_DATA = {
  sistemas: {
    id: 'sistemas',
    category: 'tecnico',
    title: 'Sistemas Informáticos',
    quechua: 'Antañiqiy Kamay',
    tag: 'Técnico Medio • 2 Años (2.000 hrs)',
    state: 'Vigente',
    img: 'img/sistemas_lab_oficial.jpg',
    summary: 'Aprende soporte técnico de computadoras, redes locales y WiFi, desarrollo web frontend/backend, bases de datos y desarrollo de apps móviles.',
    description: 'La carrera de Sistemas Informáticos en el CEA Man Césped capacita al participante en soporte preventivo y correctivo de hardware, configuración de redes LAN/WLAN, desarrollo de páginas y plataformas web modernas, gestión de bases de datos y aplicaciones móviles bajo la Resolución Ministerial 1040/2022 del Ministerio de Educación de Bolivia.',
    specs: [
      { label: 'Título Otorgado', value: 'Técnico Medio en Sistemas Informáticos (Ministerio de Educación)' },
      { label: 'Carga Horaria Oficial', value: '2 Años (4 Semestres • 20 Módulos de 100 hrs = 2.000 Horas Académicas)' },
      { label: 'Turno de Clases', value: 'Turno Noche (18:30 a 22:00, Lunes a Viernes)' },
      { label: 'Requisitos de Ingreso', value: 'Fotocopia C.I. vigente, Certificado de Nacimiento y Libreta del último curso' },
      { label: 'Perfil Profesional', value: 'Soporte Técnico de Hardware, Administrador de Redes, Desarrollador Web Junior, Programador Móvil, Emprendedor Digital' }
    ],
    curriculum: [
      {
        level: '1.er Semestre: Técnico Básico (500 hrs)',
        modules: [
          'Módulo I: Introducción a la Computación y Sistemas Operativos (100 hrs)',
          'Módulo II: Ofimática Avanzada y Productividad Digital (100 hrs)',
          'Módulo III: Lógica de Programación y Algoritmos Básicos (100 hrs)',
          'Módulo IV: Mantenimiento Preventivo de Hardware y Software (100 hrs)',
          'Módulo V: Módulo Emergente I (Tecnologías Locales y Adaptación) (100 hrs)'
        ]
      },
      {
        level: '2.º Semestre: Técnico Auxiliar (500 hrs)',
        modules: [
          'Módulo VI: Redes de Computadoras y Conectividad LAN/WLAN (100 hrs)',
          'Módulo VII: Fundamentos y Gestión de Bases de Datos SGBD (100 hrs)',
          'Módulo VIII: Programación Orientada a Objetos - POO I (100 hrs)',
          'Módulo IX: Diseño y Desarrollo Web Frontend (HTML5, CSS3, JS) (100 hrs)',
          'Módulo X: Módulo Emergente II (Sistemas y Contexto Productivo) (100 hrs)'
        ]
      },
      {
        level: '3.er Semestre: Técnico Medio I (500 hrs)',
        modules: [
          'Módulo XI: Programación y Desarrollo Web Backend (PHP / Python) (100 hrs)',
          'Módulo XII: Análisis y Diseño de Sistemas de Información (100 hrs)',
          'Módulo XIII: Seguridad Informática, Ciberseguridad y Normas ISO (100 hrs)',
          'Módulo XIV: Inglés Técnico Aplicado a la Informática (100 hrs)',
          'Módulo XV: Emprendimiento Productivo e Innovación Tecnológica (100 hrs)'
        ]
      },
      {
        level: '4.º Semestre: Técnico Medio II (500 hrs)',
        modules: [
          'Módulo XVI: Desarrollo de Aplicaciones Móviles (100 hrs)',
          'Módulo XVII: Administración de Servidores y Servicios Cloud / AWS (100 hrs)',
          'Módulo XVIII: Calidad de Software (QA) y Testing de Aplicaciones (100 hrs)',
          'Módulo XIX: Control de Versiones (Git/GitHub) y Gestión de Proyectos (100 hrs)',
          'Módulo XX: Modalidades de Graduación (Proyecto de Grado / Emprendimiento) (100 hrs)'
        ]
      }
    ]
  },
  textil: {
    id: 'textil',
    category: 'tecnico',
    title: 'Textil y Confección',
    quechua: "P'acha Ruray Kamay",
    tag: 'Técnico Medio • 2 Años (2.000 hrs)',
    state: 'Vigente',
    img: 'img/taller_textil.jpg',
    summary: 'Dominio de patronaje industrial, confección de ropa deportiva, trajes de dos piezas y alta costura con moderna maquinaria industrial.',
    description: 'Con tradición histórica en el CEA desde su origen en Cerro Verde (1987) y reactivada con equipamiento industrial moderno otorgado por Desarrollo Humano (2011), forma especialistas en corte, confección, patronaje sobre medidas y producción en serie para el mercado textil.',
    specs: [
      { label: 'Título Otorgado', value: 'Técnico Medio en Textil y Confección' },
      { label: 'Duración', value: '2 Años (4 Semestres progresivos • 20 Módulos de formación)' },
      { label: 'Turno de Clases', value: 'Turno Noche (18:30 a 22:00)' },
      { label: 'Requisitos', value: 'Cédula de Identidad y Certificado de Nacimiento' },
      { label: 'Perfil Laboral', value: 'Patronista Industrial, Confeccionista de Alta Costura, Operador de Máquinas Industriales, Taller Propio' }
    ],
    curriculum: [
      {
        level: '1.er Semestre: Técnico Básico',
        modules: ['Matemática Aplicada', 'Bases Generales de Textil y Confección', 'Patronaje Básico de Prendas', 'Confección de Blusas, Camisas y Faldas', 'Módulo Emergente']
      },
      {
        level: '2.º Semestre: Técnico Auxiliar',
        modules: ['Técnicas de Ensamblado', 'Confección y Transformación de Ropa de Dormir', 'Confección de Pantalones', 'Confección de Uniformes Escolares', 'Módulo Emergente']
      },
      {
        level: '3.er Semestre: Técnico Medio I',
        modules: ['Contabilidad Básica I', 'Confección y Transformación de Ropa Infantil', 'Confección de Vestidos', 'Ropa Deportiva', 'Emprendimiento Productivo']
      },
      {
        level: '4.º Semestre: Técnico Medio II',
        modules: ['Traje de Dos Piezas', 'Alta Costura Femenina', 'Ropa de Trabajo Industrial', 'Confección y Transformación de Abrigos', 'Modalidades de Graduación']
      }
    ]
  },
  contaduria: {
    id: 'contaduria',
    category: 'tecnico',
    title: 'Contaduría General',
    quechua: 'Qullqi Qillqay Kamay',
    tag: 'Técnico Medio • 2 Años (2.000 hrs)',
    state: 'Vigente',
    img: 'img/contaduria_new.jpg',
    summary: 'Formación en libros contables, matemática financiera, tributación boliviana (SIN), costos, auditoría básica y paquetes contables.',
    description: 'Prepara profesionales capaces de registrar, clasificar, liquidar impuestos y auditar las operaciones financieras de empresas comerciales, productivas y de servicios bajo la estricta normativa impositiva y laboral de Bolivia.',
    specs: [
      { label: 'Título Otorgado', value: 'Técnico Medio en Contaduría General' },
      { label: 'Duración', value: '2 Años (4 Semestres • 20 Módulos de formación integral)' },
      { label: 'Turno de Clases', value: 'Turno Noche (18:30 a 22:00)' },
      { label: 'Requisitos', value: 'Cédula de Identidad, Certificado de Nacimiento y Certificado de Estudios' },
      { label: 'Perfil Laboral', value: 'Auxiliar Contable, Gestor Tributario y Laboral, Administrador de Planillas, Microempresario' }
    ],
    curriculum: [
      {
        level: '1.er Semestre: Técnico Básico',
        modules: ['Módulo I: Matemática Financiera I', 'Módulo II: Contabilidad I', 'Módulo III: Legislación Laboral y Seguridad Social Aplicada', 'Módulo IV: Documentos Comerciales y Mercantiles', 'Módulo V: Informática Contable']
      },
      {
        level: '2.º Semestre: Técnico Auxiliar',
        modules: ['Módulo VI: Matemática Financiera II', 'Módulo VII: Contabilidad II', 'Módulo VIII: Administración General I', 'Módulo IX: Sistema Tributario (SIN)', 'Módulo X: Módulo Emergente']
      },
      {
        level: '3.er Semestre: Técnico Medio I',
        modules: ['Módulo XI: Contabilidad de Seguros', 'Módulo XII: Contabilidad III', 'Módulo XIII: Contabilidad de Costos I', 'Módulo XIV: Inglés Técnico', 'Módulo XV: Emprendimiento Productivo']
      },
      {
        level: '4.º Semestre: Técnico Medio II',
        modules: ['Módulo XVI: Estadística Aplicada', 'Módulo XVII: Contabilidad Bancaria y Cooperativa', 'Módulo XVIII: Contabilidad de Costos II', 'Módulo XIX: Contabilidad de Sociedades', 'Módulo XX: Modalidades de Graduación']
      }
    ]
  },
  humanistico: {
    id: 'humanistico',
    category: 'humanistico',
    title: 'Bachillerato Humanístico (EPA / ESA)',
    quechua: 'Jatun Yachay Wasichakuy',
    tag: '¡Sé Bachiller en: 2 AÑOS!',
    state: 'Vigente',
    img: 'img/humanistico_new.jpg',
    summary: 'Nivela tus estudios primarios y secundarios para obtener el Diploma de Bachiller en Humanidades en turnos nocturnos compatibles con tu empleo.',
    description: 'Bajo el lema institucional "¡Nunca es tarde para estudiar!", el ciclo humanístico permite a jóvenes y adultos cursar Primaria (Educación Primaria de Adultos - EPA) y Secundaria (Educación Secundaria de Adultos - ESA) de forma acelerada en 2 años, obteniendo el Título de Bachiller con plena validez para ingresar a la Universidad o Institutos Superiores.',
    specs: [
      { label: 'Título Otorgado', value: 'Diploma de Bachiller en Humanidades (Ministerio de Educación)' },
      { label: 'Duración Destacada', value: '¡Sé Bachiller en 2 Años! (Módulos Semestrales Flexibles)' },
      { label: 'Niveles Disponibles', value: 'Primaria (EPA) y Secundaria para Jóvenes y Adultos (ESA)' },
      { label: 'Turno de Clases', value: 'Turno Noche (18:30 a 22:00) adaptado a personas trabajadoras' },
      { label: 'Requisitos', value: 'C.I. vigente, Certificado de Nacimiento y Libreta del último curso aprobado' }
    ],
    curriculum: [
      {
        level: 'Nivel Primario (EPA)',
        modules: ['Alfabetización y Nivelación Básica', 'Comunicación y Lenguajes', 'Matemática Práctica y Cotidiana', 'Ciencias de la Vida y Comunidad']
      },
      {
        level: 'Secundaria - 1.er Año (Medio Común)',
        modules: ['Lenguaje y Comunicación Aplicada', 'Matemática y Lógica Financiera', 'Ciencias Sociales y Realidad Nacional', 'Ciencias de la Naturaleza y Medio Ambiente']
      },
      {
        level: 'Secundaria - 2.º Año (Medio Superior - Graduación)',
        modules: ['Filosofía, Psicología y Valores Comunitarios', 'Física y Química Productiva', 'Inglés / Idioma Originario Quechua', 'Metodología de Proyecto Socioproductivo para Grado']
      }
    ]
  }
};

// ==========================================
// 2. DIRECTORIO DEL PLANTEL DOCENTE Y AUTORIDADES
// (Sin números privados de profesores por privacidad)
// ==========================================
const STAFF_DATA = [
  {
    name: 'Ruben Vargas Cayetano',
    role: 'Director Institucional',
    category: 'directivo',
    phone: '71791522',
    email: 'epemf.nebur@gmail.com',
    initials: 'RV',
    badge: 'Dirección',
    bio: 'Liderazgo pedagógico, coordinación con el Ministerio de Educación y dirección general del CEA Man Césped.'
  },
  {
    name: 'Edith Mendoza Medina',
    role: 'Secretaria General',
    category: 'administrativo',
    phone: '72272179',
    email: 'edithmendoza827@gmail.com',
    initials: 'EM',
    badge: 'Secretaría',
    bio: 'Gestión de admisiones, kardex de calificaciones, trámites de titulación y atención personalizada a participantes.'
  },
  {
    name: 'Sonia Martinez Martinez',
    role: 'Docente / Facilitadora',
    category: 'docente',
    phone: '',
    email: 'soniamartinez77980024@gmail.com',
    initials: 'SM',
    badge: 'Docencia',
    bio: 'Facilitadora de formación integral y procesos pedagógicos para personas jóvenes y adultas.'
  },
  {
    name: 'Soledad Graciela Villarroel Senzano',
    role: 'Docente / Facilitadora',
    category: 'docente',
    phone: '',
    email: '',
    initials: 'SV',
    badge: 'Docencia',
    bio: 'Especialista en metodologías participativas y educación sociocomunitaria productiva.'
  },
  {
    name: 'Jorge Javier Pedro Antezana',
    role: 'Docente / Facilitador',
    category: 'docente',
    phone: '',
    email: '',
    initials: 'JA',
    badge: 'Docencia',
    bio: 'Capacitación modular técnica, destrezas aplicadas y orientación práctica para el empleo.'
  },
  {
    name: 'Jose Luis Casas Quispe',
    role: 'Docente / Facilitador',
    category: 'docente',
    phone: '',
    email: '',
    initials: 'JC',
    badge: 'Docencia',
    bio: 'Facilitador curricular con enfoque en saberes productivos y desarrollo comunitario.'
  },
  {
    name: 'Wilmer Flores Mancilla',
    role: 'Docente / Facilitador',
    category: 'docente',
    phone: '',
    email: 'wily07mr@gmail.com',
    initials: 'WF',
    badge: 'Docencia',
    bio: 'Docencia técnica, desarrollo de habilidades analíticas y tecnologías formativas.'
  },
  {
    name: 'Elena Alvarez Teran',
    role: 'Docente / Facilitadora',
    category: 'docente',
    phone: '',
    email: 'alvarezteranelena5@gmail.com',
    initials: 'EA',
    badge: 'Docencia',
    bio: 'Formación profesional orientada a microemprendimientos y competencias laborales.'
  },
  {
    name: 'Mariel Ivanna Garcia Gutierrez',
    role: 'Docente / Facilitadora',
    category: 'docente',
    phone: '',
    email: 'marielivanagarciagutierrez@gmail.com',
    initials: 'MG',
    badge: 'Docencia',
    bio: 'Facilitación pedagógica orientada al modelo sociocomunitario y proyectos productivos.'
  },
  {
    name: 'Estefania Quispe Mamani',
    role: 'Docente / Facilitadora',
    category: 'docente',
    phone: '',
    email: '',
    initials: 'EQ',
    badge: 'Docencia',
    bio: 'Acompañamiento a participantes y nivelación académica en horarios nocturnos.'
  },
  {
    name: 'Orlando Huanca Quispe',
    role: 'Docente / Facilitador',
    category: 'docente',
    phone: '',
    email: 'ohq0482@gmail.com',
    initials: 'OH',
    badge: 'Docencia',
    bio: 'Orientación académica y metodologías adaptadas para adultos trabajadores.'
  }
];

// ==========================================
// 3. GALERÍA DE FOTOS REALES Y VIDA EN EL CEA
// ==========================================
const GALLERY_ITEMS = [
  // --- FACHADA Y ESPACIOS COMUNES REALES DEL C.E.A. MAN CÉSPED ---
  {
    src: 'img/campus_colegio.jpg',
    title: 'Fachada Principal del C.E.A. Man Césped',
    cat: 'campus',
    desc: 'Frontis oficial en las instalaciones de la U.E. Siglo XX (Av. Los Ángeles, Valle Hermoso). Entorno amplio y seguro para los participantes del turno noche.'
  },
  {
    src: 'img/campus_coliseo_real.jpg',
    title: 'Coliseo Polideportivo Techado',
    cat: 'campus',
    desc: 'Espacio multideportivo cubierto con graderías para actos de inauguración, actividades deportivas, ferias socioproductivas y colación de grado.'
  },
  {
    src: 'img/campus_mural_new.jpg',
    title: 'Mural de Identidad y Pasillo de Ingreso',
    cat: 'campus',
    desc: 'Mural representativo y pasillos cívicos que reciben a la comunidad educativa en el ingreso principal del campus.'
  },
  {
    src: 'img/campus_hero_panoramica.jpg',
    title: 'Vista Panorámica del Campus y Patios',
    cat: 'campus',
    desc: 'Vista amplia de los bloques de aulas, patios centrales y áreas de esparcimiento nocturno en Valle Hermoso, Cochabamba.'
  },
  {
    src: 'img/cea_real_01.jpg',
    title: 'Portón de Acceso y Seguridad Nocturna',
    cat: 'campus',
    desc: 'Ingreso peatonal controlado para garantizar la seguridad de estudiantes, facilitadores y familias en horario de 18:30 a 22:00.'
  },
  {
    src: 'img/sistemas_delegacion_oficial.jpg',
    title: 'Delegación Oficial en Actos Cívicos',
    cat: 'campus',
    desc: 'Participantes y docentes con el estandarte institucional del CEA Man Césped en conmemoraciones cívicas de Cochabamba.'
  },
  {
    src: 'img/cea_real_02.jpg',
    title: 'Bloque de Aulas de Formación Integral',
    cat: 'campus',
    desc: 'Instalaciones equipadas con mobiliario cómodo y buena iluminación para trabajadores que cursan el bachillerato y carreras técnicas.'
  },
  {
    src: 'img/cea_real_05.jpg',
    title: 'Galerías y Patios de Convivencia',
    cat: 'campus',
    desc: 'Espacios de descanso y fraternidad estudiantil durante los recesos pedagógicos en el turno noche.'
  },
  {
    src: 'img/cea_real_09.jpg',
    title: 'Actividades Académicas e Institucionales',
    cat: 'campus',
    desc: '39 años de servicio ininterrumpido en Cochabamba (1987–2026), brindando educación fiscal y gratuita.'
  },
  {
    src: 'img/cea_real_11.jpg',
    title: 'Comunidad Educativa C.E.A. Man Césped',
    cat: 'campus',
    desc: 'Docentes, participantes y directivos comprometidos con la superación personal bajo el lema: Trabajo, Conocimiento y Éxito.'
  },
  {
    src: 'img/cea_real_18.jpg',
    title: 'Encuentro de Facilitadores y Participantes',
    cat: 'campus',
    desc: 'El saber empírico que ya tienes transformado en título oficial avalado por el Ministerio de Educación.'
  },

  // --- TALLERES Y PRÁCTICAS SOCIOPRODUCTIVAS ---
  {
    src: 'img/sistemas_lab_oficial.jpg',
    title: 'Laboratorio de Sistemas Informáticos',
    cat: 'talleres',
    desc: 'Equipamiento completo de computadoras para soporte técnico, ensamblaje, redes, ofimática y desarrollo web con título oficial.'
  },
  {
    src: 'img/sistemas_practica_taller.jpg',
    title: 'Prácticas de Programación y Ofimática',
    cat: 'talleres',
    desc: 'Estudiantes trabajando en proyectos socioproductivos con software libre y herramientas digitales modernas.'
  },
  {
    src: 'img/sistemas_aula_poster.jpg',
    title: 'Aula Técnica de Sistemas Informáticos',
    cat: 'talleres',
    desc: 'Ambiente interactivo con material infográfico para la enseñanza de redes y mantenimiento computacional.'
  },
  {
    src: 'img/cea_real_04.jpg',
    title: 'Ambiente de Capacitación Práctica',
    cat: 'talleres',
    desc: 'Espacios acondicionados para la formación técnica intensiva y talleres socioproductivos.'
  },
  {
    src: 'img/cea_real_07.jpg',
    title: 'Participantes en Clase Nocturna',
    cat: 'talleres',
    desc: 'Jóvenes y adultos adquiriendo competencias profesionales para el mercado laboral boliviano.'
  },
  {
    src: 'img/cea_real_08.jpg',
    title: 'Equipamiento y Prácticas Técnicas',
    cat: 'talleres',
    desc: 'Recursos pedagógicos y maquinaria técnica al servicio de la comunidad de Valle Hermoso.'
  },
  {
    src: 'img/cea_real_13.jpg',
    title: 'Taller de Confección Textil y Diseño',
    cat: 'talleres',
    desc: 'Prácticas en máquinas industriales de costura recta, overlock, bordado y patronaje para alta confección.'
  },
  {
    src: 'img/textil_taller_real.jpg',
    title: 'Taller Industrial de Costura y Confección',
    cat: 'talleres',
    desc: 'Mesas de corte, moldes anatómicos y maquinaria para la producción textil en serie y prendas a medida.'
  },
  {
    src: 'img/contaduria_aula_real.jpg',
    title: 'Aula de Simulación Contable y Financiera',
    cat: 'talleres',
    desc: 'Prácticas de balance contable, planillas salariales, libros de compra/venta y tributación ante el SIN.'
  },
  {
    src: 'img/humanistico_aula_real.jpg',
    title: 'Aula de Bachillerato Acelerado (Secundaria)',
    cat: 'talleres',
    desc: 'Metodología modular para adultos que permite culminar la secundaria y obtener el Diploma de Bachiller en 2 años.'
  },
  {
    src: 'img/cea_real_16.jpg',
    title: 'Defensa de Proyectos Socioproductivos (PSP)',
    cat: 'talleres',
    desc: 'Titulación de Técnico Medio con proyectos socioproductivos orientados a emprendimientos reales.'
  },

  // --- AFICHE OFICIAL ---
  {
    src: 'img/afiche_admision_2026.jpg',
    title: 'Afiche Oficial de Convocatoria 2026',
    cat: 'afiche',
    desc: 'Convocatoria oficial para el 1.er Semestre 2026 en Turno Noche (18:30 a 22:00) en Valle Hermoso, Cochabamba.'
  }
];

// ==========================================
// 4. TEST VOCACIONAL (4 CARRERAS ACTIVAS)
// ==========================================
const TEST_QUESTIONS_QUICK = [
  {
    title: "¿Qué actividad disfrutas más en tu tiempo libre o en tu trabajo cotidiano?",
    options: [
      { text: "Reparar computadoras, usar celulares, redes, internet y diseño de páginas web.", cat: "sistemas" },
      { text: "Diseñar ropa, coser, bordar prendas, patronaje y confección textil.", cat: "textil" },
      { text: "Organizar presupuestos, llevar cuentas de dinero, planillas, facturas e impuestos.", cat: "contaduria" },
      { text: "Nivelar mis estudios escolares, leer, aprender y obtener mi Diploma de Bachiller.", cat: "humanistico" }
    ]
  },
  {
    title: "Cuando algo deja de funcionar en tu casa o taller, ¿cuál es tu reacción?",
    options: [
      { text: "Busco soluciones técnicas en internet y trato de reparar el software o equipo.", cat: "sistemas" },
      { text: "Tomo aguja, hilo o herramientas manuales e invento una solución textil creativa.", cat: "textil" },
      { text: "Calculo costos de materiales y analizo si conviene repararlo o reponerlo.", cat: "contaduria" },
      { text: "Busco información ordenada en libros o consulto para resolverlo con buen criterio.", cat: "humanistico" }
    ]
  },
  {
    title: "¿En qué ambiente de trabajo te visualizas con mayor entusiasmo?",
    options: [
      { text: "En una oficina técnica, centro de cómputo o brindando soporte tecnológico.", cat: "sistemas" },
      { text: "En mi propio taller de confección textil confeccionando ropa de calidad.", cat: "textil" },
      { text: "En una empresa comercial, entidad financiera o administrando un negocio propio.", cat: "contaduria" },
      { text: "Con mi Diploma de Bachiller listo para ingresar a la universidad o instituto superior.", cat: "humanistico" }
    ]
  },
  {
    title: "¿Cuál de estas cualidades define mejor tus talentos personales?",
    options: [
      { text: "Curiosidad por la tecnología, facilidad digital y pensamiento lógico.", cat: "sistemas" },
      { text: "Destreza con las manos, paciencia y gusto por el detalle y la moda.", cat: "textil" },
      { text: "Orden, exactitud con el dinero, honradez y responsabilidad financiera.", cat: "contaduria" },
      { text: "Deseo de superación personal, lectura, constancia y ganas de aprender.", cat: "humanistico" }
    ]
  },
  {
    title: "¿Qué meta de emprendimiento o trabajo te motiva más a mediano plazo?",
    options: [
      { text: "Prestar servicios de soporte informático, redes y desarrollo web para empresas.", cat: "sistemas" },
      { text: "Tener mi propia marca de ropa, confeccionar uniformes o vestidos de fiesta.", cat: "textil" },
      { text: "Ofrecer asesoramiento contable y tributario ante el Servicio de Impuestos Nacionales.", cat: "contaduria" },
      { text: "Tener mi título de bachiller para postular a mejores oportunidades laborales.", cat: "humanistico" }
    ]
  },
  {
    title: "Si hoy asistieras a tu primera clase práctica nocturna, ¿a cuál irías primero?",
    options: [
      { text: "Al Laboratorio de Computación, Redes y Sistemas.", cat: "sistemas" },
      { text: "Al Taller Industrial de Confección Textil con máquinas rectas y overlock.", cat: "textil" },
      { text: "Al Aula de Simulación Contable, Libros y Declaración de Impuestos.", cat: "contaduria" },
      { text: "Al Aula de Nivelación de Secundaria para culminar mis estudios en 2 años.", cat: "humanistico" }
    ]
  }
];

const CHASIDE_PREGUNTAS = [
  "¿Aceptaría trabajar escribiendo artículos en la sección económica de un diario?",
  "¿Se ofrecería para organizar la despedida de soltero/a de uno/a de sus amigos/amigas?",
  "¿Le gustaría dirigir un proyecto de urbanización en su ciudad?",
  "¿A una frustración siempre opone un pensamiento positivo?",
  "¿Se dedicaría a socorrer personas accidentadas o atacadas por asaltantes?",
  "¿Cuándo era niño/a, le interesaba saber cómo estaban construidos los juguetes?",
  "¿Le interesan más los misterios de la Naturaleza que los secretos de la tecnología?",
  "¿Escucha atentamente los problemas planteados por sus amigos/as?",
  "¿Se ofrecería para explicar algo a alguien?",
  "¿Es exigente y crítico con su trabajo?",
  "¿Le atrae armar puzzles o rompecabezas?",
  "¿Puede establecer la diferencia conceptual entre microeconomía y macroeconomía?",
  "¿Usar un uniforme lo/a haría sentirse distinto/a e importante?",
  "¿Participaría, como profesional, en un espectáculo de acrobacia aérea?",
  "¿Organiza su dinero de manera que siempre alcance hasta volver a cobrar?",
  "¿Convence fácilmente a otras personas sobre la validez de sus argumentos?",
  "¿Se encuentra informado/a sobre los nuevos descubrimientos sobre la Teoría del Big-Bang?",
  "¿Ante una situación de emergencia, actúa rápidamente?",
  "¿Cuándo tiene que resolver un problema matemático, es perseverante hasta encontrar la solución?",
  "¿Si fuera convocado/a para planificar, organizar y/o dirigir un campo de deportes, aceptaría?",
  "¿Es Ud. él/la que pone un toque de alegría en las fiestas familiares?",
  "¿Cree que los detalles son tan importantes como el todo?",
  "¿Se sentiría a gusto trabajando en un Hospital?",
  "¿Le gustaría participar en el mantenimiento del orden ante grandes conflictos sociales o catástrofes?",
  "¿Pasaría varias horas leyendo un libro de su interés?",
  "¿Planifica cuidadosamente sus trabajos antes de iniciarlos?",
  "¿Mantiene una relación casi personal con su computadora?",
  "¿Disfruta modelando en arcilla?",
  "¿Ayuda habitualmente a los no videntes a cruzar la calle?",
  "¿Considera importante que, desde la escuela primaria, se fomente la actitud crítica y la participación activa?",
  "¿Acepta que las mujeres formen parte de las Fuerzas Armadas, bajo las mismas normas que los hombres?",
  "¿Le gustaría crear nuevas técnicas para descubrir las patologías de algunas enfermedades, usando un microscopio?",
  "¿Participaría en una campaña de prevención de la enfermedad de Chagas?",
  "¿Le interesa los temas relacionados con el pasado y con la evolución del hombre?",
  "¿Se incluiría en un proyecto de investigación de los movimientos sísmicos y sus consecuencias?",
  "¿Dedica algunas horas de la semana a la realización de actividad física?",
  "¿Le interesan las actividades de mucha acción y de reacción rápida en situaciones imprevistas o de peligro?",
  "¿Se ofrecería para colaborar como voluntario/a en los gabinetes especiales de la NASA?",
  "¿Le gusta más el trabajo manual que el intelectual?",
  "¿Estaría dispuesto/a a renunciar a un momento placentero para prestar su servicio como profesional?",
  "¿Participaría de un trabajo de investigación sobre la violencia social?",
  "¿Le gustaría trabajar en un laboratorio, mientras estudia?",
  "¿Arriesgaría su vida para salvar la de un desconocido?",
  "¿Le agradaría hacer un curso de primeros auxilios?",
  "¿Toleraría empezar tantas veces como fuera necesario hasta obtener un logro deseado?",
  "¿Distribuye los horarios adecuadamente para poder cumplir con lo planeado?",
  "¿Haría un curso para aprender a fabricar las piezas de máquinas o aparatos?",
  "¿Elegiría una profesión que lo/a obligara a estar alejado de su familia por algún tiempo?",
  "¿Se radicaría en una zona agrícola-ganadera?",
  "¿Cuándo está trabajando en grupo, le entusiasma aportar ideas?",
  "¿Le resulta fácil coordinar un grupo de trabajo?",
  "¿Le resultan interesantes las Ciencias Biológicas?",
  "¿Si una empresa importante solicita un profesional para Gerente de Comercialización, le gustaría desempeñar esta función?",
  "¿Se incluiría en un proyecto nacional de desarrollo de la principal fuente de recursos de su provincia?",
  "¿Siente interés por descubrir cuáles son las causas que determinan ciertos fenómenos, aunque no altere su vida?",
  "¿Descubrió algún filósofo o escritor que haya expresado las mismas ideas de Ud. con anticipación?",
  "¿Desearía que le regalen algún instrumento musical?",
  "¿Aceptaría colaborar con el cumplimiento de las normas sociales en lugares públicos?",
  "¿Cree que sus ideas son importantes y hace lo posible para ponerlas en práctica?",
  "¿Cuándo, en la casa, se descompone un artefacto, Ud. se dispone prontamente a repararlo?",
  "¿Formaría parte de un equipo de trabajo orientado a la preservación de la flora y de la fauna?",
  "¿Tiene por costumbre leer revistas relacionadas con los últimos avances científicos y tecnológicos en el área de la salud?",
  "¿Le parece importante y necesario preservar las raíces culturales de nuestro país?",
  "¿Le gustaría realizar una investigación que contribuyera a hacer más justa la distribución de la riqueza?",
  "¿Le gustaría realizar tareas de mantenimiento y conservación de un barco como, por ejemplo, pintura y conservación del casco, mantenimiento de los motores, etc.?",
  "¿Cree que el país debe poseer la más alta tecnología armamentista a cualquier precio?",
  "¿La libertad y la justicia son valores fundamentales en la vida?",
  "¿Aceptaría hacer práctica rentada en una industria de productos alimenticios en el sector de control de calidad?",
  "¿Considera que la salud pública debe ser prioritaria, gratuita y eficiente para todos?",
  "¿Le interesaría investigar sobre una nueva vacuna?",
  "¿Le gusta ocupar el rol de coordinador/a en un equipo de trabajo?",
  "¿En una discusión entre amigos(as), se ofrece como mediador/a?",
  "¿Está de acuerdo con la formación de un cuerpo de soldados profesionales?",
  "¿Lucharía por una causa justa hasta las últimas consecuencias?",
  "¿Le gustaría investigar científicamente sobre cultivos agrícolas?",
  "¿Haría un nuevo diseño de una prenda pasada de moda, ante una reunión imprevista?",
  "¿Visitaría un observatorio astronómico para conocerlo en acción?",
  "¿Le gustaría dirigir el área de importación/exportación de una empresa?",
  "¿Se siente inhibido/a al entrar en un lugar desconocido con gente que no conoce?",
  "¿Le gratificaría trabajar con niños?",
  "¿Haría un logotipo para un afiche de una campaña de prevención del SIDA?",
  "¿Dirigiría un grupo de teatro?",
  "¿Enviaría su Currículum a una empresa automotriz que solicita un gerente para el área de producción?",
  "¿Participaría de un grupo internacional de defensa de algo justo y benéfico para la humanidad?",
  "¿Se costearía sus estudios trabajando?",
  "¿Suele defender las llamadas «causas perdidas»?",
  "¿Ante una emergencia, participaría brindando su ayuda?",
  "¿Sabe el significado de las siglas ADN y ARN?",
  "¿Elegiría una carrera universitaria cuyo instrumento de trabajo fuera la utilización de un idioma extranjero?",
  "¿Trabajar con objetos le resulta más gratificante que trabajar con personas?",
  "¿Le gustaría ser el asesor contable de una empresa?",
  "¿Ante un llamado solidario, se ofrecería para cuidar a un enfermo?",
  "¿Se siente atraído/a por la investigación de los misterios del universo como, por ejemplo, la capa de ozono?",
  "¿El trabajo individual le resulta más rápido y efectivo que el trabajo grupal?",
  "¿Dedicaría parte de su tiempo a ayudar a los habitantes de zonas carenciadas?",
  "¿Cuándo decora un ambiente, tiene en cuenta la combinación de los colores, el estilo preferido, etc.?",
  "¿Le gustaría trabajar como profesional dirigiendo la construcción de una empresa hidroeléctrica?",
  "¿Sabe el significado de la sigla PBI?"
];

const CHASIDE_CLAVE = {
  C: [98, 12, 64, 53, 85, 1, 78, 15, 20, 51, 71, 2, 91, 46],
  H: [9, 34, 80, 25, 95, 67, 41, 63, 74, 30, 56, 72, 89, 86],
  A: [21, 45, 96, 57, 28, 11, 50, 22, 3, 39, 81, 76, 36, 82],
  S: [33, 92, 70, 8, 87, 62, 23, 69, 44, 40, 16, 29, 52, 4],
  I: [75, 6, 19, 38, 60, 27, 83, 26, 54, 59, 47, 90, 97, 10],
  D: [84, 31, 48, 73, 5, 65, 14, 13, 37, 66, 58, 18, 24, 43],
  E: [77, 42, 88, 17, 93, 32, 68, 94, 49, 7, 35, 79, 61, 55]
};

const CHASIDE_AREAS = {
  C: 'Administración y Ciencias Contables',
  H: 'Humanidades, Ciencias Sociales y Educación',
  A: 'Artes, Diseño Textil y Creatividad',
  S: 'Ciencias de la Salud y Cuidado Comunitario',
  I: 'Ingeniería, Computación y Tecnología',
  D: 'Defensa, Seguridad y Orden',
  E: 'Ciencias Agrarias, Exactas y de la Naturaleza'
};

const CHASIDE_CARRERA = {
  C: 'contaduria',
  H: 'humanistico',
  A: 'textil',
  I: 'sistemas'
};

const CHASIDE_MIN = 6;

// Variables de estado del test
let currentTestMode = 'quick'; // 'quick' | 'chaside'
let currentQuestionIndex = 0;
let quickScores = { sistemas: 0, textil: 0, contaduria: 0, humanistico: 0 };
let quickHistory = [];
let chasideAnswers = new Array(98).fill(null);
let chasideLock = false;

// ==========================================
// 5. CONTROLADOR DE NAVEGACIÓN SPA
// ==========================================
function navigate(viewName, targetAnchor = null) {
  if (window.event) window.event.preventDefault();

  const views = document.querySelectorAll('.view-page');
  views.forEach(v => v.classList.remove('active'));

  const viewMap = {
    'inicio': 'view-landing',
    'detalle': 'view-detail',
    'test': 'view-test'
  };

  const targetView = document.getElementById(viewMap[viewName]);
  if (targetView) targetView.classList.add('active');

  if (viewName === 'test') {
    showTestIntro();
  }

  if (viewName === 'inicio' && targetAnchor) {
    setTimeout(() => {
      const el = document.getElementById(targetAnchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMobileNav(false);
  closeSectionsMenu();

  // Sincronizar estado activo en la barra de navegación móvil inferior
  const mobItems = document.querySelectorAll('.mob-nav-item');
  mobItems.forEach(i => i.classList.remove('active'));
  if (viewName === 'test') {
    const it = document.getElementById('mob-nav-test');
    if (it) it.classList.add('active');
  } else if (targetAnchor === 'oferta') {
    const it = document.getElementById('mob-nav-oferta');
    if (it) it.classList.add('active');
  } else if (viewName === 'inicio' && !targetAnchor) {
    const it = document.getElementById('mob-nav-inicio');
    if (it) it.classList.add('active');
  }
}

// ==========================================
// 6. RENDERIZADO DE CARRERAS (SOLO LAS 4 VIGENTES)
// ==========================================
function renderCareers(filter = 'all') {
  const grid = document.getElementById('careers-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const careers = Object.values(CAREERS_DATA);

  const filtered = careers.filter(c => {
    if (filter === 'all') return true;
    return c.category === filter;
  });

  filtered.forEach(c => {
    const card = document.createElement('div');
    card.className = 'career-card';
    const categoryLabel = c.category === 'tecnico' ? 'TÉCNICO MEDIO (2 AÑOS)' : 'BACHILLERATO ACELERADO';
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${c.img}" alt="${c.title}" class="card-img" loading="lazy">
        <span class="card-img-overlay-badge">${categoryLabel}</span>
      </div>
      <div class="card-body">
        <div class="card-header-meta">
          <span class="pill pill-state vigente">${c.state}</span>
          <span class="card-spec-pill">${c.tag}</span>
        </div>
        <h3 class="card-title">${c.title}</h3>
        <p class="card-quechua-mini">"${c.quechua}"</p>
        <p class="card-desc">${c.summary}</p>
        <div class="card-footer">
          <button class="btn-card-detail" onclick="openDetail('${c.id}')">
            Ver Plan y Malla Curricular &rarr;
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterAndScroll(category) {
  navigate('inicio', 'oferta');
  const tabs = document.querySelectorAll('.filter-btn');
  tabs.forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-filter') === category);
  });
  renderCareers(category);
}

// ==========================================
// 7. RENDERIZADO DEL PLANTEL DOCENTE
// (Privacidad garantizada: Sin teléfonos de docentes)
// ==========================================
function renderStaff(filter = 'all') {
  const grid = document.getElementById('staff-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const filtered = STAFF_DATA.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  filtered.forEach(member => {
    const card = document.createElement('div');
    card.className = 'staff-card';

    // Si es directivo tiene teléfono institucional. Si es docente, enlace a Secretaría
    let contactHtml = '';
    if (member.phone) {
      const waLink = `https://wa.me/591${member.phone}?text=Hola%20${encodeURIComponent(member.name)},%20deseo%20comunicarme%20con%20el%20CEA%20Man%20Cesped.`;
      contactHtml = `
        <a href="${waLink}" target="_blank" class="staff-btn-wa" title="Chatear por WhatsApp">
          <span>WhatsApp Oficial (${member.phone})</span>
        </a>
      `;
    } else {
      const secLink = `https://wa.me/59172272179?text=Hola%20Secretar%C3%ADa%20CEA%20Man%20Cesped,%20deseo%20consultar%20sobre%20clases%20con%20${encodeURIComponent(member.name)}.`;
      contactHtml = `
        <a href="${secLink}" target="_blank" class="staff-btn-sec" title="Consultar en Secretaría">
          <span>Consultar en Secretaría</span>
        </a>
      `;
    }

    card.innerHTML = `
      <div class="staff-card-header">
        <div class="staff-avatar">${member.initials}</div>
        <span class="staff-badge ${member.category}">${member.badge}</span>
      </div>
      <div class="staff-card-body">
        <h3 class="staff-name">${member.name}</h3>
        <p class="staff-role">${member.role}</p>
        <p class="staff-bio">${member.bio}</p>
      </div>
      <div class="staff-card-footer">
        ${contactHtml}
        ${member.email ? `<a href="mailto:${member.email}" class="staff-btn-mail" title="Enviar correo">✉</a>` : ''}
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================
// 8. RENDERIZADO DE GALERÍA DE FOTOS REALES
// ==========================================
function renderGallery(filter = 'all') {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const filtered = GALLERY_ITEMS.filter(item => {
    if (filter === 'all') return true;
    return item.cat === filter;
  });

  filtered.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'gallery-card';
    el.onclick = () => openPhotoModal(item.src, item.title, item.desc, filtered, idx);
    el.innerHTML = `
      <div class="gallery-card-img-wrap">
        <img src="${item.src}" alt="${item.title}" loading="lazy" class="gallery-card-img">
        <div class="gallery-card-overlay">
          <span class="gallery-zoom-icon">🔍</span>
          <h4>${item.title}</h4>
        </div>
      </div>
      <div class="gallery-card-info">
        <strong>${item.title}</strong>
        <p>${item.desc}</p>
      </div>
    `;
    grid.appendChild(el);
  });
}

// ==========================================
// 8.5. VISUALIZADOR INTERACTIVO DE TALLERES Y TECNOLOGÍA
// ==========================================
const VISUALIZER_SPACES = {
  sistemas: {
    title: 'Laboratorio de Sistemas Informáticos',
    quechua: '«Antañiqiy Kamay llamk\'ana wasi — Allin yachay»',
    resolucion: 'R.M. 1040/2022 • Título de Técnico Medio',
    hours: '2.000 Horas Académicas',
    careerKey: 'sistemas',
    desc: 'Espacio tecnológico acondicionado para la formación práctica en soporte técnico de computadoras, redes cableadas y WiFi, desarrollo de aplicaciones web y proyectos digitales socioproductivos.',
    defaultImg: 'img/sistemas_lab_oficial.jpg',
    defaultCaption: 'Vista panorámica del Laboratorio Central de Computación con estaciones de trabajo individuales y pizarrón técnico.',
    gallery: [
      { src: 'img/sistemas_lab_oficial.jpg', label: 'Laboratorio Central (Estaciones PC)', caption: 'Laboratorio Central de Computación con estaciones de trabajo individuales y pizarrón técnico.' },
      { src: 'img/sistemas_delegacion_oficial.jpg', label: 'Delegación Oficial de Sistemas', caption: 'Participantes y facilitadores con el estandarte oficial de Sistemas Informáticos.' },
      { src: 'img/sistemas_practica_taller.jpg', label: 'Práctica y Trabajo en Equipo', caption: 'Estudiantes en dinámicas prácticas de resolución de problemas informáticos.' },
      { src: 'img/sistemas_aula_poster.jpg', label: 'Aula Técnica y Recursos', caption: 'Ambiente de aula con esquemas técnicos y materiales pedagógicos.' }
    ],
    equipment: [
      'Computadoras de escritorio para ensamblaje, soporte y mantenimiento preventivo.',
      'Monitores y periféricos completos en cada estación individual.',
      'Red de datos cableada LAN y conectividad WiFi para laboratorios de redes.',
      'Herramientas especializadas de ensamble, crimpado UTP y testers de conectividad.',
      'Pizarrón de diagramación lógica para algoritmos y bases de datos relacionales.'
    ],
    skills: [
      'Soporte Técnico de PCs',
      'Redes Cableadas & WiFi',
      'Desarrollo Web Frontend',
      'Bases de Datos Relacionales',
      'Ofimática Empresarial',
      'Mantenimiento Preventivo'
    ],
    psp: 'Los estudiantes de Sistemas Informáticos desarrollaron este sitio web oficial institucional como proyecto socioproductivo real, además de brindar soporte técnico a microempresas y unidades educativas de Valle Hermoso.'
  },
  textil: {
    title: 'Taller Industrial de Textil y Confección',
    quechua: '«P\'acha Ruray llamk\'ana wasi — Sumaq p\'achakuna»',
    resolucion: 'R.M. 1040/2022 • Título de Técnico Medio',
    hours: '2.000 Horas Académicas',
    careerKey: 'textil',
    desc: 'Taller equipado con maquinaria de costura industrial, amplias mesas de corte y herramientas de patronaje para la producción en serie de prendas de vestir y diseño de modas.',
    defaultImg: 'img/textil_taller_real.jpg',
    defaultCaption: 'Ambiente amplio del Taller Textil con mesas de patronaje, guirnaldas cívicas y maquinaria industrial.',
    gallery: [
      { src: 'img/textil_taller_real.jpg', label: 'Taller Textil y Mesas de Corte', caption: 'Ambiente amplio del Taller Textil con mesas de patronaje y maquinaria industrial.' },
      { src: 'img/taller_textil.jpg', label: 'Maquinaria y Estaciones de Costura', caption: 'Máquinas de coser industriales y mesas de corte y confección.' },
      { src: 'img/cea_real_08.jpg', label: 'Equipamiento y Materiales', caption: 'Recursos pedagógicos y maquinaria al servicio de los participantes.' },
      { src: 'img/cea_real_13.jpg', label: 'Patronaje y Muestras de Prendas', caption: 'Prácticas de diseño y confección con acabados de alta calidad.' }
    ],
    equipment: [
      'Máquinas de coser industriales rectas, overlock (remalladoras) y collaretas.',
      'Grandes mesas de trazado, patronaje a escala real y corte textil.',
      'Planchas de vapor industriales y estaciones de asentado de costura.',
      'Herramientas de precisión: reglas francesas, cintas métricas, tijeras de sastre y tizas.',
      'Muestrarios de telas, hilos industriales y moldes estandarizados.'
    ],
    skills: [
      'Corte y Confección Industrial',
      'Patronaje y Escalado de Moldes',
      'Operación de Overlock y Rectas',
      'Diseño de Ropa Deportiva y Casual',
      'Acabados y Control de Calidad',
      'Emprendimiento Textil Autónomo'
    ],
    psp: 'Confección de uniformes escolares, buzos deportivos y prendas de vestir para la comunidad circundante a precio de costo, fomentando la creación de talleres propios y cooperativas familiares.'
  },
  contaduria: {
    title: 'Aula de Simulación Contable y Tributaria',
    quechua: '«Yuyay Yapay llamk\'ana wasi — Qullqi kamachiy»',
    resolucion: 'R.M. 1040/2022 • Título de Técnico Medio',
    hours: '2.000 Horas Académicas',
    careerKey: 'contaduria',
    desc: 'Ambiente pedagógico estructurado para la práctica de registros contables, análisis de estados financieros y simulación de trámites impositivos ante el Servicio de Impuestos Nacionales.',
    defaultImg: 'img/contaduria_aula_real.jpg',
    defaultCaption: 'Aula de Contaduría con murales del Plan de Cuentas, pizarra de balance y trabajo en equipos.',
    gallery: [
      { src: 'img/contaduria_aula_real.jpg', label: 'Plan de Cuentas y Aula Práctica', caption: 'Aula de Contaduría con murales del Plan de Cuentas y pizarra de balance.' },
      { src: 'img/contaduria_new.jpg', label: 'Registros y Libros Contables', caption: 'Práctica guiada de llenado de libros diarios, mayores y balances.' },
      { src: 'img/cea_real_05.jpg', label: 'Ambiente de Formación Nocturna', caption: 'Espacio adaptado para participantes trabajadores en turno noche.' },
      { src: 'img/cea_real_07.jpg', label: 'Facilitación Docente Guiada', caption: 'Clases prácticas con asesoramiento paso a paso de docentes con experiencia.' }
    ],
    equipment: [
      'Murales y paneles didácticos con el Plan Único de Cuentas oficial de Bolivia.',
      'Simuladores de libros contables: Diario, Mayor, Balances de Comprobación y Hojas de Trabajo.',
      'Formularios y normativas actualizadas del Servicio de Impuestos Nacionales (SIN).',
      'Modelos de planillas de sueldos con cálculo de aportes a la Gestora Pública y RC-IVA.',
      'Equipos de apoyo para el aprendizaje de sistemas contables computarizados.'
    ],
    skills: [
      'Llenado de Libros Diarios y Mayores',
      'Estados Financieros y Balances',
      'Declaración de Impuestos SIAT en línea',
      'Costos de Producción y Presupuestos',
      'Planillas Salariales y Beneficios Sociales',
      'Bancarización y Auditoría Básica'
    ],
    psp: 'Consultoría contable y tributaria gratuita a gremiales, pequeños comerciantes y artesanos de Valle Hermoso para la regularización de NITs y elaboración de balances de apertura sencillos.'
  },
  humanistico: {
    title: 'Aulas de Bachillerato Humanístico (ESA)',
    quechua: '«Wayna Machu Yachaywasi — Iskay watapi bachiller»',
    resolucion: 'Ley Avelino Siñani N.° 070 • ¡Sé Bachiller en 2 Años!',
    hours: 'Educación Secundaria de Adultos',
    careerKey: 'humanistico',
    desc: 'Aulas acondicionadas para jóvenes y adultos que retoman sus estudios secundarios, con metodología modular adaptada a trabajadores que permite culminar la secundaria en 2 años.',
    defaultImg: 'img/humanistico_aula_real.jpg',
    defaultCaption: 'Aula de formación secundaria con materiales didácticos, globo terráqueo y participantes nocturnos.',
    gallery: [
      { src: 'img/humanistico_aula_real.jpg', label: 'Aula con Material Didáctico', caption: 'Aula de formación secundaria con globo terráqueo y participantes nocturnos.' },
      { src: 'img/humanistico_new.jpg', label: 'Estudio y Superación Personal', caption: 'Participantes jóvenes y adultos avanzando hacia el título de Bachiller.' },
      { src: 'img/cea_real_02.jpg', label: 'Instalaciones U.E. Siglo XX', caption: 'Ambientes confortables y seguros para el turno noche.' },
      { src: 'img/campus_coliseo_real.jpg', label: 'Áreas Deportivas y de Encuentro', caption: 'Coliseo deportivo techado para actividades integrales.' }
    ],
    equipment: [
      'Material didáctico interactivo: esferas terrestres, mapas murales y esquemas conceptuales.',
      'Módulos de aprendizaje autodidáctico del Ministerio de Educación.',
      'Pizarras acrílicas amplias y mobiliario adecuado para adultos.',
      'Guías de nivelación pedagógica y material bibliográfico de apoyo.',
      'Ambientes bien iluminados y ventilados en horario nocturno.'
    ],
    skills: [
      'Comprensión Lectora y Expresión Oral',
      'Matemáticas Aplicadas a la Economía Familiar',
      'Historia y Realidad Nacional Boliviana',
      'Ciencias Naturales y Conciencia Ecológica',
      'Desarrollo Humano y Ciudadanía Crítica',
      'Preparación para la Educación Superior'
    ],
    psp: 'Proyectos de reforestación comunitaria, investigación de la historia barrial de Valle Hermoso y ferias comunitarias de salud integral y derechos ciudadanos.'
  },
  campus: {
    title: 'Fachada, Campus y Coliseo Polideportivo',
    quechua: '«Kuraq Yachaywasi K\'iti — Valle Hermoso llaqtapi»',
    resolucion: 'Infraestructura U.E. Siglo XX • Amplia y Segura',
    hours: 'Turno Noche: 18:30 a 22:00',
    careerKey: null,
    desc: 'Instalaciones completas de la Unidad Educativa Siglo XX sobre la Av. Los Ángeles, al servicio del CEA Man Césped en horario nocturno, contando con fachada institucional, coliseo techado, patios iluminados y accesos seguros.',
    defaultImg: 'img/campus_colegio.jpg',
    defaultCaption: 'Fachada principal y frontis oficial de la U.E. Siglo XX (Av. Los Ángeles, Valle Hermoso), sede del C.E.A. Man Césped.',
    gallery: [
      { src: 'img/campus_colegio.jpg', label: 'Fachada Principal y Frontis', caption: 'Fachada oficial de la U.E. Siglo XX sobre la Av. Los Ángeles (Valle Hermoso).' },
      { src: 'img/campus_coliseo_real.jpg', label: 'Coliseo Polideportivo Techado', caption: 'Coliseo techado con graderías para actividades deportivas, cívicas y actos de graduación.' },
      { src: 'img/campus_mural_new.jpg', label: 'Mural de Identidad y Acceso', caption: 'Mural artístico institucional y pasillo de ingreso principal al campus.' },
      { src: 'img/campus_hero_panoramica.jpg', label: 'Vista Panorámica del Predio', caption: 'Vista panorámica del campus Siglo XX con amplios patios e iluminación nocturna.' },
      { src: 'img/cea_real_01.jpg', label: 'Portón de Acceso y Control', caption: 'Control de ingreso peatonal para máxima seguridad de los estudiantes nocturnos.' },
      { src: 'img/cea_real_11.jpg', label: 'Comunidad Educativa CEA', caption: 'Estudiantes, docentes y directivos en actividades comunitarias del turno noche.' }
    ],
    equipment: [
      'Frontis e ingreso peatonal seguro sobre la Av. Los Ángeles (Valle Hermoso).',
      'Coliseo techado con cancha reglamentaria para fútsal y básquetbol con graderías.',
      'Sistema de iluminación LED de alta potencia en patios y pasillos para el turno noche.',
      'Patios cívicos amplios para ferias socioproductivas y actos cívicos institucionales.',
      'Excelente conectividad vial con líneas de trufis y micros (101, 102, 103).'
    ],
    skills: [
      'Deporte y Vida Saludable Nocturna',
      'Integración Comunitaria Intergeneracional',
      'Participación en Ferias Socioproductivas',
      'Expresión Cívica y Cultural',
      'Convivencia Democrática y Solidaria',
      'Liderazgo Social y Comunitario'
    ],
    psp: 'Organización de la Gran Feria Socioproductiva Anual donde los estudiantes exponen sus creaciones de Textil, Sistemas y Contaduría a la población general de Cochabamba.'
  }
};

let currentVisualizerSpace = 'sistemas';
let currentVisualizerSpaceData = null;
let currentVisualizerIndex = 0;
let currentVisualizerImage = { src: 'img/sistemas_lab_oficial.jpg', title: 'Laboratorio de Sistemas Informáticos', caption: '' };

function selectVisualizerSpace(spaceKey) {
  const data = VISUALIZER_SPACES[spaceKey];
  if (!data) return;

  currentVisualizerSpace = spaceKey;
  currentVisualizerSpaceData = data;
  currentVisualizerIndex = 0;

  // Actualizar botones de pestañas
  const tabBtns = document.querySelectorAll('.vis-tab-btn');
  tabBtns.forEach(btn => {
    const isSelected = btn.getAttribute('data-space') === spaceKey;
    btn.classList.toggle('active', isSelected);
    btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
  });

  // Actualizar textos principales
  const elTitle = document.getElementById('vis-space-title');
  const elQuechua = document.getElementById('vis-space-quechua');
  const elDesc = document.getElementById('vis-space-desc');
  const elRes = document.getElementById('vis-resolucion-tag');
  const elHours = document.getElementById('vis-hours-tag');
  const elPsp = document.getElementById('vis-psp-desc');

  if (elTitle) elTitle.textContent = data.title;
  if (elQuechua) elQuechua.textContent = data.quechua;
  if (elDesc) elDesc.textContent = data.desc;
  if (elRes) elRes.textContent = data.resolucion;
  if (elHours) elHours.textContent = data.hours;
  if (elPsp) elPsp.textContent = data.psp;

  // Actualizar imagen principal y caption
  setVisualizerImage(data.defaultImg, data.defaultCaption, null);

  // Actualizar lista de equipamiento
  const elEquip = document.getElementById('vis-equipment-list');
  if (elEquip) {
    elEquip.innerHTML = data.equipment.map(item => `<li>${item}</li>`).join('');
  }

  // Actualizar chips de habilidades
  const elSkills = document.getElementById('vis-skills-grid');
  if (elSkills) {
    elSkills.innerHTML = data.skills.map(skill => `<span class="vis-chip">${skill}</span>`).join('');
  }

  // Actualizar miniaturas
  const thumbsGrid = document.getElementById('vis-thumbs-grid');
  if (thumbsGrid) {
    thumbsGrid.innerHTML = '';
    data.gallery.forEach((item, idx) => {
      const btn = document.createElement('button');
      btn.className = `vis-thumb-btn ${idx === 0 ? 'active' : ''}`;
      btn.title = item.label;
      btn.onclick = () => {
        currentVisualizerIndex = idx;
        setVisualizerImage(item.src, item.caption, btn);
      };
      btn.innerHTML = `
        <img src="${item.src}" alt="${item.label}" class="vis-thumb-img" loading="lazy">
        <span class="vis-thumb-tooltip">${item.label}</span>
      `;
      thumbsGrid.appendChild(btn);
    });
  }

  // Actualizar botón de acción principal
  const elBtnDetail = document.getElementById('vis-btn-detail');
  if (elBtnDetail) {
    if (data.careerKey) {
      elBtnDetail.style.display = 'inline-flex';
      const words = data.title.split(' ');
      elBtnDetail.textContent = `📚 Ver Malla Curricular (${words[2] || words[1] || ''} ${words[3] || ''})`;
      elBtnDetail.onclick = () => openDetail(data.careerKey);
    } else {
      elBtnDetail.style.display = 'inline-flex';
      elBtnDetail.textContent = '📍 Cómo Llegar al Campus Siglo XX';
      elBtnDetail.onclick = () => navigate('inicio', 'contacto');
    }
  }
}

function setVisualizerImage(src, caption, thumbElem) {
  const mainImg = document.getElementById('vis-main-img');
  const capElem = document.getElementById('vis-space-caption');

  if (mainImg) {
    mainImg.style.opacity = '0.35';
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = '1';
    }, 140);
  }

  if (capElem) {
    capElem.textContent = caption || '';
  }

  currentVisualizerImage = {
    src: src,
    title: document.getElementById('vis-space-title') ? document.getElementById('vis-space-title').textContent : 'Taller CEA Man Césped',
    caption: caption || ''
  };

  const allThumbs = document.querySelectorAll('.vis-thumb-btn');
  allThumbs.forEach(t => t.classList.remove('active'));
  if (thumbElem) {
    thumbElem.classList.add('active');
  } else if (allThumbs[currentVisualizerIndex]) {
    allThumbs[currentVisualizerIndex].classList.add('active');
  }
}

function prevVisualizerImage(e) {
  if (e) e.stopPropagation();
  if (!currentVisualizerSpaceData || !currentVisualizerSpaceData.gallery || currentVisualizerSpaceData.gallery.length === 0) return;
  const len = currentVisualizerSpaceData.gallery.length;
  currentVisualizerIndex = (currentVisualizerIndex - 1 + len) % len;
  const item = currentVisualizerSpaceData.gallery[currentVisualizerIndex];
  const allThumbs = document.querySelectorAll('.vis-thumb-btn');
  setVisualizerImage(item.src, item.caption, allThumbs[currentVisualizerIndex]);
}

function nextVisualizerImage(e) {
  if (e) e.stopPropagation();
  if (!currentVisualizerSpaceData || !currentVisualizerSpaceData.gallery || currentVisualizerSpaceData.gallery.length === 0) return;
  const len = currentVisualizerSpaceData.gallery.length;
  currentVisualizerIndex = (currentVisualizerIndex + 1) % len;
  const item = currentVisualizerSpaceData.gallery[currentVisualizerIndex];
  const allThumbs = document.querySelectorAll('.vis-thumb-btn');
  setVisualizerImage(item.src, item.caption, allThumbs[currentVisualizerIndex]);
}

function openVisualizerModal() {
  openPhotoModal(currentVisualizerImage.src, currentVisualizerImage.title, currentVisualizerImage.caption);
}

function initVisualizer() {
  selectVisualizerSpace('sistemas');
}

// ==========================================
// 9. VISTA DETALLE DE CARRERA (TABS)
// ==========================================
function switchDetailTab(tabName) {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
  });

  const tabPanels = document.querySelectorAll('.tab-panel');
  tabPanels.forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-panel-${tabName}`);
  });
}

function openDetail(careerId) {
  const data = CAREERS_DATA[careerId];
  if (!data) return;

  document.getElementById('detail-title').textContent = data.title;
  document.getElementById('detail-quechua').textContent = data.quechua ? `"${data.quechua}"` : '';
  document.getElementById('detail-desc').textContent = data.description;
  document.getElementById('detail-img').src = data.img;
  document.getElementById('detail-pill').textContent = data.tag;

  // Llenar especificaciones
  const specsList = document.getElementById('detail-specs');
  specsList.innerHTML = '';
  data.specs.forEach(s => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${s.label}:</strong> ${s.value}`;
    specsList.appendChild(li);
  });

  // Llenar malla curricular modular
  const currBox = document.getElementById('detail-curriculum');
  currBox.innerHTML = '';
  data.curriculum.forEach(lvl => {
    const levelDiv = document.createElement('div');
    levelDiv.className = 'curriculum-level-item';
    levelDiv.innerHTML = `
      <span class="level-badge">${lvl.level}</span>
      <div class="curriculum-module-list">
        ${lvl.modules.map(m => `<span class="module-chip">${m}</span>`).join('')}
      </div>
    `;
    currBox.appendChild(levelDiv);
  });

  // Taller e Infraestructura
  const galleryImg = document.getElementById('detail-gallery-img');
  const galleryTitle = document.getElementById('detail-gallery-title');
  const galleryDesc = document.getElementById('detail-gallery-desc');

  const galleryInfo = {
    sistemas: {
      img: 'img/sistemas_lab_oficial.jpg',
      title: 'Laboratorio de Informática, Redes y Sistemas',
      desc: 'Equipamiento computacional para prácticas de soporte preventivo, redes cableadas/WiFi, desarrollo web y programación.'
    },
    textil: {
      img: 'img/cea_real_08.jpg',
      title: 'Taller Industrial Textil y de Confección',
      desc: 'Maquinaria industrial de última generación (rectas, overlock y collaretas), amplias mesas de corte y herramientas de patronaje.'
    },
    contaduria: {
      img: 'img/cea_real_05.jpg',
      title: 'Aula de Simulación Contable, Tributaria y Costos',
      desc: 'Ambientes pedagógicos para llenado de libros contables, paquetes computarizados y trámites tributarios del SIN.'
    },
    humanistico: {
      img: 'img/cea_real_02.jpg',
      title: 'Aulas de Educación Secundaria para Jóvenes y Adultos',
      desc: 'Infraestructura cómoda y segura en U.E. Siglo XX, adaptada especialmente para participantes del turno noche.'
    }
  };

  const gData = galleryInfo[careerId] || {
    img: data.img,
    title: 'Instalaciones del CEA Man Césped',
    desc: 'Ambientes orientados al modelo sociocomunitario productivo.'
  };

  if (galleryImg) galleryImg.src = gData.img;
  if (galleryTitle) galleryTitle.textContent = gData.title;
  if (galleryDesc) galleryDesc.textContent = gData.desc;

  // Botón WhatsApp Secretaría Oficial
  const waBtn = document.getElementById('detail-wa-btn');
  if (waBtn) {
    waBtn.href = `https://wa.me/59172272179?text=Hola%20Secretar%C3%ADa%20CEA%20Man%20Cesped,%20deseo%20inscribirme%20o%20recibir%20informaci%C3%B3n%20sobre%20${encodeURIComponent(data.title)}.`;
  }

  switchDetailTab('info');
  navigate('detalle');
}

// ==========================================
// 10. TEST VOCACIONAL: PANTALLA INTRODUCTORIA Y EJECUCIÓN
// ==========================================
function showTestIntro() {
  document.getElementById('test-intro-box').style.display = 'block';
  document.getElementById('test-question-box').style.display = 'none';
  document.getElementById('test-result-box').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startTestExecution(mode = 'quick') {
  currentTestMode = mode;
  currentQuestionIndex = 0;
  quickScores = { sistemas: 0, textil: 0, contaduria: 0, humanistico: 0 };
  quickHistory = [];
  chasideAnswers = new Array(98).fill(null);
  chasideLock = false;

  const introBox = document.getElementById('test-intro-box');
  const questionBox = document.getElementById('test-question-box');
  const resultBox = document.getElementById('test-result-box');

  if (introBox) introBox.style.display = 'none';
  if (questionBox) questionBox.style.display = 'block';
  if (resultBox) resultBox.style.display = 'none';

  renderCurrentTestQuestion();

  // Desplazamiento garantizado hacia la parte superior de la pregunta
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    if (questionBox) {
      questionBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 40);
}

function renderCurrentTestQuestion() {
  if (currentTestMode === 'quick') {
    renderQuickQuestion();
  } else {
    renderChasideQuestion();
  }
}

// A) RENDERIZADO TEST RÁPIDO (6 PREGUNTAS)
function renderQuickQuestion() {
  const q = TEST_QUESTIONS_QUICK[currentQuestionIndex];
  const total = TEST_QUESTIONS_QUICK.length;

  document.getElementById('test-mode-badge').textContent = 'Test Rápido (2 minutos)';
  document.getElementById('test-indicator').textContent = `Pregunta ${currentQuestionIndex + 1} de ${total}`;
  document.getElementById('test-progress-bar').style.width = `${((currentQuestionIndex + 1) / total) * 100}%`;
  document.getElementById('test-question-title').textContent = q.title;

  const grid = document.getElementById('test-options-grid');
  grid.className = 'test-options-grid';
  grid.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'test-option-btn';
    btn.innerHTML = `
      <span class="option-letter">${letters[idx]}</span>
      <span>${opt.text}</span>
    `;
    btn.onclick = () => selectQuickOption(opt.cat);
    grid.appendChild(btn);
  });

  document.getElementById('btn-prev-question').style.display = currentQuestionIndex > 0 ? 'inline-flex' : 'none';
  document.getElementById('btn-next-question').style.display = 'none';
}

function selectQuickOption(category) {
  quickScores[category]++;
  quickHistory.push(category);

  if (currentQuestionIndex < TEST_QUESTIONS_QUICK.length - 1) {
    currentQuestionIndex++;
    renderQuickQuestion();
  } else {
    showQuickResults();
  }
}

function showQuickResults() {
  document.getElementById('test-question-box').style.display = 'none';
  const resultBox = document.getElementById('test-result-box');
  resultBox.style.display = 'block';

  let winner = 'sistemas';
  let maxScore = -1;
  for (const cat in quickScores) {
    if (quickScores[cat] > maxScore) {
      maxScore = quickScores[cat];
      winner = cat;
    }
  }

  const c = CAREERS_DATA[winner];
  document.getElementById('result-pre').textContent = 'Tu carrera recomendada por el Test Rápido es:';
  document.getElementById('result-winner-title').textContent = c.title;
  document.getElementById('result-desc').textContent = `Tus preferencias coinciden plenamente con el perfil de ${c.title}. ${c.summary}`;

  const actions = document.getElementById('result-actions');
  actions.innerHTML = `
    <button class="btn btn-primary" onclick="openDetail('${winner}')">Ver Carrera de ${c.title} &rarr;</button>
    <a class="btn btn-whatsapp" target="_blank" href="https://wa.me/59172272179?text=Hola%20Secretar%C3%ADa%20CEA%20Man%20Cesped,%20complet%C3%A9%20el%20test%20vocacional%20y%20mi%20carrera%20af%C3%ADn%20es%20${encodeURIComponent(c.title)}.%20Deseo%20inscribirme.">Inscribirme por WhatsApp</a>
    <button class="btn btn-outline" onclick="showTestIntro()">Volver a elegir test</button>
  `;

  // Barras de puntaje rápido
  const bars = document.getElementById('result-bars');
  bars.innerHTML = '<h3 class="chaside-title">Afinidad por Opciones Educativas</h3>' + Object.keys(quickScores).map(cat => {
    const s = quickScores[cat];
    const car = CAREERS_DATA[cat];
    return `
      <div class="cb-row ${cat === winner ? 'top' : ''}">
        <div class="cb-label">${car.title}</div>
        <div class="cb-track"><div class="cb-fill" style="width:${Math.round((s / 6) * 100)}%"></div></div>
        <div class="cb-score">${s} / 6</div>
      </div>
    `;
  }).join('');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// B) RENDERIZADO TEST CHASIDE (98 PREGUNTAS SÍ / NO)
function renderChasideQuestion() {
  const total = CHASIDE_PREGUNTAS.length;
  const n = currentQuestionIndex + 1;

  const modeBadge = document.getElementById('test-mode-badge');
  const indicator = document.getElementById('test-indicator');
  const progressBar = document.getElementById('test-progress-bar');
  const title = document.getElementById('test-question-title');

  if (modeBadge) modeBadge.textContent = 'Test Psicotécnico CHASIDE Oficial (98 Preguntas)';
  if (indicator) indicator.textContent = `Pregunta ${n} de ${total}`;
  if (progressBar) progressBar.style.width = `${(n / total) * 100}%`;
  if (title) title.textContent = CHASIDE_PREGUNTAS[currentQuestionIndex] || 'Pregunta no disponible';

  const grid = document.getElementById('test-options-grid');
  if (!grid) return;
  grid.className = 'test-options-grid yn';
  grid.innerHTML = '';

  const options = [
    { label: 'Sí, me interesa / Me identifico', value: 'Sí', icon: '✓', cls: 'btn-opt-yes' },
    { label: 'No, no me interesa', value: 'No', icon: '✗', cls: 'btn-opt-no' }
  ];

  options.forEach(opt => {
    const btn = document.createElement('button');
    const isSelected = chasideAnswers[currentQuestionIndex] === opt.value;
    btn.className = `test-option-btn test-yn-btn ${opt.cls}` + (isSelected ? ' selected' : '');
    btn.innerHTML = `
      <span class="yn-icon">${opt.icon}</span>
      <span class="yn-text">${opt.label}</span>
    `;
    btn.onclick = () => selectChasideOption(opt.value);
    grid.appendChild(btn);
  });

  const prevBtn = document.getElementById('btn-prev-question');
  if (prevBtn) prevBtn.style.display = currentQuestionIndex > 0 ? 'inline-flex' : 'none';

  const nextBtn = document.getElementById('btn-next-question');
  if (nextBtn) {
    nextBtn.style.display = chasideAnswers[currentQuestionIndex] !== null ? 'inline-flex' : 'none';
  }
}

function selectChasideOption(val) {
  if (chasideLock) return;
  chasideAnswers[currentQuestionIndex] = val;
  renderChasideQuestion();
  chasideLock = true;
  setTimeout(() => {
    chasideLock = false;
    nextQuestion();
  }, 200);
}

function nextQuestion() {
  if (currentTestMode === 'quick') return;
  if (currentQuestionIndex < CHASIDE_PREGUNTAS.length - 1) {
    currentQuestionIndex++;
    renderChasideQuestion();
  } else {
    showChasideResults();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    if (currentTestMode === 'quick') {
      const lastCat = quickHistory.pop();
      if (lastCat) quickScores[lastCat]--;
      currentQuestionIndex--;
      renderQuickQuestion();
    } else {
      currentQuestionIndex--;
      renderChasideQuestion();
    }
  }
}

function evaluarChaside(resp) {
  const scores = {};
  for (const l in CHASIDE_CLAVE) {
    scores[l] = CHASIDE_CLAVE[l].reduce((a, n) => {
      const ans = resp[n - 1];
      const isYes = ans && (ans === 'Sí' || ans === 'Si' || ans.toString().toLowerCase().startsWith('s'));
      return a + (isYes ? 1 : 0);
    }, 0);
  }
  const orden = Object.keys(scores).sort((a, b) =>
    scores[b] - scores[a] || (CHASIDE_CARRERA[b] ? 1 : 0) - (CHASIDE_CARRERA[a] ? 1 : 0)
  );
  const top = orden[0];
  const mapped = orden.find(l => CHASIDE_CARRERA[l] && scores[l] >= CHASIDE_MIN) || null;
  return { scores, orden, top, mapped, carrera: mapped ? CHASIDE_CARRERA[mapped] : null, directo: mapped === top };
}

function showChasideResults() {
  const r = evaluarChaside(chasideAnswers);
  document.getElementById('test-question-box').style.display = 'none';
  document.getElementById('test-result-box').style.display = 'block';

  const pre = document.getElementById('result-pre');
  const title = document.getElementById('result-winner-title');
  const desc = document.getElementById('result-desc');
  const actions = document.getElementById('result-actions');
  const second = r.orden[1];

  if (r.carrera) {
    const c = CAREERS_DATA[r.carrera];
    title.textContent = c.title;
    if (r.directo) {
      pre.textContent = 'Tu carrera recomendada por el Test CHASIDE es:';
      desc.textContent = `Tu área de mayor vocación es ${CHASIDE_AREAS[r.top]} (${r.scores[r.top]} / 14 puntos), que se vincula con la carrera de ${c.title}. ${c.summary}`;
    } else {
      pre.textContent = 'La carrera del CEA más afín a tu perfil es:';
      desc.textContent = `Tu vocación principal se inclina por ${CHASIDE_AREAS[r.top]} (${r.scores[r.top]} / 14). Entre nuestras opciones vigentes, la más compatible con tus habilidades es ${c.title}, por tu afinidad con ${CHASIDE_AREAS[r.mapped]} (${r.scores[r.mapped]} / 14). ${c.summary}`;
    }

    actions.innerHTML = `
      <button class="btn btn-primary" onclick="openDetail('${r.carrera}')">Ver Carrera de ${c.title} &rarr;</button>
      <a class="btn btn-whatsapp" target="_blank" href="https://wa.me/59172272179?text=Hola%20Secretar%C3%ADa%20CEA%20Man%20Cesped,%20realic%C3%A9%20el%20test%20CHASIDE%20y%20mi%20carrera%20af%C3%ADn%20es%20${encodeURIComponent(c.title)}.%20Deseo%20inscribirme.">Inscribirme por WhatsApp</a>
      <button class="btn btn-outline" onclick="showTestIntro()">Volver a elegir test</button>
    `;
  } else {
    pre.textContent = 'Diagnóstico Vocacional CHASIDE:';
    title.textContent = 'Perfil Orientado a Bachillerato Humanístico';
    desc.textContent = `Tu perfil vocacional sobresale en ${CHASIDE_AREAS[r.top]} (${r.scores[r.top]}/14) y ${CHASIDE_AREAS[second]} (${r.scores[second]}/14). Te sugerimos cursar el Bachillerato Humanístico en 2 años para obtener tu título de bachiller o comunicarte con secretaría para orientación personalizada.`;

    actions.innerHTML = `
      <button class="btn btn-primary" onclick="openDetail('humanistico')">Ver Bachillerato Humanístico (2 Años)</button>
      <a class="btn btn-whatsapp" target="_blank" href="https://wa.me/59172272179?text=Hola%20CEA%20Man%20Cesped,%20realic%C3%A9%20el%20test%20CHASIDE%20y%20deseo%20orientaci%C3%B3n%20vocacional%20con%20un%20facilitador.">Orientación Vocacional por WhatsApp</a>
      <button class="btn btn-outline" onclick="showTestIntro()">Volver a elegir test</button>
    `;
  }

  const bars = document.getElementById('result-bars');
  bars.innerHTML = '<h3 class="chaside-title">Perfil Vocacional CHASIDE Oficial</h3>' + r.orden.map((l, i) => {
    const s = r.scores[l];
    const cr = CHASIDE_CARRERA[l] ? ` • Opción en el CEA: ${CAREERS_DATA[CHASIDE_CARRERA[l]].title}` : ' • Sin carrera técnica directa';
    return `
      <div class="cb-row ${i === 0 ? 'top' : ''}">
        <div class="cb-label">${l} — ${CHASIDE_AREAS[l]}<small>${cr}</small></div>
        <div class="cb-track"><div class="cb-fill" style="width:${Math.round((s / 14) * 100)}%"></div></div>
        <div class="cb-score">${s} / 14</div>
      </div>
    `;
  }).join('');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 11. MODAL Y POPUPS (AFICHE, FOTOS Y WHATSAPP)
// ==========================================
function toggleWaPopup() {
  const popup = document.getElementById('wa-popup');
  if (popup) popup.classList.toggle('show');
}

function openAficheModal() {
  const modal = document.getElementById('afiche-modal');
  if (modal) modal.classList.add('active');
}

function closeAficheModal(e) {
  if (e && e.target && e.target.closest('.modal-content-afiche') && !e.target.classList.contains('modal-close-btn')) return;
  const modal = document.getElementById('afiche-modal');
  if (modal) modal.classList.remove('active');
}

let currentPhotoModalList = [];
let currentPhotoModalIndex = 0;

function openPhotoModal(src, title, desc, list = null, index = 0) {
  const modal = document.getElementById('photo-modal');
  const img = document.getElementById('photo-modal-img');
  const cap = document.getElementById('photo-modal-title');
  const pDesc = document.getElementById('photo-modal-desc');
  const counter = document.getElementById('photo-modal-counter');

  currentPhotoModalList = list && list.length ? list : [{ src, title, desc }];
  currentPhotoModalIndex = index >= 0 && index < currentPhotoModalList.length ? index : 0;

  const currentItem = currentPhotoModalList[currentPhotoModalIndex];

  if (modal && img) {
    img.src = currentItem.src;
    if (cap) cap.textContent = currentItem.title || '';
    if (pDesc) pDesc.textContent = currentItem.desc || currentItem.caption || '';
    if (counter) {
      counter.textContent = `${currentPhotoModalIndex + 1} / ${currentPhotoModalList.length}`;
      counter.style.display = currentPhotoModalList.length > 1 ? 'inline-block' : 'none';
    }
    modal.classList.add('active');
  }
}

function prevPhotoModal(e) {
  if (e) e.stopPropagation();
  if (!currentPhotoModalList.length) return;
  currentPhotoModalIndex = (currentPhotoModalIndex - 1 + currentPhotoModalList.length) % currentPhotoModalList.length;
  updatePhotoModalView();
}

function nextPhotoModal(e) {
  if (e) e.stopPropagation();
  if (!currentPhotoModalList.length) return;
  currentPhotoModalIndex = (currentPhotoModalIndex + 1) % currentPhotoModalList.length;
  updatePhotoModalView();
}

function updatePhotoModalView() {
  const img = document.getElementById('photo-modal-img');
  const cap = document.getElementById('photo-modal-title');
  const pDesc = document.getElementById('photo-modal-desc');
  const counter = document.getElementById('photo-modal-counter');
  const item = currentPhotoModalList[currentPhotoModalIndex];
  if (img && item) {
    img.style.opacity = '0.35';
    setTimeout(() => {
      img.src = item.src;
      img.style.opacity = '1';
    }, 110);
    if (cap) cap.textContent = item.title || '';
    if (pDesc) pDesc.textContent = item.desc || item.caption || '';
    if (counter) {
      counter.textContent = `${currentPhotoModalIndex + 1} / ${currentPhotoModalList.length}`;
    }
  }
}

function closePhotoModal(e) {
  if (e && e.target && e.target.closest('.modal-content-photo') && !e.target.classList.contains('modal-close-btn')) return;
  const modal = document.getElementById('photo-modal');
  if (modal) modal.classList.remove('active');
}

// ==========================================
// 12. INICIALIZACIÓN Y EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderCareers('all');
  renderStaff('all');
  renderGallery('all');
  initVisualizer();
  setSimuladorGoal('bachiller');

  // Reloj en tiempo real para el marco del celular (Apartado Móvil)
  function updatePhoneClock() {
    const timeEl = document.getElementById('phone-live-time');
    if (!timeEl) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    timeEl.textContent = `${hours}:${mins}`;
  }
  updatePhoneClock();
  setInterval(updatePhoneClock, 30000);

  // Filtros de carreras
  const filterTabs = document.querySelectorAll('.filter-btn');
  filterTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      filterTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCareers(btn.getAttribute('data-filter'));
    });
  });

  // Filtros de galería
  const galTabs = document.querySelectorAll('.gal-filter-btn');
  galTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      galTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.getAttribute('data-filter'));
    });
  });

  // Acordeón de FAQ
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
        const h = i.querySelector('.accordion-header');
        if (h) h.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Menú móvil hamburguesa
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileNav();
    });
  }

  // Cerrar popup de WA al hacer clic afuera
  document.addEventListener('click', (e) => {
    const wrap = document.querySelector('.whatsapp-floating-wrap');
    const popup = document.getElementById('wa-popup');
    if (wrap && popup && !wrap.contains(e.target)) {
      popup.classList.remove('show');
    }
  });

  // Botón Volver Arriba al hacer scroll
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (backToTopBtn) {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  // Navegación y atajos por teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleMobileNav(false);
      closeSectionsMenu();
      closeAficheModal();
      closePhotoModal();
      const popup = document.getElementById('wa-popup');
      if (popup) popup.classList.remove('show');
    } else if (e.key === 'ArrowLeft') {
      const photoModal = document.getElementById('photo-modal');
      if (photoModal && photoModal.classList.contains('active')) {
        prevPhotoModal(e);
      }
    } else if (e.key === 'ArrowRight') {
      const photoModal = document.getElementById('photo-modal');
      if (photoModal && photoModal.classList.contains('active')) {
        nextPhotoModal(e);
      }
    }
  });

  // Cerrar menú desplegable de apartados al hacer clic afuera
  document.addEventListener('click', (e) => {
    const wrap = document.querySelector('.header-sections-wrapper');
    if (wrap && !wrap.contains(e.target)) {
      closeSectionsMenu();
    }
  });

  // Animaciones de entrada
  const revealElements = document.querySelectorAll('.section-header, .career-card, .quick-card, .value-box, .mv-card, .timeline-item, .stat-box, .staff-card, .gallery-card');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    revealElements.forEach(el => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  }
});

// Control maestro de navegación móvil
function toggleMobileNav(forceState = null) {
  const mainNav = document.getElementById('main-nav');
  const menuToggle = document.getElementById('menu-toggle');
  const backdrop = document.getElementById('nav-backdrop');
  if (!mainNav) return;

  const willShow = forceState !== null ? forceState : !mainNav.classList.contains('show');

  if (willShow) {
    mainNav.classList.add('show');
    if (menuToggle) menuToggle.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.classList.add('nav-open');
  } else {
    mainNav.classList.remove('show');
    if (menuToggle) menuToggle.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.classList.remove('nav-open');
  }
}

// Control del menú desplegable de apartados (Header Desktop)
function toggleSectionsMenu(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const dropdown = document.getElementById('header-sections-dropdown');
  const btn = document.getElementById('btn-header-sections');
  if (!dropdown) return;
  const isOpen = dropdown.classList.toggle('active');
  if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

function closeSectionsMenu() {
  const dropdown = document.getElementById('header-sections-dropdown');
  const btn = document.getElementById('btn-header-sections');
  if (dropdown) dropdown.classList.remove('active');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function searchCareersFromHero() {
  const selectedArea = document.getElementById('hero-filter-area')?.value || 'all';
  filterAndScroll(selectedArea);
}

// ==========================================
// 13. INTERACTIVIDAD DEL APARTADO MÓVIL Y FAQ
// ==========================================

// Filtro rápido de tarjetas en el Hub Móvil
function filterMobileHub(cat, btn) {
  const pills = document.querySelectorAll('.mobile-hub-filter-pills .hub-pill');
  pills.forEach(p => {
    p.classList.remove('active');
    p.setAttribute('aria-selected', 'false');
  });
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }

  const tiles = document.querySelectorAll('#mobile-hub-grid .mobile-hub-tile');
  tiles.forEach(tile => {
    const tileCat = tile.getAttribute('data-cat');
    const matches = (cat === 'all' || tileCat === cat);
    if (matches) {
      tile.style.display = 'flex';
      tile.style.opacity = '1';
    } else {
      tile.style.display = 'none';
      tile.style.opacity = '0';
    }
  });
}

// Simulador interactivo de metas educativas 2026
const SIMULADOR_GOALS = {
  bachiller: {
    badge: '🎓 EDUCACIÓN SECUNDARIA DE ADULTOS (ESA)',
    title: 'Diploma de Bachiller en Humanidades en 2 Años',
    desc: 'Diseñado especialmente para jóvenes y adultos que no concluyeron la secundaria. Clases en horario nocturno para que estudies sin descuidar tu empleo ni tu familia.',
    features: [
      '2 Años / 4 Semestres Acelerados de formación modular',
      'Clases de Lunes a Viernes en el Turno Noche (18:30 a 22:00)',
      '100% Gratuito y Fiscal (Sin cobros de matrícula ni pensiones)',
      'Diploma oficial avalado por el Ministerio de Educación (Ley 070)'
    ],
    waText: 'Hola Secretaría del CEA Man Césped, deseo inscribirme para ser Bachiller en 2 Años.',
    btnLabel: '💬 Inscribirme a Bachillerato por WhatsApp'
  },
  tecnico: {
    badge: '💼 NIVEL TÉCNICO MEDIO (R.M. 1040/2022)',
    title: 'Carreras Técnicas Productivas con Título Oficial',
    desc: 'Fórmate en Sistemas Informáticos, Contaduría General, Confección Textil o Belleza Integral en laboratorios acondicionados con equipamiento de nivel productivo.',
    features: [
      '2 Años de Formación Práctica Intensiva (2.000 Horas)',
      'Talleres equipados (PCs Core i7, máquinas de coser industriales)',
      'Turno Noche (18:30 a 22:00) presencial en Valle Hermoso',
      'Título Profesional a nombre del Estado Plurinacional'
    ],
    waText: 'Hola Secretaría del CEA Man Césped, deseo información sobre las Carreras Técnicas 2026.',
    btnLabel: '💬 Consultar Carreras por WhatsApp'
  },
  test: {
    badge: '🎯 ORIENTACIÓN VOCACIONAL GRATUITA',
    title: '¿Indeciso? Descubre tu vocación en minutos',
    desc: 'Realiza nuestro Test Psicotécnico Vocacional interactivo y descubre qué área se adapta mejor a tus talentos, pasiones y metas profesionales.',
    features: [
      'Test Rápido de 2 minutos o Test Completo CHASIDE (98 preguntas)',
      'Resultados visuales con barras porcentuales de afinidad',
      'Asesoría y acompañamiento pedagógico gratuito'
    ],
    isInternalTest: true,
    btnLabel: '🎯 Iniciar Test Vocacional Ahora'
  }
};

function setSimuladorGoal(goalKey, btn) {
  const tabs = document.querySelectorAll('.simulador-tabs .sim-tab');
  tabs.forEach(t => t.classList.remove('active'));
  if (btn) {
    btn.classList.add('active');
  } else {
    const defaultTab = document.getElementById(`sim-tab-${goalKey}`);
    if (defaultTab) defaultTab.classList.add('active');
  }

  const card = document.getElementById('simulador-result-card');
  if (!card) return;

  const data = SIMULADOR_GOALS[goalKey] || SIMULADOR_GOALS.bachiller;

  let btnHtml = '';
  if (data.isInternalTest) {
    btnHtml = `<button class="sim-btn-cta sim-btn-test" onclick="navigate('test')">${data.btnLabel}</button>`;
  } else {
    const waUrl = `https://wa.me/59172272179?text=${encodeURIComponent(data.waText)}`;
    btnHtml = `
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="sim-btn-cta sim-btn-wa">
        <div class="sim-btn-labels">
          <span class="sim-btn-main">${data.btnLabel}</span>
          <small class="sim-btn-sub">Atención directa con Secretaría (Edith Mendoza: 72272179)</small>
        </div>
        <span class="sim-btn-arrow">&rarr;</span>
      </a>
    `;
  }

  card.innerHTML = `
    <div class="sim-card-badge">${data.badge}</div>
    <h4 class="sim-card-title">${data.title}</h4>
    <p class="sim-card-desc">${data.desc}</p>
    <ul class="sim-card-features">
      ${data.features.map(f => `<li><span class="feat-check">✓</span> ${f}</li>`).join('')}
    </ul>
    <div class="sim-card-actions">
      ${btnHtml}
    </div>
  `;
}

// Buscador interactivo en vivo de Preguntas Frecuentes (FAQ)
function searchFaq(query) {
  const q = (query || '').toLowerCase().trim();
  const items = document.querySelectorAll('#faq-accordion .accordion-item');
  const clearBtn = document.getElementById('faq-search-clear');
  const statusElem = document.getElementById('faq-search-status');
  if (clearBtn) clearBtn.style.display = q ? 'inline-block' : 'none';

  let visibleCount = 0;
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    const matches = !q || text.includes(q);
    item.style.display = matches ? 'block' : 'none';
    if (matches) {
      visibleCount++;
      if (q) {
        item.querySelector('.accordion-header')?.setAttribute('aria-expanded', 'true');
        item.querySelector('.accordion-body')?.classList.add('open');
      }
    }
  });

  if (statusElem) {
    statusElem.textContent = q
      ? `Se encontraron ${visibleCount} de ${items.length} preguntas`
      : `${items.length} preguntas frecuentes disponibles`;
  }
}

function clearFaqSearch() {
  const input = document.getElementById('faq-search-input');
  if (input) input.value = '';
  searchFaq('');
}
