import React from 'react';
import styles from './Container.module.css';

const Container = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

export default Container;
