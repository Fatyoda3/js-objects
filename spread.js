const person = { name: 'shiv', age: 30 };
const person2 = { name: 'shiv2', age2: 30 };
const j = { ...person, old: true, ...person2 };
console.log('person', person);
console.log(j);