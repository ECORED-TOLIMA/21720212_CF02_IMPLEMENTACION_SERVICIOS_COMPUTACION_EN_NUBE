<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Servicios en la nube
    
    .row.justify-content-center.mb-5
      .col-lg-8.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--C02.p-3
          p.p-4.mb-0(data-aos="fade-down") La computación en la nube se entiende como una forma moderna de acceder a recursos tecnológicos sin necesidad de instalar físicamente todos los equipos y programas en una computadora personal o en los servidores de una organización. En lugar de realizar inversiones en infraestructura costosa, las empresas y los usuarios pueden alquilar los recursos que requieren a través de internet. Esto permite que diversos servicios estén disponibles en cualquier lugar del mundo, siempre que exista conexión a la red.
      .col-lg-4.col-md-7.col-10.mb-3.order-lg-2.order-1.mb-lg-0
        .row.justify-content-center(data-aos="fade-up")
          .col
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema1/img01.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Los servicios en la nube se dividen principalmente en tres modelos:

    .row.justify-content-center.mb-0
      .col-lg-4.col-md-6.col-12.mb-5
        .card.h-100
          figure.text-center
            img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img02.png', alt='Imagen decorativa')
          .cajon.cajon--C02
            h4(data-aos="fade-down").text-center.p-3.mb-0 Infraestructura como Servicio (IaaS)
      .col-lg-4.col-md-6.col-12.mb-5
        .card.h-100
          figure.text-center
            img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img03.png', alt='Imagen decorativa')
          .cajon.cajon--C02
            h4(data-aos="fade-down").text-center.p-3.mb-0 Plataforma como Servicio (PaaS)
      .col-lg-4.col-md-6.col-12.mb-5
        .card.h-100
          figure.text-center
            img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img04.png', alt='Imagen decorativa')
          .cajon.cajon--C02
            h4(data-aos="fade-down").text-center.p-3.mb-0 Software como Servicio (SaaS)
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10
        p(data-aos="fade-down") Cada modelo responde a diferentes necesidades y ofrece distintos niveles de control al usuario.
        p.mb-5(data-aos="fade-down") Para comprender esta diferencia, resulta útil la analogía con una vivienda:
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-11
              img(data-aos="fade-right")(src='@/assets/curso/temas/tema1/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01
            .p-4
              h4 
              p.mb-0(data-aos="fade-down") Cuando una persona necesita un lugar para habitar, puede optar por diferentes alternativas: alquilar un terreno con instalaciones básicas para construir desde cero, arrendar una casa parcialmente equipada en la que solo debe añadir ciertos elementos, o vivir en un apartamento completamente amoblado y listo para ser ocupado. De manera similar, IaaS, PaaS y SaaS representan distintos grados de responsabilidad y personalización que se ajustan a los requerimientos de cada organización o usuario.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Infraestructura como Servicio (IaaS)

    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-1.order-2
            p(data-aos="fade-down") La Infraestructura como Servicio (IaaS) se refiere al modelo en el que el proveedor de la nube entrega los recursos tecnológicos básicos: servidores virtuales, sistemas de almacenamiento, redes de comunicación y, en algunos casos, servicios de balanceo de carga. Es equivalente a contar con un “terreno” con servicios esenciales, sobre el cual la organización construye y administra todo lo demás, como sistemas operativos, aplicaciones, bases de datos y medidas de seguridad.
            .tarjeta.tarjeta--C02.p-3
              .row.justify-content-center.align-items-center
                .col-auto.col-2
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/temas/tema1/img06.svg', alt='Imagen decorativa')
                .col-10
                  p.mb-0(data-aos="fade-down") En este modelo, el usuario conserva un alto nivel de control y flexibilidad, ya que puede personalizar su infraestructura tecnológica de acuerdo con sus necesidades específicas. Sin embargo, este grado de libertad implica también mayor responsabilidad, pues requiere conocimiento técnico para configurar, administrar y asegurar el entorno virtual.
                
          .col-lg-4.col-md-7.col-8.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="fade-up")
              .col
                figure.h-100.w-100.m-0(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema1/img07.png', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-down") Las ventajas principales del IaaS son:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img08.svg", alt="alt").img75.m-auto
          p.mb-0 Pago por uso, lo que evita inversiones iniciales en <em>hardware</em> costoso.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img09.svg", alt="alt").img80.m-auto
          p.mb-0 Escalabilidad inmediata, permitiendo aumentar o reducir recursos en cuestión de minutos.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt").img80.m-auto
          p.mb-0 Flexibilidad para instalar cualquier sistema operativo o <em>software</em> según los objetivos del usuario.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img11.svg", alt="alt").img80.m-auto
          p.mb-0 Acceso remoto desde cualquier lugar con conexión a Internet.

    p.mb-5(data-aos="fade-down") Pero es importante reconocer las limitaciones del IaaS:

    .row.justify-content-center.mb-5
      .col-lg-8.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--C03.p-3
          .py-1
            ul.lista-ul--color.mb-0(data-aos="fade-down")
              li.mb-4
                i.fas.fa-cloud
                | Requiere administradores capacitados en sistemas, redes y seguridad.
              li.mb-4
                i.fas.fa-cloud
                | La gestión incorrecta puede exponer vulnerabilidades en los datos.
              li.mb-0
                i.fas.fa-cloud
                | No resulta práctico para usuarios principiantes que solo buscan aplicaciones listas para usar.
      .col-lg-2.col-md-6.col-8.mb-3.order-lg-2.order-1.mb-lg-0
        .row.justify-content-center
          .col
            figure
              img(src='@/assets/curso/temas/tema1/img12.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Actualmente se encuentran diversos proveedores que ofrecen servicios de IaaS, entre ellos:

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6.col-12.mb-4
        .card.h-100
          figure.text-center
            img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img13.png', alt='Imagen decorativa')
          .cajon.cajon--C02
            h4(data-aos="fade-down").text-center.p-3.mb-0 Amazon Web Services (AWS EC2)
      .col-lg-4.col-md-6.col-12.mb-4
        .card.h-100
          figure.text-center
            img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img14.png', alt='Imagen decorativa')
          .cajon.cajon--C02
            h4(data-aos="fade-down").text-center.p-3.mb-0 Google Compute Engine
      .col-lg-4.col-md-6.col-12.mb-4
        .card.h-100
          figure.text-center
            img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img15.png', alt='Imagen decorativa')
          .cajon.cajon--C02
            h4(data-aos="fade-down").text-center.p-3.mb-0 Microsoft Azure Virtual Machines
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-2.order-2
            p.mb-2(data-aos="fade-down") Estas plataformas permiten a las organizaciones configurar servidores virtuales, administrar redes y escalar recursos según sus necesidades, ofreciendo flexibilidad y control en la gestión de la infraestructura tecnológica.
            .tarjeta.tarjeta--C02.p-3
              .row.justify-content-center.align-items-center
                .col-auto.col-2
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/temas/tema1/img16.svg', alt='Imagen decorativa')
                .col-lg-10.col-10
                  p.mb-0(data-aos="fade-down") En el contexto educativo, instituciones como el SENA podrían aprovechar IaaS para crear laboratorios virtuales donde los aprendices configuren servidores, redes y sistemas operativos sin necesidad de invertir en equipos físicos. De este modo, se brinda un espacio seguro y escalable para que los estudiantes experimenten con infraestructuras reales y adquieran competencias aplicables al entorno laboral.
          .col-lg-4.col-md-8.col-8.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="fade-up")
              .col
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen decorativa')

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Plataforma como Servicio (PaaS)

    p(data-aos="fade-down") La Plataforma como Servicio (PaaS) es un modelo de computación en la nube que va un paso más allá de IaaS. No solo entrega la infraestructura, sino que además incluye un conjunto de herramientas y servicios listos para que los usuarios creen, prueben y desplieguen aplicaciones sin tener que instalar y configurar entornos complejos.
    p(data-aos="fade-down") Se puede entender con la siguiente analogía: es como recibir un edificio ya construido, con paredes, instalaciones eléctricas y conexiones listas. El usuario solo debe enfocarse en diseñar y decorar su espacio, en lugar de preocuparse por levantar la estructura desde cero.
    p.mb-5(data-aos="fade-down") Las características principales de PaaS son:
    
    .row.justify-content-center.mb-5
      .col-lg-8.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--C03.p-4
          .py-1
            ul.lista-ul--color.mb-0(data-aos="fade-down")
              li.mb-4
                i.fas.fa-cloud
                p.mb-0 Incluye infraestructura (servidores, almacenamiento y redes) y también herramientas de desarrollo.
              li.mb-4
                i.fas.fa-cloud
                p.mb-0 Ofrece entornos preconfigurados con bases de datos, sistemas operativos, servidores <em>web</em> y marcos de programación.
              li.mb-4
                i.fas.fa-cloud
                p.mb-0 Permite a los desarrolladores concentrarse en el diseño y las funcionalidades de las aplicaciones, sin perder tiempo en la administración de <em>hardware</em> o <em>software</em> base.
              li.mb-0
                i.fas.fa-cloud
                p.mb-0 Proporciona escalabilidad automática, ajustando los recursos según las necesidades del proyecto.
      .col-lg-3.col-md-6.col-8.mb-3.order-lg-2.order-1.mb-lg-0
        .row.justify-content-center
          .col
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img18.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Esta plataforma PaaS tiene ventajas, las cuales son:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-lg-4.col-3
            img(src='@/assets/curso/temas/tema1/img19.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Reduce el tiempo de desarrollo, ya que todo está listo para usarse.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-lg-4.col-3
            img(src='@/assets/curso/temas/tema1/img20.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Disminuye los costos en equipos físicos y mantenimiento.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-lg-4.col-3
            img(src='@/assets/curso/temas/tema1/img21.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Favorece la innovación, al permitir que los equipos se enfoquen en sus ideas.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-lg-4.col-3
            img(src='@/assets/curso/temas/tema1/img22.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Resulta ideal para proyectos educativos, pues facilita a los aprendices experimentar y desarrollar aplicaciones.
    
    p.mb-5(data-aos="fade-down") Pero es importante reconocer las limitaciones de PaaS:

    .row.justify-content-center.mb-5
      .col-lg-8.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--C03.p-4
          .py-1
            ul.lista-ul--color.mb-0(data-aos="fade-down")
              li.mb-4
                i.fas.fa-cloud
                | Tiene dependencia del proveedor, ya que, si este modifica o elimina una herramienta, las aplicaciones pueden necesitar adaptaciones.
              li.mb-0
                i.fas.fa-cloud
                | Menor control en comparación con IaaS, ya que el proveedor administra gran parte de la infraestructura y las configuraciones.
      .col-lg-3.col-md-6.col-8.mb-3.order-lg-2.order-1.mb-lg-0
        .row.justify-content-center
          .col
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img23.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-4
      .col-lg-9.col-12.order-lg-2.order-2
        p.mb-3(data-aos="fade-down") Actualmente se encuentran plataformas muy utilizadas en el sector educativo y empresarial, tales como:
        .row.justify-content-center
          .col-lg-4.mb-3
            .tarjeta.tarjeta--C02.p-3.h-100
              .py-1
                p.mb-1(data-aos="fade-down") <b>Google App Engine</b>: permite desarrollar y desplegar aplicaciones en múltiples lenguajes de programación.
          .col-lg-4.mb-3
            .tarjeta.tarjeta--C02.p-3.h-100
              .py-1
                p.mb-1(data-aos="fade-down") <b>Microsoft Azure App Service</b>: facilita la creación de aplicaciones <em>web</em>, móviles y API con integración a otros servicios de Azure.
          .col-lg-4.mb-3
            .tarjeta.tarjeta--C02.p-3.h-100
              .py-1
                p.mb-1(data-aos="fade-down") <b>Heroku</b>: popular por su sencillez, ideal para desarrolladores que buscan rapidez en pruebas y despliegues.
      .col-lg-3.col-md-6.col-8.mb-3.order-lg-1.order-1.mb-lg-0
        .row.justify-content-center
          .col
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img24.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-5(data-aos="fade-down") En el ámbito educativo, PaaS ofrece a los aprendices un espacio práctico para experimentar en el desarrollo de <em>software</em>, sin necesidad de gestionar servidores o sistemas operativos. Por ejemplo:

        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            .col-lg-10
              img(data-aos="fade-right")(src='@/assets/curso/temas/tema1/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01
            .p-3
              h4 
              p.mb-0(data-aos="fade-down") Un equipo de aprendices puede usar Heroku para desplegar un proyecto de aplicación <em>web</em> como parte de su formación, enfocándose en la lógica del sistema y no en la infraestructura.

        p.mb-0(data-aos="fade-down") En conclusión, PaaS se presenta como un modelo que equilibra facilidad de uso, innovación y reducción de tiempos, aunque entrega menos control que IaaS.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Software como Servicio (SaaS)

    .row.justify-content-center.mb-5
      .col-lg-8.col-12.order-lg-1.order-2
        p(data-aos="fade-down") Es el modelo más accesible dentro de la computación en la nube, ya que ofrece aplicaciones listas para usarse sin necesidad de conocimientos técnicos avanzados. El usuario únicamente debe registrarse o pagar una suscripción, y de inmediato puede utilizar el servicio desde cualquier dispositivo con conexión a Internet.
        p(data-aos="fade-down") Una manera sencilla de entenderlo es imaginar un departamento totalmente amueblado: la persona solo entra, lo habita y disfruta de todas sus comodidades sin preocuparse por la construcción, el mantenimiento o las reparaciones. De la misma forma, en SaaS el proveedor se encarga de todo el entorno técnico.
        p.mb-4(data-aos="fade-down") Las características principales de SaaS son:
        .tarjeta.tarjeta--C03.p-3
          ul.lista-ul--color.mb-0(data-aos="fade-down")
            li.mb-4
              i.fas.fa-cloud
              p.mb-0 Aplicaciones accesibles desde navegadores <em>web</em> o dispositivos móviles.
            li.mb-4
              i.fas.fa-cloud
              p.mb-0 Administración, mantenimiento y actualizaciones a cargo del proveedor.
            li.mb-4
              i.fas.fa-cloud
              p.mb-0 Acceso multiplataforma, lo que permite trabajar desde cualquier lugar con conexión.
            li.mb-0
              i.fas.fa-cloud
              p.mb-0 Funcionalidades colaborativas, que facilitan compartir información en tiempo real.
      .col-lg-4.col-md-6.col-8.mb-3.order-lg-2.order-1.mb-lg-0
        .row.justify-content-center
          .col
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img26.jpg', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-down") SaaS cuenta con muchas ventajas:

    .row.justify-content-center.mb-4
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema1/img27.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") No requiere instalación local de programas.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema1/img28.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Promueve el acceso democrático a la tecnología, ya que cualquier persona puede usarlo.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema1/img29.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Asegura actualizaciones automáticas y permanentes sin intervención del usuario.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema1/img30.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Favorece la colaboración, ya que múltiples usuarios pueden trabajar de forma simultánea.
    
    p.mb-5(data-aos="fade-down") Pero SaaS tiene algunas limitaciones:

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C02.p-3.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema1/img31.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Dependencia total del proveedor, si el servicio presenta fallas, el usuario no puede acceder a sus datos o aplicaciones.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C02.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema1/img32.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Menor personalización, ya que se ajusta al diseño estándar del proveedor.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C02.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema1/img33.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Requiere conexión estable a Internet para garantizar un buen funcionamiento.
      .col-lg-3.col-md-8.col-10.mb-3
        figure(data-aos="flip-up")
          img(src="@/assets/curso/temas/tema1/img34.png", alt="Imagen decorativa")
    
    p.mb-5(data-aos="fade-down") Actualmente se encuentran aplicaciones ampliamente utilizadas como:

    .row.mb-5
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img35.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01.w-100
            .p-4(data-aos="fade-down") Google Drive y Microsoft 365, que permiten almacenamiento en la nube y edición colaborativa de documentos.
              p.mb-0.text-center 
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img36.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01.w-100
            .p-4(data-aos="fade-down") Spotify y Netflix, que ofrecen servicios de música y video en streaming.
              p.mb-0.text-center 
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img37.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01.w-100
            .p-4(data-aos="fade-down") Zoom y Microsoft Teams, que facilitan la comunicación y el trabajo en equipo en entornos virtuales.
              p.mb-0.text-center 
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-5(data-aos="fade-down") En la educación, SaaS resulta especialmente útil porque ofrece herramientas prácticas y fáciles de usar. Por ejemplo:

        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            .col-lg-10
              img(data-aos="fade-right")(src='@/assets/curso/temas/tema1/img38.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01
            .p-3
              h4 
              p.mb-0(data-aos="fade-down") Aprendices e instructores utilizan Google Workspace o Microsoft 365 para gestionar documentos, presentaciones y videoconferencias sin necesidad de preocuparse por instalaciones o actualizaciones. Esto favorece la colaboración en proyectos y el acceso a los recursos desde cualquier lugar.

        p.mb-0(data-aos="fade-down") En conclusión, SaaS representa la forma más cómoda y cercana para los usuarios de interactuar con la nube, ya que reduce las barreras técnicas y facilita el acceso a servicios digitales de calidad.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Comparación entre IaaS, PaaS y SaaS

    p.mb-5(data-aos="fade-down") Los tres modelos de servicios en la nube representan diferentes niveles de control, responsabilidad y facilidad de uso:

    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-2.order-2
            .tarjeta.tarjeta--C03.p-4.mb-2
              .row.justify-content-center.align-items-center
                .col-auto.col-2
                  figure
                    img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img39.svg', alt='Imagen decorativa')
                .col-lg-10.col-10
                  h4(data-aos="fade-down") IaaS (Infraestructura como Servicio)
                  p.mb-0(data-aos="fade-down") Ofrece la mayor flexibilidad, ya que el usuario controla el sistema operativo, las aplicaciones y la configuración. Es ideal para empresas que necesitan personalizar su infraestructura, aunque requiere mayores conocimientos técnicos.
            .tarjeta.tarjeta--C02.p-4.mb-2
              .row.justify-content-center.align-items-center
                .col-auto.col-2
                  figure
                    img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img40.svg', alt='Imagen decorativa')
                .col-lg-10.col-10
                  h4(data-aos="fade-down") PaaS (Plataforma como Servicio)
                  p.mb-0(data-aos="fade-down") Brinda un punto intermedio entre control y simplicidad. El proveedor entrega un entorno listo para crear y probar aplicaciones, lo que acelera el desarrollo. Los usuarios se enfocan en programar sin preocuparse por servidores o bases de datos.
            .tarjeta.tarjeta--C03.p-4.mb-2
              .row.justify-content-center.align-items-center
                .col-auto.col-2
                  figure
                    img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img41.svg', alt='Imagen decorativa')
                .col-lg-10.col-10
                  h4(data-aos="fade-down") SaaS (Software como Servicio)
                  p.mb-0(data-aos="fade-down") Es el modelo más accesible. El <em>software</em> está completamente listo para usar desde cualquier dispositivo con Internet. El proveedor gestiona todo, y el usuario solo debe registrarse o pagar una suscripción.
                
          .col-lg-4.col-md-7.col-8.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center
              .col
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema1/img42.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Esto puede ser representado como una pirámide:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <em>Modelos de servicio en la nube</em>          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema1/img43.svg', alt='En la figura 1 se presentan los modelos de servicio en la nube organizados en forma de pirámide. En la base se ubica IaaS, que ofrece el mayor nivel de control técnico. En el nivel intermedio se encuentra PaaS, que equilibra flexibilidad y facilidad de uso. En la cima se representa SaaS, donde predomina la comodidad para el usuario final.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema1/img44.svg', alt='En la figura 1 se presentan los modelos de servicio en la nube organizados en forma de pirámide. En la base se ubica IaaS, que ofrece el mayor nivel de control técnico. En el nivel intermedio se encuentra PaaS, que equilibra flexibilidad y facilidad de uso. En la cima se representa SaaS, donde predomina la comodidad para el usuario final.')
    
    p.mb-5(data-aos="fade-down") Para comprender mejor las características de cada modelo, es útil compararlos directamente en términos de ventajas, limitaciones, diferencias clave y ejemplos prácticos. La siguiente tabla organiza esta información de manera clara y sencilla, facilitando la identificación de las particularidades de IaaS, PaaS y SaaS.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <em>Comparación entre modelos de servicios en la nube</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 12%") Servicio
                th(data-aos="fade-down")(style= "width: 22%") Pros
                th(data-aos="fade-down")(style= "width: 22%") Contras / Limitaciones
                th(data-aos="fade-down")(style= "width: 22%") Diferencias clave
                th(data-aos="fade-down")(style= "width: 22%") Ejemplos
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") IaaS
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Gran flexibilidad y escalabilidad, pago por uso, control total.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Requiere conocimientos técnicos, gestión compleja.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Proporciona infraestructura virtual (servidores y almacenamiento).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") AWS EC2 y Google Compute Engine.
              tr
                td.text-bold(data-aos="fade-down") PaaS
                td(data-aos="fade-down") Fácil de usar, acelera el desarrollo, fomenta la colaboración.
                td(data-aos="fade-down") Dependencia del proveedor, limitaciones de personalización e integración.
                td(data-aos="fade-down") Ofrece herramientas y entornos para desarrollar aplicaciones.
                td(data-aos="fade-down") Google App Engine y Heroku.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") SaaS
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Accesible desde cualquier dispositivo, mantenimiento a cargo del proveedor.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Dependencia total del proveedor, poca personalización.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") El <em>software</em> ya está listo para usarse en la nube.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Gmail, Google Drive y Microsoft 365.
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-2.order-2
            .tarjeta.tarjeta--C03.p-3.mb-3
              .row.justify-content-center.align-items-center
                .col-auto.col-2
                  figure
                    img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img39.svg', alt='Imagen decorativa')
                .col-lg-10.col-10
                  p.mb-0(data-aos="fade-down") En el modelo IaaS, el usuario es responsable de administrar el sistema operativo y las aplicaciones, mientras que el proveedor se encarga únicamente de garantizar la infraestructura. Esto otorga un alto nivel de control, pero también exige conocimientos técnicos avanzados para gestionar y proteger los recursos.
            .tarjeta.tarjeta--C02.p-3.mb-3
              .row.justify-content-center.align-items-center
                .col-auto.col-2
                  figure
                    img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img40.svg', alt='Imagen decorativa')
                .col-lg-10.col-10
                  p.mb-0(data-aos="fade-down") En el caso de PaaS, el proveedor asume la gestión tanto de la infraestructura como de la plataforma. De esta manera, el usuario solo debe enfocarse en el desarrollo y la administración de sus aplicaciones, lo que facilita el proceso y reduce la complejidad técnica.
            .tarjeta.tarjeta--C03.p-3.mb-3
              .row.justify-content-center.align-items-center
                .col-auto.col-2
                  figure
                    img(data-aos="fade-up")(src='@/assets/curso/temas/tema1/img41.svg', alt='Imagen decorativa')
                .col-lg-10.col-10
                  p.mb-0(data-aos="fade-down") En el modelo SaaS, toda la gestión recae en el proveedor. El usuario simplemente accede y utiliza el <em>software</em>, sin necesidad de instalar, configurar o mantener nada. Esta opción ofrece la mayor comodidad, aunque limita las posibilidades de personalización.
                
          .col-lg-4.col-md-7.col-8.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center
              .col
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema1/img45.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .tarjeta.tarjeta--C04.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-9.col-10.order-lg-1.order-2
              p(data-aos="fade-down").mb-0 En conclusión, cada modelo responde a necesidades específicas. Un aprendiz que desea experimentar con programación puede beneficiarse de PaaS, una empresa que busca control total probablemente opte por IaaS, mientras que cualquier usuario común encontrará en SaaS la forma más práctica de trabajar, estudiar o entretenerse. Lo esencial es comprender que la nube democratiza el acceso a la tecnología, permitiendo que tanto individuos como organizaciones compitan y colaboren a escala global.
            .col-lg-3.col-6.order-lg-2.order-1.mb-3
              figure
                img(data-aos="fade-right")(src='@/assets/curso/temas/tema1/img46.svg', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
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
