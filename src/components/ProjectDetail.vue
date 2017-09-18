<template>
  <div>
    <p>{{project}}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      project: ''
    }
  },
  methods: {
    getProject: function(id){
      var projects = JSON.parse(localStorage.getItem("projects"));
      return projects.filter(function(data){
        return data.id == id;
      });

    }
  },
  mounted: function() {
    this.project = this.getProject(this.id);
  }
}
</script>

<style media="screen">
</style>
