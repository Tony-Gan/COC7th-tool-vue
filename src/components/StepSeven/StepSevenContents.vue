<template>
  <section class="contents">
    <characteristicsTable v-if="toggleInformation" />
    <questionLabel v-if="toggleInformation">以下为你的所有技能值</questionLabel>
    <skillTable class="scrollable" v-if="toggleInformation" />
    <equipmentTable v-if="!toggleInformation" />
    <descriptionArea v-if="!toggleInformation" />
    <div class="step7-buttons">
      <cthulhuButton buttonText="切换信息" @click="toggle" />
      <cthulhuButton buttonText="导出角色" @click="saveCharacter" />
      <cthulhuButton buttonText="返回主界面" @click="backToMain" />
    </div>
  </section>
</template>

<script>
import characteristicsTable from "./Characteristics.vue";
import skillTable from "./SkillTable.vue";
import equipmentTable from "./EquipmentTable.vue";
import descriptionArea from "./DescriptionArea.vue";
import questionLabel from "../SingleElement/QuestioinLabel.vue";
import cthulhuButton from "../SingleElement/CthulhuButton.vue";

export default {
  data() {
    return {
      toggleInformation: true,
    };
  },
  components: {
    questionLabel,
    characteristicsTable,
    skillTable,
    equipmentTable,
    descriptionArea,
    cthulhuButton,
  },
  methods: {
    toggle() {
      this.toggleInformation = !this.toggleInformation;
    },
    saveCharacter() {
      alert("我想导出成PDF但我不知道咋弄，垃圾vue");
    },
    backToMain() {
      localStorage.clear();
      location.href = "/";
    },
  },
};
</script>
