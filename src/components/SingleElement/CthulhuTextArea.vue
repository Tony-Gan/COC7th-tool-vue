<template>
  <textarea id="background" cols="30" rows="10" @input="onInput"></textarea>
</template>

<script>
export default {
  methods: {
    onInput(event) {
      this.$emit("on-input", event.target.value);
    },
  },
};
</script>
