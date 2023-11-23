export default {
  global: {
    componenteFormativo: 'Seguridad sanitaria y ambiental',
    descripcionCurso:
      'Los lineamientos en materia de seguridad sanitaria y ambiental guardan una estrecha relación con los determinantes en salud, y que se definen como factores que inciden directa o indirectamente en el bienestar de las personas, entendiendo que la salud no se reduce únicamente a la ausencia de enfermedad, sino que es una condición influenciada por múltiples y variadas circunstancias externas. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
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
          'Normas y lineamientos a nivel nacional e internacional en seguridad sanitaria y ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Normativa nacional establecida en seguridad sanitaria y ambiental',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'CONPES para la implementación de los objetivos de desarrollo sostenible en Colombia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Manual de convivencia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Normativa internacional establecida en seguridad sanitaria y ambiental',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Determinantes sociales de la salud y su impacto en la calidad de vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de Determinantes Sociales de la Salud (DSS)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Actores transversales en seguridad sanitaria y ambiental',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Actores sociales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Entes de control territorial, departamental y nacional',
            hash: 't_2_4',
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_04_331316.zip',
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
        '1. Normas y lineamientos a nivel nacional e internacional en seguridad sanitaria y ambiental',
      referencia:
        'Departamento Nacional de Planeación. (2022). El Consejo Nacional de Política Económica y Social, Conpes.',
      tipo: 'Página web',
      link: 'https://www.dnp.gov.co/CONPES',
    },
    {
      tema:
        '1. Normas y lineamientos a nivel nacional e internacional en seguridad sanitaria y ambiental',
      referencia:
        'Rodríguez, C., Z. A. (2020). Los determinantes sociales y su importancia para los profesionales de la salud.',
      tipo: 'Artículo',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/20532/3/2020_NC_Determinantes%20sociales_Zuly_VF.pdf',
    },
    {
      tema:
        '1.2 CONPES para la implementación de los objetivos de desarrollo sostenible en Colombia',
      referencia:
        'Naciones Unidas. (2020). Objetivo 1: Poner fin a la pobreza en todas sus formas en todo el mundo. ONU.',
      tipo: 'Página web',
      link: 'https://www.un.org/sustainabledevelopment/es/poverty/',
    },
    {
      tema:
        '2. Determinantes sociales de la salud y su impacto en la calidad de vida',
      referencia:
        'Organización Panamericana de la Salud. (2022). Determinantes Sociales de la salud. OPS.',
      tipo: 'Página web',
      link: 'https://www.paho.org/es/temas/determinantes-sociales-salud',
    },
    {
      tema: '1.3 Manual de convivencia',
      referencia:
        'Congreso de Colombia. (2016). Ley 1801 - Código Nacional de Policía y Convivencia.',
      tipo: 'Ley de la República',
      link:
        'https://www.policia.gov.co/sites/default/files/ley-1801-codigo-nacional-policia-convivencia.pdf',
    },
    {
      tema: '1.3 Manual de convivencia',
      referencia:
        'Policía Nacional de Colombia. (2022). Código Nacional de Seguridad y Convivencia Ciudadana.',
      tipo: 'Página web',
      link:
        'https://www.policia.gov.co/files/codigo-nacional-seguridad-y-convivencia-ciudadana',
    },
    {
      tema: '2.4 Entes de control territorial, departamental y nacional',
      referencia:
        'Función Pública (2022). Manual de estructura del Estado colombiano. Función Pública.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/manual-estado/organismos-control.php',
    },
  ],
  glosario: [
    {
      termino: 'Atención primaria en salud',
      significado:
        'Garantía de los servicios de salud a la población, los cuales abarcan diferentes ciclos vitales y acciones que van desde la promoción y la prevención hasta el tratamiento de la enfermedad y la rehabilitación.',
    },
    {
      termino: 'Material particulado',
      significado:
        'Cantidad de partículas sólidas y líquidas presentes en la masa de aire.',
    },
    {
      termino: 'Promoción y prevención en salud',
      significado:
        'Corresponde a todas las actividades que se desarrollan para que la población, tanto individuos como familias, mejoren sus condiciones de vida y lo hagan de una forma saludable.',
    },
    {
      termino: 'Régimen contributivo en salud',
      significado:
        'Ordenamiento mediante el cual una persona se vincula al sistema general de seguridad social en salud a través de un pago de una cotización mensual.',
    },
    {
      termino: 'Régimen subsidiado en salud',
      significado:
        'Régimen de salud en el cual las personas de bajos ingresos que no tienen capacidad de pago pueden ser atendidas en salud a través de un subsidio ofrecido por el Estado.',
    },
    {
      termino: 'Saneamiento básico',
      significado:
        'Sistema por medio del cual se pueden eliminar de manera técnica excretas, residuos sólidos y aguas residuales para evitar la contaminación del aire, el agua y los suelos.',
    },
    {
      termino: 'Transición energética',
      significado:
        'Procesos que se adelantan para reducir la dependencia de combustibles fósiles, cuya combustión es responsable de la contaminación atmosférica.',
    },
    {
      termino: 'Variabilidad climática',
      significado:
        'Fenómenos relacionados con las variaciones en el estado medio del clima en todas las escalas temporales y espaciales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Anglés M., y Rovalo, M. Tejado M. (2021). Manual de derecho ambiental mexicano. Universidad Nacional Autónoma de México, Instituto de Investigaciones Jurídicas.',
      link: 'https://archivos.juridicas.unam.mx/www/bjv/libros/13/6429/13.pdf',
    },
    {
      referencia:
        'Congreso de la República de Colombia (2015). Ley estatutaria 1751 de 2015. Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1751_2015.html',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2016). Ley 1801 del 29 de julio de 2016. Por la cual se expide el código nacional de policía y ti convivencia.',
      link:
        'https://www.policia.gov.co/sites/default/files/ley-1801-codigo-nacional-policia-convivencia.pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2022). Informe anual de avance ODS 2022.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Sinergia/Documentos/2022_14_04_Informe_anual_avance_implementacion_ODS_en_Colombia_2022.pdf',
    },
    {
      referencia:
        'Función Pública. (s.f.). Manual de estructura del Estado colombiano.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/manual-estado/organismos-control.php',
    },
    {
      referencia:
        'Hernández E. (2016). Atención primaria en salud en Colombia basada en la comunidad: enfoque territorial. Universidad de La Sabana.',
      link:
        'https://sovamfic.net/atencion-primaria-en-salud-en-colombia-basada-en-la-comunidad-enfoque-territorial-334/',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Abecé del Plan Decenal de Salud Pública 2022 - 2031.',
      link:
        'https://manizalessalud.net/wp-content/uploads/2022/06/ABECE-EPDSP.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2014). Anexo técnico: Familia y Comunidad en la Atención Integral en Salud para la primera infancia, la infancia y la adolescencia.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/Familia-y-comunidad.pdf',
    },
    {
      referencia:
        'Secretaria de Salud. (s.f.). Instancias y espacios de Participación Ciudadana. Página Web.',
      link:
        'http://www.saludcapital.gov.co/Paginas2/MecanismosdeParticipacionCiudadana.aspx',
    },
    {
      referencia:
        'Unidad de Planeación Minero - Energética UMPE. (s. f.). Normatividad ambiental y sanitaria. ',
      link:
        'https://www.upme.gov.co/guia_ambiental/carbon/gestion/politica/normativ/normativ.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Adriana Cárdenas González',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
