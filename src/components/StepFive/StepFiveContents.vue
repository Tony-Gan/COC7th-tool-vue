<template>
  <section class="contents">
    <questionLabel>请根据模组要求为你的角色设定背景：</questionLabel>
    <cthulhuTextArea />
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
  components: {
    questionLabel,
    cthulhuButton,
    cthulhuTextArea,
  },
  methods: {
    applyModifier() {},
    saveInformation() {},
  },
};
</script>
