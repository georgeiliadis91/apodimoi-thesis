const colorPalette = [
  "#12B0E8",
  "#38CC77",
  "#EDBF69",
  "#E07C24",
  "#6A1B4D",
  "#8D3DAF",
  "#B4161B",
  "#A77B06",
];

//Export and array of give length with random colors
export const getRandomColors = (length) => {
  const colors = [];
  for (let i = 0; i < length; i++) {
    colors.push(colorPalette[Math.floor(Math.random() * colorPalette.length)]);
  }
  return colors;
};
