<template>
  <header>
    <h1>{{ title }}</h1>
    <h2 style="font-size:35px;">{{ titleInformation }}{{ version }}</h2>
    <h2>{{ welcomeWordLine1 }}{{ calculateDate }}</h2>
    <h2>{{ welcomeWordLine2 }}</h2>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "克苏鲁的呼唤第七版",
      titleInformation: "守密人工具包",
      version: "Version 0.1.0",
      welcomeWordLine1: "你好，今天是",
      welcomeWordLine2: "今日天气：我不知道，请看窗外，这个网页还没有学会调用你的位置信息",
      date: "",
    };
  },
  computed: {
    calculateDate() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return `${year}年${month}月${day}日`;
    },
  },
};
</script>
