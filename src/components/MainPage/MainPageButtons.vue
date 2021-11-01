<template>
  <section id="app-functionalities">
    <cthulhuButton :buttonText="button1" @click="toBuilder" />
    <cthulhuButton :buttonText="button2" @click="toDiceSimulator" />
    <cthulhuButton :buttonText="button3" @click="toBatSimulator" />
  </section>
</template>

<script>
import cthulhuButton from "../SingleElement/CthulhuButton.vue";

export default {
  data() {
    return {
      button1: "新建角色",
      button2: "骰子工具",
      button3: "战斗模拟",
    };
  },
  components: {
    cthulhuButton,
  },
  methods: {
    toBuilder() {
      location.href = "/builder/step-one";
    },
    toDiceSimulator() {
      location.href = "/dice";
    },
    toBatSimulator() {
      alert("还没做好呢");
    },
  },
};
</script>
