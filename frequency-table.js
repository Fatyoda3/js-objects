const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const genRandomInts = (elementCount) => {
  const randoms = [];

  for (let index = 0; index < elementCount; index++) {
    randoms.push(randomInt(index * index, elementCount));
  }

  return randoms;
};


const fakeData = () => {

};