// Desestructuracion


const person ={
  name: 'Tomi',
  age: 45,
  clave: 'Iroman',
  range: 'Soldier'
};

const { name, age, clave } = person;


//console.log(person.name, person.age, person.clave);
const context = ({ name, age, clave, range }) => {
  return {
    nameClave: name,
    anios: age,
    latlng: {
      lat: 145.25,
      lng: 1458.25
    }
  }
};


const { nameClave, anios, latlng: { lat, lng } } = context(person)

console.log(nameClave, anios);
console.log(lat, lng)


