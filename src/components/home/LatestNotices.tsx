import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { OFFICIAL_NOTICES } from '@/data/notices';
import { SectionTitle } from '@/components/common/SectionTitle';
import { NoticeCard } from '@/components/common/NoticeCard';
import { Button } from '@/components/common/Button';
import styles from './LatestNotices.module.css';

export const LatestNotices: React.FC = () => {
  // Display top 4 recent notices on the homepage
  const recentNotices = OFFICIAL_NOTICES.slice(0, 4);

  return (
    <section className={styles.section} aria-label="Latest Notices and Circulars">
      <div className="container">
        <SectionTitle 
          title="Latest Notices & Announcements" 
          subtitle="Stay updated with admissions, academic circulars, recruitment notices, and hospital updates" 
        />

        <div className={styles.grid}>
          {recentNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>

        <div className={styles.actionRow}>
          <Link href="/notices">
            <Button variant="secondary">
              View All Notices & Circulars <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};