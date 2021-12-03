import '@testing-library/jest-dom';
import { getHeroByIdSync } from '../../base/09-promises';
import heroes from '../../data/heroes';

describe('Pruebas con promesas',() => {
  test('getHeroByIdSync debe de retornar un Héroe async',  (done) => {
    const id = 1;

    getHeroByIdSync(id).then(heroe => {
        expect(heroe).toBe(heroes[0]);
        done();
      })
    
  });

  test('debe retornar error si el héroe no existe', (done) => {
    const id = 10;

    getHeroByIdSync(id).catch(err => {
        expect(err).toBe('No se pudo encontrar el Heroe');
        done();
      })
  });
});

