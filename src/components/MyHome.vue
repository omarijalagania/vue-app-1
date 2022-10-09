<template>
  <div class="locale-changer">
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
  <h1 v-t="{ path: 'hello' }" class="p-10 text-center"></h1>
</template>

<script>
export default {}
</script>
