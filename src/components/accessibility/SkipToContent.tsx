import React from 'react';
import styles from './SkipToContent.module.css';

export const SkipToContent: React.FC = () => {
  return (
    <a href="#main-content" className={styles.skipLink}>
      Skip to main content
    </a>
  );
};