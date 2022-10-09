import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import "animate.css"
import "./styles/app.css"
import LoginFormVue from "./components/LoginForm.vue"
import RegisterFormVue from "./components/RegisterForm.vue"
import AfterLoginVue from "./components/AfterLogin.vue"
import en from "../public/locale/en.json"
import ge from "../public/locale/ge.json"
import MyHomeVue from "./components/MyHome.vue"
import { createI18n } from "vue-i18n"

const routes = [
  { path: "/", component: MyHomeVue },
  { path: "/login", component: LoginFormVue },
  { path: "/register", component: RegisterFormVue },
  { path: "/after-login", component: AfterLoginVue },
]

const i18n = createI18n({
  locale: "en",
  messages: {
    en,
    ge,
  },
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(i18n)
app.use(router)

app.mount("#app")
