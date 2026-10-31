import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { Button } from '@/components/common/Button';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero} aria-label="Institutional Introduction">
      <div className={`container ${styles.heroGrid}`}>
        <div>
          <span className={styles.badge}>Government of Maharashtra</span>
          <h1 className={styles.heading}>
            Excellence in Medical Education & Healthcare Services
          </h1>
          <p className={styles.description}>
            Government Medical College & General Hospital, Baramati is dedicated to providing affordable, compassionate tertiary medical care and training future medical professionals under MUHS and NMC standards.
          </p>
          <div className={styles.actions}>
            <Link href="/admissions">
              <Button variant="primary">
                MBBS Admissions 2026 <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/hospital">
              <Button variant="outline">
                Hospital OPD & Casualty
              </Button>
            </Link>
          </div>
        </div>

        <div className={styles.visualCard}>
          <h2 className={styles.visualCardTitle}>24x7 Emergency Services</h2>
          <ul className={styles.highlightList}>
            <li className={styles.highlightItem}>
              <CheckCircle2 size={16} color="var(--color-light-blue)" /> Round-the-clock Trauma & Casualty Wing
            </li>
            <li className={styles.highlightItem}>
              <CheckCircle2 size={16} color="var(--color-light-blue)" /> Fully Functional ICU, ICCU & NICU Units
            </li>
            <li className={styles.highlightItem}>
              <CheckCircle2 size={16} color="var(--color-light-blue)" /> Centralized Diagnostic & Pathology Labs
            </li>
            <li className={styles.highlightItem}>
              <CheckCircle2 size={16} color="var(--color-light-blue)" /> Government Health Schemes (MJPJAY)
            </li>
          </ul>
          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <PhoneCall size={16} /> Casualty Helpline: 02112-295000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};