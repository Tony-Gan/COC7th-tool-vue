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

export { d3, d4, d6, d8, d10, d20, d100 };
