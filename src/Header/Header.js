import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';
const divStyle = {
  backgroundColor: 'gray',
};

export default function Header({ title }) {
  return (
    <div style={divStyle}>
      <h2>{title}</h2>
    </div>
  );
}

Header.defaultProps = {
  title: 'App Title',
};

Header.propTypes = {
  title: PropTypes.string,
};
