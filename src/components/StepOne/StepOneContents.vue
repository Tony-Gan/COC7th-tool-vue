<template>
  <section class="contents">
    <div>
      <cthulhuInput textType="text" labelWidth="350px" :contents="label1" @on-input="handleName" />
      <cthulhuRadio textType="text" :length="radioContents.length" :contents="radioContents" :labelContents="label2" />
      <cthulhuInput textType="number" labelWidth="350px" :contents="label3" @on-input="handleAge" />
    </div>
    <div>
      <cthulhuButtonFunc buttonText="" />
      <cthulhuButtonLink buttonText="" link="" />
    </div>
  </section>
</template>

<script>
import cthulhuInput from "../SingleElement/CthulhuInput.vue";
import cthulhuRadio from "../SingleElement/CthulhuRadio.vue";
import cthulhuButtonFunc from "../SingleElement/CthulhuButtonFunc.vue";
import cthulhuButtonLink from "../SingleElement/CthulhuButtonLink.vue";

export default {
  data() {
    return {
      label1: "首先，你需要一个名字",
      label2: "你的性别是",
      radioContents: ["男性", "女性", "中性"],
      label3: "你的年龄是",
      userName: null,
      userGender: null,
      userAge: null,
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
    checkAllInputsValid() {
      if (this.userName && this.userGender && this.userAge) {
        return;
      }
      alert();
    },
  },
  components: {
    cthulhuInput,
    cthulhuRadio,
    cthulhuButtonLink,
    cthulhuButtonFunc,
  },
};
</script>
