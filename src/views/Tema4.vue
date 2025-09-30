<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Tendencias y tecnologías emergentes en la nube
    
    .row.justify-content-center.mb-0
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-1.order-2
            .tarjeta.tarjeta--C02.p-4
              .py-3
                .row.justify-content-center.align-items-center
                  .col-auto.col-2.d-none.d-lg-block
                    figure
                      img(data-aos="fade-right")(src='@/assets/curso/temas/tema4/img01.svg', alt='Imagen decorativa')
                  .col-10
                    p.mb-0(data-aos="fade-down") Las tendencias y tecnologías emergentes en la nube informática están transformando profundamente la forma en que las empresas, organizaciones y usuarios gestionan información, desarrollan aplicaciones y garantizan seguridad en entornos dinámicos. Comprender estos avances permite anticipar el rumbo de la tecnología y prepararse para un futuro donde la nube será aún más esencial en la innovación digital, la productividad y la competitividad.
                
          .col-lg-4.col-md-7.col-9.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="fade-up")
              .col
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema4/img02.png', alt='Imagen decorativa')

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    h2 4.1 Tecnologías nativas de la nube

    p(data-aos="fade-down") Las tecnologías nativas de la nube se caracterizan por estar diseñadas desde cero para operar en ambientes <em>cloud</em>. A diferencia de los sistemas tradicionales que se adaptan a la nube, estas tecnologías aprovechan plenamente sus capacidades de escalabilidad, flexibilidad y automatización.
    p.mb-5(data-aos="fade-down") Entre sus componentes principales se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2
        .row.justify-content-center
          .col-lg-6.col-md-8.col-12.mb-3
            .tarjeta.tarjeta--C03.p-4.h-100
              .row
                .col-lg-auto.col-2.mb-3
                  figure(data-aos="flip-up")
                    img(src="@/assets/curso/temas/tema4/img03.svg", alt="Imagen decorativa")
                .col-lg-12
                  p.mb-0(data-aos="fade-down") Microservicios: aplicaciones divididas en módulos pequeños e independientes, fáciles de actualizar y mantener.
          .col-lg-6.col-md-8.col-12.mb-3
            .tarjeta.tarjeta--C03.p-4.h-100
              .row
                .col-lg-auto.col-2.mb-3
                  figure(data-aos="flip-up")
                    img(src="@/assets/curso/temas/tema4/img04.svg", alt="Imagen decorativa")
                .col-lg-12
                  p.mb-0(data-aos="fade-down") Contenedores: permiten ejecutar aplicaciones de forma portátil y consistente en distintos entornos.
          .col-lg-6.col-md-8.col-12.mb-3
            .tarjeta.tarjeta--C03.p-4.h-100
              .row
                .col-lg-auto.col-2.mb-3
                  figure(data-aos="flip-up")
                    img(src="@/assets/curso/temas/tema4/img05.svg", alt="Imagen decorativa")
                .col-lg-12
                  p.mb-0(data-aos="fade-down") Orquestadores como Kubernetes: gestionan automáticamente la creación, escalado y administración de contenedores.
          .col-lg-6.col-md-8.col-12.mb-3
            .tarjeta.tarjeta--C03.p-4.h-100
              .row
                .col-lg-auto.col-2.mb-3
                  figure(data-aos="flip-up")
                    img(src="@/assets/curso/temas/tema4/img06.svg", alt="Imagen decorativa")
                .col-lg-12
                  p.mb-0(data-aos="fade-down") Infraestructura como código (IaC): posibilita crear y administrar entornos completos mediante scripts automatizados.
      .col-lg-4.col-6.order-lg-2.order-1.mb-3
        figure(data-aos="flip-up")
          img(src="@/assets/curso/temas/tema4/img07.png", alt="Imagen decorativa")
    
    .row.justify-content-center.mb-5
      .col-lg-7.col-12.order-lg-2.order-2
        p(data-aos="fade-down") Estas tecnologías permiten que las aplicaciones se ajusten automáticamente a la demanda en tiempo real mediante procesos de autoescalado o escalado automático. De esta manera, no solo se reducen costos operativos, sino que también se garantiza la continuidad del servicio al mantener la disponibilidad aun en momentos de alta carga o fallas inesperadas.
        p(data-aos="fade-down") A continuación, se presenta un resumen comparativo de criterios, medidas y ventajas relacionadas con las tecnologías nativas de la nube:
            
      .col-lg-3.col-md-7.col-9.mb-3.order-lg-1.order-1.mb-lg-0
        .row.justify-content-center
          .col
            figure(data-aos="fade-rigth")
              img(src='@/assets/curso/temas/tema4/img08.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span <em>Tecnologías nativas en la nube</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Criterio
                th(data-aos="fade-down")(style= "width: 25%") Descripción / Medida
                th(data-aos="fade-down")(style= "width: 25%") Ejemplo en tecnologías nativas
                th(data-aos="fade-down")(style= "width: 25%") Ventajas principales
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Eficiencia
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Optimización de recursos y uso automático de lo necesario.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Contenedores gestionados con Kubernetes y microservicios.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Reducción de costos, despliegue rápido y menor error humano.
              tr
                td.text-bold(data-aos="fade-down") Escalabilidad
                td(data-aos="fade-down") Crecer o reducir recursos sin afectar el servicio.
                td(data-aos="fade-down") Auto-escalado en GKE, expansión horizontal en Azure/AWS.
                td(data-aos="fade-down") Adaptación a picos de tráfico, pago solo por uso e infraestructura elástica.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Resiliencia
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mantener operaciones ante fallas y recuperarse rápidamente.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Balanceo de cargas, replicación automática, recuperación ante desastres.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alta disponibilidad, continuidad del servicio y tolerancia a errores.
    .row.justify-content-center.mb-0
      .col-lg-auto.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/temas/tema2/img08.svg', alt='Imagen decorativa')
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") En conclusión, las tecnologías nativas constituyen el estándar moderno para aplicaciones críticas en entornos cambiantes, pues aseguran modularidad, resiliencia y escalabilidad desde el diseño.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    h2 4.2 Automatización para la optimización de tiempos

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12.mb-3
        .row.justify-content-center.tarjeta.BG06.p-4
          .col-lg-3.col-6
            figure
              img(data-aos="fade-right")(src='@/assets/curso/temas/tema4/img09.svg' alt='AvatarTop')
          .col-lg-9
            p(data-aos="fade-down") La automatización representa una de las tendencias más significativas en la computación en la nube, pues permite reducir la intervención humana en tareas rutinarias, optimizar tiempos y minimizar errores. Su aplicación se extiende desde la educación y la productividad personal hasta los entornos empresariales más complejos.
            p.mb-0(data-aos="fade-down") Proceso general para implementar la automatización:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-5
              img(src='@/assets/curso/temas/tema4/img10.svg' alt='AvatarTop')
          p Identificación de procesos repetitivos: se seleccionan actividades que consumen tiempo y se repiten constantemente, como envío de correos, carga de archivos o recordatorios de tareas.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-5
              img(src='@/assets/curso/temas/tema4/img11.svg' alt='AvatarTop')
          p Selección de la herramienta adecuada: se evalúan opciones como Zapier, Make, Power Automate, Asana, Wrike, entre otras, según el ecosistema tecnológico y el nivel de complejidad requerido.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-5
              img(src='@/assets/curso/temas/tema4/img12.svg' alt='AvatarTop')
          p Diseño del flujo de trabajo: se establecen condiciones (ejemplo: “si recibo un correo con adjunto, entonces guardarlo en la nube y notificar”) que determinan cómo funcionará la automatización.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-5
              img(src='@/assets/curso/temas/tema4/img13.svg' alt='AvatarTop')
          p Prueba y ajuste: se verifican los resultados, corrigiendo errores en la integración de aplicaciones o en los disparadores configurados.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-5
              img(src='@/assets/curso/temas/tema4/img14.svg' alt='AvatarTop')
          p Monitoreo y mejora continua: se evalúan indicadores de ahorro de tiempo, reducción de errores y satisfacción de usuarios para escalar las automatizaciones a otros procesos.
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Con el fin de identificar cómo diferentes plataformas aplican la automatización en distintos contextos, a continuación, se presenta una tabla comparativa que resume sus principales usos, niveles de complejidad y beneficios:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span <em>Comparación de herramientas de automatización</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Herramienta
                th(data-aos="fade-down")(style= "width: 25%") Nivel de uso
                th(data-aos="fade-down")(style= "width: 25%") Ejemplo de automatización
                th(data-aos="fade-down")(style= "width: 25%") Beneficios principales
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Zapier
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Básico
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Crear tarea en Google Tasks al recibir un correo en Gmail.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Fácil de usar, miles de integraciones y es ideal para principiantes.
              tr
                td.text-bold(data-aos="fade-down") Make (Integromat)
                td(data-aos="fade-down") Intermedio
                td(data-aos="fade-down") Guardar formularios en Google Drive y enviar notificación automática.
                td(data-aos="fade-down") Flujos más complejos, visual y flexible.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Microsoft Power Automate
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Intermedio
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Guardar archivos adjuntos en OneDrive desde Outlook.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Integración nativa con Office 365, bajo código, accesible para usuarios de Microsoft.
              tr
                td.text-bold(data-aos="fade-down") Asana / Wrike
                td(data-aos="fade-down") Intermedio – avanzado
                td(data-aos="fade-down") Generar tareas y actualizar progreso según entregas.
                td(data-aos="fade-down") Gestión de proyectos colaborativos y seguimiento automático.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") HubSpot / Mailchimp
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Intermedio
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Enviar recordatorios y segmentar listas de estudiantes.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Automatización de marketing y comunicación académica.
              tr
                td.text-bold(data-aos="fade-down") IFTTT
                td(data-aos="fade-down") Básico
                td(data-aos="fade-down") Notificación en móvil al crear evento en Google Calendar.
                td(data-aos="fade-down") Configuración sencilla, orientado a tareas personales.
    
    .row.justify-content-center.mb-0
      .col-lg-auto.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/temas/tema2/img08.svg', alt='Imagen decorativa')
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La evolución de la automatización está estrechamente ligada a la inteligencia artificial. Herramientas como Copilot de Microsoft o ChatGPT ya permiten crear flujos de trabajo usando lenguaje natural, sin necesidad de conocimientos técnicos. En un futuro cercano, la automatización no solo ejecutará tareas, sino que tomará decisiones autónomas basadas en datos, anticipando necesidades y liberando aún más tiempo para la innovación y la creatividad humana.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    h2 4.3 Cumplimiento y seguridad en entornos modernos

    .row.justify-content-center.tarjeta.tarjeta--C03.mb-5
      .col-lg-7.col-12.p-4.order-lg-1.order-2
        p.mb-0(data-aos="fade-down") En los entornos actuales basados en la nube, la seguridad y el cumplimiento normativo representan pilares fundamentales para garantizar la confianza, la protección de los datos y la continuidad del negocio. Las organizaciones requieren aplicar un enfoque integral que combine prácticas tecnológicas, operativas y regulatorias, de modo que se reduzcan los riesgos frente a amenazas cibernéticas y se cumplan los estándares internacionales.
      .col-lg-5.col-10.order-lg-2.order-1
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/img15.png', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-down") Procesos clave en seguridad en la nube:
    
    .row.justify-content-center.mb-4
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema4/img16.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Cifrado de datos en tránsito y en reposo, que protege la información mientras se transfiere y cuando se almacena.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema4/img17.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Autenticación multifactor (MFA) para reforzar la seguridad en el acceso a cuentas y recursos críticos.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema4/img18.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Monitoreo continuo con sistemas de detección y respuesta (XDR/EDR) que identifican amenazas en tiempo real.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-4.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema4/img19.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Backups automáticos y planes de recuperación ante desastres, que aseguran la continuidad de las operaciones frente a fallas o incidentes.
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-3.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema4/img20.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Uso de inteligencia artificial en ciberseguridad, que detecta patrones de riesgo, anomalías y responde a ataques de forma proactiva.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-3.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema4/img21.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Gestión de identidades y accesos (IAM), que regula qué usuarios pueden acceder a qué recursos dentro de la organización.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C03.p-3.h-100
          .row
            .col-lg-auto.col-2.mb-3
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema4/img22.svg", alt="Imagen decorativa")
            .col-lg-12
              p.mb-0(data-aos="fade-down") Auditorías y trazabilidad de procesos, que permiten cumplir con certificaciones internacionales como ISO/IEC 27001, SOC 2 o PCI-DSS.
      .col-lg-3.col-md-8.col-10.mb-3
        figure(data-aos="flip-up")
          img(src="@/assets/curso/temas/tema4/img23.svg", alt="Imagen decorativa")
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-5(data-aos="fade-down") En conclusión, el cumplimiento y la seguridad en la nube no se reducen a herramientas tecnológicas aisladas, sino que constituyen un marco integral de protección que incluye políticas, procedimientos y controles. Este enfoque asegura la confianza en los servicios <em>cloud</em>, garantiza la disponibilidad de la información y facilita que las organizaciones se adapten a estándares globales cada vez más exigentes.


</template>

<script>
export default {
  name: 'Tema4',
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
