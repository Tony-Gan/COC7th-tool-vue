<template>
  <div id="dropdown-input-pair">
    <select :style="dropdownWidth" @change="onChange">
      <option v-for="(item, index) in contents" :key="item" :selected="index == 0" :value="item">{{ item }}</option>
    </select>
    <input
      :type="inputType"
      :style="inputWidth"
      @input="onInput"
      :min="parseInt(minValue)"
      :max="parseInt(maxValue)"
      :value="getDefault()"
      :placeholder="getDefault()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownWidth: null,
      inputWidth: null,
      minValue: null,
      maxValue: null,
      inputDefault: null,
    };
  },
  props: {
    contents: {
      type: Array,
    },
    min: {
      type: String,
    },
    max: {
      type: String,
    },
    ddWidth: {
      type: String,
      default: "350px",
    },
    ipWidth: {
      type: String,
      default: "350px",
    },
    defaultValue: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
    },
  },
  beforeMount() {
    this.dropdownWidth = this.applyWidth(this.ddWidth);
    this.inputWidth = this.applyWidth(this.ipWidth);
    if (this.min) {
      this.minValue = this.min;
    }
    if (this.max) {
      this.maxValue = this.max;
    }
  },
  methods: {
    applyWidth(width) {
      return "width: " + width;
    },
    getDefault() {
      return parseInt(this.defaultValue);
    },
    onChange(event) {
      this.$emit("on-change", event.target.value);
    },
    onInput(event) {
      this.$emit("on-input", event.target.value);
    },
  },
};
</script>
