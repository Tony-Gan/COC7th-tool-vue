<template>
  <section class="builder">
    <progressBar currentIndex="4" />
    <contents />
  </section>
</template>

<script>
import progressBar from "../Navigation/ProgressBar.vue";
import contents from "./StepFiveContents.vue";

export default {
  components: {
    progressBar,
    contents,
  },
};
</script>
