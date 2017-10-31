<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="openForm">
      <i class='plus icon'></i>
    </button>
    <div id="reminder" class="ui tiny modal card">
    <div class="content">
      <div class='ui form'>
        <div class='field'>
          <label>Date</label>
          <input v-model="date" type='text' @keyup.enter="sendForm">
        </div>
        <div class='field'>
          <label>Description</label>
          <input v-model="description" type='text' @keyup.enter="sendForm">
        </div>
        <div class='actions'>
          <button class='ui approve green button' v-on:click="sendForm">
            Create
          </button>
          <button class='ui cancel red button' v-on:click="closeForm">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      description: ''
    };
  },
  methods: {
    openForm() {
      $('#reminder').modal('show');
    },
    closeForm() {
      $('#reminder').modal('hide');
    },
    sendForm() {
      if (this.date.length > 0 && this.description.length > 0) {
        const date = this.date;
        const description = this.description;
        this.$emit('create-reminder', {
          date,
          description,
        });
        this.date = '';
        this.description = '';
        this.closeForm();
      }
    },
  },
}
</script>

<style>
.actions {
  float: right;
}
</style>
