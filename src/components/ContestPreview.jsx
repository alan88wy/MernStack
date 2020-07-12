import React from 'react';
import './styles.css';

const ContestPreview = (contest) => (
  <div className="ContestPreview">
    <div className="category-name">{contest.categoryName}</div>
    <div className="contest-name">{contest.contestName}</div>
  </div>
);

export default ContestPreview;
