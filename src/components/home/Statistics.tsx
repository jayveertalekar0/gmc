import React from 'react';
import { INSTITUTION_STATISTICS } from '@/data/statistics';
import styles from './Statistics.module.css';

export const Statistics: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Institutional Statistics and Key Figures">
      <div className="container">
        <div className={styles.headerContainer}>
          <h2 className={styles.sectionTitle}>GMC Baramati at a Glance</h2>
          <p className={styles.sectionSubtitle}>Key metrics reflecting our academic and healthcare delivery capacity</p>
        </div>

        <div className={styles.grid}>
          {INSTITUTION_STATISTICS.map((stat) => (
            <div key={stat.id} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statDesc}>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};