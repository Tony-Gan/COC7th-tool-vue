<template>
  <section class="builder">
    <progressBar currentIndex="5" />
    <contents />
  </section>
</template>

<script>
import progressBar from "../Navigation/ProgressBar.vue";
import contents from "./StepSixContents.vue";

export default {
  components: {
    progressBar,
    contents,
  },
};
</script>
