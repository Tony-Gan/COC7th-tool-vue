<template>
  <section id="app-functionalities">
    <cthulhuButtonLink link="/builder/step-one" :buttonText="button1" />
    <cthulhuButtonLink link="#" :buttonText="button2" />
    <cthulhuButtonLink link="#" :buttonText="button3" />
  </section>
</template>

<script>
import cthulhuButtonLink from "../SingleElement/CthulhuButtonLink.vue";

export default {
  data() {
    return {
      button1: "新建角色",
      button2: "场景模拟",
      button3: "战斗模拟",
    };
  },
  components: {
    cthulhuButtonLink,
  },
};
</script>
