<template>
  <button
    :disabled="disabled"
    class="w-full md:w-auto px-5 py-2 rounded-lg text-white text-2xl animate__animated animate__fadeInUp"
    type="submit"
    :class="disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-400'"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "button-red",
  props: ["disabled"],
}
</script>
