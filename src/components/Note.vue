<template>
<div>
  <div class="ui icon message left aligned">
    <div class="content" v-show="!isEditing">
      <div class="header">
        {{ note.title }}
      </div>
      <p>{{ note.text }}</p>
    </div>
    <div class='extra content'>
      <span class='right floated edit icon' v-on:click="showForm">
          <i class='edit icon'></i>
        </span>
      <span class='right floated trash icon' v-on:click="deleteNote(note)">
          <i class='trash icon'></i>
        </span>
    </div>
  </div>

  <div class="content" v-show="isEditing">
    <div class='ui form'>
      <div class='field'>
        <label>Title</label>
        <input type='text' v-model="note.title">
      </div>
      <div class='field'>
        <label>Description</label>
        <input type='text' v-model="note.text">
      </div>
      <div class='ui two button attached buttons'>
        <button class='ui basic blue button' v-on:click="hideForm">
            Close X
          </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['note'],
  data() {
    return {
      isEditing: false
    }
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteNote(note) {
      this.$emit('delete-note', note);
    }
  }
}
</script>

<style media="screen">
</style>
