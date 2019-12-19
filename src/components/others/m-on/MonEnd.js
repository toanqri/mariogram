import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Nothing from '../Nothing';
import End from '../End';

const MonEnd = ({ len, nothingMssg }) => (
  <>{len == 0 ? <Nothing mssg={nothingMssg} /> : <End />}</>
);

MonEnd.propTypes = {
  len: PropTypes.number.isRequired,
  nothingMssg: PropTypes.string.isRequired,
};

export default MonEnd;
