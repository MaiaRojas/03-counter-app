//import React, { Fragment } from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';


//Fc => Functional components
const CounterApp = ({ value = 10 }) => {

  const [counter, setcounter] = useState(value);
  //handleAdd
  const handleAdd = () => setcounter(counter + 1);
  const handleReset = () => setcounter(value);
  const handleSub = () => setcounter(counter - 1);

  return <>
    <h1>CounterApp</h1>
    <p>{counter}</p>
    <button onClick={handleAdd} value='+1'>+1</button>
    <button onClick={handleReset} value='reset'>Reset</button>
    <button onClick={handleSub} value='-1'>-1</button>
  </>

};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;