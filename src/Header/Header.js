import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function Header({ title }) {
  return (
    <div className="header-wrapper">
      <h2 className="header-title">{title}</h2>
    </div>
  );
}

Header.defaultProps = {
  title: 'App Title',
};

Header.propTypes = {
  title: PropTypes.string,
};
