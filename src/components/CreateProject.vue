<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="openForm">
      <i class='plus icon'></i>
    </button>
    <div class='ui tiny modal card'>
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-model="titleText" type='text'>
          </div>
          <div class='field'>
            <label>Project</label>
            <input v-model="projectText" type='text'>
          </div>
          <div class='actions'>
            <button class='ui approve green button' v-on:click="sendForm()">
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
      titleText: '',
      projectText: '',
    };
  },
  methods: {
    openForm() {
      $('.tiny.modal').modal('show');
    },
    closeForm() {
      $('.tiny.modal').modal('hide');
    },
    sendForm() {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText;
        const project = this.projectText;
        this.$emit('create-project', {
          title,
          project,
          done: false,
        });
        this.titleText = '';
        this.projectText = '';
        this.closeForm();
      }
    },
  },
};
</script>

<style>
.actions {
  float: right;
}
</style>
