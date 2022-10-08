<template>
  <button
    class="bg-red-400 w-full md:w-auto px-5 py-2 rounded-lg text-white text-2xl animate__animated animate__fadeInUp"
    type="submit"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "button-red",
}
</script>
