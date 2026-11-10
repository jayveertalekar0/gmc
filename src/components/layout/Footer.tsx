import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Institution Info */}
          <div>
            <h3 className={styles.colTitle}>GMC Baramati</h3>
            <p className={styles.text}>
              Punyashlok Ahilyadevi Holkar Government Medical College & General Hospital, Baramati is a premier state-run medical institution under the Directorate of Medical Education and Research (DMER), Government of Maharashtra.
            </p>
            <p className={styles.text} style={{ marginTop: '12px' }}>
              <strong>Address:</strong> Plot No. P-107, MIDC Area, Baramati, Pune - 413133<br />
              <strong>Phone:</strong> +91 2112 244172 / 244170<br />
              <strong>Email:</strong> deangmcbaramati@gmail.com
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><Link href="/about" className={styles.link}>About Institution</Link></li>
              <li><Link href="/academics" className={styles.link}>Academic Programs</Link></li>
              <li><Link href="/hospital" className={styles.link}>Hospital Services</Link></li>
              <li><Link href="/admissions" className={styles.link}>Admissions & Fees</Link></li>
              <li><Link href="/notices" className={styles.link}>Notices & Circulars</Link></li>
            </ul>
          </div>

          {/* Column 3: Governance & Compliance */}
          <div>
            <h3 className={styles.colTitle}>Governance & Compliance</h3>
            <ul className={styles.linkList}>
              <li><Link href="/mandatory-disclosures" className={styles.link}>Mandatory Disclosures (NMC)</Link></li>
              <li><Link href="/rti" className={styles.link}>Right to Information (RTI)</Link></li>
              <li><Link href="/policies/anti-ragging" className={styles.link}>Anti-Ragging Committee</Link></li>
              <li><Link href="/policies/website-policies" className={styles.link}>Website Policies</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact & Directions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>© 2026 Punyashlok Ahilyadevi Holkar Government Medical College & Hospital, Baramati. All Rights Reserved.</p>
          <p>Designed for GIGW 3.0 & WCAG 2.1 Level AA Compliance</p>
        </div>
      </div>
    </footer>
  );
};