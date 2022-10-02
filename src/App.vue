<template>
  <login-form @login="login"></login-form>
</template>

<script>
import LoginForm from "./components/LoginForm.vue"

export default {
  name: "App",
  components: { LoginForm },
  data() {
    return {
      credentials: {
        email: "",
        password: "",
      },
    }
  },
  methods: {
    login(email, password) {
      this.credentials.email = email
      this.credentials.password = password
      console.log(this.credentials)
    },
  },
}
</script>
