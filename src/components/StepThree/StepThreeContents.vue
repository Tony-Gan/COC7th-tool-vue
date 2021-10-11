<template>
  <section class="contents">
    <stepTwoTable :charList="charList" />
    <cthulhuDropdown
      :contents="dropdownContents"
      labelWidth="200px"
      labelContents="现在，是时候选择你的职业了"
      @on-change="handleOccupation"
      class="column"
      defaultValue="古董收藏家"
    />
    <questionLabel class="column">{{ getDescription }}</questionLabel>
    <stepThreeTable
      :skill1="skill1"
      :skill2="skill2"
      :skill3="skill3"
      :skill4="skill4"
      :skill5="skill5"
      :skill6="skill6"
      :skill7="skill7"
      :skill8="skill8"
      @name1="setName1"
      @name2="setName2"
      @name3="setName3"
      @name4="setName4"
      @name5="setName5"
      @name6="setName6"
      @name7="setName7"
      @name8="setName8"
      @name9="setName9"
      @points1="setPoints1"
      @points2="setPoints2"
      @points3="setPoints3"
      @points4="setPoints4"
      @points5="setPoints5"
      @points6="setPoints6"
      @points7="setPoints7"
      @points8="setPoints8"
      @points9="setPoints9"
    />
    <questionLabel class="column">你还剩{{ getRemain }}点技能点待分配</questionLabel>
    <div class="step3-buttons">
      <cthulhuButton buttonText="应用修改" @click="applyModifier" />
      <cthulhuButton buttonText="下一步" @click="saveInformation" />
    </div>
  </section>
</template>

<script>
import stepTwoTable from "../StepTwo/StepTwoTable.vue";
import cthulhuDropdown from "../SingleElement/CthulhuDropdown.vue";
import { OCCUPATION_LIST, SKILL_LIST } from "../../data/skillsAndOccupations";
import questionLabel from "../SingleElement/QuestioinLabel.vue";
import stepThreeTable from "./StepThreeTable.vue";
import cthulhuButton from "../SingleElement/CthulhuButton.vue";

const checkIfList = (value) => {
  if (typeof value == typeof ["a", "b"]) {
    let result = [];
    value.forEach((skill) => {
      if (typeof skill == typeof SKILL_LIST.ACCOUNTING) {
        result.push(skill);
      } else if (typeof skill == typeof ["a", "b"]) {
        skill.forEach((single) => {
          result.push(single);
        });
      }
    });
    return result;
  } else if (value == SKILL_LIST.OTHER) {
    let result = [];
    for (const skill in SKILL_LIST) {
      result.push(SKILL_LIST[skill]);
    }
    result = result.slice(0, 95);
    return result;
  } else {
    return [value];
  }
};

