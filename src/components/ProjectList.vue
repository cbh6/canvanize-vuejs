<template>
  <div>Projects
    <ul v-for="project in projectList">
        <li> {{project.project}} </li>
    </ul>
  </div>
</template>

<script type = "text/javascript" >
export default {
  name: 'projectList',
  data() {
    return {
      projectList: this.getProjectList()
    }
  },
  methods: {
    getProjectList(){
      return
        [{
          title: 'Todo A',
          project: 'Project A',
          done: false
        }, {
          title: 'Todo B',
          project: 'Project B',
          done: true
        }, {
          title: 'Todo C',
          project: 'Project C',
          done: false
        }, {
          title: 'Todo D',
          project: 'Project D',
          done: false
        }]

    }
  },
  mounted() {
    this.projectList = this.getProjectList();
  }
};
</script>

<style>
</style>
