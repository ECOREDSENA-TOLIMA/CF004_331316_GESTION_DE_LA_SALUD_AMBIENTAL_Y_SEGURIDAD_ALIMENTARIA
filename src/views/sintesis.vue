<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En los procesos de salud-enfermedad, debe tenerse en cuenta los factores que inciden a nivel global en la calidad de vida de la población y que son determinantes sobre su condición de salud, así el cómo repercuten en y sobre sus entornos. Por esta razón, Colombia, a lo largo de su historia reciente, ha avanzado en los procesos legislativos relacionados con la gestión de la salud ambiental y la protección de los recursos naturales, como una forma de mitigar los impactos de la población sobre el entorno y prevenir situaciones más complejas en materia de salud ambiental en el futuro.
    p Por medio del trabajo legislativo y la búsqueda de alternativas que permitan el ordenamiento legal de los procesos que inciden en la salud y el ambiente, se ha avanzado de manera considerable en la construcción de una agenda común, articulada con los lineamientos internacionales, los organismos de control y las autoridades, en medio de la cual se establecen mecanismos para la protección de la salud de la población, de forma indirecta, a través del cuidado y la protección de los recursos naturales y la gestión de los riesgos asociados a factores ambientales.
    p.mb-5 El siguiente mapa conceptual le orientara sobre los principales temas abordados en este componente formativo:
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Las normas y lineamientos establecidos en la seguridad sanitaria y ambiental, se rigen por los dictámenes nacionales, así como por los ODS, regulados mediante el CONPES. Igualmente, a nivel internacional, se proveen de marcos, y convenios que posibilitan la regulación en pro del ambiente y la salud para los hombres y el planeta.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
