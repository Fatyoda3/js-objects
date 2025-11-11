const BALL = {
  symbol: 'o',
  x: 0, y: 0,
  xVel: Math.floor(Math.random() * 2 + 1), yVel: Math.floor(Math.random() * 2 + 1),

};

const CELL = ' ';

const DIMENSION = 20;

const generateGrid = (x, y) => {
  const grid = [];
  const row = CELL.repeat(DIMENSION);

  for (let i = 0; i < DIMENSION; i++) {
    grid.push(row.split(','));
  }
  console.log(grid[0]);
  console.log(grid[x][y] = BALL.symbol, 'grid cell at  0 0 ');

  return grid.join('\n');
};
const delay = (() => { for (let _ = 0; _ < 10e8; _++); });

const animate = () => {

  // for (let _ = 0; _ < 500; _++) {

  //   BALL.x = (BALL.x + BALL.xVel) % DIMENSION;
  //   BALL.y = (BALL.y + BALL.yVel) % DIMENSION;

  console.log(generateGrid(BALL.x, BALL.y));

  //   delay();

  //   console.clear();
  // }

};
const main = () => {

  animate();
};
main();