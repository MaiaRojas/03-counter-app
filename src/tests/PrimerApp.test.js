import { shallow } from 'enzyme';
import React from 'react';
//import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
  /* test('should show the message "Hello, I am Goku', () => {
    const saludo ='Hola, soy Goku';

    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();

  }) */

  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    
    const saludo = 'Hola, soy Goku';
    const wrapper = shallow(<PrimeraApp saludo ={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });
  
  test('debe de mostrar el subtitle enviado por props', () => {

    const saludo = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitle'
    const wrapper = shallow(
      <PrimeraApp
        saludo ={saludo}
        subtitle={subTitle}
      />);

    const txtSentence = wrapper.find('p').text();
    expect(txtSentence).toBe(subTitle);
  })
  
})