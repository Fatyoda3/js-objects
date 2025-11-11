const formattedDetails = {
  getDetails: (person) =>
    `Info about me 
age-${person.age},
name-${person.name} , 
employed-${person.isEmployed}`

};
const person = { name: 'shivang', age: 22, isEmployed: true && false };
console.log(formattedDetails.getDetails(person));