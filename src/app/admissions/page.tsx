import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { GraduationCap, BookOpen, FileCheck, Download } from 'lucide-react';
import coursesData from '@/data/courses.json';
import styles from './admissions.module.css';

export const metadata = {
  title: 'Courses Offered & Admissions | GMC Baramati',
  description: 'Undergraduate MBBS, MD/MS PG specialties, B.Sc. Nursing, and CCMP courses at PAH GMC Baramati.',
};

export default function AdmissionsPage() {
  return (
    <main className={styles.main}>
      <PageBanner
        title="Academic Courses & Admissions"
        subtitle="Undergraduate MBBS, Postgraduate MD/MS specialties, B.Sc. Nursing, and Certificate Courses in Pharmacology."
      />

      <div className="container">
        {/* Academic Downloads Bar */}
        <div className={styles.downloadsBar}>
          <h3><FileCheck size={20} /> Admission Information Brochures & Proformas</h3>
          <div className={styles.btnGroup}>
            <a href="/docs/MBBS_Brochure.pdf" target="_blank" className={styles.downloadBtn}>
              <Download size={14} /> MBBS Admission Proforma
            </a>
            <a href="/docs/Nursing_Brochure.pdf" target="_blank" className={styles.downloadBtn}>
              <Download size={14} /> B.Sc. Nursing Brochure
            </a>
            <a href="/docs/CCMP_Brochure.pdf" target="_blank" className={styles.downloadBtn}>
              <Download size={14} /> CCMP Brochure
            </a>
          </div>
        </div>

        {/* Courses Grid */}
        <div className={styles.coursesGrid}>
          {coursesData.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <div className={styles.cardTop}>
                <GraduationCap size={28} className={styles.icon} />
                <span className={styles.badge}>{course.level}</span>
              </div>
              <h2>{course.title}</h2>
              <div className={styles.metaRow}>
                <span><strong>Intake:</strong> {course.intake}</span>
                <span><strong>Duration:</strong> {course.duration}</span>
              </div>
              <p className={styles.desc}>{course.description}</p>
              <div className={styles.affilTag}>
                <BookOpen size={14} /> {course.affiliation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}