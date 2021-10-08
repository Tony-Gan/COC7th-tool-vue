<template>
  <section class="builder">
    <progressBar currentIndex="1" />
    <contents />
  </section>
</template>

<script>
import progressBar from "../Navigation/ProgressBar.vue";
import contents from "./StepTwpContents.vue";

export default {
  components: {
    progressBar,
    contents,
  },
};
</script>
