import React from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';
import { Button } from '@/components/common/Button';
import styles from './PrincipalMessage.module.css';

export const PrincipalMessage: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Principal and Dean Message">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageColumn}>
            <div className={styles.photoPlaceholder} aria-hidden="true">
              <User size={48} />
              <span style={{ fontSize: '0.75rem', marginTop: '8px' }}>Dean Photo</span>
            </div>
            <h3 className={styles.principalName}>Dr. Dean / Principal</h3>
            <span className={styles.principalTitle}>MBBS, MD - Government Medical College, Baramati</span>
          </div>

          <div className={styles.messageColumn}>
            <h2 className={styles.heading}>From the Principal&apos;s Desk</h2>
            <p className={styles.quote}>
              &ldquo;Welcome to Government Medical College and General Hospital, Baramati. Our institution is steadfastly committed to nurturing competent, compassionate medical graduates who uphold the highest standards of medical ethics and patient care. With state-of-the-art laboratories, a 500+ bed teaching hospital, and dedicated academic faculty, we strive for excellence in medical education, research, and public health service.&rdquo;
            </p>
            <div>
              <Link href="/about/principal">
                <Button variant="secondary">Read Full Message</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};