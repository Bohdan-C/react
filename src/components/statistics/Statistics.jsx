import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ statistical }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>File upload</h2>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.label}>.docx</span>
          <span className={css.percentage}>4%</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
