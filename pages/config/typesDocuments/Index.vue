
<script setup>
import ServiceGet from '~~/composables/ServiceGet';
name: 'ClientListComponent'

const dataPage = ref(null)
const loadingPage = ref(true)

const getData = async () => {
  loadingPage.value = true
  const { data, loading } = await ServiceGet('/type-documents')

  dataPage.value = data.value.data
  loadingPage.value = loading.value
}

const edit = (value) => {
  return navigateTo('/config/typesDocuments/edit/'+value)
}

getData()
</script>


<template>
  <div>
    <div class="page-content">
      <section class="row">
        <div class="col-12 col-lg-12">
          <div class="card p-3 bg-white">
            <div class="card-header">
              <h4>Tipos de Documentos</h4>
            </div>
            <div class="card-body text-center">
              <div class="row d-flex align-content-end">
                <NuxtLink to="/config/typesDocuments/create" class="btn btn-success"><i class="fa fa-plus-circle"></i> Agregar Tipo de Documento</NuxtLink>
              </div>
              <div v-if="loadingPage" class="spinner-border text-success mt-3
                " style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden">Cargando...</span>
              </div>
              <div class="table-responsive mt-3" v-if="!loadingPage">
                <table class="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Tipo de Documento</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="type in dataPage" :key="type.id">
                      <th scope="row">{{ type.id }}</th>
                      <td>{{ type.type }}</td>
                      <td>
                        <button class="btn btn-info" @click="edit(type.id)"><i class="fa fa-edit"></i></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

