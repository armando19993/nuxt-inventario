<script setup>
import ServiceGet from "~~/composables/ServiceGet"
import ServicePatch from "~~/composables/ServicePatch"
const { $swal } = useNuxtApp()


name: 'CreateTypeDocumentComponent'
const type = ref('')
const loadingPage = ref(false)
const dataPage = ref(null)

const route = useRoute()

const IdTypeDocument = ref(route.params.IdTypeDocument)

const getData = async() => {
  const { data } = await ServiceGet('/type-documents/'+IdTypeDocument.value)

  dataPage.value = data.value.data
  type.value = dataPage.value.type
}

getData()

const update = async () => {
  loadingPage.value = true

  let formData = {
    type: type.value
  }

  const { data, loading } = await ServicePatch('/type-documents/'+IdTypeDocument.value, formData)
  if (data.value.error == false) {
    $swal.fire({
      title: 'Exito!',
      text: data.value.message,
      icon: 'success',
      confirmButtonText: 'Listo'
    })

    return navigateTo('/config/typesDocuments/index')
  }
  loadingPage.value = loading.value
}
</script>

<template>
  <div>
    <div class="page-content">
      <section class="row">
        <div class="col-12 col-lg-12">
          <div class="card p-3 bg-white">
            <div class="card-header">
              <h4>Crear Tipo de Documento</h4>
            </div>

            <div class="card-body">
              <div class="form-group">
                <label for="">Tipo de Documento</label>
                <input type="text" class="form-control" v-model="type">
              </div>

              <button class="btn btn-success w-100" @click="update()" :disabled="loadingPage"> <span v-if="loadingPage"
                  class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> <i class="fa fa-save"></i> Actualizar</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
