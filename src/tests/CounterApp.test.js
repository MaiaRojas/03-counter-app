import { shallow } from "enzyme";
import React from "react";
import CounterApp from "../CounterApp";


describe('Pruebas en <CounterApp />', () => {
  let wrapper = shallow(<CounterApp value={10} />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp value={10} />);
  });
  

  test('should  be show <CounterApp/> right', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should  be show default value 100', () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const valueCounter = wrapper.find('p').text().trim();

    expect(valueCounter).toBe('100');
  });

  test('Debe incrementar con el boton +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const valueCounter = wrapper.find('p').text().trim();

    expect(valueCounter).toBe('11');
  });

  test('Debe decrementar con el boton -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const valueCounter = wrapper.find('p').text().trim();

    expect(valueCounter).toBe('9');
  });

  test('Debe colocar el value default con el btn reset', () => {
    wrapper = shallow(<CounterApp value={110} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');

    const valueCounter = wrapper.find('p').text().trim();

    expect(valueCounter).toBe('110');
  });
  
})