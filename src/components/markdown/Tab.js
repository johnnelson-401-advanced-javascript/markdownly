import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ title, handleClick }) => {

  return (
    <button name={title} onClick={handleClick}>
      {title}
    </button>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
