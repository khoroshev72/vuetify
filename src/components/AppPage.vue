<template>
  <v-container>
    <v-card-title>
      <h1 class="mx-auto" >{{title}}</h1>
    </v-card-title>
    <v-card-text>
      <slot/>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  name: "AppPage",
  props: ['title']
}
</script>

<style scoped>

</style>