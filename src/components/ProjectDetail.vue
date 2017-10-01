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

export default {
  props: ['id'],
  components: {
    CreateNote
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
      // localStorage.setItem(key, projects);
      // var projects = JSON.parse(localStorage.projects);
      // for(var project of projects){
      //   if(project.hasOwnProperty('id') && project.id == this.project.id){
      //       project = this.project;
      //     }
      // }

      var projects = JSON.parse(localStorage.projects);
       for (var i = 0; i < projects.length; i++) {
         if(projects[i].id === this.project.id){  //look for match with name
             projects[i] = this.project;
             break;  //exit loop since you found the person
         }
      }
      localStorage.setItem("projects", JSON.stringify(projects));  //put the object back
      // projects.forEach(
      //   function(project){
      //     if(project.hasOwnProperty('id') && this.project.id == key){
      //       project = this.project;
      //     }
      //   }
      // );
      // localStorage.setItem('projects', JSON.stringify(projects));
    },
    createNote(newNote) {
      //newNote.id = this.project.notes.length + 1;
      this.project.notes.push(newNote);
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
