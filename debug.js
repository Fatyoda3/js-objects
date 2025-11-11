const dbg = (value) => {
  console.log(value);
  return value;
};

const add = (a, ...b) => {
  let sum = a;

  for (let i = 0; i < b.length; i++) {
    (i);
    sum += (b[i]);
  }
  return sum;
};
console.log(add(2, 3, 2, 4));