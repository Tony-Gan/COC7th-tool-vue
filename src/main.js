import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import MainPage from "./components/MainPage/MainPage.vue";
import StepOne from "./components/StepOne/StepOne.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      component: MainPage,
    },
    {
      path: "/builder/step-one",
      component: StepOne,
    },
  ],
});
const app = createApp(App);

app.use(router);
app.mount("#app");
