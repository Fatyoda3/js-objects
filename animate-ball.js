const BALL = {
  symbol: 'o',
  x: 0, y: 0,
  xVel: 0, yVel: 0
};

const CELL = '_';

const DIMENSION = 10;

const generateGrid = (x, y) => {
  const grid = [];
  const row = CELL.repeat(DIMENSION);

  for (let i = 0; i < DIMENSION; i++) {
    grid.push(row);
  }
  console.log(grid.split()[0][0]);
  return grid.join('\n');
};
const delay = (() => { for (let _ = 0; _ < 10e8; _++); });

const animate = () => {

  for (let _ = 0; _ < 500; _++) {
    // const
    console.log(generateGrid());
    delay();
    console.clear();
  }

};
const main = () => {

  animate();
};
main();