
<script setup>
import ServiceGet from '~~/composables/ServiceGet';
name: 'ClientListComponent'

const dataPage = ref(null)
const loadingPage = ref(true)

const fetch1 = async () => {
  loadingPage.value = true
  const { data, loading } = await ServiceGet('/clients')
  dataPage.value = data.value
  loadingPage.value = loading.value
}
console.log(dataPage.value)

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
                <table class="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
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

