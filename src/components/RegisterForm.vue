<template>
  <div class="h-screen flex justify-center px-2 md:p-0 md:items-center">
    <form class="w-full md:w-[70%] md:min-h-[60%] block md:flex">
      <div
        class="w-[30%] hidden md:flex z-20 justify-center items-center rounded-md bg-gradient-to-t from-red-400 to-red-600 shadow-md"
      >
        <h3
          class="text-5xl text-white font-semibold tracking-widest animate__animated animate__fadeInDown"
        >
          Register
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
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
            v-model="username"
          />
        </div>

        <div class="flex flex-col w-full md:w-[70%]">
          <label
            class="text-2xl tracking-widest text-red-400 font-bold animate__animated animate__fadeIn"
            for="email"
            >Email</label
          >
          <input
            class="border-b-[2px] w-full md:w-[70%] border-red-500 py-3 outline-none animate__animated animate__fadeInLeft"
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
            class="border-b-[2px] w-full md:w-[70%] border-red-500 py-3 outline-none animate__animated animate__fadeInRight"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            v-model="password"
          />
        </div>

        <div class="flex flex-col w-full md:w-[70%]">
          <label
            class="text-2xl tracking-widest text-red-400 font-bold animate__animated animate__fadeIn"
            for="repeatPassword"
            >Repeat Password</label
          >
          <input
            class="border-b-[2px] w-full md:w-[70%] border-red-500 py-3 outline-none animate__animated animate__fadeInLeft"
            type="repeatPassword"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="Repeat Password"
            v-model="repeatPassword"
          />
        </div>

        <div class="w-full pb-5 md:w-[70%]">
          <button-red :login="register"> Register </button-red>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonRed from "./ButtonRed.vue"

export default {
  name: "register-form",
  components: { ButtonRed },
  data() {
    return {
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
    }
  },
  methods: {
    register() {
      console.log(this.email, this.password, this.username, this.repeatPassword)
    },
  },
}
</script>
