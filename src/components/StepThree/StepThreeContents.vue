<template>
  <section class="contents">
    <stepTwoTable :charList="charList" />
    <cthulhuDropdown
      :contents="dropdownContents"
      labelWidth="200px"
      labelContents="现在，是时候选择你的职业了"
      @on-change="handleOccupation"
      class="column"
    />
  </section>
</template>

<script>
import stepTwoTable from "../StepTwo/StepTwoTable.vue";
import cthulhuDropdown from "../SingleElement/CthulhuDropdown.vue";
import { OCCUPATION_LIST } from "../../data/skillsAndOccupations";

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
      charList: [],
      dropdownContents: [],
    };
  },
  components: {
    stepTwoTable,
    cthulhuDropdown,
  },
  beforeMount() {
    this.charList = [this.str, this.con, this.siz, this.dex, this.app, this.int, this.pow, this.edu, this.luc];
    for (const occupation in OCCUPATION_LIST) {
      this.dropdownContents.push(OCCUPATION_LIST[occupation].chinese_name);
    }
  },
  methods: {
    handleOccupation() {},
  },
};
</script>
