<template>
  <div class="ui container">
    <div class="ui three column grid container">
      <project-card v-for="project in projects" v-bind:project="project" :key="project.id"></project-card>
    </div>
  </div>
</template>

<script>

import ProjectCard from "./ProjectCard"

export default {
  name: 'projectList',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [{
        id: 1,
        title: 'Startup A',
        project: 'Project A',
        done: false,
      }, {
        id: 2,
        title: 'Startup B',
        project: 'Project B',
        done: true,
      }, {
        id: 3,
        title: 'Startup C',
        project: 'Project C',
        done: false,
      }, {
        id: 4,
        title: 'Startup D',
        project: 'Project D',
        done: false,
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
