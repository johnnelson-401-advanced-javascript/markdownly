import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ title, handleClick }) => {

  return (
    <div name={title} onClick={handleClick}>
      {title}
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
