export default {
  global: {
    componenteFormativo:
      'Estrategia de acompañamiento psicosocial para población migrante',
    descripcionCurso:
      'Este componente aborda los fundamentos, fases y metodologías del acompañamiento psicosocial en contextos de movilidad humana, así como la articulación institucional necesaria para su implementación. Integra los marcos normativos, políticas, lineamientos y rutas vigentes que orientan la atención psicosocial, garantizando intervenciones integrales, pertinentes y basadas en enfoques de derechos, inclusión y bienestar comunitario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Fundamentos de la Estrategia Integral de Acompañamiento Psicosocial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y objetivos de la estrategia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios y enfoques que orientan la intervención',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Actores institucionales y comunitarios',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Implementación del acompañamiento psicosocial en contextos de movilidad humana',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Etapas y fases de la intervención psicosocial',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas y metodologías de aplicación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Coordinación y articulación interinstitucional',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Marco normativo que orienta la estrategia integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Políticas nacionales e internacionales que sustentan la estrategia',
            hash: 't_1_1',
          },
          {
            numero: '3.2',
            titulo:
              'Lineamientos de atención psicosocial del Ministerio de Salud y Protección Social',
            hash: 't_1_2',
          },
          {
            numero: '3.3',
            titulo: 'Protocolos, rutas y guías técnicas vigentes',
            hash: 't_1_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33130235_CF2_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '1. Fundamentos de la estrategia integral de acompañamiento psicosocial',
      referencia:
        'Cruz Roja Seccional Valle. (2020). Apoyo Psicosocial a #Migrantes y Población de Acogida [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5PjId_gO7zM',
    },
    {
      tema: '2.3. Coordinación y articulación interinstitucional',
      referencia:
        'MinSaludCol. (2019). Colombia un ejemplo ante el mundo y la región en la atención en salud a población migrante [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ASemf_ZRWkE',
    },
  ],
  glosario: [
    {
      termino: 'Acompañamiento psicosocial',
      significado:
        'proceso integral que busca promover el bienestar emocional, social y comunitario de las personas afectadas por experiencias de movilidad humana.',
    },
    {
      termino: 'Articulación interinstitucional',
      significado:
        'mecanismo de coordinación entre entidades del Estado, organismos internacionales y comunidades locales para desarrollar acciones conjuntas que fortalezcan la atención integral.',
    },
    {
      termino: 'Bienestar psicosocial',
      significado:
        'condición que resulta del equilibrio entre el bienestar emocional, social y comunitario, permitiendo a las personas adaptarse positivamente a su entorno y fortalecer sus relaciones interpersonales.',
    },
    {
      termino: 'Diagnóstico psicosocial',
      significado:
        'primera fase del proceso de intervención que permite identificar factores de riesgo, necesidades y recursos individuales y colectivos en contextos de movilidad humana.',
    },
    {
      termino: 'Enfoque diferencial',
      significado:
        'perspectiva que reconoce las particularidades culturales, de género, edad y ciclo vital de las personas, asegurando una atención pertinente y equitativa.',
    },
    {
      termino: 'Estrategia integral',
      significado:
        'conjunto organizado de acciones orientadas a responder de forma articulada, sostenible y ética a las necesidades psicosociales.',
    },
    {
      termino: 'Intervención psicosocial',
      significado:
        'acción planificada que busca fortalecer el bienestar emocional y social de las personas mediante metodologías participativas, comunitarias y culturalmente pertinentes.',
    },
    {
      termino: 'Ley 2136 de 2021',
      significado:
        'norma que establece la Política Integral Migratoria de Colombia, orientada a la protección, inclusión y atención integral de las personas migrantes y retornadas.',
    },
    {
      termino: 'Ley 2460 de 2025',
      significado:
        'disposición legal que adopta la Política Nacional de Salud Mental, integrando la atención psicosocial como parte esencial del sistema de salud pública.',
    },
    {
      termino: 'Movilidad humana',
      significado:
        'desplazamiento de personas entre territorios por motivos económicos, sociales, políticos o ambientales, que puede ser voluntario o forzado.',
    },
    {
      termino: 'Psicosocial',
      significado:
        'interacción entre los factores psicológicos y sociales que influyen en el comportamiento, bienestar y adaptación de las personas dentro de su entorno.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'capacidad de las personas y comunidades para sobreponerse a situaciones adversas, recuperarse emocionalmente y transformar sus experiencias en oportunidades de crecimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'ACNUR & OIM. (2023). Atención psicosocial y protección integral para población migrante y refugiada: Recomendaciones para los Estados. Naciones Unidas.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1991). Ley 12 de 1991. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=10579',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2006). Ley 1098 de 2006. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1565 de 2012. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48662',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1616 de 2013. Diario Oficial.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-1616-del-21-de-enero-2013.pdf',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2015). Ley 1751 de 2015. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=60733 ',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021). Ley 2136 de 2021. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=168067',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2025). Ley 2460 de 2025. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=260636',
    },
    {
      referencia:
        'Defensoría del Pueblo. (2022). Política Institucional de Participación Ciudadana: Lineamientos generales para su implementación. Documento institucional de la Defensoría del Pueblo de Colombia.',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2022). Documento CONPES 4100: Estrategia para la integración de la población migrante venezolana como factor de desarrollo para el país.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/4100.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional (Colombia). (2020). Lineamientos de política de educación superior inclusiva e intercultural.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). Resolución 429 de 2016.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%200429%20de%202016.pdf ',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). Resolución 4886 de 2018.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-4886-de-2018.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Línea base de salud mental para poblaciones migrantes. Ministerio de Salud y Protección Social, Colombia.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2023). Estrategia de acompañamiento psicosocial para población migrante venezolana, población colombiana retornada, comunidades de acogida o receptoras, y lineamientos para su implementación.',
      link:
        'https://www.minsalud.gov.co/Anexos_Normatividad_Nuevo/Estrategia_psicosocial_poblacion_migrante_y_lineamientos.pdf ',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2025). Decreto 0729 de 2025.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/decreto-0729-25-junio-2025.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2025). Resolución 401 de 2025.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0401-de-2025.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Programa de atención psicosocial y salud integral a víctimas – PAPSIVI.',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/promocion-social/Victimas/paginas/papsivi.aspx',
    },
    {
      referencia:
        'Naciones Unidas. (s. f.). Declaración Universal de Derechos Humanos.',
      link:
        'https://www.un.org/es/about-us/universal-declaration-of-human-rights',
    },
    {
      referencia: 'Naciones Unidas. (s. f.). Migración internacional.',
      link: 'https://www.un.org/es/global-issues/migration',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (2018). Pacto Mundial para la Migración Segura, Ordenada y Regular. ONU.',
    },
    {
      referencia:
        'Organización de los Estados Americanos (OEA). (2015). Género, derechos y diversidad en la Secretaría General de la OEA. Secretaría General de la OEA.',
    },
    {
      referencia:
        'Organización Internacional para las Migraciones (OIM). (2019). Glosario de la OIM sobre Migración.',
      link:
        'https://publications.iom.int/system/files/pdf/iml-34-glossary-es.pdf',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2021). Decreto 216 de 2021.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=159606',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Desarrollo. (2023). Informe sobre desarrollo humano y movilidad humana. PNUD.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carolina Yusunguaira Ceballos ',
          cargo: 'Experta temática',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña ',
          cargo: 'Asesora metodológica',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
