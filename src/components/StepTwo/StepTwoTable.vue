<template>
  <div id="step2-table">
    <columnKVP cKey="STR" :cValue="charList[0]" />
    <columnKVP cKey="CON" :cValue="charList[1]" />
    <columnKVP cKey="SIZ" :cValue="charList[2]" />
    <columnKVP cKey="DEX" :cValue="charList[3]" />
    <columnKVP cKey="APP" :cValue="charList[4]" />
    <columnKVP cKey="INT" :cValue="charList[5]" />
    <columnKVP cKey="POW" :cValue="charList[6]" />
    <columnKVP cKey="EDU" :cValue="charList[7]" />
    <columnKVP cKey="LUC" :cValue="charList[8]" />
  </div>
</template>

<script>
import columnKVP from "../SingleElement/ColumnDirectionKVP.vue";

export default {
  props: {
    charList: {
      type: Array,
    },
  },
  beforeMount() {},
  components: {
    columnKVP,
  },
};
</script>
