<template>
<div class='ui basic content center aligned segment'>
  <button class='ui basic button icon' v-on:click="openForm">
      <i class='plus icon'></i>
    </button>
  <div id="note" class="ui tiny modal card">
    <div class="content">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input v-model="title" type='text' @keyup.enter="sendForm">
        </div>
        <div class='field'>
          <label>Text</label>
          <input v-model="text" type='text' @keyup.enter="sendForm">
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
      title: '',
      text: ''
    };
  },
  methods: {
    openForm() {
      $('#note').modal('show');
    },
    closeForm() {
      $('#note').modal('hide');
    },
    sendForm() {
      if (this.title.length > 0 && this.text.length > 0) {
        const title = this.title;
        const text = this.text;
        this.$emit('create-note', {
          title,
          text,
        });
        this.title = '';
        this.text = '';
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
