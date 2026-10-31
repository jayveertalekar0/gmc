import React from 'react';
import styles from './PageBanner.module.css';

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => {
  return (
    <section className={styles.banner} aria-label={title}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
};