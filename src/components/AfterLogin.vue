<template>
  <div class="h-[calc(100vh_-_81px)]">
    <h1 class="text-2xl text-center pt-10">
      Thanks for login...{{ store.loginData.email }}
    </h1>
  </div>
</template>

<script>
import { store } from "../../state/str"

export default {
  data() {
    return {
      store,
    }
  },
}
</script>
