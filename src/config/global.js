export default {
  global: {
    componenteFormativo: 'Servicios de la computación en la nube',
    descripcionCurso:
      'Este componente aborda los servicios y plataformas en la nube, sus aplicaciones cotidianas y las tendencias emergentes. Permite comprender modelos como IaaS, PaaS y SaaS, explorar proveedores líderes y analizar el impacto de la automatización, la seguridad y la innovación tecnológica en entornos educativos, empresariales y profesionales.',
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
        titulo: 'Servicios en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Infraestructura como Servicio (IaaS)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Plataforma como Servicio (PaaS)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: '<em>Software</em> como Servicio (SaaS)',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Comparación entre IaaS, PaaS y SaaS',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plataformas en la nube',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Google Cloud', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Microsoft Azure', hash: 't_2_2' },
          { numero: '2.3', titulo: 'Amazon Web Services', hash: 't_2_3' },
          {
            numero: '2.4',
            titulo: 'Oracle Cloud Infrastructure',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Modo de uso de interfaces y herramientas',
            hash: 't_2_5',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aplicaciones cotidianas de la nube',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Almacenamiento en la nube', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Colaboración en línea', hash: 't_3_2' },
          {
            numero: '3.3',
            titulo: 'Productividad en entornos educativos y empresariales',
            hash: 't_3_3',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tendencias y tecnologías emergentes en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tecnologías nativas de la nube',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Automatización para la optimización de tiempos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Cumplimiento y seguridad en entornos modernos',
            hash: 't_4_3',
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
        download: 'downloads/CFA_XX_DU.pdf',
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
      tema: 'Servicios en la nube',
      referencia:
        'AlbertoLopez TECH TIPS. (2020). CLOUD COMPUTING <em>¿Qué es IaaS, PaaS y Saas? | Modelos de Servicio Cloud</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VR8aXePkQ5M',
    },
    {
      tema: 'Plataformas en la nube',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). <em>Servicios de computación en la nube</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YVGE11mjc1g',
    },
    {
      tema: 'Aplicaciones cotidianas de la nube',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). <em>Migración de servicios en la nube</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yMuxG6LFGUo',
    },
  ],
  glosario: [
    {
      termino: 'API (Interfaz de Programación de Aplicaciones)',
      significado:
        'Conjunto de funciones y procedimientos que permiten a aplicaciones comunicarse entre sí y aprovechar servicios de otras plataformas.',
    },
    {
      termino: 'Automatización',
      significado:
        'Uso de herramientas y programas para ejecutar tareas repetitivas sin intervención humana, optimizando tiempos y reduciendo errores.',
    },
    {
      termino: 'Contenedor',
      significado:
        'Entorno aislado que permite ejecutar aplicaciones de manera consistente en distintos sistemas, asegurando portabilidad y eficiencia.',
    },
    {
      termino: 'IaaS (Infraestructura como Servicio)',
      significado:
        'Modelo de nube que proporciona recursos de infraestructura, como servidores, almacenamiento y redes, bajo demanda.',
    },
    {
      termino: 'MFA (Autenticación Multifactor)',
      significado:
        'Método de seguridad que requiere más de una forma de verificación para acceder a sistemas o datos.',
    },
    {
      termino: 'Microservicio',
      significado:
        'Componente de <em>software</em> independiente y modular que realiza funciones específicas dentro de una aplicación más grande.',
    },
    {
      termino: 'PaaS (Plataforma como Servicio)',
      significado:
        'Modelo de nube que ofrece entornos completos para desarrollar, probar y desplegar aplicaciones sin gestionar la infraestructura subyacente.',
    },
    {
      termino: 'SaaS (<em>Software</em> como Servicio)',
      significado:
        'Aplicaciones accesibles por Internet, que no requieren instalación local y se utilizan mediante suscripción o acceso en línea.',
    },
    {
      termino: 'Seguridad en la nube',
      significado:
        'Conjunto de políticas, tecnologías y controles que protegen datos, aplicaciones y servicios alojados en entornos cloud.',
    },
    {
      termino: 'Orquestador (Kubernetes)',
      significado:
        'Herramienta que gestiona automáticamente la ejecución, escalado y supervisión de contenedores en entornos cloud.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amazon Web Services. (2024). <em>Descripción general de Amazon Web Services</em>.',
      link:
        'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html',
    },
    {
      referencia:
        'Celaya Luna, A. (2013). <em>Cloud: herramientas para trabajar en la nube</em>. ICB Editores.',
      link: '',
    },
    {
      referencia:
        'Google Cloud. (2025). <em>Documentación de Google Cloud</em>.',
      link: 'https://cloud.google.com/docs',
    },
    {
      referencia:
        'Ibáñez Carrasco, P. (2018a). <em>Informática I</em>. Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Ibáñez Carrasco, P. (2018b). <em>Informática II</em>. Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Menchén, A. (2016). <em>Software ofimático de productividad en la nube</em>. Rama Editorial.',
      link: '',
    },
    {
      referencia: 'Microsoft Azure. (2025). <em>Azure documentation</em>.',
      link: 'https://learn.microsoft.com/en-us/azure/',
    },
    {
      referencia:
        'Mosco, V. (2016). La nube: <em>Big Data en un mundo turbulento</em>. Biblioteca Buridán.',
      link: '',
    },
    {
      referencia:
        'Oracle. (2025). <em>Documentación de Oracle Cloud Infrastructure</em>.',
      link: 'https://docs.oracle.com/iaas/',
    },
    {
      referencia:
        'Postigo Palacios, A. (2020). <em>Seguridad informática</em>. Editorial Paraninfo.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
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
          nombre: 'Javier Eduardo Díaz Machuca',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza ',
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
