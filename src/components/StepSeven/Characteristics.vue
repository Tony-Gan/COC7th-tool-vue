<template>
  <table>
    <tr class="first-level">
      <td class="table-large-title">姓名</td>
      <td>{{ this.name }}</td>
      <td></td>
      <td></td>
      <td class="table-large-title">性别</td>
      <td>{{ this.gender }}</td>
      <td></td>
      <td></td>
      <td class="table-large-title">年龄</td>
      <td>{{ this.age }}</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td class="table-title">STR</td>
      <td class="table-title">CON</td>
      <td class="table-title">SIZ</td>
      <td class="table-title">DEX</td>
      <td class="table-title">INT</td>
      <td class="table-title">POW</td>
      <td class="table-title">APP</td>
      <td class="table-title">EDU</td>
      <td class="table-title">LUC</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>{{ this.str }}</td>
      <td>{{ this.con }}</td>
      <td>{{ this.siz }}</td>
      <td>{{ this.dex }}</td>
      <td>{{ this.int }}</td>
      <td>{{ this.pow }}</td>
      <td>{{ this.app }}</td>
      <td>{{ this.edu }}</td>
      <td>{{ this.luc }}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td class="table-title">HP值</td>
      <td class="table-title">MP值</td>
      <td class="table-title">SAN值</td>
      <td class="table-title">最大SAN</td>
      <td class="table-title">伤害加成</td>
      <td class="table-title">体格</td>
      <td class="table-title">移动速度</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>{{ this.hp }}</td>
      <td>{{ this.mp }}</td>
      <td>{{ this.san }}</td>
      <td>{{ this.maxSan }}</td>
      <td>{{ this.damageBonus }}</td>
      <td>{{ this.build }}</td>
      <td>{{ this.move }}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      gender: null,
      age: null,
      str: null,
      con: null,
      siz: null,
      dex: null,
      int: null,
      pow: null,
      app: null,
      edu: null,
      luc: null,
      hp: null,
      mp: null,
      san: null,
      maxSan: null,
      damageBonus: null,
      build: null,
      move: null,
    };
  },
  beforeMount() {
    this.name = localStorage.getItem("name");
    this.age = localStorage.getItem("age");
    this.gender = localStorage.getItem("gender");
    this.str = localStorage.getItem("str");
    this.con = localStorage.getItem("con");
    this.siz = localStorage.getItem("siz");
    this.dex = localStorage.getItem("dex");
    this.int = localStorage.getItem("int");
    this.pow = localStorage.getItem("pow");
    this.app = localStorage.getItem("app");
    this.edu = localStorage.getItem("edu");
    this.luc = localStorage.getItem("luc");
    this.hp = localStorage.getItem("maxhp");
    this.mp = localStorage.getItem("maxmp");
    this.san = localStorage.getItem("san");
    this.maxSan = localStorage.getItem("maxsan");
    this.damageBonus = localStorage.getItem("damageBonus");
    this.build = localStorage.getItem("build");
    this.move = localStorage.getItem("move");
  },
};
</script>
