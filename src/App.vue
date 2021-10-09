<template>
  <router-view></router-view>
</template>

<style>
body {
  overflow: hidden;
  background: no-repeat url("./assets/background1.png");
  background-size: cover;
  margin: 0;
  color: white;
}

h1 {
  font-family: "ZCOOL XiaoWei", serif;
  text-align: center;
  color: white;
  font-size: 80px;
  min-height: 10%;
}

h2 {
  font-family: "Noto Serif SC", serif;
  font-weight: 200;
  text-align: center;
  color: white;
  font-size: 22px;
  min-height: 5%;
}

#app-functionalities {
  display: flex;
  justify-content: space-around;
  height: 65vh;
  align-items: center;
}

button {
  font-family: "ZCOOL XiaoWei", serif;
  color: white;
  background: linear-gradient(135deg, rgba(28, 43, 27, 1) 35%, rgba(51, 136, 85, 1) 100%);
  border: 4px solid #666659;
  font-size: 20px;
  width: 250px;
  text-align: center;
  padding: 25px;
  cursor: pointer;
  text-shadow: 2px 2px 2px #1c2b1b;
}

.column-kvp {
  display: flex;
  flex-direction: column;
}

.row-kvp {
  display: flex;
  flex-direction: row;
}

.column-kvp h5,
.row-kvp h5 {
  font-size: 18px;
  font-family: "ZCOOL XiaoWei", serif;
}

.column-kvp p,
.row-kvp p {
  font-size: 16px;
  font-family: "Noto Serif SC", serif;
}

.normal-description {
  font-size: 16px;
  font-family: "Noto Serif SC", serif;
  padding: 5px 0 5px;
}

.cthulhu-input label {
  font-size: 22px;
  font-family: "ZCOOL XiaoWei", serif;
}

.cthulhu-input input {
  font-size: 18px;
  font-family: "Noto Serif SC", serif;
  padding: 5px;
}

.cthulhu-dropdown {
  font-size: 18px;
  font-family: "Noto Serif SC", serif;
  padding: 5px;
}

.cthulhu-dropdown option {
  font-size: 18px;
  font-family: "Noto Serif SC", serif;
  padding: 5px;
}

.builder {
  background-size: cover;
  display: flex;
  flex-direction: row;
}

.hidden {
  visibility: hidden;
}

aside {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 10%;
}

ul {
  display: flex;
  flex-direction: column;
}

li {
  list-style-type: none;
  font-family: "Noto Serif SC", serif;
  font-weight: 300;
  font-size: 14px;
  color: grey;
  padding: 6px 0 6px;
}

.current {
  color: white;
  text-decoration: underline;
}

.contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
}

.step1-inputs {
  display: flex;
  flex-direction: row;
  margin: 30px 0 30px;
  justify-content: space-evenly;
}

.step1-buttons,
.step2-buttons {
  display: flex;
  flex-direction: row;
  margin: 30px 0 30px;
  justify-content: space-evenly;
}

#step2-table {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
