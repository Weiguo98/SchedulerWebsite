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
    <b-button @click="show=true" variant="primary">Show Modal</b-button>

    <b-modal
      v-model="show"
      title="Assign employees"
      id="modal-xl"
      size="xl"
    >
  <!--
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant" -->
      <b-container fluid>
        <!--
        <b-row class="mb-1 text-center">
          <b-col cols="3">pending hours</b-col>
          <b-col>Background</b-col>
          <b-col>Text</b-col>
        </b-row>
        -->
        <b-row>
          <div class = "space"></div>
        </b-row>
        <b-row class="mb-1">
          <!-- TODO: try with time select or this is okay whatever -->
          <b-col cols="3">pending hours</b-col>
          <b-col>
            <b-form-select
              v-model="timeStartVariants"
              :options="timeVariants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="timeEndVariants"
              :options="timeVariants"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <div class = "space"></div>
        </b-row>
         <!-- div class ="mt-3"> Selected:<strong> {{ timeStartVariants }}{{timeEndVariants}}</strong></div-->
          <!--
          <b-col>
            <b-form-select
              v-model="headerTextVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row>
        </b-row>
        -->
        <b-row class="mb-1">
          <b-col cols="3">Department name</b-col>
          <b-col>
            <b-form-select
              v-model="departmentVariant"
              :options="deVariants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="employeeVariant"
              :options="emVariants"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <div class = "space"></div>
        </b-row>
        <b-row>
          <b-col cols="3">zone</b-col>
          <b-col>
            <b-form-select
              v-model="zoneVariant"
              :options="zoVariants"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <div class = "space"></div>
        </b-row>
      </b-container>

      <template #modal-footer>
        <div class="w-100">
          <p class="float-left">Modal Footer Content</p>
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'home',
  // TODO: time start variants need to be smaller than time end variants
  // TODO: time variants limit to six line.
  data() {
    return {
      message: '',
      show: false,
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      timeVariants: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00'],
      timeStartVariants: '8:00',
      timeEndVariants: '9:00',
      deVariants: ['cleaner', 'operator', 'security', 'maintainer'],
      emVariants: ['Alice', 'Tom', 'Henry', 'Jerry', 'Anna'],
      zoVariants: ['AeroSpin', 'Balder', 'Cyklonen', 'Flygis', 'Helix']
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

.space {
  margin:0;
  padding:0;
  height:30px;
}
</style>
