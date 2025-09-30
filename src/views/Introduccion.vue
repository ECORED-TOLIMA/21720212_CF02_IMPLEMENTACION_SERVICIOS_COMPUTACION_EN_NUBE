<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cajon.cajon--C01.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-auto.col-2
          figure(data-aos="fade-up")
            img(src='@/assets/curso/temas/intro/img01.svg', alt='Imagen decorativa')
        .col-lg-10.col-10
          p.mb-0(data-aos="fade-down") Este componente presenta los conceptos esenciales de los servicios en la nube, así como sus principales plataformas, aplicaciones cotidianas y tecnologías emergentes. Se explica qué es la computación en la nube, para qué se utiliza en diferentes contextos educativos, empresariales y personales, y cómo permite optimizar procesos, mejorar la productividad, facilitar la colaboración en línea y garantizar la seguridad de la información. Además, se aborda cómo las tecnologías nativas de la nube, la automatización de tareas y el cumplimiento normativo contribuyen a una gestión eficiente y confiable de los recursos digitales. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
