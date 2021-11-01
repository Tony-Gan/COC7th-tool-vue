<template>
  <section>
    <main id="dice-container">
      <div id="params-container">
        <div id="dice-params-upper">
          <div id="dice-params-middle">
            <div id="dice-params">
              <cthulhuInput
                textType="number"
                labelWidth="75px"
                contents="奖励骰数量"
                @on-input="handleRewardDice"
                min="0"
                max="2"
              />
              <cthulhuInput
                textType="number"
                labelWidth="75px"
                contents="惩罚骰数量"
                @on-input="handlePenaltyDice"
                min="0"
                max="2"
              />
            </div>
            <cthulhuInput
              textType="number"
              labelWidth="75px"
              contents="技能等级"
              @on-input="handleSkillLevel"
              min="0"
              max="500"
            />
          </div>
          <div id="dice-params-middle">
            <div id="dice-params" v-if="opposing">
              <cthulhuInput
                textType="number"
                labelWidth="75px"
                contents="对方奖励骰"
                @on-input="handleRewardDiceOppo"
                min="0"
                max="2"
              />
              <cthulhuInput
                textType="number"
                labelWidth="75px"
                contents="对方惩罚骰"
                @on-input="handlePenaltyDiceOppo"
                min="0"
                max="2"
              />
            </div>
            <cthulhuInput
              v-if="opposing"
              textType="number"
              labelWidth="75px"
              contents="对抗等级"
              @on-input="handleSkillLevelOppo"
              min="0"
              max="500"
            />
          </div>
        </div>
      </div>
      <questionLabel>{{ this.results }}</questionLabel>
    </main>
    <div class="page-buttons">
      <cthulhuButton :buttonText="switchText" @click="switchMode" />
      <cthulhuButton buttonText="掷骰" @click="runDicing" />
      <cthulhuButton buttonText="返回主菜单" @click="backToMain" />
    </div>
  </section>
</template>

<script>
import cthulhuButton from "../SingleElement/CthulhuButton.vue";
import cthulhuInput from "../SingleElement/CthulhuInput.vue";
import questionLabel from "../SingleElement/QuestioinLabel.vue";
import { basicCheck } from "../../data/dice";

export default {
  components: {
    cthulhuButton,
    cthulhuInput,
    questionLabel,
  },
  data() {
    return {
      opposing: false,
      switchText: "对抗模式",
      rewardDice: 0,
      penaltyDice: 0,
      rewardDiceOppo: 0,
      penaltyDiceOppo: 0,
      skillLevel: 0,
      skillLevelOppo: 0,
      results: "按下掷骰后，检定结果将显示于此",
    };
  },
  methods: {
    switchMode() {
      this.opposing = !this.opposing;
      if (!this.opposing) {
        this.switchText = "对抗模式";
      } else {
        this.switchText = "普通模式";
        this.rewardDiceOppo = 0;
        this.penaltyDiceOppo = 0;
      }
    },
    runDicing() {
      const result = basicCheck(this.skillLevel, this.penaltyDice, this.rewardDice);
      if (!this.opposing) {
        this.results = `检目/出目：${result["skillLevel"]}/${result["checkResult"]}，${result["description"]}`;
      } else {
        const resultOppo = basicCheck(this.skillLevelOppo, this.penaltyDiceOppo, this.rewardDiceOppo);
        this.results = `我方检目/出目：${result["skillLevel"]}/${result["checkResult"]}，${result["description"]}  
        |  对方检目/出目：${resultOppo["skillLevel"]}/${resultOppo["checkResult"]}，${resultOppo["description"]}  
        |  ${this.handleOpposing(result, resultOppo)}`;
      }
      this.result = "!!!";
    },
    backToMain() {
      location.href = "/";
    },
    handleRewardDice(value) {
      this.rewardDice = value;
    },
    handlePenaltyDice(value) {
      this.penaltyDice = value;
    },
    handleRewardDiceOppo(value) {
      this.rewardDiceOppo = value;
    },
    handlePenaltyDiceOppo(value) {
      this.penaltyDiceOppo = value;
    },
    handleSkillLevel(value) {
      this.skillLevel = value;
    },
    handleSkillLevelOppo(value) {
      this.skillLevelOppo = value;
    },
    handleOpposing(res1, res2) {
      const s1 = res1["skillLevel"];
      const s2 = res2["skillLevel"];
      const des1 = res1["description"];
      const des2 = res2["description"];

      if (des1 == des2) {
        if (s1 > s2) {
          return "对抗成功";
        }
        return "对抗失败";
      }

      if (des1 == "大成功") {
        return "对抗成功";
      } else if (des1 == "极难成功") {
        if (des2 == "大成功") {
          return "对抗失败";
        }
        return "对抗成功";
      } else if (des1 == "困难成功") {
        if (des2 == "大成功" || des2 == "极难成功") {
          return "对抗失败";
        }
        return "对抗成功";
      } else if (des1 == "普通成功") {
        if (des2 == "大成功" || des2 == "极难成功" || des2 == "困难成功") {
          return "对抗失败";
        }
        return "对抗成功";
      } else if (des1 == "失败") {
        if (des2 == "大成功" || des2 == "极难成功" || des2 == "困难成功" || des2 == "普通成功") {
          return "对抗失败";
        }
        return "对抗成功";
      } else {
        return "对抗失败";
      }
    },
  },
};
</script>
