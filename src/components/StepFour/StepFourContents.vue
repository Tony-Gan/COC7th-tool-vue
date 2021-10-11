<template>
  <section class="contents">
    <questionLabel> 根据你的教育等级，你有{{ getEdu }}点职业技能点可用于分配在任何技能上 </questionLabel>
    <stepFourTable
      id="step4-table"
      @name1="setName1"
      @name2="setName2"
      @name3="setName3"
      @name4="setName4"
      @name5="setName5"
      @points1="setPoints1"
      @points2="setPoints2"
      @points3="setPoints3"
      @points4="setPoints4"
      @points5="setPoints5"
    />
    <questionLabel>你还剩{{ getRemain }}点技能点待分配</questionLabel>
    <div class="step4-buttons">
      <cthulhuButton buttonText="应用修改" @click="applyModifier" />
      <cthulhuButton buttonText="下一步" @click="saveInformation" />
    </div>
  </section>
</template>

<script>
import questionLabel from "../SingleElement/QuestioinLabel.vue";
import stepFourTable from "./StepFourTable.vue";
import cthulhuButton from "../SingleElement/CthulhuButton.vue";
import { SKILL_LIST } from "../../data/skillsAndOccupations";
import { recursive_addition } from "../../data/supportFunctions";

export default {
  data() {
    return {
      name1: "会计",
      name2: "会计",
      name3: "会计",
      name4: "会计",
      name5: "会计",
      points1: 0,
      points2: 0,
      points3: 0,
      points4: 0,
      points5: 0,
      skillLimit: 70,
    };
  },
  components: {
    questionLabel,
    stepFourTable,
    cthulhuButton,
  },
  computed: {
    getEdu() {
      return parseInt(localStorage.getItem("edu")) * 2;
    },
    getRemain() {
      return (
        parseInt(localStorage.getItem("edu")) * 2 -
        this.points1 -
        this.points2 -
        this.points3 -
        this.points4 -
        this.points5
      );
    },
  },
  methods: {
    setName1(value) {
      this.name1 = value;
    },
    setName2(value) {
      this.name2 = value;
    },
    setName3(value) {
      this.name3 = value;
    },
    setName4(value) {
      this.name4 = value;
    },
    setName5(value) {
      this.name5 = value;
    },
    setPoints1(value) {
      this.points1 = parseInt(value);
    },
    setPoints2(value) {
      this.points2 = parseInt(value);
    },
    setPoints3(value) {
      this.points3 = parseInt(value);
    },
    setPoints4(value) {
      this.points4 = parseInt(value);
    },
    setPoints5(value) {
      this.points5 = parseInt(value);
    },
    applyModifier() {
      const originValue1 = parseInt(localStorage.getItem(this.name1));
      const originValue2 = parseInt(localStorage.getItem(this.name2));
      const originValue3 = parseInt(localStorage.getItem(this.name3));
      const originValue4 = parseInt(localStorage.getItem(this.name4));
      const originValue5 = parseInt(localStorage.getItem(this.name5));
      if (originValue1 + this.points1 > this.skillLimit) {
        alert(
          `你的${this.name1}技能目前为${originValue1 + this.points1}点，超过兴趣技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (originValue2 + this.points2 > this.skillLimit) {
        alert(
          `你的${this.name2}技能目前为${originValue2 + this.points2}点，超过兴趣技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (originValue3 + this.points3 > this.skillLimit) {
        alert(
          `你的${this.name3}技能目前为${originValue3 + this.points3}点，超过兴趣技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (originValue4 + this.points4 > this.skillLimit) {
        alert(
          `你的${this.name4}技能目前为${originValue4 + this.points4}点，超过兴趣技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (originValue5 + this.points5 > this.skillLimit) {
        alert(
          `你的${this.name5}技能目前为${originValue5 + this.points5}点，超过兴趣技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (this.getRemain != 0) {
        alert("你需要完全分配你的技能点");
      } else {
        const selects = document.querySelectorAll("select");
        selects.forEach((select) => {
          select.disabled = true;
        });
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => {
          input.disabled = true;
        });
        const buttons = document.querySelectorAll("#step4-table button");
        buttons.forEach((button) => {
          button.disabled = true;
        });
        document.querySelector(".step4-buttons button").disabled = true;
        const skillsToAdd = [
          [this.name1, originValue1, this.points1],
          [this.name2, originValue2, this.points2],
          [this.name3, originValue3, this.points3],
          [this.name4, originValue4, this.points4],
          [this.name5, originValue5, this.points5],
        ];
        skillsToAdd.forEach((skillToAdd) => {
          if (SKILL_LIST.SCIENCE_SKILLS.includes(skillToAdd[0])) {
            recursive_addition(skillToAdd[0], SKILL_LIST.SCIENCE_SKILLS, skillToAdd[2]);
          } else if (SKILL_LIST.ART_CRAFT_SKILLS.includes(skillToAdd[0])) {
            recursive_addition(skillToAdd[0], SKILL_LIST.ART_CRAFT_SKILLS, skillToAdd[2]);
          } else if (SKILL_LIST.FIGHTING_SKILLS.includes(skillToAdd[0])) {
            recursive_addition(skillToAdd[0], SKILL_LIST.FIGHTING_SKILLS, skillToAdd[2]);
          } else if (SKILL_LIST.FIREARMS_SKILLS.includes(skillToAdd[0])) {
            recursive_addition(skillToAdd[0], SKILL_LIST.FIREARMS_SKILLS, skillToAdd[2]);
          } else if (SKILL_LIST.LANGUAGE_OTHER_SKILLS.includes(skillToAdd[0])) {
            recursive_addition(skillToAdd[0], SKILL_LIST.LANGUAGE_OTHER_SKILLS, skillToAdd[2]);
          } else if (SKILL_LIST.PILOT_SKILLS.includes(skillToAdd[0])) {
            recursive_addition(skillToAdd[0], SKILL_LIST.PILOT_SKILLS, skillToAdd[2]);
          } else {
            localStorage.setItem(skillToAdd[0], skillToAdd[1] + skillToAdd[2]);
          }
        });
      }
    },
    saveInformation() {
      if (!document.querySelector(".step4-buttons button").disabled) {
        alert("在进行下一步之前，请先应用修改");
      } else {
        location.href = "/builder/step-five";
      }
    },
  },
};
</script>
