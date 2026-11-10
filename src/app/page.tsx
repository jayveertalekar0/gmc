import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Megaphone, 
  User 
} from 'lucide-react';
import { DignitariesSection } from '@/components/home/DignitariesSection';
import noticesData from '@/data/notices.json';
import styles from './page.module.css';

// Set Dean Photo Path (or leave empty '' to test fallback icon)[cite: 2]
const DEAN_PHOTO_PATH = '/images/leadership/dean-mhaske.jpg';

export const metadata = {
  title: 'Punyashlok Ahilyadevi Holkar Government Medical College, Baramati',
  description: 'Official portal of PAH GMC & General Hospital Baramati, affiliated with MUHS Nashik and recognized by NMC.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero / Main Banner Section */}
      <section className={styles.hero} role="region" aria-label="Welcome Banner">
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Established May 2019</span>
            <h1 className={styles.heroTitle}>
              Punyashlok Ahilyadevi Holkar Government Medical College & Hospital, Baramati
            </h1>
            <p className={styles.heroSubtitle}>
              Affiliated with Maharashtra University of Health Sciences (MUHS), Nashik & Recognized by the National Medical Commission (NMC). Delivering excellence in medical education, research, and patient care.
            </p>
            <div className={styles.heroButtonGroup}>
              <Link href="/admissions" className={styles.primaryBtn}>
                Admissions 2026-27
              </Link>
              <Link href="/hospital" className={styles.secondaryBtn}>
                Hospital Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className={styles.quickAccessSection}>
        <div className="container">
          <div className={styles.grid4}>
            <Link href="/admissions" className={styles.card}>
              <GraduationCap size={32} className={styles.cardIcon} />
              <h3>MBBS & PG Admissions</h3>
              <p>Check intake capacity, proformas, fee structures, and selection lists.</p>
            </Link>

            <Link href="/hospital" className={styles.card}>
              <Stethoscope size={32} className={styles.cardIcon} />
              <h3>General Hospital</h3>
              <p>24/7 emergency care, blood centre, IPD/OPD services, and diagnostics.</p>
            </Link>

            <Link href="/quotations" className={styles.card}>
              <Megaphone size={32} className={styles.cardIcon} />
              <h3>Tenders & Quotations</h3>
              <p>View active quotation notices, equipment procurement, and supply tenders.</p>
            </Link>

            <Link href="/mandatory-disclosures/nmc" className={styles.card}>
              <Building2 size={32} className={styles.cardIcon} />
              <h3>NMC / MUHS Mandates</h3>
              <p>Statutory disclosures, department faculty lists, and curriculum committees.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* State Leadership & Governance Authorities Section */}
      <DignitariesSection />

      {/* Dean's Desk & About Section */}
      <section className={styles.deanSection}>
        <div className="container">
          <div className={styles.deanGrid}>
            <div className={styles.deanCard}>
              <div className={styles.deanPhotoContainer}>
                {DEAN_PHOTO_PATH ? (
                  <Image
                    src={DEAN_PHOTO_PATH}
                    alt="Dr. Chandrakant B. Mhaske - Dean, PAH GMC Baramati"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className={styles.deanPhoto}
                  />
                ) : (
                  <div className={styles.deanPhotoFallback}>
                    <User size={64} color="var(--color-navy)" />
                  </div>
                )}
              </div>
              <h3 className={styles.deanName}>Dr. Chandrakant B. Mhaske</h3>
              <p className={styles.deanCreds}>MBBS, MD (Skin & VD)</p>
              <p className={styles.deanTitle}>Dean, PAH GMC Baramati</p>
              <p className={styles.deanText}>
                &ldquo;Our vision is to be a leading center of excellence in medical education and affordable healthcare delivery, cultivating skilled and compassionate professionals for the community.&rdquo;
              </p>
            </div>

            <div className={styles.aboutContent}>
              <h2 className={styles.sectionHeading}>About The Institution</h2>
              <p className={styles.aboutText}>
                Located in Baramati, Pune, Punyashlok Ahilyadevi Holkar Government Medical College & General Hospital operates under the Directorate of Medical Education and Research (DMER), Government of Maharashtra.
              </p>
              <p className={styles.aboutText}>
                With an annual intake capacity of <strong>100 MBBS students</strong>, our campus features state-of-the-art laboratories, a well-stocked central library, and separate residential hostels for male and female students equipped with modern amenities.
              </p>
              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <span className={styles.statNumber}>100</span>
                  <span className={styles.statLabel}>Annual MBBS Intake</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNumber}>2019</span>
                  <span className={styles.statLabel}>Established Year</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Emergency Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Announcements Section */}
      <section className={styles.announcementsSection}>
        <div className="container">
          <div className={styles.announcementsHeader}>
            <h2 className={styles.sectionHeading}>What's New & Notices</h2>
            <Link href="/notices" className={styles.viewAllLink}>View All Notices &rarr;</Link>
          </div>

          <div className={styles.noticesGrid}>
            {noticesData.notices.slice(0, 3).map((notice) => (
              <div key={notice.id} className={styles.noticeItem}>
                <span className={styles.noticeDate}>{notice.date}</span>
                <h4>{notice.title}</h4>
                <p>{notice.summary}</p>
                <Link href={notice.linkUrl} className={styles.noticeLink}>Read More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}