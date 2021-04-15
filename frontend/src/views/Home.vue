<template>
  <div>
    <b-jumbotron header="Agile Development Processes Frontend" lead="Welcome to Your Frontend Vue.js App">
      <p>Message from the server: {{ message }}</p>
      <b-button variant="primary" href="/camels">List Camels</b-button>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col><h1>Responsive BootstrapVue: <a href="https://bootstrap-vue.js.org/docs/components/layout/">Layout and Grid System</a></h1></b-col>
      </b-row>
      <!-- Mobile (< 768px): stack columns by making one half-width and one full-width
           Desktop (>= 768px): keep both columns in same row in 4:8 ratio -->
      <b-row>
        <b-col class="example-col" cols="6" md="4">Message from the server</b-col>
        <b-col class="example-col" cols="12" md="8">{{ message }}</b-col>
      </b-row>
    </b-container>

    <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>

    <div class="mt-3">
      Submitted Names:
      <div v-if="submittedNames.length === 0">--</div>
      <ul v-else class="mb-0 pl-3">
        <li v-for="name in submittedNames" :key ="name">{{ name }}</li>
      </ul>
    </div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'home',
  data() {
    return {
      message: '',
      name: '',
      nameState: null,
      submittedNames: []
    }
  },
  mounted() {
    this.getMessage()
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }
}
</script>

<style>
.example-col {
  padding-top: .75rem;
  padding-bottom: .75rem;
  background-color: whitesmoke;
  border: 2px solid lightgray;
}
</style>
