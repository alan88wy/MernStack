import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Header = ({ message }) => (
  <>
    <h1>Hello World</h1>
    <p>{message}</p>
    <p>Ah ha</p>
  </>
);

Header.propTypes = {
  // headerMessage: PropTypes.string.isRequired,
  message: PropTypes.string, // isRequired is not require if default value is define
};

Header.defaultProps = {
  message: 'Yahoo!',
};

export default Header;
