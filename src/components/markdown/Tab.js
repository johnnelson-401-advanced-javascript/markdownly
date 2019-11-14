import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.css';

export const Tab = ({ title, id, handleClick, handleDelete }) => {

  return (
    <span className={styles.Tab}>
      <button className={styles.fileTab} name={title} id={id} onClick={handleClick}>
        {title}
      </button>
      <button className={styles.deleteButton} name={title} onClick={() => handleDelete(id)}>⌫</button>
    </span>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  focus: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
