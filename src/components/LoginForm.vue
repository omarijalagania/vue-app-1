<template>
  <div class="h-screen flex justify-center px-2 md:p-0 md:items-center">
    <form
      @submit.prevent="submit"
      class="w-full md:w-[70%] md:h-[60%] block md:flex"
    >
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
            @blur="validateEmail"
            placeholder="Enter Email"
            v-model="email"
          />
          <p v-if="this.validateMyEmail === 'error'">Required</p>
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

        <div class="flex items-center w-full md:w-[70%] space-x-3">
          <label
            class="text-sm tracking-widest text-red-400 animate__animated animate__fadeIn"
            for="checkbox"
            >Remember me</label
          >
          <input
            class="w-full outline-none animate__animated animate__fadeInLeft"
            type="checkbox"
            name="checkbox"
            id="checkbox"
            v-model="rememberMe"
          />
        </div>

        <div class="md:w-[70%] space-x-3">
          <label
            class="text-sm tracking-widest text-red-400 animate__animated animate__fadeIn"
            for="checkbox"
            >Select item</label
          >
          <select v-model="selected">
            <option disabled value="select">Select Item</option>
            <option value="Google">Google</option>
            <option value="Amazon">Amazon</option>
            <option value="Apple">Apple</option>
          </select>
        </div>

        <div class="w-full md:w-[70%]">
          <button-red> Login </button-red>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonRed from "./ButtonRed.vue"

export default {
  name: "login-form",
  components: { ButtonRed },
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      validateMyEmail: "pending",
      selected: "select",
    }
  },
  methods: {
    submit() {
      console.log(this.email, this.password, this.rememberMe, this.selected)
    },

    validateEmail() {
      if (this.email === "") {
        this.validateMyEmail = "error"
      } else if (this.email.includes("@")) {
        this.validateMyEmail = "success"
      } else {
        this.validateMyEmail = "pending"
      }
    },
  },
}
</script>
