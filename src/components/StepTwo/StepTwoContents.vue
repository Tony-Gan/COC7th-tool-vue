<template>
  <section class="contents">
    <questionLabel>一道圣光闪过，空间中出现了一个你，你拥有以下属性</questionLabel>
    <stepTwoTable :charList="getCharList" />
    <div>
      <stepTwoInputs
        :age="age"
        :charList="getCharList"
        @mod1="getModifierOne"
        @mod2="getModifierTwo"
        @mod3="getModifierThree"
      />
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
import questionLabel from "../SingleElement/QuestioinLabel.vue";
import { d4, d6, d10, d100 } from "../../data/dice";

const eduImprovement = (oldValue) => {
  const checkValue = d100();
  if (checkValue > oldValue) {
    oldValue += d10();
  }
  return oldValue;
};

export default {
  data() {
    return {
      age: null,
      str: null,
      con: null,
      siz: null,
      dex: null,
      app: null,
      int: null,
      pow: null,
      edu: null,
      luc: null,
      charList: [],
      modifierOne: null,
      modifierTwo: null,
      modifierThree: null,
    };
  },
  components: {
    cthulhuButton,
    stepTwoTable,
    stepTwoInputs,
    questionLabel,
  },
  beforeMount() {
    this.age = parseInt(localStorage.getItem("age"));
    this.str = (d6() + d6() + d6()) * 5;
    this.con = (d6() + d6() + d6()) * 5;
    this.siz = (d6() + d6() + 6) * 5;
    this.dex = (d6() + d6() + d6()) * 5;
    this.app = (d6() + d6() + d6()) * 5;
    this.int = (d6() + d6() + 6) * 5;
    this.pow = (d6() + d6() + d6()) * 5;
    this.edu = (d6() + d6() + 6) * 5;
    this.luc = (d6() + d6() + d6()) * 5;
    this.charList = [this.str, this.con, this.siz, this.dex, this.app, this.int, this.pow, this.edu, this.luc];
  },
  computed: {
    getCharList() {
      return this.charList;
    },
  },
  methods: {
    applyModifier() {
      const modOne = isNaN(parseInt(this.modifierOne)) ? 0 : parseInt(this.modifierOne);
      const modTwo = isNaN(parseInt(this.modifierTwo)) ? 0 : parseInt(this.modifierTwo);
      const modThree = isNaN(parseInt(this.modifierThree)) ? 0 : parseInt(this.modifierThree);
      if (this.age < 20) {
        if (modOne + modTwo == 5) {
          this.str -= modOne;
          this.siz -= modTwo;
          this.edu -= 5;
          const newLuc = (d6() + d6() + d6()) * 5;
          if (newLuc > this.luc) {
            this.luc = newLuc;
          }
          document.querySelector(".step2-buttons button").disabled = true;
          const inputs = document.querySelectorAll(".step2-inputs input");
          inputs.forEach((input) => {
            input.disabled = true;
          });
        } else {
          alert("你需要减去总共5点数值");
        }
      } else if (this.age >= 20 && this.age < 40) {
        this.edu = eduImprovement(this.edu);
        document.querySelector(".step2-buttons button").disabled = true;
      } else if (this.age >= 40 && this.age < 50) {
        if (modOne + modTwo + modThree == 5) {
          this.edu = eduImprovement(this.edu);
          this.edu = eduImprovement(this.edu);
          this.str -= modOne;
          this.con -= modTwo;
          this.dex -= modThree;
          this.app -= 5;
          document.querySelector(".step2-buttons button").disabled = true;
          const inputs = document.querySelectorAll(".step2-inputs input");
          inputs.forEach((input) => {
            input.disabled = true;
          });
        } else {
          alert("你需要减去总共5点数值");
        }
      } else if (this.age >= 50 && this.age < 60) {
        if (modOne + modTwo + modThree == 10) {
          this.edu = eduImprovement(this.edu);
          this.edu = eduImprovement(this.edu);
          this.str -= modOne;
          this.con -= modTwo;
          this.dex -= modThree;
          this.app -= 10;
          document.querySelector(".step2-buttons button").disabled = true;
          const inputs = document.querySelectorAll(".step2-inputs input");
          inputs.forEach((input) => {
            input.disabled = true;
          });
        } else {
          alert("你需要减去总共10点数值，且不能拥有非正整数属性");
        }
      } else if (this.age >= 60 && this.age < 70) {
        if (modOne + modTwo + modThree == 20) {
          if (this.str >= modOne && this.con >= modTwo && this.dex >= modThree) {
            this.edu = eduImprovement(this.edu);
            this.edu = eduImprovement(this.edu);
            this.str -= modOne;
            this.con -= modTwo;
            this.dex -= modThree;
            this.app -= 15;
            document.querySelector(".step2-buttons button").disabled = true;
            const inputs = document.querySelectorAll(".step2-inputs input");
            inputs.forEach((input) => {
              input.disabled = true;
            });
          } else {
            alert("你需要减去总共20点数值，且不能拥有非正整数属性");
          }
        } else {
          alert("你需要减去总共20点数值，且不能拥有非正整数属性");
        }
      } else if (this.age >= 70 && this.age < 80) {
        if (modOne + modTwo + modThree == 40) {
          if (this.str >= modOne && this.con >= modTwo && this.dex >= modThree) {
            this.edu = eduImprovement(this.edu);
            this.edu = eduImprovement(this.edu);
            this.str -= modOne;
            this.con -= modTwo;
            this.dex -= modThree;
            this.app -= 20;
            document.querySelector(".step2-buttons button").disabled = true;
            const inputs = document.querySelectorAll(".step2-inputs input");
            inputs.forEach((input) => {
              input.disabled = true;
            });
          } else {
            alert("你需要减去总共40点数值，且不能拥有非正整数属性");
          }
        } else {
          alert("你需要减去总共40点数值，且不能拥有非正整数属性");
        }
      } else {
        if (modOne + modTwo + modThree == 80) {
          if (this.str >= modOne && this.con >= modTwo && this.dex >= modThree) {
            this.edu = eduImprovement(this.edu);
            this.edu = eduImprovement(this.edu);
            this.str -= modOne;
            this.con -= modTwo;
            this.dex -= modThree;
            this.app -= 25;
            document.querySelector(".step2-buttons button").disabled = true;
            const inputs = document.querySelectorAll(".step2-inputs input");
            inputs.forEach((input) => {
              input.disabled = true;
            });
          } else {
            alert("你需要减去总共80点数值，且不能拥有非正整数属性");
          }
        } else {
          alert("你需要减去总共80点数值，且不能拥有非正整数属性");
        }
      }
      this.charList = [this.str, this.con, this.siz, this.dex, this.app, this.int, this.pow, this.edu, this.luc];
    },
    getModifierOne(value) {
      this.modifierOne = value;
    },
    getModifierTwo(value) {
      this.modifierTwo = value;
    },
    getModifierThree(value) {
      this.modifierThree = value;
    },
    saveInformation() {
      if (document.querySelector(".step2-buttons button").disabled) {
        localStorage.setItem("str", this.str);
        localStorage.setItem("con", this.con);
        localStorage.setItem("siz", this.siz);
        localStorage.setItem("dex", this.dex);
        localStorage.setItem("app", this.app);
        localStorage.setItem("int", this.int);
        localStorage.setItem("pow", this.pow);
        localStorage.setItem("edu", this.edu);
        localStorage.setItem("luc", this.luc);

        let build = 0;
        let damageBonus = 0;
        const checker = this.str + this.con;
        if (checker >= 2 && checker <= 64) {
          build = -2;
          damageBonus = -2;
        } else if (checker >= 65 && checker <= 84) {
          build = -1;
          damageBonus = -1;
        } else if (checker >= 85 && checker <= 124) {
          build = 0;
          damageBonus = 0;
        } else if (checker >= 125 && checker <= 164) {
          build = 1;
          damageBonus = d4();
        } else if (checker >= 165 && checker <= 204) {
          build = 2;
          damageBonus = d6();
        } else {
          var overflow = Math.ceil((checker - 204) / 80);
          build = 2 + overflow;
          damageBonus = d6();
          for (let i = 0; i < overflow; i++) {
            damageBonus += d6();
          }
        }
        localStorage.setItem("damageBonus", damageBonus);
        localStorage.setItem("build", build);

        const maxhp = Math.floor((this.con + this.siz) / 10);
        const maxmp = Math.floor(this.pow / 5);
        const maxsan = 99;
        const san = this.pow;
        localStorage.setItem("maxhp", maxhp);
        localStorage.setItem("maxmp", maxmp);
        localStorage.setItem("maxsan", maxsan);
        localStorage.setItem("san", san);

        let move;
        if (this.dex < this.siz && this.str < this.siz) {
          move = 7;
        } else if (
          (this.dex > this.siz && this.siz > this.str) ||
          (this.str > this.siz && this.siz > this.dex) ||
          (this.dex == this.siz && this.siz == this.str)
        ) {
          move = 8;
        } else {
          move = 9;
        }
        if (this.age > 80) {
          move -= 5;
        } else if (this.age > 70) {
          move -= 4;
        } else if (this.age > 60) {
          move -= 3;
        } else if (this.age > 50) {
          move -= 2;
        } else if (this.age > 40) {
          move -= 1;
        }
        localStorage.setItem("move", move);
        location.href = "/builder/step-three";
      } else {
        alert("在进行下一步之前，请先应用修改");
      }
    },
  },
};
</script>
