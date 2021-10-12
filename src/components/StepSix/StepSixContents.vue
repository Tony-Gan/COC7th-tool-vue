<template>
  <section class="contents">
    <questionLabel>请根据背景决定要携带的物品，在点击应用修改之前，请先与守密人确认</questionLabel>
    <doubleInputs labelText="物品1" @on-input1="handleItemName1" @on-input2="handleItemDescription1" />
    <cthulhuButton class="special-button" buttonText="增加物品" v-if="toggleButton1" @click="button1Clicked" />
    <doubleInputs
      labelText="物品2"
      @on-input1="handleItemName2"
      @on-input2="handleItemDescription2"
      v-if="toggleInput1"
    />
    <div>
      <cthulhuButton class="special-button" buttonText="增加物品" v-if="toggleButton2" @click="button2Clicked" />
      <cthulhuButton class="special-button" buttonText="减少物品" v-if="toggleDelete1" @click="delete1Clicked" />
    </div>
    <doubleInputs
      labelText="物品3"
      @on-input1="handleItemName3"
      @on-input2="handleItemDescription3"
      v-if="toggleInput2"
    />
    <div>
      <cthulhuButton class="special-button" buttonText="增加物品" v-if="toggleButton3" @click="button3Clicked" />
      <cthulhuButton class="special-button" buttonText="减少物品" v-if="toggleDelete2" @click="delete2Clicked" />
    </div>
    <doubleInputs
      labelText="物品4"
      @on-input1="handleItemName4"
      @on-input2="handleItemDescription4"
      v-if="toggleInput3"
    />
    <div>
      <cthulhuButton class="special-button" buttonText="增加物品" v-if="toggleButton4" @click="button4Clicked" />
      <cthulhuButton class="special-button" buttonText="减少物品" v-if="toggleDelete3" @click="delete3Clicked" />
    </div>
    <doubleInputs
      labelText="物品5"
      @on-input1="handleItemName5"
      @on-input2="handleItemDescription5"
      v-if="toggleInput4"
    />
    <div>
      <cthulhuButton class="special-button" buttonText="增加物品" v-if="toggleButton5" @click="button5Clicked" />
      <cthulhuButton class="special-button" buttonText="减少物品" v-if="toggleDelete4" @click="delete4Clicked" />
    </div>
    <doubleInputs
      labelText="物品6"
      @on-input1="handleItemName6"
      @on-input2="handleItemDescription6"
      v-if="toggleInput5"
    />
    <cthulhuButton class="special-button" buttonText="减少物品" v-if="toggleDelete5" @click="delete5Clicked" />
    <div class="step6-buttons">
      <cthulhuButton buttonText="应用修改" @click="applyModifier" />
      <cthulhuButton buttonText="下一步" @click="saveInformation" />
      <cthulhuButton buttonText="装备列表" />
    </div>
  </section>
</template>

<script>
import questionLabel from "../SingleElement/QuestioinLabel.vue";
import doubleInputs from "../SingleElement/DoubleInputs.vue";
import cthulhuButton from "../SingleElement/CthulhuButton.vue";

