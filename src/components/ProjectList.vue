<template>
<div>
  <div>
    <create-project v-on:create-project="createProject"></create-project>
  </div>
  <div class="ui three column grid container">
    <project-card v-for="project in projects" v-bind:project="project" :key="project.id"></project-card>
  </div>
</div>
</template>

<script>
import ProjectCard from "./ProjectCard"
import CreateProject from "./CreateProject"

export default {
  name: 'projectList',
  components: {
    CreateProject,
    ProjectCard
  },
  data() {
    return {
      projects : []
      // projects: [{
      //   id: 1,
      //   title: 'Startup A',
      //   description: 'Project A',
      //   done: false,
      //   notes: [{
      //     id: 0,
      //     title: 'Note 1',
      //     text: 'Loren ipsum'
      //   }, {
      //     id: 1,
      //     title: 'Note 2',
      //     text: 'dolor'
      //   }],
      //   reminders: [{
      //     id: 0,
      //     date: '10/05/2018',
      //     description: 'Go shopping!'
      //   }]
      // }, {
      //   id: 2,
      //   title: 'Startup B',
      //   description: 'Project B',
      //   done: true,
      //   notes: [{
      //     id: 0,
      //     title: 'Note 1',
      //     text: 'Loren ipsum'
      //   }, {
      //     id: 1,
      //     title: 'Note 2',
      //     text: 'dolor'
      //   }],
      //   reminders: [{
      //     id: 0,
      //     date: '10/05/2018',
      //     description: 'Go shopping!'
      //   }]
      // }, {
      //   id: 3,
      //   title: 'Startup C',
      //   description: 'Project C',
      //   done: false,
      //   notes: [{
      //     id: 0,
      //     title: 'Note 1',
      //     text: 'Loren ipsum'
      //   }, {
      //     id: 1,
      //     title: 'Note 2',
      //     text: 'dolor'
      //   }],
      //   reminders: [{
      //     id: 0,
      //     date: '10/05/2018',
      //     description: 'Go shopping!'
      //   }]
      // }, {
      //   id: 4,
      //   title: 'Startup D',
      //   description: 'Project D',
      //   done: false,
      //   notes: [{
      //     id: 0,
      //     title: 'Note 1',
      //     text: 'Loren ipsum'
      //   }, {
      //     id: 1,
      //     title: 'Note 2',
      //     text: 'dolor'
      //   }],
      //   reminders: [{
      //     id: 0,
      //     date: '10/05/2018',
      //     description: 'Go shopping!'
      //   }]
      // }]
    }
  },
  // created: function() {
  //   if (localStorage.projects) {
  //     this.projects = this.getData("projects");
  //   } else {
  //     this.initApp();
  //   }
  // },
  methods: {
    // setData: function(key, data) {
    //   var projects = JSON.stringify(data);
    //   localStorage.setItem(key, projects);
    // },
    // getData: function(key) {
    //   var project = localStorage.getItem(key);
    //   return JSON.parse(project);
    // },
    // initApp: function() {
    //   localStorage.clear();
    //   this.setData("projects", this.projects);
    // },
    createProject(newProject) {
      // newProject.id = this.projects.length + 1;
      newProject.notes = [];
      newProject.reminders = [];


      this.$http.post('projects.json', newProject)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        newProject.id = jsonResponse.name;
        this.projects.push(newProject);
      });
      // this.setData("projects", this.projects);
    }
  },
  created() {
    this.$http.get('projects.json')
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      for(let id in jsonResponse){
        let project = {
          id: id,
          title: jsonResponse[id].title,
          description: jsonResponse[id].description,
          notes: jsonResponse[id].notes,
          reminders: jsonResponse[id].reminders
        }
        this.projects.push(project);
      }
      console.log(jsonResponse);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
