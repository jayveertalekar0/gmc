'use client';

import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';
import dignitariesData from '@/data/dignitaries.json';
import styles from './DignitariesSection.module.css';

export const DignitariesSection: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Key Person & Leadership">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>State Governance & Administration</span>
          <h2>Key Person & Leadership</h2>
          <p>Dignitaries, Ministers, and Administrative Heads supporting PAH GMC Baramati.</p>
        </div>

        <div className={styles.grid}>
          {dignitariesData.map((person) => (
            <div key={person.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                {person.image ? (
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 220px"
                    className={styles.photo}
                  />
                ) : (
                  <div className={styles.avatarFallback}>
                    <User size={48} />
                  </div>
                )}
              </div>
              <div className={styles.info}>
                <h3>{person.name}</h3>
                <p className={styles.title}>{person.title}</p>
                <p className={styles.organization}>{person.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};