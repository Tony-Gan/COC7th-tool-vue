<template>
  <section class="builder">
    <progressBar currentIndex="6" />
    <contents />
  </section>
</template>

<script>
import progressBar from "../Navigation/ProgressBar.vue";
import contents from "./StepSevenContents.vue";

export default {
  components: {
    progressBar,
    contents,
  },
};
</script>
