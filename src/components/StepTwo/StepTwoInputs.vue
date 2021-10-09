<template>
  <questionLabel>{{ ageLabel }}</questionLabel>
  <questionLabel>{{ informationLabel }}</questionLabel>
  <div class="step2-inputs" style="display: flex;">
    <cthulhuInput
      style="padding-right: 5%"
      v-if="getToggleOne"
      textType="number"
      labelWidth="75px"
      :contents="lableOneText"
      @on-input="handleCharOne"
      min="0"
      :max="ageModifier"
    />
    <cthulhuInput
      style="padding-right: 5%"
      v-if="getToggleTwo"
      textType="number"
      labelWidth="75px"
      :contents="lableTwoText"
      @on-input="handleCharTwo"
      min="0"
      :max="ageModifier"
    />
    <cthulhuInput
      style="padding-right: 5%"
      v-if="getToggleThree"
      textType="number"
      labelWidth="75px"
      :contents="lableThreeText"
      @on-input="handleCharThree"
      min="0"
      :max="ageModifier"
    />
  </div>
</template>

<script>
import questionLabel from "../SingleElement/QuestioinLabel.vue";
import cthulhuInput from "../SingleElement/CthulhuInput.vue";

export default {
  date() {
    return {
      ageLabel: "",
      ageModifier: "5",
      informationLabel: "",
      lableOneToggle: false,
      lableOneText: "",
      labelTwoToggle: false,
      lableTwoText: "",
      labelThreeToggle: false,
      lableThreeText: "",
      modifierOne: 0,
      modifierTwo: 0,
      modifierThree: 0,
      chars: [],
    };
  },
  props: {
    age: {
      type: Number,
      required: true,
    },
    charList: {
      type: Array,
    },
  },
  created() {
    const age = localStorage.getItem("age");
    this.chars = this.charList;

    if (age < 20) {
      this.ageModifier = "5";
      this.ageLabel = "根据你的年龄，你需要在STR和SIZ中减去共 5 点属性点，请在下方输入框中输入具体数值";
      this.informationLabel =
        "你太年轻了，世界对你来说充满了谜团，你的EDU属性被减去了5点，但不知道为什么，你感到一种属于你这个年龄段独有的幸运";
      this.lableOneText = "你想从STR中减去多少属性点？";
      this.labelOneToggle = true;
      this.lableTwoText = "你想从SIZ中减去多少属性点？";
      this.labelTwoToggle = true;
    } else if (age >= 20 && age < 40) {
      this.ageLabel = "随着年龄增长，这个世界对你而言已不再陌生，你的EDU将会得到一次增长机会";
      this.informationLabel = "普普通通的年纪，不会有什么特别的效果";
    } else if (age >= 40 && age < 50) {
      this.ageModifier = "5";
      this.ageLabel = "根据你的年龄，你需要在STR，CON以及DEX中减去共 5 点属性点，请在下方输入框中输入具体数值";
      this.informationLabel =
        "随着年龄增长，这个世界对你而言已不再陌生，你的EDU将会得到两次增长机会，但岁月已经开始在你的脸上留下痕迹，你的APP将会减少5点";
      this.lableOneText = "你想从STR中减去多少属性点？";
      this.labelOneToggle = true;
      this.lableTwoText = "你想从CON中减去多少属性点？";
      this.labelTwoToggle = true;
      this.lableThreeText = "你想从DEX中减去多少属性点？";
      this.labelThreeToggle = true;
    } else if (age >= 50 && age < 59) {
      this.ageModifier = "10";
      this.ageLabel = "根据你的年龄，你需要在STR，CON以及DEX中减去共 10 点属性点，请在下方输入框中输入具体数值";
      this.informationLabel =
        "多年的摸爬滚打使你在这个年纪拥有了对世界独到的理解，你的EDU将会得到三次增长机会，但岁月已经开始在你的脸上留下痕迹，你的APP将会减少10点";
      this.lableOneText = "你想从STR中减去多少属性点？";
      this.labelOneToggle = true;
      this.lableTwoText = "你想从CON中减去多少属性点？";
      this.labelTwoToggle = true;
      this.lableThreeText = "你想从DEX中减去多少属性点？";
      this.labelThreeToggle = true;
    } else if (age >= 60 && age < 69) {
      this.ageModifier = "20";
      this.ageLabel = "根据你的年龄，你需要在STR，CON以及DEX中减去共 20 点属性点，请在下方输入框中输入具体数值";
      this.informationLabel =
        "六十知天命，这不仅来自于书本上的知识，更来自于你个人对这个世界的思考，你的EDU将会得到四次增长机会，脸上的皱纹不可避免地影响了你的魅力，你的APP将会减少15点";
      this.lableOneText = "你想从STR中减去多少属性点？";
      this.labelOneToggle = true;
      this.lableTwoText = "你想从CON中减去多少属性点？";
      this.labelTwoToggle = true;
      this.lableThreeText = "你想从DEX中减去多少属性点？";
      this.labelThreeToggle = true;
    } else if (age >= 70 && age < 79) {
      this.ageModifier = "40";
      this.ageLabel = "根据你的年龄，你需要在STR，CON以及DEX中减去共 40 点属性点，请在下方输入框中输入具体数值";
      this.informationLabel =
        "你过去的经验已经足够支撑得起对复杂世界的理解，你的EDU将会得到四次增长机会，密集的皱纹不可避免地影响了你的魅力，你的APP将会减少20点";
      this.lableOneText = "你想从STR中减去多少属性点？";
      this.labelOneToggle = true;
      this.lableTwoText = "你想从CON中减去多少属性点？";
      this.labelTwoToggle = true;
      this.lableThreeText = "你想从DEX中减去多少属性点？";
      this.labelThreeToggle = true;
    } else {
      this.ageModifier = "80";
      this.ageLabel = "根据你的年龄，你需要在STR，CON以及DEX中减去共 80 点属性点，请在下方输入框中输入具体数值";
      this.informationLabel =
        "你过去的经验已经足够支撑得起对复杂世界的理解，你的EDU将会得到四次增长机会，密集的皱纹和松垮的皮肤不可避免地影响了你的魅力，你的APP将会减少25点";
      this.lableOneText = "你想从STR中减去多少属性点？";
      this.labelOneToggle = true;
      this.lableTwoText = "你想从CON中减去多少属性点？";
      this.labelTwoToggle = true;
      this.lableThreeText = "你想从DEX中减去多少属性点？";
      this.labelThreeToggle = true;
    }
  },
  mounted() {
    const str = this.chars[0];
    const siz = this.chars[2];
    const con = this.chars[1];
    const dex = this.chars[3];
    const modifier = parseInt(this.ageModifier);
    const inputs = document.querySelectorAll(".step2-inputs input");
    if (inputs.length == 2) {
      inputs[0].max = modifier > str ? str : modifier;
      inputs[1].max = modifier > siz ? siz : modifier;
      inputs[0].value = 0;
      inputs[1].value = 0;
    } else if (inputs.length == 3) {
      inputs[0].max = modifier > str ? str : modifier;
      inputs[1].max = modifier > con ? con : modifier;
      inputs[2].max = modifier > dex ? dex : modifier;
      inputs[0].value = 0;
      inputs[1].value = 0;
      inputs[2].value = 0;
    }
  },
  computed: {
    getToggleOne() {
      return this.labelOneToggle;
    },
    getToggleTwo() {
      return this.labelTwoToggle;
    },
    getToggleThree() {
      return this.labelThreeToggle;
    },
  },
  methods: {
    handleCharOne(value) {
      this.modifierOne = value;
      this.$emit("mod1", this.modifierOne);
    },
    handleCharTwo(value) {
      this.modifierTwo = value;
      this.$emit("mod2", this.modifierTwo);
    },
    handleCharThree(value) {
      this.modifierThree = value;
      this.$emit("mod3", this.modifierThree);
    },
  },
  components: {
    questionLabel,
    cthulhuInput,
  },
};
</script>
