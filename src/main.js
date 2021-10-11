import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import MainPage from "./components/MainPage/MainPage.vue";
import StepOne from "./components/StepOne/StepOne.vue";
import StepTwo from "./components/StepTwo/StepTwo.vue";
import StepThree from "./components/StepThree/StepThree.vue";
import StepFour from "./components/StepFour/StepFour.vue";
import StepFive from "./components/StepFive/StepFive.vue";

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
    {
      path: "/builder/step-two",
      component: StepTwo,
    },
    {
      path: "/builder/step-three",
      component: StepThree,
    },
    {
      path: "/builder/step-four",
      component: StepFour,
    },
    {
      path: "/builder/step-five",
      component: StepFive,
    },
  ],
});
const app = createApp(App);

app.use(router);
app.mount("#app");
