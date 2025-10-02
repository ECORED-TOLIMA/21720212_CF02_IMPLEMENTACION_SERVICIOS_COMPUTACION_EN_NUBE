<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Plataformas en la nube
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La computación en la nube se ha consolidado como un pilar fundamental en el acceso a recursos tecnológicos, eliminando la necesidad de contar con infraestructura física propia. Existen varias plataformas líderes en este ámbito que se adaptan a diferentes necesidades de usuarios y empresas, como Google Cloud, Microsoft Azure, Amazon Web Services (AWS) y Oracle Cloud Infrastructure (OCI). Cada una ofrece características particulares, interfaces de uso accesibles y herramientas que facilitan la gestión de proyectos en entornos digitales.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Google Cloud

    p(data-aos="fade-down") Es la propuesta de Google para servicios en la nube, diseñada para facilitar tanto a usuarios principiantes como a empresas avanzadas, el acceso a infraestructura tecnológica sin necesidad de adquirir equipos propios. Su enfoque está en la innovación, la escalabilidad y la integración con otros productos de Google.

    p.mb-5(data-aos="fade-down") Entre sus características principales se destacan:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img02.svg' alt='AvatarTop')
          h4.text-center Facilidad de uso
          p Dispone de una interfaz gráfica intuitiva accesible desde cualquier navegador <em>web</em>.

        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img03.svg' alt='AvatarTop')
          h4.text-center Análisis de datos
          p Incluye herramientas como Google BigQuery, orientada al procesamiento de grandes volúmenes de información en tiempo real.
        
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img04.svg' alt='AvatarTop')
          h4.text-center Computación escalable
          p Con Google Compute Engine, permite crear y administrar máquinas virtuales de alto rendimiento adaptadas a las necesidades de cada proyecto.

        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img05.svg' alt='AvatarTop')
          h4.text-center Inteligencia artificial y aprendizaje automático
          p Ofrece servicios avanzados para desarrollar modelos predictivos y de automatización, incluso sin conocimientos profundos en programación.
        
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img06.svg' alt='AvatarTop')
          h4.text-center Trabajo colaborativo
          p Integración con Google Workspace (Drive, Docs, Meet, entre otros), lo que fomenta la productividad en entornos educativos y corporativos.

        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img07.svg' alt='AvatarTop')
          h4.text-center Seguridad y cumplimiento
          p Garantiza protección de datos mediante cifrado, controles de acceso y certificaciones internacionales.
    
    .row.justify-content-center.mb-0
      .col-lg-auto.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/temas/tema2/img08.svg', alt='Imagen decorativa')
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") En la práctica, Google Cloud facilita procesos como la creación de servidores virtuales, el almacenamiento de información, la ejecución de aplicaciones en línea y la colaboración entre equipos distribuidos. Gracias a estas funciones, se ha convertido en una de las plataformas más usadas tanto en proyectos académicos como en iniciativas empresariales de innovación tecnológica.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Microsoft Azure

    .row.justify-content-center.mb-5
      .col-lg-9.col-12.order-lg-1.order-2
        p(data-aos="fade-down") Es la plataforma en la nube de Microsoft y una de las más utilizadas en el ámbito empresarial. Su mayor fortaleza radica en la integración con el ecosistema de Microsoft, lo que resulta muy conveniente para organizaciones y usuarios que ya emplean productos como Windows Server, Microsoft 365 o SQL Server.
        p.mb-4(data-aos="fade-down") Entre sus características más destacadas se encuentran:
        .tarjeta.tarjeta--C03.p-4
          .py-1
            ul.lista-ul--color.mb-0(data-aos="fade-down")
              li.mb-2
                i.fas.fa-cloud
                p.mb-0 <b>Portal <em>web</em> amigable</b>: paneles de control claros e intuitivos que facilitan la administración de recursos y la configuración de servicios.
              li.mb-2
                i.fas.fa-cloud
                p.mb-0 <b>Amplia gama de servicios</b>: incluye almacenamiento en la nube, redes virtuales, bases de datos y aplicaciones empresariales.
              li.mb-2
                i.fas.fa-cloud
                p.mb-0 <b>Herramientas de desarrollo</b>: integración con entornos como Visual Studio y servicios DevOps para gestionar proyectos de software de principio a fin.
              li.mb-2
                i.fas.fa-cloud
                p.mb-0 <b>Inteligencia artificial y análisis de datos</b>: ofrece soluciones avanzadas para <em>machine learning</em>, <em>big data</em> y automatización de procesos.
              li.mb-2
                i.fas.fa-cloud
                p.mb-0 <b>Escalabilidad y flexibilidad</b>: los recursos se ajustan de acuerdo con la demanda, optimizando costos y rendimiento.
              li.mb-2
                i.fas.fa-cloud
                p.mb-0 <b>Programas de apoyo</b>: créditos gratuitos y documentación especializada para que aprendices y desarrolladores experimenten sin costos iniciales.
              li.mb-0
                i.fas.fa-cloud
                p.mb-0 <b>Seguridad y cumplimiento</b>: cumple con normativas internacionales y brinda opciones de gestión de identidades y accesos para proteger los datos.
      .col-lg-3.col-md-6.col-8.mb-3.order-lg-2.order-1.mb-lg-0
        .row.justify-content-center
          .col
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema2/img09.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.mb-3
        .row.justify-content-center.tarjeta.BG04.p-4
          .col-lg-3
            figure
              img(data-aos="fade-right")(src='@/assets/curso/temas/tema2/img10.svg' alt='AvatarTop')
          .col-lg-9
            p.mb-0(data-aos="fade-down") Gracias a estas capacidades, Azure se ha convertido en una plataforma clave para empresas que buscan transformar digitalmente sus procesos. En el ámbito educativo, también es una herramienta valiosa que permite a los aprendices acceder a entornos de programación, proyectos colaborativos y simulaciones en tiempo real.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Amazon Web Services

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-1.d-none.d-lg-block
        figure
          img(data-aos="fade-right")(src='@/assets/curso/temas/tema2/img19.svg' alt='AvatarTop')
      .col-lg-11.col-12
        p(data-aos="fade-down") Es la plataforma de servicios en la nube más utilizada a nivel global, reconocida por su robustez, escalabilidad y amplia cobertura de servicios. Está orientada a organizaciones de todos los tamaños, desde startups hasta grandes corporaciones, y se adapta a diferentes sectores de la industria.
        p(data-aos="fade-down") Entre sus principales características y procesos se destacan:
    
    .row.justify-content-center.mb-4
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema2/img11.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Amplia oferta de servicios: que incluye almacenamiento (Amazon S3), cómputo elástico (EC2), bases de datos (RDS y DynamoDB) y redes de distribución de contenido (CloudFront).
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema2/img12.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Modelo de pago flexible bajo demanda: lo que permite a los usuarios pagar únicamente por los recursos que utilizan.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema2/img13.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Alta disponibilidad y confiabilidad: con centros de datos distribuidos en diversas regiones del mundo.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema2/img14.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Escalabilidad automática: que facilita el ajuste de recursos según las necesidades de cada proyecto o aplicación.
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-3.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema2/img15.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Seguridad avanzada: con múltiples capas de protección, cumplimiento de normativas internacionales y herramientas como AWS Identity and Access Management (IAM).
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-3.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema2/img16.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Soporte para inteligencia artificial y aprendizaje automático: con servicios como SageMaker, que impulsan la innovación en proyectos de análisis predictivo y automatización.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-3.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema2/img17.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Ecosistema amplio y maduro: con comunidades de desarrolladores, cursos de formación, certificaciones y programas de soporte empresarial.
      .col-lg-3.col-md-8.col-10.mb-3
        figure(data-aos="flip-up")
          img(src="@/assets/curso/temas/tema2/img18.png", alt="Imagen decorativa")
    
    p.mb-0(data-aos="fade-down") AWS representa una de las opciones más completas y maduras del mercado, siendo pionera en la adopción de la computación en la nube y un referente en el desarrollo de soluciones innovadoras.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Oracle Cloud Infrastructure

    p(data-aos="fade-down") Es la propuesta de Oracle para servicios en la nube, con un enfoque especializado en bases de datos empresariales, infraestructura robusta y seguridad avanzada. Está especialmente diseñada para organizaciones que manejan grandes volúmenes de información y requieren un alto rendimiento en entornos críticos.
    p.mb-5(data-aos="fade-down") Entre sus principales características y procesos se encuentran:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img20.png", alt="alt").img400.m-auto
      .col-lg-9
        SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema2/img21.svg", alt="alt").img100.m-auto
            h4.titulo-1 Fortaleza en bases de datos
            p.mb-0 Integrando de manera nativa Oracle Database y opciones avanzadas como Oracle Autonomous Database, que optimiza la administración y reduce la intervención manual.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema2/img22.svg", alt="alt").img100.m-auto
            h4.titulo-1 Alto rendimiento en infraestructura
            p.mb-0 Ofreciendo máquinas virtuales, almacenamiento de baja latencia y redes de alta velocidad para aplicaciones exigentes.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema2/img23.svg", alt="alt").img100.m-auto
            h4.titulo-1 Enfoque en seguridad empresarial
            p.mb-0 Con controles estrictos de acceso, cifrado de datos y cumplimiento de normativas internacionales.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema2/img24.svg", alt="alt").img100.m-auto
            h4.titulo-1 Opciones híbridas y <em>multicloud</em>
            p.mb-0 Que permiten a las empresas integrar OCI con otras nubes públicas o privadas, facilitando la interoperabilidad.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema2/img25.svg", alt="alt").img100.m-auto
            h4.titulo-1 Herramientas de analítica e inteligencia artificial
            p.mb-0 Orientadas a potenciar el uso de datos en la toma de decisiones estratégicas.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema2/img26.svg", alt="alt").img100.m-auto
            h4.titulo-1 Soporte corporativo especializado
            p.mb-0 Diseñado para atender a empresas de gran escala que requieren estabilidad y asesoría técnica constante.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema2/img27.svg", alt="alt").img100.m-auto
            h4.titulo-1 Documentación y recursos de aprendizaje
            p.mb-0 Que incluyen tutoriales, guías técnicas y certificaciones, aunque suelen estar más orientados a usuarios con perfiles técnicos.

    p.mb-0(data-aos="fade-down") OCI se posiciona como una alternativa sólida en el mercado empresarial, destacando por su capacidad para gestionar datos de misión crítica y brindar soluciones confiables a grandes corporaciones.

    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Modo de uso de interfaces y herramientas

    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-1.order-2
            p.mb-4(data-aos="fade-down") Las principales plataformas en la nube operan mediante portales <em>web</em> accesibles desde cualquier navegador. Estos entornos gráficos facilitan la creación de proyectos, el despliegue de servicios, la configuración de recursos y el monitoreo del consumo de manera sencilla. Para los usuarios avanzados, también se encuentran disponibles consolas de línea de comandos y APIs que permiten una gestión más detallada y automatizada.
            .tarjeta.tarjeta--C02.p-3
              .row.justify-content-center.align-items-center
                .col-auto.col-2
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/temas/tema2/img28.svg', alt='Imagen decorativa')
                .col-lg-9.col-10
                  p.mb-0(data-aos="fade-down") Otro aspecto común es que estas plataformas ofrecen créditos gratuitos, tutoriales y laboratorios de práctica, lo que favorece el aprendizaje y la experimentación sin necesidad de realizar grandes inversiones iniciales. De esta manera, tanto principiantes como expertos pueden adaptarse a su nivel de conocimiento y aprovechar al máximo las herramientas disponibles.
                
          .col-lg-4.col-md-7.col-8.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center
              .col
                figure(data-aos="fade-rigth")
                  img(src='@/assets/curso/temas/tema2/img29.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-5
      .col-lg-auto.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img08.svg', alt='Imagen decorativa')
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") En síntesis, aunque todas las plataformas comparten la esencia de ofrecer servicios en la nube, cada una se distingue por su enfoque particular: Google resalta en inteligencia artificial y <em>big data</em>, Microsoft en integración con entornos empresariales, Amazon en la amplitud de servicios y Oracle en la gestión avanzada de bases de datos. Esta diferenciación se refleja en la siguiente tabla comparativa, que permite reconocer con mayor claridad las fortalezas de cada proveedor.
    
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span <em>Comparación de plataformas en la nube</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Característica
                th(data-aos="fade-down")(style= "width: 20%") Google Cloud
                th(data-aos="fade-down")(style= "width: 20%") Microsoft Azure
                th(data-aos="fade-down")(style= "width: 20%") Amazon Web Services (AWS)
                th(data-aos="fade-down")(style= "width: 20%") Oracle Cloud Infrastructure (OCI)
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Popularidad / Mercado
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Destacado en inteligencia artificial, <em>machine learning</em> y <em>big data</em>.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Muy usado en empresas, fuerte integración con Windows y Microsoft 365.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Líder de mercado, con la oferta más amplia y madura.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Menor cuota de mercado, enfocado en bases de datos y grandes empresas.
              tr
                td.text-bold(data-aos="fade-down") Oferta de servicios
                td(data-aos="fade-down") Amplia, con énfasis en análisis de datos y aprendizaje automático.
                td(data-aos="fade-down") Muy amplia, fuerte en soluciones híbridas y empresariales.
                td(data-aos="fade-down") Extremadamente amplia, cubriendo casi todas las necesidades <em>cloud</em>.
                td(data-aos="fade-down") Especializado en bases de datos, almacenamiento y redes seguras.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Interfaz y uso
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Intuitiva y accesible para principiantes.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Integración fluida con entornos Microsoft e interfaz amigable.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Consola con gran funcionalidad, aunque puede resultar compleja para novatos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Interfaz orientada a la gestión empresarial, más técnica.
              tr
                td.text-bold(data-aos="fade-down") Precios y planes
                td(data-aos="fade-down") Competitivos, especialmente en IA y almacenamiento.
                td(data-aos="fade-down") Competitivos, con ventajas para empresas con licencias Microsoft.
                td(data-aos="fade-down") Reconocido por precios bajos y variedad de planes.
                td(data-aos="fade-down") Enfocados en grandes empresas y servicios especializados.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Seguridad
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Cumple con normas internacionales y ofrece opciones de despliegue en varias regiones.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alto enfoque en seguridad y cumplimiento normativo empresarial.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Amplias certificaciones y opciones avanzadas de seguridad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Seguridad robusta con un enfoque empresarial.
              tr
                td.text-bold(data-aos="fade-down") Facilidades para desarrolladores
                td(data-aos="fade-down") APIs potentes e integración con herramientas <em>open</em> <em>source</em>.
                td(data-aos="fade-down") Excelente soporte para lenguajes Microsoft y herramientas DevOps.
                td(data-aos="fade-down") Amplio soporte para diversos lenguajes y entornos de desarrollo.
                td(data-aos="fade-down") Herramientas avanzadas para gestión de bases de datos y desarrollo empresarial.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Integración con software
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Óptima con productos Google y herramientas <em>open</em> <em>source</em>.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ideal para el ecosistema Microsoft y aplicaciones empresariales.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Compatible con prácticamente todo el ecosistema tecnológico.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Integración fuerte con bases de datos Oracle y aplicaciones corporativas.
</template>

<script>
export default {
  name: 'Tema2',
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
