<template>
  <b-modal
    v-model="this.filteredPersonnelList.delete_emp"
    id="modal-1"
    title="Delete schedule"
    ok-variant="danger"
    ok-title="Delete"
    @ok="handle_deleteOK"
  >
    <p class="my-4">
      Do you want to delete
      {{ this.filteredPersonnelList.emp_name }} schedule?
    </p>
  </b-modal>
</template>

<script>
export default {
  name: 'deleteModal'
}
</script>
