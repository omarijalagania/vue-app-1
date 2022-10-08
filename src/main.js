import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import "animate.css"
import "./styles/app.css"
import LoginFormVue from "./components/LoginForm.vue"
import RegisterFormVue from "./components/RegisterForm.vue"

const routes = [
  { path: "/login", component: LoginFormVue },
  { path: "/register", component: RegisterFormVue },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount("#app")
