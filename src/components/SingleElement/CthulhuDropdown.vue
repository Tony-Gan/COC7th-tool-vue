<template>
  <div>
    <questionLabel>{{ labelContents }}</questionLabel>
    <select class="cthulhu-dropdown" :style="width" :defaultValue="defaultValue" @change="onChange">
      <option v-for="item in contents" :key="item" :value="item">{{ item }}</option>
    </select>
  </div>
</template>

<script>
import questionLabel from "./QuestioinLabel.vue";

export default {
  props: {
    contents: {
      type: Array,
    },
    labelContents: {
      type: String,
    },
    labelWidth: {
      type: String,
      default: "350px",
    },
    defaultValue: {
      type: String,
      default: "",
    },
  },
  beforeMount() {
    this.width = this.applyWidth();
  },
  methods: {
    applyWidth() {
      return "width: " + this.labelWidth;
    },
    onChange(event) {
      this.$emit("on-change", event.target.value);
    },
  },
  components: {
    questionLabel,
  },
};
</script>
