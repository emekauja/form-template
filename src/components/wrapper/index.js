import * as React from 'react';
import PropTypes from 'prop-types';
// import {  withRouter } from 'react-router-dom'
import './elements.css';

function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

// let Layout = withRouter(layout)
export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
