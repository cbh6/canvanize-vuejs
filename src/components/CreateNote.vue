<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="openForm">
      <i class='plus icon'></i>
    </button>
    <div class="ui icon message left aligned" v-show="isCreating">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input v-model="title" type='text'>
        </div>
        <div class='field'>
          <label>Text</label>
          <input v-model="text" type='text'>
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
</template>

<script>
export default {
  data() {
    return {
      title: '',
      text: '',
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
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
