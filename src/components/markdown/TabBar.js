import React from 'react';
import { Tab } from './Tab';
import PropTypes from 'prop-types';
import styles from './TabBar.css';;


export const TabBar = ({ files, handleClick, handleAdd }) => {

  const tabElements = files.map(file => (
    <Tab key={file} title={file} handleClick={handleClick} />
  ));

  return (
    <div className={styles.TabBar}>
      {tabElements}
      <button onClick={handleAdd}>+</button>
    </div >
  );
};

TabBar.propTypes = {
  files: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired
};
