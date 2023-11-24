<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Determinantes sociales de la salud y su impacto en la calidad de vida

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-12.col-md-4.col-lg-3.mb-3
        img(src='@/assets/curso/temas/tema2/img-1.png')
      .col-12.col-md-8.col-lg-9
        p De acuerdo con la Organización Mundial de la Salud, “la salud es un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades”.
        p Teniendo en cuenta lo anterior, es posible concluir que la salud no se refiere únicamente a la ausencia de enfermedad, sino que esta se relaciona con otros ámbitos que van mucho más allá de las dolencias físicas y que involucra otros elementos como el bienestar social y la salud mental. En ese orden de ideas, es importante tener en cuenta que la salud se relaciona con múltiples aspectos de la vida de las personas y que esta se ve influenciada por lo que suceda a su alrededor, incluso, a una escala más grande que el entorno local. 

    Separador 

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1. Concepto de Determinantes Sociales de la Salud (DSS)

    p.mb-5 Según lo expresado por la Organización Mundial de la Salud, “los determinantes sociales de la salud son las circunstancias en que las personas nacen, crecen, trabajan, viven y envejecen, incluido el conjunto más amplio de fuerzas y sistemas que influyen sobre las condiciones de la vida cotidiana". Por lo tanto, la salud es el resultado de las múltiples interacciones que se dan en cada uno de estos ámbitos y la manera cómo estas inciden en la persona.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-8.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 7.] <em>Esquema del enfoque multinivel de los determinantes de la salud</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/img-2.svg', alt='La figura 7, presenta el esquema del enfoque multinivel de los determinantes de salud, establecido por la Organización Mundial de la Salud.')
          figcaption Nota. Tomada de Dalhgren y Whitehead (1991, citado en OMS, 2005).

    .row.mt-5
      .col-10.col-md-10.col-lg-8.movil(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/figura7_Esquema_ del_enfoque_multinivel_de_los_determinantes_de_la_salud.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Descargar.</strong> Esquema del enfoque multinivel de los determinantes de la salud

    p.mb-5 Una de las formas de explicar el enfoque por determinante sociales en salud, es el modelo de multinivel propuesto por Dahlgren y Whitehead (1991 citado en OMS, 2005) donde se evidencia toda la gama de factores o determinantes, que inciden en la salud y el bienestar de las personas. En el anterior esquema se evidencia que los determinantes que están más cerca son los que tienen una influencia más directa sobre la salud del individuo, mientras que aquellos que se encuentran distantes tienen sobre él una influencia indirecta.

    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Determinantes estructurales

    p.mb-5 De acuerdo con lo expuesto en el modelo multinivel, en la capa exterior se encuentran los determinantes estructurales; es decir, aquellos que tiene incidencia indirecta sobre los individuos pero que sí tienen la capacidad de influir sobre las poblaciones. Estos determinantes se relacionan con las condiciones socioeconómicas de la población, la cultura predominante y los factores ambientales. 

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-2.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/decorador-1.svg', alt='Texto que describa la imagen')
        .col-lg-10
          p En el contexto actual, la cobertura de salud y el tipo de aseguramiento, por ejemplo, están supeditados al nivel de ingresos de las personas. Si se cuenta con unos ingresos considerables, es más fácil acceder a determinados servicios, mientras que, si los recursos económicos son limitados, es más probable que se encuentren barreras para la atención en salud. Igualmente, los factores socioeconómicos, a su vez, tienen incidencia en otros contextos como los hábitos, el acceso a las actividades de prevención de la enfermedad y la exposición a determinado tipo de riesgos.

    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Determinantes intermedios 

    p.mb-5 Estos determinantes se relacionan más con el entorno cercano a la persona y tienen que ver con las circunstancias individuales de la población (condiciones de vida, disponibilidad de alimento, condiciones de trabajo, educación, acceso a servicios de salud). Igualmente, estos determinantes se relacionan de forma estrecha con elementos como la producción agrícola, la educación, el entorno laboral, las situaciones de desempleo, agua y saneamiento básico, el entorno sanitario y la vivienda.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 8.] <em>Determinantes sociales de la salud</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/img-3-1.svg', alt='La figura 8, dicta que los determinantes sociales de la salud, declarados por la OMS y la OPS, para la región de las Américas, no podrán lograrse, sino hay equidad en el derecho de los puebles.')

    .row.justify-content-center.align-items-center.mt-5.mb-4
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 8.] <em>Determinantes sociales de la salud</em>
        figure
          img(src='@/assets/curso/temas/tema2/img-3-2.svg', alt='La figura 8, dicta que los determinantes sociales de la salud, declarados por la OMS y la OPS, para la región de las Américas, no podrán lograrse, sino hay equidad en el derecho de los puebles.') 

    p.mb-5 En una escala mucho más particular se evidencia otra serie de factores que igualmente se relacionan de manera muy estrecha con la salud de las personas y que tienen una influencia directa sobre su calidad de vida y su bienestar. Al interior de estos elementos encontramos en primer lugar las redes sociales y comunitarias; es decir, el entorno social en el cual se mueve el individuo y, posteriormente, los estilos de vida individuales, los cuales tienen que ver especialmente con los hábitos de las personas y su capacidad para generar rutinas que le permitan una menor incidencia de la enfermedad. 

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-2.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/decorador-2.svg', alt='Texto que describa la imagen')
        .col-lg-10
          p En el interior de la figura anterior se encuentran los factores inherentes a la persona propiamente dicha, sus características particulares y los elementos que la hacen más o menos vulnerable a determinadas condiciones de salud. Los principales aspectos que se analizan en este aparte son la edad, el sexo y los factores hereditarios, entre otros.

    Separador 

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2. Actores transversales en seguridad sanitaria y ambiental

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-md-8.mb-3
        p La movilización de los actores locales, regionales y nacionales es fundamental para conseguir un abordaje integral de la salud y reducir las barreras que dificultan el acceso de la población a los servicios. Por medio de la articulación y la movilización de comunidades, entidades, entes de control y el sector privado, entre otros actores, es posible influir de manera positiva en los indicadores en salud y mejorar las condiciones de vida de la población.
        p El Plan Decenal de Salud Pública 2022 - 2031 es uno de los ejemplos de cómo la articulación de diferentes actores permite un abordaje integral de las temáticas relacionadas con la salud y enriquece el debate respecto a la manera en que se integran los actores involucrados para que desde su experticia inciden positivamente en quienes diseñan las políticas en salud. 
      .col-md-4
        img(src="@/assets/curso/temas/tema2/img-4.png")
    
    p.mb-5 En términos generales, para el diseño y puesta en marcha de un sistema de atención integral en salud, es necesario contar al menos con los siguientes actores:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-8.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 9.] <em>Actores transversales de los procesos de salud y ambiente</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/img-5-1.svg', alt='La figura 9, muestra cuales son los actores transversales de los procesos de salud y ambiente.')
          figcaption Nota. Tomada de la Alcaldía de Medellín. Política integral de salud ambiental.

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10.col-md-10.col-lg-8.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 9.] <em>Actores transversales de los procesos de salud y ambiente</em>
        figure
          img(src='@/assets/curso/temas/tema2/img-5-2.svg', alt='La figura 9, muestra cuales son los actores transversales de los procesos de salud y ambiente.') 
          figcaption Nota. Tomada de la Alcaldía de Medellín. Política integral de salud ambiental.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-12.col-md-4.col-lg-3.mb-3
        img(src='@/assets/curso/temas/tema2/img-6.png')
      .col-12.col-md-8.col-lg-9
        p En los procesos de construcción de políticas o programas de salud y salud ambiental se cuenta, por lo general, con el punto de vista de los principales actores que confluyen en un área determinada y que de una u otra forma se interrelacionan con el tema sanitario y ambiental. En el caso de las <strong>comunidades,</strong> es importante que estas se manifiesten y expongan sus inquietudes durante la formulación de las propuestas. 
        p Por su parte, los <strong>gremios</strong> están encargados de fortalecer los ámbitos de trabajo saludables y promover dentro de sus organizaciones las políticas de seguridad y salud en el trabajo. Respecto a la <strong>industria,</strong> la relación con los temas sanitarios se da frente al desarrollo de prácticas sostenibles y ambientalmente responsables. Por otro lado, el papel de la <strong>academia</strong> es fundamental para analizar los impactos de las actividades productivas sobre el entorno y generar estrategias de producción más limpia que no riñan con los intereses económicos y financieros.
    
    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-2.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/decorador-3.svg', alt='Texto que describa la imagen')
        .col-lg-10
          p Desde el punto de vista de la <strong>institucionalidad,</strong> es evidente que el desarrollo de las políticas, programas y proyectos se tiene que llevar a cabo a través de las entidades presentes en el territorio. Para ello es necesario conocer su marco normativo, su objeto y desarrollar las alternativas necesarias para fortalecer su accionar en el marco del proyecto. En cuanto a las <strong>ONG</strong> (organizaciones no gubernamentales) es evidente la capacidad que tienen para gestionar y movilizar recursos, por lo que su papel fundamental en la generación de oportunidades de financiamiento de iniciativas sociales y comunitarias. 

    p.mb-5 Finalmente, las EPS (entidades promotoras de salud) aparecen en este escenario como actores fundamentales para la prestación de los servicios y el desarrollo de estrategias para la promoción de la salud y la prevención de la enfermedad. A través de su ejercicio se materializan muchas de las políticas estatales en materia de cobertura en salud y acceso a los servicios esenciales.

    Separador 
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3. Actores sociales

    p.mb-5 Estos son fundamentales para el desarrollo de los procesos enfocados en el fortalecimiento de la gestión integral de la salud, ya que buena parte de los factores que inciden en la salud de las personas depende de comportamientos, hábitos y costumbres que se dan al interior de las comunidades. 

    .tarjeta.color-acento-contenido1.p-4.mb-5.mt-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-3.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/decorador-4.svg', alt='Texto que describa la imagen')
        .col-lg-7
          p De acuerdo con el portal “Así vamos en salud”, disponible en el enlace <b><a href="https://www.asivamosensalud.org/salud-para-ciudadanos/participacion-comunitaria-en-salud" target="_b">https://www.asivamosensalud.org/salud-para-ciudadanos/participacion-comunitaria-en-salud,</a></b> la Constitución Política de Colombia de 1991, garantiza que los servicios de salud se organicen de forma descentralizada, por niveles de atención y con participación de la comunidad, lo cual permite que los ciudadanos tomen decisiones sobre su salud y tengan la oportunidad de ejercer veeduría sobre la calidad de los servicios y el acceso a una atención oportuna. 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-8.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 10.] <em>Actores clave en la implementación de las políticas de salud pública</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/img-7-1.svg', alt='La figura 10, establece los actores clave en la implementación de las políticas de salud pública, entre los que se cuentan: el estado, gobierno y sectores de la sociedad.')

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10.col-md-10.col-lg-8.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 10.] <em>Actores clave en la implementación de las políticas de salud pública</em>
        figure
          img(src='@/assets/curso/temas/tema2/img-7-2.svg', alt='La figura 10, establece los actores clave en la implementación de las políticas de salud pública, entre los que se cuentan: el estado, gobierno y sectores de la sociedad.') 

    p.mb-5 De acuerdo con el esquema anterior, es evidente cómo a través de la acción del Estado, los gobiernos y todos los sectores de la sociedad se llevan a la realidad las políticas diseñadas en materia de salud pública que están enfocadas en la garantía del derecho a la salud y el mejoramiento de los indicadores que dan cuenta de la calidad de vida de la población.

    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Mapeo de actores

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-md-8.mb-3
        p Para el desarrollo pleno de las garantías del derecho a la salud, es necesario identificar los actores presentes en el territorio y diseñar los mecanismos necesarios para asegurar su participación en las diferentes instancias de decisión. Para que esto sea posible es indispensable recurrir a lo que se conoce como un mapeo de actores, lo cual consiste, básicamente, en la identificación plena de cada una de las entidades, personas, gremios o sectores de la sociedad que confluyen en un territorio. 
        p Una de las formas clásicas de realizar un mapeo de actores, es la cartografía social, la cual consiste en el desarrollo de actividades con las comunidades, a menudo talleres, en medio de los cuales se indaga sobre los elementos que inciden en la calidad de vida de las personas, como respuesta institucional, condiciones socioeconómicas, niveles de escolaridad, seguridad y calidad de vida, entre otros, todos ellos factores que se relacionan con los determinantes de la salud. 
        p A través de la cartografía social es posible identificar, igualmente, las formas de organización comunitaria, entre las cuales se encuentran agremiaciones, asociaciones, cooperativas y demás instancias de participación a través de las que se desarrollan procesos de gestión y promoción de la salud. 
      .col-md-4
        img(src="@/assets/curso/temas/tema2/img-8.png")

    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Comunidades, familia y salud

    p.mb-5 Con base en el enfoque por determinantes de la salud, se evidencia que tanto la familia como la comunidad corresponden al entorno más cercano en el cual se da la cotidianidad de las personas y en medio del cual se desarrollan elementos que inciden en la calidad de vida, entre los que se encuentran los hábitos, la vivienda, la alimentación y la salud mental. Definitivamente, un entorno seguro, protector de la salud, es indispensable para mejorar los indicadores de salud de la población. 

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#E6EBFB")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-2.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/decorador-5.svg', alt='Texto que describa la imagen')
        .col-lg-10
          p La familia se define como la unidad estructural de la sociedad y de acuerdo con el Ministerio de Salud y Protección Social, la familia se concibe como finalidad y centro de la atención y el análisis situacional en salud como determinante social, y no como medio o lugar para la organización de las acciones en salud. Al interior de las familias se definen pautas, comportamientos, costumbres y relaciones, así como otras condiciones sociales y políticas que sin duda se reflejan a mayor escala, es decir, en las comunidades y en las sociedades organizadas. 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 11.] <em>Lugar de la familia y la comunidad en el modelo de Atención Primaria en Salud </em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/img-9-1.svg', alt='La figura 11, grafica la relación que existe entre los objetivos de la atención primaria en salud, y la generación de ambientes favorables, que permitan el alcance de dichos objetivos.')

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 11.] <em>Lugar de la familia y la comunidad en el modelo de Atención Primaria en Salud </em>
        figure
          img(src='@/assets/curso/temas/tema2/img-9-2.svg', alt='La figura 11, grafica la relación que existe entre los objetivos de la atención primaria en salud, y la generación de ambientes favorables, que permitan el alcance de dichos objetivos.') 

    p.mb-5 Según el enfoque de la atención primaria en salud, además de la familia, la comunidad es la otra base estructural empleada para la planificación y la acción en salud, lo cual requiere del fortalecimiento de los procesos de gobernanza, gestión y recolección de información real sobre las condiciones de vida de las personas, de manera que las acciones que se diseñen respondan a sus necesidades reales y den solución a las problemáticas más sentidas. 

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-2.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/decorador-6.svg', alt='Texto que describa la imagen')
        .col-lg-10
          p A través del aumento de las capacidades y habilidades de las comunidades en el ejercicio de sus derechos y la promoción de la autonomía, es posible articular la respuesta institucional, mejorar los canales de atención y diseñar estrategias para la promoción de hábitos de vida saludables que contribuyan a reducir la incidencia de los problemas de salud pública en los territorios. 

    p.mb-5 Según lo expresado en el portal de la Secretaría de Salud de Bogotá, en relación con los mecanismos de participación ciudadana, <a href="http://www.saludcapital.gov.co/Paginas2/MecanismosdeParticipacionCiudadana.aspx" target="_blank">Enlace web</a> existen diferentes formas e instancias a través de las cuales las personas pueden incidir en la forma como se prestan los servicios de salud y en la manera en que las entidades se relacionan con las comunidades. Las principales son las siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 12.] <em>Principales instancias de participación ciudadana en salud</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/img-10-1.svg', alt='La figura 12, informa respecto de las principales instancias de participación ciudadana, junto con el marco normativo que acompaña cada una de estas.')

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 12.] <em>Principales instancias de participación ciudadana en salud</em>
        figure
          img(src='@/assets/curso/temas/tema2/img-10-2.svg', alt='La figura 12, informa respecto de las principales instancias de participación ciudadana, junto con el marco normativo que acompaña cada una de estas.') 

    Separador 

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4. Entes de control territorial, departamental y nacional

    p Muy de la mano con los mecanismos que aseguran la participación de la ciudadanía en las instancias de decisión sobre los temas de salud, se encuentran los entes de control, los cuales tienen la misión de velar por el cumplimiento de la ley y la restitución de los derechos de las personas, sin importar sus creencias, raza, credo o cualquier otra condición. Al respecto el Manual de estructura del Estado colombiano indica que los organismos de control “son aquellos organismos a los que la Constitución Política les confía las funciones relacionadas con el control disciplinario, defender al pueblo y el control fiscal. No están adscritos ni vinculados a las Ramas del poder público”. 
    p.mb-5 De acuerdo con el organigrama publicado en el portal web del Departamento Administrativo de la Función Pública la estructura general de los organismos de control es la siguiente:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-8.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 13.] <em>Organigrama general de los organismos de control en Colombia</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/img-11-1.svg', alt='La figura 13, muestra el organigrama general de los organismos de control nacional, entre los que se cuentan: Contraloría General de la República; Auditoría General de la República; y el Ministerio Público. ')
          figcaption Nota. Tomada de Función Pública (2022)

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10.col-md-10.col-lg-8.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 13.] <em>Organigrama general de los organismos de control en Colombia</em>
        figure
          img(src='@/assets/curso/temas/tema2/img-11-2.svg', alt='La figura 13, muestra el organigrama general de los organismos de control nacional, entre los que se cuentan: Contraloría General de la República; Auditoría General de la República; y el Ministerio Público. ') 
          figcaption Nota. Tomada de Función Pública (2022) 

    p.mb-5 Con base en el organigrama de la figura anterior, a continuación, se describen algunos de los organismos de control indicados:
    
    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Contraloría General de la República

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La contraloría es un organismo netamente técnico y con autonomía administrativa y presupuestal que tiene por objeto lo siguiente:
          br
          br 
          ul.lista-ul.mb-3
            li.mb-0
              i.fas.fa-circle(style="color:#F9BCAB")
              | Ejercer en representación de la comunidad la gestión fiscal de los recursos de la nación. 
            br
            li.mb-0 
              i.fas.fa-circle(style="color:#F9BCAB")
              | Revisar la administración del patrimonio público, de los recursos naturales y del medio ambiente. 
            br
            li.mb-0 
              i.fas.fa-circle(style="color:#F9BCAB")
              | Generar una cultura de control del patrimonio del Estado. 
            br
            li.mb-0 
              i.fas.fa-circle(style="color:#F9BCAB")
              | Establecer responsabilidades por el mal manejo de los recursos e imponer las sanciones correspondientes. 
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Dentro de las funciones que tiene la Contraloría General de la República están las siguientes: 
          br
          br 
          ul.lista-ul.mb-3
            li.mb-0
              i.fas.fa-circle(style="color:#F9BCAB")
              | Vigilar la gestión fiscal del Estado a través del control financiero. 
            br
            li.mb-0 
              i.fas.fa-circle(style="color:#F9BCAB")
              | Vigilar la gestión fiscal de acuerdo con los procedimientos y la ley. 
            br
            li.mb-0 
              i.fas.fa-circle(style="color:#F9BCAB")
              | Ejercer control posterior sobre cuentas de las entidades territoriales. 
            br
            li.mb-0 
              i.fas.fa-circle(style="color:#F9BCAB")
              | Ejercer funciones administrativas propias de su gestión. 
            br
            li.mb-0 
              i.fas.fa-circle(style="color:#F9BCAB")
              | Realizar actividades educativas formales y no formales en temas relacionados con la gestión fiscal. 
            br
            li.mb-0 
              i.fas.fa-circle(style="color:#F9BCAB")
              | Coordinar las contralorías territoriales. 
            br
            li.mb-0 
              i.fas.fa-circle(style="color:#F9BCAB")
              | Advertir sobre posibles actuaciones que pongan en riesgo el patrimonio público. 
            br
            li.mb-0 
              i.fas.fa-circle(style="color:#F9BCAB")
              | Prestar apoyo para el desarrollo de las funciones constitucionales del Contralor de la República.
            br
            li.mb-0 
              i.fas.fa-circle(style="color:#F9BCAB")
              | Emitir conceptos sobre los procesos de control interno. 

    p.mb-5 El marco normativo de la Contraloría General de la Nación es el siguiente:

    .row.mb-5.align-self-stretch.mt-5.justify-content-center
      .col-md-8.col-lg-4.col-12(data-aos="fade-right")
        .tarjeta.tarjeta--azul1(style="height:100%")
          .p-4
            p.mb-0 Ley 106 de 1993 (diciembre 30).
            p.mb-0 Decreto 267 de 2000 (febrero 22).
            p.mb-0 Resolución orgánica 5500 de 2003 (julio 4).
            p.mb-0 Ley 1474 de 2011 (julio 12).

      .col-md-8.col-lg-4.col-12(data-aos="fade-right")
        .tarjeta.tarjeta--azul2(style="height:100%")
          .p-4
            p.mb-0 Ley 1807 de 2016 (septiembre 1).
            p.mb-0 Decreto 888 de 2017 (mayo 27).
            p.mb-0 Decreto 2037 de 2019 (noviembre 7).
            p.mb-0 Decreto 405 de 2020 (marzo 16).
    
    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Auditoría General de la República

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-12.col-md-4.col-lg-3.mb-3
        img(src='@/assets/curso/temas/tema2/img-14.png')
      .col-12.col-md-8.col-lg-9
        p La Auditoría General de la República es un organismo de vigilancia de la gestión fiscal. Su objeto textual es “Ejercer la función de vigilancia de la gestión fiscal, en la modalidad más aconsejable, mediante los sistemas de control financiero, de gestión y de resultados, en desarrollo de los principios de eficiencia, economía y equidad” (Función Pública – Manual de Estructura del Estado). Su función es ejercer la vigilancia de la gestión fiscal conforme a los principios establecidos en la Constitución Política de Colombia de 1991, para lo cual el Auditor General cuenta con cierta autonomía en cuanto a la fijación de las políticas, los métodos para ejercer el control y la presentación de las rendiciones de cuentas de la entidad. 
        p Dentro de su estructura, cuenta con una oficina llamada Despacho del Auditor Auxiliar, de quien dependen la auditoría delegada para el Control Fiscal, las gerencias seccionales y la secretaría general. 

    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Ministerio Público

    p.mb-5 Este es un organismo de control integrado por la Procuraduría General de la Nación y la Defensoría del Pueblo. Este ministerio es ejercido por el Procurador General, por el Defensor del Pueblo, por los procuradores delegados, los agentes del Ministerio Público y los personeros municipales. Por su parte, el Procurador General es elegido por el Senado de la República para un periodo de cuatro años. 
    
    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Procuraduría General de la Nación

    p.mb-5 La Procuraduría es el máximo organismo del ministerio público y posee total autonomía financiera y administrativa. Representa a los colombianos frente al Estado y sus funciones generales y específicas se definen en los artículos 277 y 278 de la Constitución Política de 1991.

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-md-9.mb-3
          p Según lo expuesto en el Manual de la función pública, el objeto de la Procuraduría es el de vigilar el cumplimiento de la constitución y la ley, así como ejercer control sobre las funciones de los servidores públicos. Otros componentes relacionados con su objeto son los siguientes:
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | Vigilar el cumplimiento de la Constitución, proteger los Derechos Humanos y defender los intereses de la sociedad, en especial, el ambiente. 
            li 
              i.fas.fa-angle-right
              | Ejercer vigilancia de la conducta de las personas que desempeñan funciones públicas, incluso quienes ocupan cargos de elección popular. 
            li 
              i.fas.fa-angle-right
              | Adelantar investigaciones e imponer las sanciones correspondientes según dicte la ley. Igualmente, para el ejercicio de sus funciones la Procuraduría tendrá atribuciones de policía judicial.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema2/decorador-7.svg', alt='Imagen decorativa')

    p Dentro de las principales funciones que ejerce la procuraduría existen las de tipo preventivo, es decir, aquellas que se relacionan con la vigilancia de las actuaciones que llevan a cabo los funcionarios públicos y las disciplinarias, que consisten en la imposición de sanciones a los servidores públicos que incurran en faltas relacionadas con delitos de corrupción o detrimento patrimonial. 
    p.mb-5 Dentro de la procuraduría existen dependencias encargadas de la atención de determinados asuntos, según su naturaleza, como son la procuraduría auxiliar para Asuntos Constitucionales y la Procuraduría Auxiliar para Asuntos Disciplinarios. Igualmente, existe una Dirección Nacional de Investigaciones Especiales y las salas disciplinarias de instrucción, disciplinaria ordinaria de juzgamiento y la sala disciplinaria de juzgamiento de servidores públicos de elección popular. En el nivel territorial, están las procuradurías regionales, las distritales y las provinciales.

    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Defensoría del Pueblo

    p.mb-5 Es la entidad que se encarga de impulsar la efectividad de los derechos humanos y en términos generales posee las siguientes funciones:

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#E6EBFB")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-2.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/decorador-8.svg', alt='Texto que describa la imagen')
        .col-lg-10
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | Promoción y divulgación de los Derechos Humanos: garantía en el ejercicio de los derechos de la población en diversos contextos. 
            li 
              i.fas.fa-angle-right
              | Prevención, protección y defensa de los Derechos Humanos: actúa en casos donde haya alguna situación que ponga en peligro el ejercicio de los Derechos Humanos. 
            li 
              i.fas.fa-angle-right
              | Fomento del respeto al derecho internacional humanitario: realiza campañas a todo nivel para promover el respeto al derecho internacional humanitario por parte de los actores locales y regionales. 
    
    p.mb-5 De la oficina del Vice Defensor del Pueblo dependen las siguientes instancias.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 14.] <em>Organigrama general de los organismos de control en Colombia</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/img-15-1.svg', alt='La figura 14, indica cuales son las direcciones y oficinas que se encuentran bajo el mando del despacho de Vice defensor del pueblo.')

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 14.] <em>Organigrama general de los organismos de control en Colombia</em>
        figure
          img(src='@/assets/curso/temas/tema2/img-15-2.svg', alt='La figura 14, indica cuales son las direcciones y oficinas que se encuentran bajo el mando del despacho de Vice defensor del pueblo.') 
    
    p.mb-5 Además de estas dependencias, directamente y siempre bajo el visto bueno del Defensor del Pueblo existen las defensorías regionales. 
    
    .row.align-items-center.mb-2
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
      .col-auto.bg-c8(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Otras dependencias de control departamentales y/o nacionales

    p.mb-5 Además de las entidades anteriormente mencionadas, existen algunas otras que, igualmente, desarrollan actividades relacionadas con la vigilancia y el seguimiento a la forma como se presentan los servicios de salud en las regiones:

    .BGIMG02.p-4.mb-5
      SlyderB.mb-5(:datos="datosSlyder")












</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Superintendencia de Salud',
        texto:
          'Sus funciones principales se relacionan con la inspección, vigilancia y control del sistema general para la prestación de servicios de salud.',
        imagen: require('@/assets/curso/temas/tema2/img-16.png'),
      },
      {
        titulo: 'Secretarías de Salud',
        texto:
          'En los ámbitos departamentales, municipales y distritales desarrollan acciones de inspección, vigilancia y control en materia de saneamiento básico.',
        imagen: require('@/assets/curso/temas/tema2/img-17.png'),
      },
      {
        titulo: 'INVIMA',
        texto:
          'Instituto Nacional de Vigilancia de Medicamentos y Alimentos. Es una entidad de vigilancia y control de carácter técnico científico que trabaja para la protección de la salud individual y colectiva de los colombianos.',
        imagen: require('@/assets/curso/temas/tema2/img-18.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
