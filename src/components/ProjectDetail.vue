<template>
<div class="ui container">
  <div class='ui centered fluid card'>
    <div class='content'>
      <div class='header'>
        {{id}} - {{project.title}}
      </div>
      <div class="description"> {{project.description}}</div>
      <div class="ui horizontal segments">
        <div class="ui card segment">
          <div class="header teal ui top attached label">
            Notes
          </div>
          <div class="content">
            <div class="description">
              <note v-for="note in project.notes" v-bind:note="note" :key="note.id" v-on:delete-note="deleteNote"></note>
              <create-note v-on:create-note="createNote"></create-note>
            </div>
          </div>
        </div>
        <div class="card ui segment">
          <div class="header blue ui top attached label">
            Diary
          </div>
          <div class="content">
            <div class="description">
              <reminder v-for="reminder in project.reminders" v-bind:reminder="reminder" :key="reminder.id" v-on:delete-reminder="deleteReminder"></reminder>
              <create-reminder v-on:create-reminder="createReminder"></create-reminder>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="left-floated">
    <router-link :to="{name: 'ProjectList'}">
      <button class="ui primary button">Back</button>
    </router-link>
  </div>

</div>
</template>

<script>
import CreateNote from "./CreateNote"
import CreateReminder from "./CreateReminder"
import Note from "./Note"
import Reminder from "./Reminder"

export default {
  props: ['id'],
  components: {
    CreateNote,
    CreateReminder,
    Note,
    Reminder
  },
  data() {
    return {
      project: ''
    }
  },
  methods: {
    updateProject() {
      this.$http.patch('projects/' + this.id + '.json', this.project)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        this.project = jsonResponse;
      });

    },
    deleteNote(note) {
      const noteIndex = this.project.notes.indexOf(note);
      this.project.notes.splice(noteIndex, 1);
      this.updateProject();
      // this.$http.delete('projects/' + this.id + '/notes/' + noteIndex + '.json')
      // .then(response => {
      //   console.log(response)
      // });
    },
    deleteReminder(reminder) {
      const reminderIndex = this.project.reminders.indexOf(reminder);
      this.project.reminders.splice(reminderIndex, 1);
      this.updateProject();
    },
    createNote(newNote) {
      if(this.project.notes == undefined){
        this.project.notes = [];
      }

      // newNote.id = this.project.notes[this.project.notes.length - 1].id + 1;
      this.project.notes.push(newNote);
      this.updateProject();
    },
    createReminder(newReminder) {
      if(this.project.reminders == undefined){
        this.project.reminders = [];
      }

      this.project.reminders.push(newReminder);
      this.updateProject();
    }
  },
  mounted() {
    this.$http.get('projects/' + this.id + '.json')
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      this.project = jsonResponse;
    })
  }
}
</script>

<style media="screen">
.left-floated {
  float:left;
}
</style>
