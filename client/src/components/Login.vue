<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <div class="white elevation-2">
          <v-toolbar flat dense class="blue" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>

          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              label="email"
              v-model="email">
            </v-text-field>
            <br>
            <v-text-field
              label="password"
              type="password"
              v-model="password">
            </v-text-field>
            <br>
            <div class="danger-alert" v-html="error"/>
            <br>
            <br>
            <v-btn
              dark
              class="blue"
              @click="login">Login
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
    async login () {
      try {
        const response = await AuthenticationService.login({
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
