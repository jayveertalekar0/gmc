import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { ShieldCheck, UserCheck, HeartHandshake } from 'lucide-react';
import committeesData from '@/data/committees.json';
import styles from './committees.module.css';

export const metadata = {
  title: 'Statutory Committees & Grievance Redressal | GMC Baramati',
  description: 'Official statutory committees, anti-ragging cell, ethics committee, and student welfare bodies at PAH GMC Baramati.',
};

export default function CommitteesPage() {
  return (
    <main className={styles.main}>
      <PageBanner
        title="Institutional Committees & Student Welfare"
        subtitle="Statutory regulatory committees, anti-ragging framework, internal complaints cell, and student wellness support bodies."
      />

      <div className="container">
        <div className={styles.grid}>
          {committeesData.map((item) => (
            <div key={item.id} id={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <ShieldCheck size={22} className={styles.icon} />
                <div>
                  <h3>{item.name}</h3>
                  <span className={styles.headTag}>Chair / In-charge: {item.head}</span>
                </div>
              </div>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}