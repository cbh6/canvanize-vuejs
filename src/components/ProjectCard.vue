<template>
  <router-link :to="{name: 'ProjectDetail', params: {id: project.id}}" class="column" tag="div">
    <div class='ui centered fluid link card'>
      <div class='content'>
        <div class='header'>
          {{ project.title }}
        </div>
        <div class='meta'>
          {{ project.description }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['project']
}
</script>

<style media="screen">
</style>
