import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import nmcData from '@/data/nmc.json';
import styles from './nmc.module.css';

export const metadata = {
  title: 'NMC Disclosures | GMC Baramati',
  description: 'Statutory National Medical Commission disclosures and clinical statistics for PAH GMC Baramati.',
};

export default function NMCPage() {
  return (
    <main className={styles.main}>
      <PageBanner title={nmcData.title} subtitle={nmcData.subtitle} />

      <div className="container">
        <div className={styles.grid}>
          {nmcData.sections.map((sec) => (
            <section key={sec.id} id={sec.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <ShieldCheck size={24} className={styles.icon} />
                <h2>{sec.title}</h2>
              </div>
              <ul className={styles.list}>
                {sec.details.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
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