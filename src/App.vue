<template>
  <div class="flex space-x-5 pt-10 justify-center">
    <h1
      @click="toggleForm('login-form')"
      class="text-3xl cursor-pointer text-red-400"
      :class="isShowLoginForm === 'login-form' ? 'underline' : ''"
    >
      Login
    </h1>
    <h1
      @click="toggleForm('register-form')"
      class="text-3xl cursor-pointer text-red-400"
      :class="isShowLoginForm === 'register-form' ? 'underline' : ''"
    >
      Register
    </h1>
  </div>

  <component :is="isShowLoginForm">
    <login-form></login-form>
    <register-form></register-form>
  </component>
</template>

<script>
import LoginForm from "./components/LoginForm.vue"
import RegisterForm from "./components/RegisterForm.vue"

export default {
  name: "App",
  components: { LoginForm, RegisterForm },
  data() {
    return {
      isShowLoginForm: "login-form",
    }
  },
  methods: {
    toggleForm(form) {
      this.isShowLoginForm = form
    },
  },
}
</script>
