
const person = {
  name: 'Maia',
  lastName: 'Rojas',
  age: 28,
  address: {
    city: 'Lima',
    zip: 1545454,
    lat: 145.154,
    lng: 24.555,
  }
};

//console.table(person);
console.log(person);
// const person2 = person; Es solo crea una referencia
const person2  = { ...person };
person2.name = 'Peter';

console.log(person);

console.log(person2);
