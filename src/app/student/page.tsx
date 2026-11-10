import React from 'react';
import Link from 'next/link';
import { PageBanner } from '@/components/common/PageBanner';
import { Users, BookOpen, ShieldCheck, FileCheck } from 'lucide-react';
import studentData from '@/data/student.json';
import styles from './student.module.css';

export const metadata = {
  title: 'Student Section & Resources | GMC Baramati',
  description: 'Student portal, selected candidate lists, hostel/library guidelines, and active welfare committees for PAH GMC Baramati.',
};

export default function StudentPage() {
  return (
    <main className={styles.main}>
      <PageBanner
        title="Student Section & Portals"
        subtitle="Comprehensive information for undergraduate and postgraduate medical students, selection lists, and statutory committees."
      />

      <div className="container">
        {/* Resource Cards */}
        <div className={styles.grid2}>
          {studentData.sections.map((sec) => (
            <div key={sec.id} className={styles.card}>
              <div className={styles.iconBox}>
                <FileCheck size={26} />
              </div>
              <h2>{sec.title}</h2>
              <p className={styles.desc}>{sec.description}</p>
              <ul className={styles.linkList}>
                {sec.links.map((lnk, idx) => (
                  <li key={idx}>
                    <Link href={lnk.url} className={styles.subLink}>
                      {lnk.label} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Committees Section */}
        <section className={styles.committeeSection}>
          <h2 className={styles.sectionTitle}>Student Welfare & Statutory Committees</h2>
          <p className={styles.sectionLead}>
            In compliance with MUHS and NMC mandates, dedicated committees operate to ensure a safe, supportive, and professional campus environment:
          </p>
          <div className={styles.committeeGrid}>
            {studentData.committees.map((com, index) => (
              <div key={index} className={styles.committeeCard}>
                <ShieldCheck size={20} className={styles.committeeIcon} />
                <span>{com}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}