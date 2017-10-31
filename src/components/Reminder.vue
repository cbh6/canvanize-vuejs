<template>
<div>
  <div class="ui icon message left aligned" v-show="!isEditing">
    <div class="content">
      <div class="header">
        {{ reminder.date }}
      </div>
      <p>{{ reminder.description }}</p>
    </div>
    <div class='extra content'>
      <span class='right floated edit icon' v-on:click="showForm">
          <i class='edit icon'></i>
        </span>
      <span class='right floated trash icon' v-on:click="deleteReminder(reminder)">
          <i class='trash icon'></i>
        </span>
    </div>
  </div>
  <div class="ui icon message left aligned" v-show="isEditing">
    <div class="content">
      <div class='ui form'>
        <div class='field'>
          <label>Date</label>
          <input type='text' v-model="reminder.date" @keyup.enter="hideForm">
        </div>
        <div class='field'>
          <label>Description</label>
          <input type='text' v-model="reminder.description" @keyup.enter="hideForm">
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' v-on:click="hideForm">
              Close X
            </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['reminder'],
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
    deleteReminder(reminder) {
      this.$emit('delete-reminder', reminder);
    }
  }
}
</script>

<style media="screen">
</style>
