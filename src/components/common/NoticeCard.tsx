import React from 'react';
import Link from 'next/link';
import { FileText, Download } from 'lucide-react';
import { Notice } from '@/types';
import styles from './NoticeCard.module.css';

interface NoticeCardProps {
  notice: Notice;
}

export const NoticeCard: React.FC<NoticeCardProps> = ({ notice }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headerRow}>
        <span className={styles.categoryBadge}>
          {notice.category}
        </span>
        <span className={styles.date}>{notice.datePublished}</span>
      </div>

      <div>
        <Link href={notice.documentUrl || '#'} className={styles.title}>
          {notice.title}
          {notice.isNew && <span className={styles.newBadge}>NEW</span>}
        </Link>
      </div>

      <div className={styles.footerRow}>
        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
          Official Circular / Notice
        </span>
        {notice.documentUrl && (
          <a 
            href={notice.documentUrl} 
            className={styles.downloadLink} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Download document for ${notice.title}`}
          >
            <Download size={14} /> PDF Notice
          </a>
        )}
      </div>
    </div>
  );
};