localStorage.setItem(SKILL_LIST.ACCOUNTING, 5);
localStorage.setItem(SKILL_LIST.ACTING, 5);
localStorage.setItem(SKILL_LIST.ANIMAL_HANDLING, 5);
localStorage.setItem(SKILL_LIST.ANTHROPOLOGY, 1);
localStorage.setItem(SKILL_LIST.APPRAISE, 5);
localStorage.setItem(SKILL_LIST.ART_CRAFT, 5);
localStorage.setItem(SKILL_LIST.ARTILLERY, 1);
localStorage.setItem(SKILL_LIST.ASTRONOMY, 1);
localStorage.setItem(SKILL_LIST.AXE, 15);
localStorage.setItem(SKILL_LIST.BIOLOGY, 1);
localStorage.setItem(SKILL_LIST.BOTANY, 1);
localStorage.setItem(SKILL_LIST.BOW, 15);
localStorage.setItem(SKILL_LIST.BRAWL, 25);
localStorage.setItem(SKILL_LIST.CHAINSAW, 10);
localStorage.setItem(SKILL_LIST.CHARM, 15);
localStorage.setItem(SKILL_LIST.CHEMISTRY, 1);
localStorage.setItem(SKILL_LIST.CLIMB, 20);
localStorage.setItem(SKILL_LIST.COMPUTER_USE, 5);
localStorage.setItem(SKILL_LIST.CREDIT_RATING, 0);
localStorage.setItem(SKILL_LIST.CRYPTOGRAPHY, 1);
localStorage.setItem(SKILL_LIST.CTHULHU_MYTHOS, 0);
localStorage.setItem(SKILL_LIST.DEMOLITIONS, 1);
localStorage.setItem(SKILL_LIST.DISGUISE, 5);
localStorage.setItem(SKILL_LIST.DODGE, Math.floor(localStorage.getItem("dex") / 2));
localStorage.setItem(SKILL_LIST.DIVING, 1);
localStorage.setItem(SKILL_LIST.DRIVE_AUTO, 20);
localStorage.setItem(SKILL_LIST.ELECTRICAL_REPAIR, 1);
localStorage.setItem(SKILL_LIST.ELECTRONICS, 1);
localStorage.setItem(SKILL_LIST.ENGINEERING, 1);
localStorage.setItem(SKILL_LIST.FARMING, 5);
localStorage.setItem(SKILL_LIST.FAST_TALK, 5);
localStorage.setItem(SKILL_LIST.FIGHTING, 15);
localStorage.setItem(SKILL_LIST.FIRST_AID, 30);
localStorage.setItem(SKILL_LIST.FLAIL, 10);
localStorage.setItem(SKILL_LIST.FLAMETHROWER, 10);
localStorage.setItem(SKILL_LIST.FORENSICS, 1);
localStorage.setItem(SKILL_LIST.FORGERY, 5);
localStorage.setItem(SKILL_LIST.GARROTE, 15);
localStorage.setItem(SKILL_LIST.GEOLOGY, 1);
localStorage.setItem(SKILL_LIST.HANDGUN, 20);
localStorage.setItem(SKILL_LIST.HEAVY_WEAPONS, 10);
localStorage.setItem(SKILL_LIST.HEBREW, 1);
localStorage.setItem(SKILL_LIST.HISTORY, 5);
localStorage.setItem(SKILL_LIST.HYPNOSIS, 1);
localStorage.setItem(SKILL_LIST.INSTRUMENT, 5);
localStorage.setItem(SKILL_LIST.INTIMIDATE, 15);
localStorage.setItem(SKILL_LIST.JUMP, 20);
localStorage.setItem(SKILL_LIST.LANGUAGE_OTHER, 1);
localStorage.setItem(SKILL_LIST.LANGUAGE_OWN, localStorage.getItem("edu"));
localStorage.setItem(SKILL_LIST.LATIN, 1);
localStorage.setItem(SKILL_LIST.LAW, 5);
localStorage.setItem(SKILL_LIST.LIBRARY_USE, 20);
localStorage.setItem(SKILL_LIST.LISTEN, 20);
localStorage.setItem(SKILL_LIST.LITERATURE, 5);
localStorage.setItem(SKILL_LIST.LOCKSMITH, 1);
localStorage.setItem(SKILL_LIST.LORE, 1);
localStorage.setItem(SKILL_LIST.MACHINE_GUN, 10);
localStorage.setItem(SKILL_LIST.MATHEMATICS, 10);
localStorage.setItem(SKILL_LIST.MECHANICAL_REPAIR, 10);
localStorage.setItem(SKILL_LIST.MEDICINE, 1);
localStorage.setItem(SKILL_LIST.METEOROLOGY, 1);
localStorage.setItem(SKILL_LIST.NATURAL_WORLD, 10);
localStorage.setItem(SKILL_LIST.NAVIGATION, 10);
localStorage.setItem(SKILL_LIST.NON_OWN_LANGUAGE, 1);
localStorage.setItem(SKILL_LIST.OCCULT, 5);
localStorage.setItem(SKILL_LIST.OPERATE_HEAVY_MACHINERY, 1);
localStorage.setItem(SKILL_LIST.PERSUADE, 10);
localStorage.setItem(SKILL_LIST.PHARMACY, 1);
localStorage.setItem(SKILL_LIST.PHOTOGRAPHY, 5);
localStorage.setItem(SKILL_LIST.PHYSICS, 1);
localStorage.setItem(SKILL_LIST.PILOT, 1);
localStorage.setItem(SKILL_LIST.PILOT_AIRCRAFT, 1);
localStorage.setItem(SKILL_LIST.PILOT_BOAT, 1);
localStorage.setItem(SKILL_LIST.PSYCHOANALYSIS, 1);
localStorage.setItem(SKILL_LIST.PSYCHOLOGY, 10);
localStorage.setItem(SKILL_LIST.READ_LIPS, 1);
localStorage.setItem(SKILL_LIST.RIDE, 5);
localStorage.setItem(SKILL_LIST.RIFLE, 25);
localStorage.setItem(SKILL_LIST.SCIENCE, 1);
localStorage.setItem(SKILL_LIST.SHOTGUN, 25);
localStorage.setItem(SKILL_LIST.SLEIGHT_OF_HAND, 10);
localStorage.setItem(SKILL_LIST.SPEAR, 20);
localStorage.setItem(SKILL_LIST.SPOT_HIDDEN, 25);
localStorage.setItem(SKILL_LIST.STEALTH, 20);
localStorage.setItem(SKILL_LIST.SUBMACHINE_GUN, 15);
localStorage.setItem(SKILL_LIST.SURVIVAL, 10);
localStorage.setItem(SKILL_LIST.SWORD, 20);
localStorage.setItem(SKILL_LIST.SWIM, 20);
localStorage.setItem(SKILL_LIST.TECHNICAL_DRAWING, 5);
localStorage.setItem(SKILL_LIST.THROW, 20);
localStorage.setItem(SKILL_LIST.TRACK, 20);
localStorage.setItem(SKILL_LIST.WHIP, 5);
localStorage.setItem(SKILL_LIST.ZOOLOGY, 1);

