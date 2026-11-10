import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { BookOpen, CalendarCheck } from 'lucide-react';
import muhsData from '@/data/muhs.json';
import styles from '../nmc/nmc.module.css';

export const metadata = {
  title: 'MUHS Mandate | GMC Baramati',
  description: 'MUHS affiliation details, academic calendars, and university exam schedules for PAH GMC Baramati.',
};

export default function MUHSPage() {
  return (
    <main className={styles.main}>
      <PageBanner title={muhsData.title} subtitle={muhsData.subtitle} />

      <div className="container">
        <div className={styles.grid}>
          {muhsData.sections.map((sec) => (
            <section key={sec.id} id={sec.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <BookOpen size={24} className={styles.icon} />
                <h2>{sec.title}</h2>
              </div>
              <ul className={styles.list}>
                {sec.items.map((item, idx) => (
                  <li key={idx}>
                    <CalendarCheck size={16} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}