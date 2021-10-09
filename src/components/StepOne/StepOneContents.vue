<template>
  <section class="contents">
    <div class="step1-inputs">
      <cthulhuInput textType="text" labelWidth="200px" :contents="label1" @on-input="handleName" />
      <cthulhuDropdown
        :contents="dropdownContents"
        labelWidth="100px"
        :labelContents="label2"
        @on-change="handleGender"
      />
      <cthulhuInput textType="number" labelWidth="200px" :contents="label3" @on-input="handleAge" min="15" max="89" />
    </div>
    <normalDescription style="text-align: center" :class="{ hidden: checkSummary() }">{{
      summary ? summary : "nothing"
    }}</normalDescription>
    <div class="step1-buttons">
      <cthulhuButton buttonText="生成角色" @click="generateBrief" />
      <cthulhuButton buttonText="下一步" @click="saveInformation" />
    </div>
  </section>
</template>

<script>
import cthulhuInput from "../SingleElement/CthulhuInput.vue";
import CthulhuDropdown from "../SingleElement/CthulhuDropdown.vue";
import cthulhuButton from "../SingleElement/CthulhuButton.vue";
import normalDescription from "../SingleElement/NormalDescription.vue";

export default {
  data() {
    return {
      label1: "首先，你需要一个名字",
      label2: "你的性别是",
      dropdownContents: ["男性", "女性", "中性"],
      label3: "你的年龄是",
      userName: null,
      userGender: null,
      userAge: null,
      summary: null,
      showSummary: false,
      buttonDisableToggle: false,
      inputDisableToggle: false,
    };
  },
  methods: {
    handleName(value) {
      this.userName = value;
    },
    handleGender(value) {
      this.userGender = value;
    },
    handleAge(value) {
      this.userAge = value;
    },
    generateBrief() {
      if (this.userName && this.userGender && this.userAge) {
        const inputs = document.querySelectorAll(".step1-inputs input");
        inputs.forEach((input) => {
          input.disabled = true;
        });
        document.querySelector(".step1-inputs select").disabled = true;
        document.querySelector(".step1-buttons button").disabled = true;
        this.summary = "您的角色基本信息已记录，请点击“下一步”按钮继续接下来的操作";
      } else {
        alert("你需要填写所有的信息");
      }
    },
    checkSummary() {
      this.summary = this.userName + "，你是一个" + this.userAge + "岁的" + this.userGender;
      if (this.userName && this.userGender && this.userAge) {
        return false;
      }
      return true;
    },
    saveInformation() {
      if (document.querySelector(".step1-buttons button").disabled) {
        localStorage.setItem("name", this.userName);
        localStorage.setItem("gender", this.userGender);
        localStorage.setItem("age", this.userAge);
        location.href = "/builder/step-two";
      } else {
        alert("请确定基本信息后先点击生成角色按钮");
      }
    },
  },
  components: {
    cthulhuInput,
    CthulhuDropdown,
    cthulhuButton,
    normalDescription,
  },
};
</script>
