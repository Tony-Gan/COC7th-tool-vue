const d3 = () => {
  return Math.ceil(Math.random() * 3);
};

const d4 = () => {
  return Math.ceil(Math.random() * 4);
};

const d6 = () => {
  return Math.ceil(Math.random() * 6);
};

const d8 = () => {
  return Math.ceil(Math.random() * 8);
};

const d10 = () => {
  return Math.ceil(Math.random() * 10);
};

const d20 = () => {
  return Math.ceil(Math.random() * 20);
};

const d100 = () => {
  return Math.ceil(Math.random() * 100);
};

const basicCheck = (skillLevel, penalty = 0, reward = 0) => {
  let normal = d10() - 1;
  if (penalty != 0) {
    let temp = 100;
    for (let i = 0; i < penalty; i++) {
      const ten = d10() - 1;
      if (ten < temp) {
        temp = ten;
      }
    }
    if (normal > temp) {
      normal = temp;
    }
  }
  if (reward != 0) {
    let temp = 0;
    for (let i = 0; i < reward; i++) {
      const ten = d10() - 1;
      if (ten > temp) {
        temp = ten;
      }
    }
    if (normal < temp) {
      normal = temp;
    }
  }
  const checkResult = normal * 10 + d10();
  let description;
  if ((skillLevel >= 50 && checkResult == 100) || (skillLevel < 50 && checkResult >= 95)) {
    description = "大失败";
  } else if (checkResult == 1) {
    description = "大成功";
  } else if (Math.round(skillLevel / 5) > checkResult) {
    description = "极难成功";
  } else if (Math.round(skillLevel / 2) > checkResult) {
    description = "困难成功";
  } else if (skillLevel > checkResult) {
    description = "普通成功";
  } else {
    description = "失败";
  }
  return {
    skillLevel,
    checkResult,
    description,
  };
};

export { d3, d4, d6, d8, d10, d20, d100, basicCheck };
