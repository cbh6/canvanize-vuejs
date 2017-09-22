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
                  Notas
                </div>
                <div class="content">
                  <div class="description">
                    <p v-for="note in project.notes">
                      {{note}}
                    </p>
                  </div>
                </div>
              </div>
              <div class="card ui segment">
                <div class="header blue ui top attached label">
                  Agenda
                </div>
                <div class="content">
                  <div class="description">
                    <p v-for="reminder in project.reminders">
                      {{reminder}}
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
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
      return projects.find(function(data){
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
