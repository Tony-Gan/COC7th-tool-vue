<template>
  <div>
    <questionLabel>{{ contents }}</questionLabel>
    <input :type="textType" :style="applyWidth" @input="onInput" />
  </div>
</template>

<script>
import questionLabel from "./QuestioinLabel.vue";

export default {
  props: {
    textType: {
      type: String,
      default: "text",
    },
    contents: {
      type: String,
    },
    labelWidth: {
      type: String,
      default: "350px",
    },
  },
  methods: {
    applyWidth() {
      return "width: " + this.labelWidth;
    },
    onInput(event) {
      this.$emit("on-input", event.target.value);
    },
  },
  components: {
    questionLabel,
  },
};
</script>
