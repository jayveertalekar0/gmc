'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { PageBanner } from '@/components/common/PageBanner';
import { Building2, UserCheck, ShieldCheck, Award, User } from 'lucide-react';
import aboutData from '@/data/about.json';
import styles from './about.module.css';

const DEAN_PHOTO_PATH = '/images/leadership/dean-mhaske.jpg';

export default function AboutPage() {
  // Handle client-side hash scrolling on navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main className={styles.main}>
      <PageBanner
        title="About the Institution"
        subtitle="Discover our history, leadership under the Dean's desk, and statutory RTI disclosures."
      />

      <div className="container">
        {/* Section 1: Institutional Overview */}
        <section id="overview" className={styles.section}>
          <div className={styles.badge}>Established {aboutData.overview.established}</div>
          <h2 className={styles.sectionTitle}>{aboutData.overview.title}</h2>
          <p className={styles.lead}>{aboutData.overview.description}</p>

          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <Building2 size={22} className={styles.icon} />
              <div>
                <strong>Affiliation</strong>
                <p>{aboutData.overview.affiliation}</p>
              </div>
            </div>
            <div className={styles.highlightCard}>
              <Award size={22} className={styles.icon} />
              <div>
                <strong>Recognition & Intake</strong>
                <p>{aboutData.overview.recognition} — {aboutData.overview.intake}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Dean's Desk */}
        <section id="deans-desk" className={styles.section}>
          <div className={styles.deanBox}>
            <div className={styles.deanTopLayout}>
              <div className={styles.deanPhotoContainer}>
                {DEAN_PHOTO_PATH ? (
                  <Image
                    src={DEAN_PHOTO_PATH}
                    alt={`${aboutData.deanDesk.deanName} - Dean, PAH GMC Baramati`}
                    fill
                    sizes="(max-width: 768px) 100vw, 260px"
                    className={styles.deanPhoto}
                  />
                ) : (
                  <div className={styles.deanPhotoFallback}>
                    <User size={64} color="var(--color-navy)" />
                  </div>
                )}
              </div>

              <div className={styles.deanHeader}>
                <span className={styles.subTag}>Leadership</span>
                <h2 className={styles.sectionTitle}>{aboutData.deanDesk.title}</h2>
                <h3 className={styles.deanName}>{aboutData.deanDesk.deanName}</h3>
                <p className={styles.deanQual}>{aboutData.deanDesk.qualification} | Dean, GMC Baramati</p>
              </div>
            </div>

            <blockquote className={styles.deanMessage}>
              &ldquo;{aboutData.deanDesk.message}&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Section 3: RTI Information */}
        <section id="rti" className={styles.section}>
          <div className={styles.rtiBox}>
            <div className={styles.rtiHeader}>
              <ShieldCheck size={28} className={styles.iconLarge} />
              <div>
                <h2 className={styles.sectionTitle}>{aboutData.rti.title}</h2>
                <p>{aboutData.rti.description}</p>
              </div>
            </div>

            <div className={styles.rtiDetails}>
              <div className={styles.rtiCard}>
                <strong>Appellate Authority</strong>
                <p>{aboutData.rti.appellate}</p>
              </div>
              <div className={styles.rtiCard}>
                <strong>Public Information Officer (College)</strong>
                <p>{aboutData.rti.pioCollege}</p>
              </div>
              <div className={styles.rtiCard}>
                <strong>Public Information Officer (Hospital)</strong>
                <p>{aboutData.rti.pioHospital}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}