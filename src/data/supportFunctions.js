import { SKILL_LIST } from "./skillsAndOccupations";

const recursive_addition = (skillName, skillList, addition) => {
  const originValue = parseInt(localStorage.getItem(skillName));
  localStorage.setItem(skillName, originValue + addition);
  const addList = [];
  if (originValue < 50 && parseInt(localStorage.getItem(skillName)) >= 50) {
    skillList.forEach((skill) => {
      if (skill != skillName) {
        const origin = parseInt(localStorage.getItem(skill));
        localStorage.setItem(skill, origin + 10);
      }
    });
    skillList.forEach((skill) => {
      const newValue = parseInt(localStorage.getItem(skill));
      if (((newValue >= 50 && newValue < 60) || (newValue >= 90 && newValue < 100)) && skill != skillName) {
        addList.push(skill);
      }
    });
    if (addList.length == 0) {
      skillList.forEach((skill) => {
        const newValue = parseInt(localStorage.getItem(skill));
        if (newValue > 99) {
          localStorage.setItem(skill, 99);
        }
      });
    } else {
      addList.forEach((skill) => {
        const origin = parseInt(localStorage.getItem(skill));
        localStorage.setItem(skill, origin - 10);
        return recursive_addition(skill, skillList, 10);
      });
    }
  }
};

const checkIfList = (value) => {
  if (typeof value == typeof ["a", "b"]) {
    let result = [];
    value.forEach((skill) => {
      if (typeof skill == typeof SKILL_LIST.ACCOUNTING) {
        result.push(skill);
      } else if (typeof skill == typeof ["a", "b"]) {
        skill.forEach((single) => {
          result.push(single);
        });
      }
    });
    return result;
  } else if (value == SKILL_LIST.OTHER) {
    let result = [];
    for (const skill in SKILL_LIST) {
      result.push(SKILL_LIST[skill]);
    }
    result = result.slice(0, 95);
    return result;
  } else {
    return [value];
  }
};

export { recursive_addition, checkIfList };
