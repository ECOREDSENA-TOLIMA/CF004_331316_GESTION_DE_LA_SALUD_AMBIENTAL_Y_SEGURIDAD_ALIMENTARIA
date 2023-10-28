<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4
      .col-md-2.mb-3
        figure
            img(src='@/assets/curso/temas/intro/intro-1.svg', alt='')
      .col-md-10
        p Por medio de la normatividad relacionada con el tema de salud ambiental es posible identificar las estrategias adoptadas por el país en cuanto a la manera como se articula la respuesta institucional para hacer frente a las problemáticas globales que de una u otra forma han incidido en las condiciones de vida y salud de la población mundial.
        p Se invita al aprendiz a ver el video introductorio del componente formativo:




    
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
