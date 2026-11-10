import React from 'react';
import Link from 'next/link';
import noticesData from '@/data/notices.json';
import styles from './notices.module.css';

export const metadata = {
  title: 'Notices, Tenders & Circulars | GMC Baramati',
  description: 'Official circulars, quotation tenders, and admission notices for PAH GMC Baramati.',
};

export default function NoticesPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1 className={styles.title}>Notices, Tenders & Circulars</h1>
          <p className={styles.subtitle}>
            Official announcements, procurement quotations, and recruitment notifications published by GMC Baramati.
          </p>
        </header>

        <div className={styles.listContainer}>
          {noticesData.notices.map((notice) => (
            <article key={notice.id} className={styles.noticeCard}>
              <div className={styles.metaRow}>
                <span className={styles.categoryBadge}>{notice.category}</span>
                <span className={styles.date}>{notice.date}</span>
              </div>
              <h2 className={styles.noticeTitle}>{notice.title}</h2>
              <p className={styles.noticeSummary}>{notice.summary}</p>
              <Link href={notice.linkUrl} className={styles.detailsBtn}>
                View Document / Details &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}