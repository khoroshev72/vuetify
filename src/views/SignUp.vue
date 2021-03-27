<template>
<v-container>
  <h1>Sign Up</h1>
  <v-row>
    <v-col cols="12" sm="8" offset-sm="2" md="6" offset-md="3" xl="4" offset-xl="4">
      <v-form @submit.prevent>
        <v-text-field label="Email" type="email"></v-text-field>

        <v-autocomplete :items="browsers" label="Which browser do you use?"></v-autocomplete>

        <v-file-input label="Attach profile photo"></v-file-input>

        <v-text-field label="Click on your birthday" v-model="birthday" readonly></v-text-field>
        <v-date-picker v-model="birthday" ></v-date-picker>

        <v-checkbox label="Please agree" />

        <v-btn type="submit" color="primary">Submit</v-btn>
      </v-form>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
name: "SignUp",
  data: () => ({
    browsers: [
        'Chrome', 'Safari', 'Mozilla', 'Opera'
    ],
    birthday: null
  })
}
</script>

<style scoped>

</style>