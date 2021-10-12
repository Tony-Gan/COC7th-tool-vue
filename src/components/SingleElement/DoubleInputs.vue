<template>
  <section class="double-inputs">
    <questionLabel>{{ getLabelText }}</questionLabel>
    <input class="input1" type="text" @input="onInput1" placeholder="物品名称" />
    <input class="input2" type="text" @input="onInput2" placeholder="物品描述" />
  </section>
</template>

<script>
import questionLabel from "../SingleElement/QuestioinLabel.vue";

export default {
  props: {
    labelText: {
      type: String,
      default: "你没告诉我这里写什么",
    },
  },
  computed: {
    getLabelText() {
      return this.labelText;
    },
  },
  components: {
    questionLabel,
  },
  methods: {
    onInput1(event) {
      this.$emit("on-input1", event.target.value);
    },
    onInput2(event) {
      this.$emit("on-input2", event.target.value);
    },
  },
};
</script>
