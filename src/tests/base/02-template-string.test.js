import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruenas en 02-template-strin.js', () => {

  test('getSaludo debe retorna hola Maia', () => {
    const name = 'Maia';

    const saludo = getSaludo(name);

    expect( saludo ).toBe( 'Hello ' + name);

  });

  test('getSaludo debe retornar Hola Carli! si no hay argumento', () => {
    expect(getSaludo()).toBe( 'Hello Carli!');
    
  })
})