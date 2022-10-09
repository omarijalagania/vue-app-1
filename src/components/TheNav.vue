<template>
  <ul class="py-6 mx-auto bg-red-400 flex justify-around items-center">
    <div>
      <li class="flex space-x-4 text-2xl">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </li>
    </div>
    <div>
      <select v-model="$i18n.locale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </div>
  </ul>
</template>

<script>
export default {}
</script>

<style scoped>
a.router-link-active {
  color: #fff;
  border-bottom: 2px solid #fff;
}
</style>
