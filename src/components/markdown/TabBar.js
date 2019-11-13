import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';


export const TabBar = ({ files, handleClick, handleAdd }) => {

  const tabElements = files.map(file => (
    <Tab key={file.title} title={file.title} handleClick={handleClick} />
  ));

  return (
    <div>
      {tabElements}
      <div onClick={handleAdd}>+</div>
    </div>
  );
};

TabBar.propTypes = {
  files: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired
};
