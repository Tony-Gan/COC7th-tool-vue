<template>
  <a>{{ buttonText }}</a>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>
