<template>
  <div class="ui container">
    <div class="ui three column grid container">
      <project-card v-for="project in projects" v-bind:project="project"></project-card>
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
        title: 'Startup A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Startup B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Startup C',
        project: 'Project C',
        done: false,
      }, {
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
