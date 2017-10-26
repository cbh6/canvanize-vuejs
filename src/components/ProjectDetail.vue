<template>
  <div class="ui container">
    <div class='ui centered fluid card'>
      <div class='content'>
          <div class='header'>
            {{project.title}}
          </div>
          <div class="description"> {{project.description}}</div>
          <div class="ui horizontal segments">
              <div class="ui card segment">
                <div class="header teal ui top attached label">
                  Notes
                </div>
                <div class="content">
                  <div class="description">
                      <div class="ui icon message left aligned" v-for="note in project.notes">
                        <div class="content">
                          <div class="header">
                            {{ note.title }}
                          </div>
                          <p>{{ note.text }}</p>
                        </div>
                      </div>
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
                      <div class="ui icon message left aligned" v-for="reminder in project.reminders">
                        <div class="content">
                          <div class="header">
                            {{ reminder.date }}
                          </div>
                          <p>{{ reminder.description }}</p>
                        </div>
                      </div>
                      <create-reminder v-on:create-reminder="createReminder"></create-reminder>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div> 
</template>

<script>
import CreateNote from "./CreateNote"
import CreateReminder from "./CreateReminder"

export default {
  props: ['id'],
  components: {
    CreateNote,
    CreateReminder
  },
  data() {
    return {
      project: ''
    }
  },
  methods: {
    getProject: function(id){
      var projects = JSON.parse(localStorage.getItem("projects"));
      return projects.find(function(data){
        return data.id == id;
      });
    },
    updateProject: function(){
      var projects = JSON.parse(localStorage.projects);
       for (var i = 0; i < projects.length; i++) {
         if(projects[i].id === this.project.id){  
             projects[i] = this.project;
             break;  
         }
      }
      localStorage.setItem("projects", JSON.stringify(projects));  //put the object back
    },
    createNote(newNote) {
      //newNote.id = this.project.notes.length + 1;
      this.project.notes.push(newNote);
      this.updateProject();
    },
    createReminder(newReminder) {
      //newReminder.id = this.project.reminders.length + 1;
      this.project.reminders.push(newReminder);
      this.updateProject();
    }
  },
  mounted: function() {
    this.project = this.getProject(this.id);
  }
}
</script>

<style media="screen">
</style>
