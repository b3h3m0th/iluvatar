export const generateRandomHexColor: () => string = () =>
  `#xxxxxx`.replace(/x/g, (y) => ((Math.random() * 16) | 0).toString(16));
