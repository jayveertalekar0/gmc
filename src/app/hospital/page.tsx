import React from 'react';
import Link from 'next/link';
import { PageBanner } from '@/components/common/PageBanner';
import { Stethoscope, Activity, ShieldAlert, HeartPulse, Building } from 'lucide-react';
import hospitalData from '@/data/hospital.json';
import styles from './hospital.module.css';

export const metadata = {
  title: 'General Hospital & Clinical Services | GMC Baramati',
  description: '24/7 emergency care, clinical departments, blood centre, and patient services at Punyashlok Ahilyadevi Holkar Government General Hospital, Baramati.',
};

export default function HospitalPage() {
  return (
    <main className={styles.main}>
      <PageBanner
        title="General Hospital & Clinical Services"
        subtitle="Affiliated teaching hospital delivering 24/7 emergency care, specialized outpatient clinics, and affordable healthcare to the community."
      />

      <div className="container">
        {/* Emergency Callout Box */}
        <section className={styles.emergencyBox} aria-label="Emergency Care Notice">
          <div className={styles.emergencyIcon}>
            <ShieldAlert size={36} />
          </div>
          <div>
            <h2 className={styles.emergencyTitle}>{hospitalData.emergency.title}</h2>
            <p className={styles.emergencyText}>{hospitalData.emergency.description}</p>
            <div className={styles.emergencyContactRow}>
              <span><strong>Helpline / Enquiry:</strong> +91 2112 244172</span>
              <span><strong>Location:</strong> Main Hospital Building, MIDC Area, Baramati</span>
            </div>
          </div>
        </section>

        {/* Clinical Departments Grid */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Clinical & Diagnostic Departments</h2>
          <p className={styles.sectionLead}>
            Our hospital houses fully equipped clinical units staffed by experienced faculty specialists, resident doctors, and dedicated nursing personnel.
          </p>

          <div className={styles.deptGrid}>
            {hospitalData.departments.map((dept) => (
              <article key={dept.id} className={styles.deptCard}>
                <div className={styles.deptHeader}>
                  <Stethoscope size={24} className={styles.deptIcon} />
                  <h3>{dept.name}</h3>
                </div>
                <p className={styles.deptDesc}>{dept.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Patient Amenities & Support */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Patient Care Facilities & Amenities</h2>
          <div className={styles.facilitiesGrid}>
            <div className={styles.facilityCard}>
              <h4>Outpatient Department (OPD)</h4>
              <p>Registration, general health checkups, specialist consultations, and medicine dispensaries operating daily.</p>
            </div>
            <div className={styles.facilityCard}>
              <h4>Inpatient Wards (IPD)</h4>
              <p>Segregated male and female medical, surgical, pediatric, and maternity wards equipped with supportive nursing care.</p>
            </div>
            <div className={styles.facilityCard}>
              <h4>Central Laboratory & Pathology</h4>
              <p>Routine and specialized biochemical, hematological, and microbiological diagnostic investigations.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}