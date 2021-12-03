import { getHeroeById } from './08-import-export';


/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve();
    //console.log('2 Seconds after')
    //Homework
    const heroe = getHeroeById(2);
    //console.log(heroe);
    resolve(heroe);

    reject('No se pudo encontrar el Heroe');

  },2000);
});


promesa
.then((result) => {
  console.log('Then de la promesa', result)
})
.catch(err => console.warn(err)); */

export const getHeroByIdSync = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el Heroe');
      }
    },1500);
  });

    
/* getHeroByIdSync(15)
  .then((result) => console.log('Then de la promesa', result))
  .catch(err => console.warn(err)) */