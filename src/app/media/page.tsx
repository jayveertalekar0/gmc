import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Image, Calendar, Tag } from 'lucide-react';
import mediaItems from '@/data/media.json';
import styles from './media.module.css';

export const metadata = {
  title: 'Media & Gallery | GMC Baramati',
  description: 'Photo gallery, institutional event highlights, and press coverage for PAH GMC Baramati.',
};

export default function MediaPage() {
  return (
    <main className={styles.main}>
      <PageBanner
        title="Media & Photo Gallery"
        subtitle="Highlights of institutional academic events, community health camps, campus infrastructure, and student activities."
      />

      <div className="container">
        <div className={styles.grid}>
          {mediaItems.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <Image size={36} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.metaRow}>
                  <span className={styles.tag}>
                    <Tag size={12} /> {item.category}
                  </span>
                  <span className={styles.date}>
                    <Calendar size={12} /> {item.date}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}