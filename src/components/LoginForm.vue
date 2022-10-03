<template>
  <div class="h-screen flex justify-center px-2 md:p-0 md:items-center">
    <form class="w-full md:w-[70%] md:h-[60%] block md:flex">
      <div
        class="w-[30%] hidden md:flex z-20 justify-center items-center rounded-md bg-gradient-to-t from-red-400 to-red-600 shadow-md"
      >
        <h3
          class="text-5xl text-white font-semibold tracking-widest animate__animated animate__fadeInDown"
        >
          Login
        </h3>
      </div>
      <div
        class="w-full md:w-[70%] flex z-10 flex-col space-y-10 justify-center shadow-md rounded-md p-10 md:p-0 items-center"
      >
        <div class="flex flex-col w-full md:w-[70%]">
          <label
            class="text-2xl tracking-widest text-red-400 font-bold animate__animated animate__fadeIn"
            for="email"
            >Username</label
          >
          <input
            class="border-b-[2px] w-full md:w-[70%] border-red-500 py-3 outline-none animate__animated animate__fadeInRight"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            v-model="email"
          />
        </div>
        <div class="flex flex-col w-full md:w-[70%]">
          <label
            class="text-2xl tracking-widest text-red-400 font-bold animate__animated animate__fadeIn"
            for="password"
            >Password</label
          >
          <input
            class="border-b-[2px] w-full md:w-[70%] border-red-500 py-3 outline-none animate__animated animate__fadeInLeft"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            v-model="password"
          />
        </div>

        <div class="w-full md:w-[70%]">
          <button
            class="bg-red-400 w-full md:w-auto px-5 py-2 rounded-lg text-white text-2xl animate__animated animate__fadeInUp"
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
