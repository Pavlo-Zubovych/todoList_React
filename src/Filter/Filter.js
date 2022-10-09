import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Filter
    <input
      className={styles.Input}
      placeholder='Enter text for filter toDos'
      type='text'
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
