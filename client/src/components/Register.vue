<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <div class="white elevation-2">
          <v-toolbar flat dense class="blue" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>

          <div class="pl-4 pr-4 pt-2 pb-2">
            <form
              name="bookmarker-form"
              autocomplete="off">
              <v-text-field
                label="email"
                v-model="email">
              </v-text-field>
              <br>
              <v-text-field
                label="password"
                type="password"
                v-model="password"
                autocomplete="new-password">
              </v-text-field>
            </form>
            <br>
            <div class="error" v-html="error"/>
            <br>
            <br>
            <v-btn
              dark
              class="blue"
              @click="register">Register
            </v-btn>
          </div>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
