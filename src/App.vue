<template>
  <the-nav></the-nav>
  <router-view></router-view>
</template>

<script>
import TheNav from "./components/TheNav.vue"
export default {
  name: "App",
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
  components: { TheNav },
}
</script>
