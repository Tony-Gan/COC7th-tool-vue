<template>
  <section id="app-functionalities">
    <cthulhuButton link="/builder/step-one" :buttonText="button1" />
    <cthulhuButton link="#" :buttonText="button2" />
    <cthulhuButton link="#" :buttonText="button3" />
  </section>
</template>

<script>
import cthulhuButton from "../SingleElement/CthulhuButton.vue";

export default {
  data() {
    return {
      button1: "新建角色",
      button2: "场景模拟",
      button3: "战斗模拟",
    };
  },
  components: {
    cthulhuButton,
  },
};
</script>
