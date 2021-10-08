<template>
  <section id="main-page">
    <mainPageHeader />
    <mainPageButtons />
    <sidebar />
  </section>
</template>

<script>
import mainPageHeader from "./MainPageHeader.vue";
import mainPageButtons from "./MainPageButtons.vue";

export default {
  components: {
    mainPageHeader,
    mainPageButtons,
  },
};
</script>
