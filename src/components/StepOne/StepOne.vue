<template>
  <section class="builder">
    <sidebar :currentIndex="0" />
    <contents />
  </section>
</template>

<script>
import sidebar from "../Navigation/ProgressBar.vue";
import contents from "./StepOneContents.vue";

export default {
  components: {
    sidebar,
    contents,
  },
};
</script>
