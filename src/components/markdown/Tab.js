import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.css';

export const Tab = ({ title, handleClick, handleDelete, focus }) => {

  return (
    <span className={styles.Tab}>
      <button className={styles.fileTab} name={title} onClick={handleClick}>
        {title}
      </button>
      <button className={styles.deleteButton} name={title} onClick={()=>handleDelete(focus, title)}>⌫</button>
    </span>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  focus: PropTypes.number.isRequired
};
