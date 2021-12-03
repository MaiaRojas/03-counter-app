// Functions Js
/* 
function saludar( name) {
  return `Hola, ${name}`;
};
 */

const saludar = function saludar( name) {
  return `Hola, ${name}`;
};

const saludar2  = (name) => `Hola, ${name}`;


/* console.log(saludar('Vegeta'));
console.log(saludar2('Goku'));
 */

export const getUser = () => ({
    uid: 'Abc123',
    username: 'EL_papi145'
  }
);

//console.log(getUser())


// HOmework

export const getUserActive = name => ({
    uid: 'foo',
    username: name
  });


const userActive = getUserActive('Fernando');

//console.log(userActive)