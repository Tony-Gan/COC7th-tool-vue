<template>
  <div>
    <questionLabel>{{ labelContents }}</questionLabel>
    <input type="" />
  </div>
</template>

<script>
import questionLabel from "./QuestioinLabel.vue";

export default {
  props: {
    textType: {
      type: String,
    },
    length: {
      type: Number,
    },
    contents: {
      type: Array,
    },
    labelContents: {
      type: String,
    },
  },
  components: {
    questionLabel,
  },
};
</script>
