<template>
  <section id="app-functionalities">
    <cthulhuButton :buttonText="button1" @click.prevent="linkToBuilder()" />
    <cthulhuButton :buttonText="button2" @click.prevent="linkToScenerySimulator()" />
    <cthulhuButton :buttonText="button3" @click.prevent="linkToBattleSimulator()" />
  </section>
</template>

<script>
import cthulhuButton from "./CthulhuButton.vue";

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
  methods: {
    linkToBuilder() {
      location.href = "#";
    },
    linkToScenerySimulator() {
      alert("还没做好呢！");
    },
    linkToBattleSimulator() {
      alert("还没做好呢！");
    },
  },
};
</script>
