<template>
  <section class="contents">
    <stepTwoTable />
    <div>
      <stepTwoInputs />
    </div>
    <div class="step2-buttons">
      <cthulhuButton buttonText="应用修改" @click="applyModifier" />
      <cthulhuButton buttonText="下一步" @click="saveInformation" />
    </div>
  </section>
</template>

<script>
import cthulhuButton from "../SingleElement/CthulhuButton.vue";
import stepTwoTable from "./StepTwoTable.vue";
import stepTwoInputs from "./StepTwoInputs.vue";

export default {
  components: {
    cthulhuButton,
    stepTwoTable,
    stepTwoInputs,
  },
  methods: {
    applyModifier() {},
    saveInformation() {},
  },
};
</script>
