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
          <b-col cols="3">Planning work hours</b-col>
          <b-col>
            <b-form-select  v-model="timeStartVariants" :options="timeStVariants">
            </b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="timeEndVariants"
              :options="timeEnVariants"
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
          <b-col cols="3">Department Name</b-col>
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
          <b-col cols="3">Zone</b-col>
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
          <b-button variant = "success" class = "float-right" @click = "show = false">
          Confirm </b-button>
          <b-button variant="danger" class="float-right" @click="show = false">
          Cancel </b-button>
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
      timeStVariants: [{ value: null, text: '--select start time--', disabled: true }, '8:00', '8:15', '8:30', '8:45', '9:00', '9:15', '9:30', '9:45', '10:00', '10:15', '10:30', '10:45',
        '11:00', '11:15', '11:30', '11:45', '12:00'],
      timeEnVariants: [{ value: null, text: '--select end time--', disabled: true }, '8:00', '8:15', '8:30', '8:45', '9:00', '9:15', '9:30', '9:45', '10:00', '10:15', '10:30', '10:45',
        '11:00', '11:15', '11:30', '11:45', '12:00'],
      timeStartVariants: null,
      timeEndVariants: null,
      deVariants: [{ value: null, text: '--select department--', disabled: true }, 'cleaner', 'operator', 'security', 'maintainer'],
      departmentDefaultVariants: null,
      emVariants: [{ value: null, text: '--select employee--', disabled: true }, 'Alice', 'Tom', 'Henry', 'Jerry', 'Anna'],
      employeeDefaultVariants: null,
      zoVariants: [{ value: null, text: '--select zone--', disabled: true }, 'AeroSpin', 'Balder', 'Cyklonen', 'Flygis', 'Helix'],
      ZoneDefaultVariants: null
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
.float-right {
  margin-left:5pt;
}
</style>
