<script setup>
import ServiceGet from "~~/composables/ServiceGet"
import ServicePost from "~~/composables/ServicePost"
const { $swal } = useNuxtApp()

name: 'ClientCreateComponent'

const TypesDocuments = ref(null)
const IdTypeDocument = ref('')
const Name = ref('')
const Document = ref('')
const Email = ref('')
const Phone = ref('')
const Nationality = ref('')
const Loading = ref(false)


const getTypesDocuments = async () => {
  const { data } = await ServiceGet('/type-documents')
  TypesDocuments.value = data.value.data
}

const store = async () => {
  Loading.value = true

  let formData = {
    IdTypeDocument: IdTypeDocument.value,
    Name: Name.value,
    Document: Document.value,
    Email: Email.value,
    Phone: Phone.value,
    Nationality: Nationality.value,
  }

  const { data } = await ServicePost('/clients', formData)

  if (data.value.error == false) {
    $swal.fire({
      title: 'Exito!',
      text: data.value.message,
      icon: 'success',
      confirmButtonText: 'Listo'
    })

    return navigateTo('/catalogos/clientes/index')
  }
}

getTypesDocuments()
</script>

<template>
  <div>
    <div class="page-content">
      <section class="row">
        <div class="col-12 col-lg-12">
          <div class="card p-3 bg-white">
            <div class="card-header">
              <h4>Crear Cliente</h4>
            </div>

            <div class="card-body">
              <div class="row">
                <div class="col-md-3">
                  <div class="form-groyp">
                    <label for="">Tipo de Documento</label>
                    <select class="form-control" v-model="IdTypeDocument" id="">
                      <option value="">SELECCIONE</option>

                      <option :value="TypeDocument.id" v-for="TypeDocument in TypesDocuments" :key="TypeDocument.id">{{
                        TypeDocument.Type }}</option>

                    </select>
                  </div>
                </div>

                <div class="col-md-8">
                  <div class="form-group">
                    <label for="">Documento</label>
                    <input type="text" class="form-control" v-model="Document">
                  </div>
                </div>

                <div class="col-md-1  mt-4">
                  <button class="btn btn-success" disabled><i class="fa fa-search"></i></button>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <label for="">Nombre</label>
                    <input type="text" class="form-control" v-model="Name">
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label for="">Correo</label>
                    <input type="text" class="form-control" v-model="Email">
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label for="">Telefono</label>
                    <input type="text" class="form-control" v-model="Phone">
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label for="">Nacionalidad</label>
                    <input type="text" class="form-control" v-model="Nationality">
                  </div>
                </div>

                <div class="col-md-12 mt-4">
                  <button class="btn btn-success w-100" :disabled="Loading" @click="store()">
                    <i class="fa fa-save" v-if="Loading == false"></i>
                    <span v-if="Loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
