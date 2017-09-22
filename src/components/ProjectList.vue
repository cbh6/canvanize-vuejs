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
      projects: [{
        id: 1,
        title: 'Startup A',
        description: 'Project A',
        done: false,
        notes: [{title: 'Note 1', text: 'Loren ipsum'}, {title: 'Note 2', text: 'dolor'}],
        reminders: [{date: '10/05/2018', description: 'Go shopping!'}]
      }, {
        id: 2,
        title: 'Startup B',
        description: 'Project B',
        done: true,
        notes: [{title: 'Note 1', text: 'Loren ipsum'},{title: 'Note 2', text: 'dolor'}],
        reminders: [{date: '10/05/2018', description: 'Go shopping!'}]
      }, {
        id: 3,
        title: 'Startup C',
        description: 'Project C',
        done: false,
        notes: [{title: 'Note 1', text: 'Loren ipsum'},{title: 'Note 2', text: 'dolor'}],
        reminders: [{date: '10/05/2018', description: 'Go shopping!'}]
      }, {
        id: 4,
        title: 'Startup D',
        description: 'Project D',
        done: false,
        notes: [{title: 'Note 1', text: 'Loren ipsum'},{title: 'Note 2', text: 'dolor'}],
        reminders: [{date: '10/05/2018', description: 'Go shopping!'}]
      }]
    }
  },
  created: function() {
    if (localStorage.projects){
      this.projects = this.getData("projects");
    }else{
      this.initApp();
    }
  },
  methods: {
    setData: function(key, data){
      var projects = JSON.stringify(data);
      localStorage.setItem(key, projects);
    },
    getData: function(key){
      var project = localStorage.getItem(key);
      return JSON.parse(project);
    },
    initApp: function(){
      localStorage.clear();
      this.setData("projects", this.projects);
    },
    createProject(newProject) {
      this.projects.push(newProject);
      newProject.id = this.projects.length + 1;
      this.setData("projects", this.projects);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
