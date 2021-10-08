<template>
  <aside>
    <ul>
      <li v-for="(item, index) in sideBarContents" :key="item.text" :class="{ current: checkIndex(index) }">
        {{ item.text }}
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    currentIndex: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      sideBarContents: [
        { text: "基础属性" },
        { text: "年龄修正" },
        { text: "职业设置" },
        { text: "个人技能" },
        { text: "背景设置" },
        { text: "携带物品" },
        { text: "其他设置" },
        { text: "导出人物" },
      ],
    };
  },
  methods: {
    checkIndex(index) {
      return index == this.currentIndex;
    },
  },
};
</script>
