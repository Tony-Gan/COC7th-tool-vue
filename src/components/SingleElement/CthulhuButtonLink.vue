<template>
  <router-link :to="link">{{ buttonText }}</router-link>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
