<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-4.col-lg-3.mb-3
        figure
            img(src='@/assets/curso/temas/intro/intro-1.svg', alt='')
      .col-12.col-md-8.col-lg-9
        p Por medio de la normatividad relacionada con el tema de salud ambiental, es posible identificar las estrategias adoptadas por el país en cuanto a la manera como se articula la respuesta institucional para hacer frente a las problemáticas globales, que de una u otra forma, han incidido en las condiciones de vida y salud de la población mundial.
        p Se invita al aprendiz a ver el video introductorio del componente formativo:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/_di9TYoj2as" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    


    
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
