import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Фільтер {/* Filter */}
    <input
      className={styles.Input}
      placeholder='Введіть текст, щоб відфільтрувати завдання' /*'Enter text for filter toDos'*/
      type='text'
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
