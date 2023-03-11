
<script setup>
import ServiceGet from '~~/composables/ServiceGet';
const { $swal } = useNuxtApp()
name: 'ClientListComponent'

const Clients = ref(null)
const loadingPage = ref(true)

const fetch1 = async () => {
  loadingPage.value = true
  const { data, loading } = await ServiceGet('/clients')
  Clients.value = data.value.data
  loadingPage.value = loading.value
}

const status = async (status, idClient) => {
  const { data, loading } = await ServiceGet('/clients/status/' + status + '/' + idClient)

  if (data.value.error == false) {
    $swal.fire({
      title: 'Exito!',
      text: data.value.message,
      icon: 'success',
      confirmButtonText: 'Listo'
    })

    fetch1()
  }
}

const edit = (idClient) => {
  return navigateTo('/catalogos/clientes/'+idClient+'/editar')
}

fetch1()
</script>


<template>
  <div>
    <div class="page-content">
      <section class="row">
        <div class="col-12 col-lg-12">
          <div class="card p-3 bg-white">
            <div class="card-header">
              <h4>Clientes</h4>
            </div>
            <div class="card-body text-center">
              <div class="row d-flex align-content-end">
                <NuxtLink to="/catalogos/clientes/create" class="btn btn-success">Agregar Cliente</NuxtLink>
              </div>
              <div v-if="loadingPage" class="spinner-border text-success" style="width: 3rem; height: 3rem;"
                role="status">
                <span class="visually-hidden">Cargando...</span>
              </div>
              <div class="table-responsive" v-if="!loadingPage">
                <table class="table table-hover table-striped mt-3">
                  <thead>
                    <tr>
                      <th scope="col">TIPO - DOCUMENTO</th>
                      <th scope="col">NOMBRE</th>
                      <th scope="col">TELEFONO</th>
                      <th scope="col">ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="Client in Clients" :key="Client.id">
                      <th scope="row">{{ Client.type_document.Type }} - {{ Client.Document }}</th>
                      <td>{{ Client.Name }}</td>
                      <td>{{ Client.Phone }}</td>
                      <td>

                        <div class="btn-group" role="group" aria-label="Basic example">
                          <button type="button" @click="edit(Client.id)" class="btn btn-info"><i class="fa fa-edit text-white"></i></button>
                          <button type="button" class="btn btn-success"><i class="fa fa-eye text-white"></i></button>
                          <button @click="status(2, Client.id)" type="button" class="btn btn-danger"
                            v-if="Client.Status == 1"><i class="fa fa-ban text-white"></i></button>
                          <button @click="status(1, Client.id)" type="button" class="btn btn-success"
                            v-if="Client.Status == 2"><i class="fa fa-check text-white"></i></button>
                        </div>

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

