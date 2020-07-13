import React from 'react';
import styles from './styles';

const ContestPreview = (contest) => (
  <div style={styles.ContestPreview}>
    <div style={styles.categoryName}>{contest.categoryName}</div>
    <div style={styles.contestName}>{contest.contestName}</div>
  </div>
);

export default ContestPreview;
