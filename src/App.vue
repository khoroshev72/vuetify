<template>
  <v-app>

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer/>

      <v-btn
          text rounded exact
          v-for="link in links"
          :key="link.name + '-header'"
          :to="{name: link.name}">
        {{link.label}}
      </v-btn>

    </v-app-bar>

    <v-main>

      <router-view></router-view>

    </v-main>

    <v-footer
        color="primary lighten-1"
        padless
    >
      <v-row
          justify="center"
          no-gutters
      >
        <v-btn
            v-for="link in links"
            :key="`${link.label}-footer`"
            :to="{name: link.name}"
            exact
            color="white"
            text
            rounded
            class="my-2"
        >
          {{ link.label }}
        </v-btn>

        <v-col
            class="primary lighten-2 py-4 text-center white--text"
            cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>

      </v-row>
    </v-footer>

  </v-app>
</template>

<script>

export default {
  data: () => ({
    showPassword: false,
    links: [
      {label: 'Home', name: 'home'},
      {label: 'Login', name: 'login'},
      {label: 'SignUp', name: 'signup'},
      {label: 'Dashboard', name: 'dashboard'},
      {label: 'Treeview', name: 'treeview'},
      {label: 'Departments', name: 'departments'}
    ]
  }),
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
