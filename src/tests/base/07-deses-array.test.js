import '@testing-library/jest-dom';
import { returnArray } from '../../base/07-deses-array';

describe('Pruenas de desestructuración', () => {
  
  test('debe retornar un string y un número', () => {
    const [ word, number] = returnArray();
    
    // expect(arr).toEqual(['ABC', 123])
    expect(word).toBe('ABC');
    expect( typeof word).toBe('string');


    expect(number).toBe(123);
    expect( typeof number).toBe('number');

  });
});

