import { getHeroeById, getHeroesByOwners } from "../../base/08-import-export";
import heroes, { owners } from "../../data/heroes";

describe('Pruebas en funciones de Heroes' , () => {

  test('debe retornar un héroe por id', () => {

    const id = 2;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find( h => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test('debe retornar un héroe di heroe no existe', () => {

    const id = 10;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find( h => h.id === id);

    expect(heroe).toBe(undefined);
  });

  test('debe retornar un héroe un arreglo de heroes de DC', () => {

    const [ ,dc] = owners;
    const heroes = getHeroesByOwners(dc)

    const heroesData = heroes.filter( h => h.owner === dc);

    expect(heroes).toEqual(heroesData);
  });

  test('debe retornar la cantidad de heroes de Marvel', () => {

    const [marvel, dc] = owners;
    const heroes = getHeroesByOwners(marvel)

    const heroesData = heroes.filter( h => h.owner === marvel);

    expect(heroes.length).toBe(heroesData.length);
  });


  //
})