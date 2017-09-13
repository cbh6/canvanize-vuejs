<template>
  <div class="column">
    <div class='ui centered fluid card'>
      <div class='content'>
        <div class='header'>
          {{ project.title }}
        </div>
        <div class='meta'>
          {{ project.project }}
        </div>
      </div>
      <div class='ui bottom attached green basic button' v-show="project.done">
        Completed
      </div>
      <div class='ui bottom attached red basic button' v-show="!project.done">
        Complete
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>
