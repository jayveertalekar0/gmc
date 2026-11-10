import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Building2, Stethoscope, ChevronRight } from 'lucide-react';
import deptData from '@/data/departments.json';
import styles from './departments.module.css';

export const metadata = {
  title: 'Departments & Hospital Services | GMC Baramati',
  description: 'Explore pre-clinical, para-clinical, and clinical medical departments at Punyashlok Ahilyadevi Holkar Government Medical College & Hospital, Baramati.',
};

export default function DepartmentsPage() {
  return (
    <main className={styles.main}>
      <PageBanner
        title="Institutional Departments"
        subtitle="Comprehensive pre-clinical, para-clinical, and clinical specialty departments delivering medical education and 24/7 patient care."
      />

      <div className="container">
        {deptData.categories.map((cat, idx) => (
          <section key={idx} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>
              <Building2 size={24} className={styles.categoryIcon} />
              {cat.title}
            </h2>
            <div className={styles.deptGrid}>
              {cat.departments.map((dept, dIdx) => (
                <div key={dIdx} className={styles.deptCard}>
                  <div className={styles.deptHeader}>
                    <Stethoscope size={20} className={styles.deptIcon} />
                    <span className={styles.deptBadge}>{dept.head}</span>
                  </div>
                  <h3 className={styles.deptName}>{dept.name}</h3>
                  <p className={styles.deptDesc}>{dept.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}