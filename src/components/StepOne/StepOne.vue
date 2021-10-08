<template>
  <section class="builder">
    <progressBar currentIndex="0" />
    <contents />
  </section>
</template>

<script>
import progressBar from "../Navigation/ProgressBar.vue";
import contents from "./StepOneContents.vue";

export default {
  components: {
    progressBar,
    contents,
  },
};
</script>
