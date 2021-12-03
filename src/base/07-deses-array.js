const personajes =['Goku', 'Vegeta', 'Trunks' ]

const [ goku ] =personajes;

//onsole.log(goku);


export const returnArray = () => {
  return ['ABC', 123]
};

const [ letters, numbers] = returnArray();

// console.log(letters, numbers);

//Homework
// 1. El primer valor del arr se llamará nombre
// 2. Se llamará setName

const usaStates = (valor) => {
  return [valor, () => { console.log('Hello Mundo')}]
};

const [name, setName]= usaStates('Goku');

/* console.log(name)
setName(); */


