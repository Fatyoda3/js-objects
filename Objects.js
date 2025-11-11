const formattedDetails = {
  getDetails: (person) =>
    `Info about me 
age-${person.age},
name-${person.name} , 
employed-${person.isEmployed}`

};
const person = { name: 'Shivang', age: 22, isEmployed: true && false };
console.log(formattedDetails.getDetails(person));

const dog = {
  name: "Jack",
  age: 12,
  color: 'hazy',
  bark: (count) => {
    for (let index = 0; index < count; index++) {
      console.log(`woof `);
    }
  }
};
const getNewDog = (name, age, color) => {
  console.log('Dog created with name-', name);
  return { name: name, age: age, color: color };
};

const Olive = getNewDog('Olive', 3, 'purple');
console.log(Olive);