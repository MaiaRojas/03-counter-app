import '@testing-library/jest-dom';
import { getUser, getUserActive } from '../../base/05-functions';

describe('Pruenas en 02-template-strin.js', () => {
  
  test('getUser debe retornar un Object', () => {
    const userTest = {
      uid: 'Abc123',
      username: 'EL_papi145',
    }; 

    const user = getUser();
  
    expect(userTest).toEqual(user);
  });

  test('getUserActive debe retornar un Object', () => {

    const userTest = {
      uid: 'foo',
      username: 'bar',
    }; 

    const user = getUserActive(userTest.username);
    expect(userTest).toEqual(user);
  })
});