export default {
  data() {
    return {
      str: parseInt(localStorage.getItem("str")),
      con: parseInt(localStorage.getItem("con")),
      siz: parseInt(localStorage.getItem("siz")),
      dex: parseInt(localStorage.getItem("dex")),
      app: parseInt(localStorage.getItem("app")),
      int: parseInt(localStorage.getItem("int")),
      pow: parseInt(localStorage.getItem("pow")),
      edu: parseInt(localStorage.getItem("edu")),
      luc: parseInt(localStorage.getItem("luc")),
      occupation: "古董收藏家",
      credit: [30, 70],
      occupationPoints: [["edu"]],
      skillPoints: null,
      skill1: [SKILL_LIST.APPRAISE],
      skill2: SKILL_LIST.ART_CRAFT_SKILLS,
      skill3: [SKILL_LIST.HISTORY],
      skill4: [SKILL_LIST.LIBRARY_USE],
      skill5: SKILL_LIST.LANGUAGE_OTHER_SKILLS,
      skill6: SKILL_LIST.INTERPERSONAL_SKILLS,
      skill7: [SKILL_LIST.SPOT_HIDDEN],
      skill8: checkIfList(SKILL_LIST.OTHER),
      occupationDescription: null,
      charList: [],
      dropdownContents: [],
      name1: SKILL_LIST.APPRAISE,
      name2: SKILL_LIST.ART_CRAFT_SKILLS[0],
      name3: SKILL_LIST.HISTORY,
      name4: SKILL_LIST.LIBRARY_USE,
      name5: SKILL_LIST.LANGUAGE_OTHER_SKILLS[0],
      name6: SKILL_LIST.INTERPERSONAL_SKILLS[0],
      name7: SKILL_LIST.SPOT_HIDDEN,
      name8: SKILL_LIST.ACCOUNTING,
      name9: SKILL_LIST.CREDIT_RATING,
      points1: 0,
      points2: 0,
      points3: 0,
      points4: 0,
      points5: 0,
      points6: 0,
      points7: 0,
      points8: 0,
      points9: 0,
      skillLimit: 90,
    };
  },
  components: {
    stepTwoTable,
    cthulhuDropdown,
    questionLabel,
    stepThreeTable,
    cthulhuButton,
  },
  beforeMount() {
    this.charList = [this.str, this.con, this.siz, this.dex, this.app, this.int, this.pow, this.edu, this.luc];
    for (const occupation in OCCUPATION_LIST) {
      this.dropdownContents.push(OCCUPATION_LIST[occupation].chinese_name);
    }
    this.skillPoints = this.edu * 4;
  },
  computed: {
    getDescription() {
      return `${this.occupation}，根据你的属性，你将会拥有${this.skillPoints}个职业技能点，你需要将它们恰好分配在以下技能中，其中信用技能的范围需要设定在${this.credit[0]}到${this.credit[1]}之间`;
    },
    getRemain() {
      return (
        this.skillPoints -
        this.points1 -
        this.points2 -
        this.points3 -
        this.points4 -
        this.points5 -
        this.points6 -
        this.points7 -
        this.points8 -
        this.points9
      );
    },
  },
  methods: {
    handleOccupation(value) {
      let selectedOccupation;
      for (const occupation in OCCUPATION_LIST) {
        if (OCCUPATION_LIST[occupation].chinese_name == value) {
          selectedOccupation = OCCUPATION_LIST[occupation];
        }
      }
      this.occupation = selectedOccupation.chinese_name;
      this.credit = selectedOccupation.credit_rating;
      this.occupationPoints = selectedOccupation.occupation_points;
      this.skill1 = checkIfList(selectedOccupation.skills[0]);
      this.skill2 = checkIfList(selectedOccupation.skills[1]);
      this.skill3 = checkIfList(selectedOccupation.skills[2]);
      this.skill4 = checkIfList(selectedOccupation.skills[3]);
      this.skill5 = checkIfList(selectedOccupation.skills[4]);
      this.skill6 = checkIfList(selectedOccupation.skills[5]);
      this.skill7 = checkIfList(selectedOccupation.skills[6]);
      this.skill8 = checkIfList(selectedOccupation.skills[7]);
      if (this.occupationPoints.length == 1) {
        this.skillPoints = this.edu * 4;
      } else if (this.occupationPoints[1].length == 1) {
        const one = this.edu * 2;
        const two = parseInt(localStorage.getItem(this.occupationPoints[1])) * 2;
        this.skillPoints = one + two;
      } else {
        const one = this.edu * 2;
        let two1 = parseInt(localStorage.getItem(this.occupationPoints[1][0])) * 2;
        let two2 = parseInt(localStorage.getItem(this.occupationPoints[1][1])) * 2;
        this.skillPoints = two1 > two2 ? one + two1 : one + two2;
      }
    },
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
    setName6(value) {
      this.name6 = value;
    },
    setName7(value) {
      this.name7 = value;
    },
    setName8(value) {
      this.name8 = value;
    },
    setName9(value) {
      this.name9 = value;
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
    setPoints6(value) {
      this.points6 = parseInt(value);
    },
    setPoints7(value) {
      this.points7 = parseInt(value);
    },
    setPoints8(value) {
      this.points8 = parseInt(value);
    },
    setPoints9(value) {
      this.points9 = parseInt(value);
    },
    applyModifier() {
      const originValue1 = parseInt(localStorage.getItem(this.name1));
      const originValue2 = parseInt(localStorage.getItem(this.name2));
      const originValue3 = parseInt(localStorage.getItem(this.name3));
      const originValue4 = parseInt(localStorage.getItem(this.name4));
      const originValue5 = parseInt(localStorage.getItem(this.name5));
      const originValue6 = parseInt(localStorage.getItem(this.name6));
      const originValue7 = parseInt(localStorage.getItem(this.name7));
      const originValue8 = parseInt(localStorage.getItem(this.name8));
      const originValue9 = parseInt(localStorage.getItem(this.name9));
      if (originValue1 + this.points1 > this.skillLimit) {
        alert(
          `你的${this.name1}技能目前为${originValue1 + this.points1}点，超过职业技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (originValue2 + this.points2 > this.skillLimit) {
        alert(
          `你的${this.name2}技能目前为${originValue2 + this.points2}点，超过职业技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (originValue3 + this.points3 > this.skillLimit) {
        alert(
          `你的${this.name3}技能目前为${originValue3 + this.points3}点，超过职业技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (originValue4 + this.points4 > this.skillLimit) {
        alert(
          `你的${this.name4}技能目前为${originValue4 + this.points4}点，超过职业技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (originValue5 + this.points5 > this.skillLimit) {
        alert(
          `你的${this.name5}技能目前为${originValue5 + this.points5}点，超过职业技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (originValue6 + this.points6 > this.skillLimit) {
        alert(
          `你的${this.name6}技能目前为${originValue6 + this.points6}点，超过职业技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (originValue7 + this.points7 > this.skillLimit) {
        alert(
          `你的${this.name7}技能目前为${originValue7 + this.points7}点，超过职业技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (originValue8 + this.points8 > this.skillLimit) {
        alert(
          `你的${this.name8}技能目前为${originValue8 + this.points8}点，超过职业技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (originValue9 + this.points9 > this.skillLimit) {
        alert(
          `你的${this.name9}技能目前为${originValue9 + this.points9}点，超过职业技能点上限${
            this.skillLimit
          }，请降低分配在此技能上的点数`
        );
      } else if (this.point9 < this.credit[0] || this.point9 > this.credit[1]) {
        alert(`你的信用点数范围应设置在${this.credit[0]}至${this.credit[1]}之间，请进行调整`);
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
        document.querySelector("button").disabled = true;
      }
    },
    saveInformation() {
      if (!document.querySelector("button").disabled) {
        alert("在进行下一步之前，请先应用修改");
      } else {
        //
      }
    },
  },
};
</script>
