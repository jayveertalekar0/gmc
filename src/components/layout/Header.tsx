import React from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brandGroup}>
          <div className={styles.emblemPlaceholder} aria-hidden="true">
            GMC
          </div>
          <div className={styles.titles}>
            <span className={styles.institutionMarathi}>शासकीय वैद्यकीय महाविद्यालय व रुग्णालय, बारामती</span>
            <h1 className={styles.institutionName}>Government Medical College & General Hospital, Baramati</h1>
            <span className={styles.institutionSub}>
              An Autonomous Institute under Government of Maharashtra
            </span>
          </div>
        </div>

        <div className={styles.rightBadge}>
          <span className={styles.nabhText}>Recognized by NMC</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
            Baramati, Pune, MH
          </span>
        </div>
      </div>
    </header>
  );
};