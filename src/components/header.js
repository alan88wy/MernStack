import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './styles';

const Header = ({ message }) => (
  <>
    <h1 style={styles.header}>{message}</h1>
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
