//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


//Fc => Functional components
const PrimeraApp = ({ saludo, subtitle='Soy un subtitle' }) => {
  return <>
    <h3>{saludo}</h3>
    <p>{subtitle}</p>
  </>

};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitle: 'Soy un subtitutlo'
}

export default PrimeraApp;