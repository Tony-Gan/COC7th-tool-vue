<template>
  <section class="builder">
    <progressBar currentIndex="2" />
    <contents />
  </section>
</template>

<script>
import progressBar from "../Navigation/ProgressBar.vue";
import contents from "./StepThreeContents.vue";

export default {
  components: {
    progressBar,
    contents,
  },
};
</script>
