<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1" >Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
            label="Login"
            type="email"
            prepend-icon="mdi-account-circle"/>
        <v-text-field
            label="password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"/>
      </v-form>
    </v-card-text>
    <v-divider/>
    <v-card-actions>
      <v-btn color="success">Login</v-btn>
      <v-spacer/>
      <v-btn color="info">Register</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "login",
  data() {
   return {
     showPassword: false
   }
  }
}
</script>

<style scoped>

</style>