<template>
  <section id="step3-table">
    <dropdownInputPair
      :contents="skill1"
      ddWidth="140px"
      ipWidth="50px"
      inputType="number"
      min="0"
      max="90"
      defaultValue="0"
      @on-change="handleSkillName1"
      @on-input="handleSkillPoints1"
    />
    <dropdownInputPair
      :contents="skill2"
      ddWidth="140px"
      ipWidth="50px"
      inputType="number"
      min="0"
      max="90"
      defaultValue="0"
      @on-change="handleSkillName2"
      @on-input="handleSkillPoints2"
    />
    <dropdownInputPair
      :contents="skill3"
      ddWidth="140px"
      ipWidth="50px"
      inputType="number"
      min="0"
      max="90"
      defaultValue="0"
      @on-change="handleSkillName3"
      @on-input="handleSkillPoints3"
    />
    <dropdownInputPair
      :contents="skill4"
      ddWidth="140px"
      ipWidth="50px"
      inputType="number"
      min="0"
      max="90"
      defaultValue="0"
      @on-change="handleSkillName4"
      @on-input="handleSkillPoints4"
    />
    <dropdownInputPair
      :contents="skill5"
      ddWidth="140px"
      ipWidth="50px"
      inputType="number"
      min="0"
      max="90"
      defaultValue="0"
      @on-change="handleSkillName5"
      @on-input="handleSkillPoints5"
    />
    <dropdownInputPair
      :contents="skill6"
      ddWidth="140px"
      ipWidth="50px"
      inputType="number"
      min="0"
      max="90"
      defaultValue="0"
      @on-change="handleSkillName6"
      @on-input="handleSkillPoints6"
    />
    <dropdownInputPair
      :contents="skill7"
      ddWidth="140px"
      ipWidth="50px"
      inputType="number"
      min="0"
      max="90"
      defaultValue="0"
      @on-change="handleSkillName7"
      @on-input="handleSkillPoints7"
    />
    <dropdownInputPair
      :contents="skill8"
      ddWidth="140px"
      ipWidth="50px"
      inputType="number"
      min="0"
      max="90"
      defaultValue="0"
      @on-change="handleSkillName8"
      @on-input="handleSkillPoints8"
    />
    <dropdownInputPair
      :contents="['信用']"
      ddWidth="140px"
      ipWidth="50px"
      inputType="number"
      min="0"
      max="90"
      defaultValue="0"
      @on-change="handleSkillName9"
      @on-input="handleSkillPoints9"
    />
  </section>
</template>

<script>
import dropdownInputPair from "../SingleElement/DropdownInputPair.vue";

export default {
  data() {
    return {
      skill1Name: this.skill1[0],
      skill1Points: 0,
      skill2Name: this.skill2[0],
      skill2Points: 0,
      skill3Name: this.skill3[0],
      skill3Points: 0,
      skill4Name: this.skill4[0],
      skill4Points: 0,
      skill5Name: this.skill5[0],
      skill5Points: 0,
      skill6Name: this.skill6[0],
      skill6Points: 0,
      skill7Name: this.skill7[0],
      skill7Points: 0,
      skill8Name: this.skill8[0],
      skill8Points: 0,
      skill9Name: "信用",
      skill9Points: 0,
    };
  },
  props: {
    skill1: {
      type: Array,
    },
    skill2: {
      type: Array,
    },
    skill3: {
      type: Array,
    },
    skill4: {
      type: Array,
    },
    skill5: {
      type: Array,
    },
    skill6: {
      type: Array,
    },
    skill7: {
      type: Array,
    },
    skill8: {
      type: Array,
    },
  },
  methods: {
    handleSkillName1(value) {
      this.skill1Name = value;
      this.$emit("name1", this.skill1Name);
    },
    handleSkillName2(value) {
      this.skill2Name = value;
      this.$emit("name2", this.skill2Name);
    },
    handleSkillName3(value) {
      this.skill3Name = value;
      this.$emit("name3", this.skill3Name);
    },
    handleSkillName4(value) {
      this.skill4Name = value;
      this.$emit("name4", this.skill4Name);
    },
    handleSkillName5(value) {
      this.skill5Name = value;
      this.$emit("name5", this.skill5Name);
    },
    handleSkillName6(value) {
      this.skill6Name = value;
      this.$emit("name6", this.skill6Name);
    },
    handleSkillName7(value) {
      this.skill7Name = value;
      this.$emit("name7", this.skill7Name);
    },
    handleSkillName8(value) {
      this.skill8Name = value;
      this.$emit("name8", this.skill8Name);
    },
    handleSkillName9(value) {
      this.skill9Name = value;
      this.$emit("name9", this.skill9Name);
    },
    handleSkillPoints1(value) {
      this.skill1Points = value;
      this.$emit("points1", this.skill1Points);
    },
    handleSkillPoints2(value) {
      this.skill2Points = value;
      this.$emit("points2", this.skill2Points);
    },
    handleSkillPoints3(value) {
      this.skill3Points = value;
      this.$emit("points3", this.skill3Points);
    },
    handleSkillPoints4(value) {
      this.skill4Points = value;
      this.$emit("points4", this.skill4Points);
    },
    handleSkillPoints5(value) {
      this.skill5Points = value;
      this.$emit("points5", this.skill5Points);
    },
    handleSkillPoints6(value) {
      this.skill6Points = value;
      this.$emit("points6", this.skill6Points);
    },
    handleSkillPoints7(value) {
      this.skill7Points = value;
      this.$emit("points7", this.skill7Points);
    },
    handleSkillPoints8(value) {
      this.skill8Points = value;
      this.$emit("points8", this.skill8Points);
    },
    handleSkillPoints9(value) {
      this.skill9Points = value;
      this.$emit("points9", this.skill9Points);
    },
  },
  components: {
    dropdownInputPair,
  },
};
</script>
