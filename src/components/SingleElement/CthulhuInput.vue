<template>
  <div class="cthulhu-input">
    <questionLabel>{{ contents }}</questionLabel>
    <input
      :type="textType"
      :style="width"
      @input="onInput"
      :min="parseInt(minValue)"
      :max="parseInt(maxValue)"
      :placeholder="parseInt(0)"
    />
  </div>
</template>

<script>
import questionLabel from "./QuestioinLabel.vue";

export default {
  data() {
    return {
      width: null,
      minValue: null,
      maxValue: null,
    };
  },
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
    min: {
      type: String,
    },
    max: {
      type: String,
    },
  },
  beforeMount() {
    this.width = this.applyWidth();
    if (this.min) {
      this.minValue = this.min;
    }
    if (this.max) {
      this.maxValue = this.max;
    }
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
