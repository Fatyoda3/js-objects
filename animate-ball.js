const BALL = 'o';
const CELL = '_';

const DIMENSION = 10;

const generateGrid = () => {
  const grid = [];
  const row = CELL.repeat(DIMENSION);
  for (let i = 0; i < DIMENSION; i++) {
    grid.push(row);
  }
  return grid.join('\n');
};
const delay = (() => { for (let _ = 0; _ < 10e8; _++); });

const animate = () => {
  for (let _ = 0; _ < 500; _++) {

    console.log(generateGrid());
    delay();
    console.clear();
  }

};
const main = () => {

  animate();
};
main();