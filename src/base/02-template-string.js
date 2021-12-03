
// Variables y constantes
const name = 'Mika';
const lastName = 'Rojas';

// const  fullName = name + '' + lastName;
const fullName = `${name} ${lastName}`

//console.log(fullName);

export function getSaludo(name='Carli!') {
  return 'Hello ' + name;
};

//console.log(`This  is a text": ${ getSaludo(name)}`)
