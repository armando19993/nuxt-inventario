<template>
  <div class="error-page container">
    <div class="col-md-8 col-12 offset-md-2">
        <div class="text-center">
            <img class="img-error" src="~/assets/images/samples/error-404.png" alt="Not Found">
            <h1 class="error-title">No Encontrado</h1>
            <p class='fs-5 text-gray-600'>Esta Pagina no se ha encontrado intenta nuevamente!</p>
            <nuxt-link to="/" class="btn btn-lg btn-outline-primary mt-3">Ir al inicio</nuxt-link>
        </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import "~/assets/scss/pages/error.scss"
definePageMeta({
  layout: 'error'
})
</script>
