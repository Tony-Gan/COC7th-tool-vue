<template>
  <router-view></router-view>
</template>

<style>
body {
  overflow: hidden;
  background: no-repeat url("./assets/background1.png");
  background-size: cover;
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

a {
  text-decoration: none;
  font-family: "ZCOOL XiaoWei", serif;
  color: white;
  background: linear-gradient(135deg, rgba(28, 43, 27, 1) 35%, rgba(51, 136, 85, 1) 100%);
  border: 4px solid #666659;
  font-size: 30px;
  width: 300px;
  text-align: center;
  padding: 35px;
  cursor: pointer;
  text-shadow: 2px 2px 2px #1c2b1b;
}

.builder {
  overflow: hidden;
  background: no-repeat url("./assets/background2.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
}

ul {
  display: flex;
  flex-direction: column;
}

li {
  list-style-type: none;
}

.current {
  color: red;
}
</style>
