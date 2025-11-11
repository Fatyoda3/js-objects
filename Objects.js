const formattedDetails = {
  personLogger: (person) =>
    `Info about me 
age-${person.age},
name-${person.name} , 
employed-${person.isEmployed}`,

  animalLogger: (animal) =>
    `Info about me 
age-${animal.age},
name-${animal.name} , 
color-${animal.color}`,
};

const makeDog = (name, age, color) => {
  console.log('Dog created with name-', name);

  return {
    name: name,
    age: age,
    color: color,

    bark: (count, barkThis) => {
      const barks = [];

      for (let index = 0; index < count; index++) {
        barks.push('woof-' + barkThis);
      }
      console.log(barks.join('\n'));
    }
  };
};

const makeMan = (name, age, color) => {
  console.log('Man created with name-', name);
  return {
    name: name, age: age, color: color, bark: (count, barkThis) => {
      for (let index = 0; index < count; index++) {
        console.log(`woof `, barkThis);
      }
    }
  };
};
const main = () => {
  const Olive = makeDog('Olive', 3, 'purple');
  console.log(formattedDetails.animalLogger(Olive));
  Olive.bark(3, 'what\'s up');

};
main();