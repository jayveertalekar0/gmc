import React from 'react';
import styles from './GovernmentBar.module.css';

export const GovernmentBar: React.FC = () => {
  return (
    <div className={styles.bar} role="region" aria-label="Official Government Banner">
      <div className={`container ${styles.container}`}>
        <div className={styles.identityGroup}>
          <span className={styles.stateText}>
            Government of Maharashtra | Directorate of Medical Education and Research (DMER)
          </span>
        </div>

        <div className={styles.controlsGroup}>
          <a href="#main-content" className={styles.link}>
            Skip to Main Content
          </a>
          <span className={styles.divider} aria-hidden="true">|</span>
          <span className={styles.stateText}>Language: English</span>
        </div>
      </div>
    </div>
  );
};