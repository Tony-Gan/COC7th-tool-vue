<template>
  <section>
    <dropdownInputPair
      class="special-pair"
      defaultValue="0"
      ddWidth="150px"
      ipWidth="80px"
      inputType="number"
      min="0"
      max="70"
      :contents="this.contents"
      @on-change="handleSkill1"
      @on-input="handlePoints1"
    />
    <cthulhuButton class="special-button" buttonText="增加技能" v-if="toggleButton1" @click="button1Clicked" />
    <dropdownInputPair
      class="special-pair"
      defaultValue="0"
      ddWidth="150px"
      ipWidth="80px"
      inputType="number"
      min="0"
      max="70"
      :contents="this.contents"
      @on-change="handleSkill2"
      @on-input="handlePoints2"
      v-if="toggleInput1"
    />
    <cthulhuButton class="special-button" buttonText="增加技能" v-if="toggleButton2" @click="button2Clicked" />
    <cthulhuButton class="special-button" buttonText="减少技能" v-if="toggleDelete1" @click="delete1Clicked" />
    <dropdownInputPair
      class="special-pair"
      defaultValue="0"
      ddWidth="150px"
      ipWidth="80px"
      inputType="number"
      min="0"
      max="70"
      :contents="this.contents"
      @on-change="handleSkill3"
      @on-input="handlePoints3"
      v-if="toggleInput2"
    />
    <cthulhuButton class="special-button" buttonText="增加技能" v-if="toggleButton3" @click="button3Clicked" />
    <cthulhuButton class="special-button" buttonText="减少技能" v-if="toggleDelete2" @click="delete2Clicked" />
    <dropdownInputPair
      class="special-pair"
      defaultValue="0"
      ddWidth="150px"
      ipWidth="80px"
      inputType="number"
      min="0"
      max="70"
      :contents="this.contents"
      @on-change="handleSkill4"
      @on-input="handlePoints4"
      v-if="toggleInput3"
    />
    <cthulhuButton class="special-button" buttonText="增加技能" v-if="toggleButton4" @click="button4Clicked" />
    <cthulhuButton class="special-button" buttonText="减少技能" v-if="toggleDelete3" @click="delete3Clicked" />
    <dropdownInputPair
      class="special-pair"
      defaultValue="0"
      ddWidth="150px"
      ipWidth="80px"
      inputType="number"
      min="0"
      max="70"
      :contents="this.contents"
      @on-change="handleSkill5"
      @on-input="handlePoints5"
      v-if="toggleInput4"
    />
    <cthulhuButton class="special-button" buttonText="减少技能" v-if="toggleDelete4" @click="delete4Clicked" />
  </section>
</template>

<script>
import dropdownInputPair from "../SingleElement/DropdownInputPair.vue";
import { SKILL_LIST } from "../../data/skillsAndOccupations";
import cthulhuButton from "../SingleElement/CthulhuButton.vue";

export default {
  data() {
    return {
      contents: [],
      toggleButton1: true,
      toggleButton2: false,
      toggleButton3: false,
      toggleButton4: false,
      toggleInput1: false,
      toggleInput2: false,
      toggleInput3: false,
      toggleInput4: false,
      toggleDelete1: false,
      toggleDelete2: false,
      toggleDelete3: false,
      toggleDelete4: false,
    };
  },
  components: {
    dropdownInputPair,
    cthulhuButton,
  },
  beforeMount() {
    let option = [];
    for (const skill in SKILL_LIST) {
      option.push(SKILL_LIST[skill]);
    }
    option = option.slice(0, 95);
    this.contents = option;
  },
  methods: {
    handleSkill1(value) {
      this.$emit("name1", value);
    },
    handleSkill2(value) {
      this.$emit("name2", value);
    },
    handleSkill3(value) {
      this.$emit("name3", value);
    },
    handleSkill4(value) {
      this.$emit("name4", value);
    },
    handleSkill5(value) {
      this.$emit("name5", value);
    },
    handlePoints1(value) {
      this.$emit("points1", value);
    },
    handlePoints2(value) {
      this.$emit("points2", value);
    },
    handlePoints3(value) {
      this.$emit("points3", value);
    },
    handlePoints4(value) {
      this.$emit("points4", value);
    },
    handlePoints5(value) {
      this.$emit("points5", value);
    },
    button1Clicked() {
      this.toggleButton1 = false;
      this.toggleInput1 = true;
      this.toggleButton2 = true;
      this.toggleDelete1 = true;
    },
    button2Clicked() {
      this.toggleButton2 = false;
      this.toggleInput2 = true;
      this.toggleButton3 = true;
      this.toggleDelete1 = false;
      this.toggleDelete2 = true;
    },
    button3Clicked() {
      this.toggleButton3 = false;
      this.toggleInput3 = true;
      this.toggleButton4 = true;
      this.toggleDelete2 = false;
      this.toggleDelete3 = true;
    },
    button4Clicked() {
      this.toggleButton4 = false;
      this.toggleInput4 = true;
      this.toggleDelete3 = false;
      this.toggleDelete4 = true;
    },
    delete1Clicked() {
      this.toggleDelete1 = false;
      this.toggleButton2 = false;
      this.toggleInput1 = false;
      this.toggleButton1 = true;
    },
    delete2Clicked() {
      this.toggleButton2 = true;
      this.toggleInput2 = false;
      this.toggleButton3 = false;
      this.toggleDelete1 = true;
      this.toggleDelete2 = false;
    },
    delete3Clicked() {
      this.toggleButton3 = true;
      this.toggleInput3 = false;
      this.toggleButton4 = false;
      this.toggleDelete2 = true;
      this.toggleDelete3 = false;
    },
    delete4Clicked() {
      this.toggleButton4 = true;
      this.toggleInput4 = false;
      this.toggleDelete3 = true;
      this.toggleDelete4 = false;
    },
  },
};
</script>
