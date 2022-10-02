<template>
  <div class="h-screen flex justify-center items-center">
    <form class="w-[70%] h-[60%] flex">
      <div
        class="w-[30%] flex justify-center items-center rounded-md bg-gradient-to-t from-red-400 to-red-600 shadow-md"
      >
        <h3 class="text-5xl text-white font-semibold tracking-widest">Login</h3>
      </div>
      <div class="w-[70%] flex flex-col space-y-10 justify-center items-center">
        <div class="flex flex-col w-[70%]">
          <label
            class="text-2xl tracking-widest text-red-400 font-bold"
            for="email"
            >Username</label
          >
          <input
            class="border-b-[2px] w-[70%] border-red-500 py-3 outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            v-model="email"
          />
        </div>
        <div class="flex flex-col w-[70%]">
          <label
            class="text-2xl tracking-widest text-red-400 font-bold"
            for="password"
            >Password</label
          >
          <input
            class="border-b-[2px] w-[70%] border-red-500 py-3 outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            v-model="password"
          />
        </div>

        <div class="w-[70%]">
          <button
            class="bg-red-400 px-5 py-2 rounded-lg text-white text-2xl"
            type="submit"
            @click.prevent="login"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login-form",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  emits: ["login"],

  methods: {
    login() {
      this.$emit("login", this.email, this.password)
    },
  },
}
</script>
