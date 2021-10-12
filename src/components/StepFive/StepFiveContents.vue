<template>
  <section class="contents">
    <questionLabel>请根据模组要求为你的角色设定背景：</questionLabel>
    <cthulhuTextArea @on-input="handleBackground" />
    <div class="step5-buttons">
      <cthulhuButton buttonText="应用修改" @click="applyModifier" />
      <cthulhuButton buttonText="下一步" @click="saveInformation" />
    </div>
  </section>
</template>

<script>
import questionLabel from "../SingleElement/QuestioinLabel.vue";
import cthulhuButton from "../SingleElement/CthulhuButton.vue";
import cthulhuTextArea from "../SingleElement/CthulhuTextArea.vue";

export default {
  data() {
    return {
      background: null,
    };
  },
  components: {
    questionLabel,
    cthulhuButton,
    cthulhuTextArea,
  },
  methods: {
    handleBackground(value) {
      this.background = value;
    },
    applyModifier() {
      if (this.background) {
        localStorage.setItem("background", this.background);
        document.getElementById("background").disabled = true;
        document.querySelector(".step5-buttons button").disabled = true;
      } else {
        alert("请输入相关背景");
      }
    },
    saveInformation() {
      if (!document.querySelector(".step5-buttons button").disabled) {
        alert("在进行下一步之前，请先应用修改");
      } else {
        location.href = "/builder/step-six";
      }
    },
  },
};
</script>
