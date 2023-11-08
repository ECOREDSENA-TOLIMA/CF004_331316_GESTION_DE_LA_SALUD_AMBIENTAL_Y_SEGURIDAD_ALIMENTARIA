<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/opcion-multiple.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-acento-contenido
          h2 Normatividad en protección de ecosistemas, salud y saneamiento ambiental.
        p.mb-4 #[b Objetivo:] afianzar los conocimientos relacionados con los determinantes de la salud y su normatividad, ampliando la visión de los factores que inciden en la calidad de vida y el bienestar de las personas.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Cuestionario de opción múltiple
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividad/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
