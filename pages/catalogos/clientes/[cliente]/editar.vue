<template>
  <div>
    Editar Usuario: {{ idUsuario }}
  </div>
</template>

<script setup>
const route = useRoute()
let idUsuario = route.params.cliente
console.log("id Usuario" + route.params.cliente)
</script>