export default {
  data() {
    return {
      item1: null,
      item2: null,
      item3: null,
      item4: null,
      item5: null,
      item6: null,
      description1: null,
      description2: null,
      description3: null,
      description4: null,
      description5: null,
      description6: null,
      toggleInput1: false,
      toggleInput2: false,
      toggleInput3: false,
      toggleInput4: false,
      toggleInput5: false,
      toggleButton1: true,
      toggleButton2: false,
      toggleButton3: false,
      toggleButton4: false,
      toggleButton5: false,
      toggleDelete1: false,
      toggleDelete2: false,
      toggleDelete3: false,
      toggleDelete4: false,
      toggleDelete5: false,
    };
  },
  components: {
    questionLabel,
    doubleInputs,
    cthulhuButton,
  },
  methods: {
    handleItemName1(value) {
      this.item1 = value;
    },
    handleItemName2(value) {
      this.item2 = value;
    },
    handleItemName3(value) {
      this.item3 = value;
    },
    handleItemName4(value) {
      this.item4 = value;
    },
    handleItemName5(value) {
      this.item5 = value;
    },
    handleItemName6(value) {
      this.item6 = value;
    },
    handleItemDescription1(value) {
      this.description1 = value;
    },
    handleItemDescription2(value) {
      this.description2 = value;
    },
    handleItemDescription3(value) {
      this.description3 = value;
    },
    handleItemDescription4(value) {
      this.description4 = value;
    },
    handleItemDescription5(value) {
      this.description5 = value;
    },
    handleItemDescription6(value) {
      this.description6 = value;
    },
    button1Clicked() {
      this.toggleButton1 = false;
      this.toggleInput1 = true;
      this.toggleButton2 = true;
      this.toggleDelete1 = true;
    },
    button2Clicked() {
      this.toggleButton2 = false;
      this.toggleInput2 = true;
      this.toggleButton3 = true;
      this.toggleDelete1 = false;
      this.toggleDelete2 = true;
    },
    button3Clicked() {
      this.toggleButton3 = false;
      this.toggleInput3 = true;
      this.toggleButton4 = true;
      this.toggleDelete2 = false;
      this.toggleDelete3 = true;
    },
    button4Clicked() {
      this.toggleButton4 = false;
      this.toggleInput4 = true;
      this.toggleButton5 = true;
      this.toggleDelete3 = false;
      this.toggleDelete4 = true;
    },
    button5Clicked() {
      this.toggleButton5 = false;
      this.toggleInput5 = true;
      this.toggleDelete4 = false;
      this.toggleDelete5 = true;
    },
    delete1Clicked() {
      this.toggleDelete1 = false;
      this.toggleButton2 = false;
      this.toggleInput1 = false;
      this.toggleButton1 = true;
      this.item2 = null;
      this.description2 = null;
    },
    delete2Clicked() {
      this.toggleButton2 = true;
      this.toggleInput2 = false;
      this.toggleButton3 = false;
      this.toggleDelete1 = true;
      this.toggleDelete2 = false;
      this.item3 = null;
      this.description3 = null;
    },
    delete3Clicked() {
      this.toggleButton3 = true;
      this.toggleInput3 = false;
      this.toggleButton4 = false;
      this.toggleDelete2 = true;
      this.toggleDelete3 = false;
      this.item4 = null;
      this.description4 = null;
    },
    delete4Clicked() {
      this.toggleButton4 = true;
      this.toggleInput4 = false;
      this.toggleButton5 = false;
      this.toggleDelete3 = true;
      this.toggleDelete4 = false;
      this.item5 = null;
      this.description5 = null;
    },
    delete5Clicked() {
      this.toggleButton5 = true;
      this.toggleInput5 = false;
      this.toggleDelete4 = true;
      this.toggleDelete5 = false;
      this.item6 = null;
      this.description6 = null;
    },
    applyModifier() {
      let switch1 = false;
      let switch2 = false;
      let switch3 = false;
      let switch4 = false;
      let switch5 = false;
      let switch6 = false;
      if (this.item1) {
        if (this.description1) {
          localStorage.setItem("item1", this.item1);
          localStorage.setItem("description1", this.description1);
          switch1 = true;
        } else {
          alert("物品1缺失描述");
        }
      } else {
        alert("缺失物品1，你的角色当前未携带任何物品");
      }
      if (this.item2) {
        if (this.description2) {
          localStorage.setItem("item2", this.item2);
          localStorage.setItem("description2", this.description2);
          switch2 = true;
        } else {
          alert("物品2缺失描述");
        }
      } else {
        switch2 = true;
      }
      if (this.item3) {
        if (this.description3) {
          localStorage.setItem("item3", this.item3);
          localStorage.setItem("description3", this.description3);
          switch3 = true;
        } else {
          alert("物品3缺失描述");
        }
      } else {
        switch3 = true;
      }
      if (this.item4) {
        if (this.description4) {
          localStorage.setItem("item4", this.item4);
          localStorage.setItem("description4", this.description4);
          switch4 = true;
        } else {
          alert("物品4缺失描述");
        }
      } else {
        switch4 = true;
      }
      if (this.item5) {
        if (this.description5) {
          localStorage.setItem("item5", this.item5);
          localStorage.setItem("description5", this.description5);
          switch5 = true;
        } else {
          alert("物品5缺失描述");
        }
      } else {
        switch5 = true;
      }
      if (this.item6) {
        if (this.description6) {
          localStorage.setItem("item6", this.item6);
          localStorage.setItem("description6", this.description6);
          switch6 = true;
        } else {
          alert("物品6缺失描述");
        }
      } else {
        switch6 = true;
      }
      if (switch1 && switch2 && switch3 && switch4 && switch5 && switch6) {
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => {
          input.disabled = true;
        });
        document.querySelector(".step6-buttons button").disabled = true;
      } else {
        alert("请根据提示完善物品设置");
      }
    },
    saveInformation() {
      if (!document.querySelector(".step6-buttons button").disabled) {
        alert("在进行下一步之前，请先应用修改");
      } else {
        location.href = "/builder/step-seven";
      }
    },
  },
};
</script>
