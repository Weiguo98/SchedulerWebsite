<template>
  <div>
    <b-modal
      id="staffCalendar_ID"
      size="xl"
      v-model="this.show"
      title="Staff Calendar"
      ref="staffCalendar"
    >
      <b-container fluid>
        <CalendarMonth />
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import CalendarMonth from '../components/CalendarMonth'

export default {
  name: 'staffCalendar',
  created() {
    console.log('hhej')
    this.$root.$refs.staffCalendar = this
  },
  components: {
    CalendarMonth
  },
  methods: {
    showModal() {
      this.$refs['staffCalendar'].show()
    }
  }
}
</script>

<style></style>
