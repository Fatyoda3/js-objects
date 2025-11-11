const BALL = 'o';
const CELL = ' ';

const DIMENSION = 10;
const generateGrid = () => {
  const grid = [];
  for (let i = 0; i < DIMENSION; i++) {
    grid.push(CELL.repeat(DIMENSION));
  }
  return grid.join('').split('');
};

const main = () => {


  console.log(generateGrid());
};
main();