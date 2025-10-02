<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los servicios, plataformas y aplicaciones de la computación en la nube, explicando cómo se almacenan, gestionan y comparten datos de manera eficiente y segura. Incluye la comprensión de los modelos IaaS, PaaS y SaaS, así como el uso de Google Cloud, Microsoft Azure, Amazon Web Services y Oracle Cloud Infrastructure. Se destacan procesos de colaboración en línea, productividad en entornos educativos y empresariales, y la implementación de tecnologías emergentes como automatización, microservicios, contenedores y prácticas avanzadas de seguridad y cumplimiento. Este enfoque permite a los aprendices optimizar recursos, garantizar continuidad operativa, mejorar la eficiencia en la gestión de información y prepararse para enfrentar los retos de la transformación digital en diversos contextos profesionales y académicos.
    

    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se describe la estructura y los contenidos esenciales del componente formativo, incluyendo los servicios en la nube (IaaS, PaaS, SaaS), las principales plataformas como Google Cloud, Microsoft Azure, Amazon Web Services y Oracle Cloud Infrastructure, así como sus modos de uso e interfaces. Además, se destacan las aplicaciones cotidianas de la nube, como almacenamiento, colaboración y productividad, y se presentan las tendencias y tecnologías emergentes, incluyendo automatización, tecnologías nativas y prácticas de seguridad y cumplimiento en entornos modernos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
