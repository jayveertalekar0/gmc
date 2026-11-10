import React from 'react';
import Link from 'next/link';
import { PageBanner } from '@/components/common/PageBanner';
import { ShieldCheck, FileText, UserCheck, Download, ExternalLink } from 'lucide-react';
import disclosuresData from '@/data/disclosures.json';
import styles from './disclosures.module.css';

export const metadata = {
  title: 'Mandatory Disclosures & RTI | GMC Baramati',
  description: 'Statutory disclosures under NMC guidelines, MUHS affiliations, and Right to Information (RTI) officers at PAH GMC Baramati.',
};

export default function MandatoryDisclosuresPage() {
  return (
    <main className={styles.main}>
      <PageBanner
        title="Mandatory Disclosures & RTI Compliance"
        subtitle="Public disclosures mandated by the National Medical Commission (NMC), MUHS Nashik, and RTI Act 2005."
      />

      <div className="container">
        {/* Statutory Disclosures Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>NMC & University Statutory Disclosures</h2>
          <p className={styles.sectionLead}>
            As required by regulatory mandates, the following institutional records, affiliation approvals, and academic resources are available for public inspection:
          </p>

          <div className={styles.disclosureGrid}>
            {disclosuresData.statutory.map((item) => (
              <article key={item.id} className={styles.disclosureCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.badge}>{item.category}</span>
                  <FileText size={20} className={styles.cardIcon} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
                <Link href="/notices" className={styles.viewLink}>
                  View Official Document &rarr;
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Right to Information (RTI) Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Right to Information (RTI) Act 2005</h2>
          <div className={styles.rtiBox}>
            <div className={styles.rtiHeader}>
              <ShieldCheck size={28} className={styles.rtiIcon} />
              <div>
                <h3>{disclosuresData.rti.title}</h3>
                <p>{disclosuresData.rti.description}</p>
              </div>
            </div>

            <div className={styles.officerGrid}>
              {disclosuresData.rti.officers.map((officer, index) => (
                <div key={index} className={styles.officerCard}>
                  <UserCheck size={24} className={styles.officerIcon} />
                  <div>
                    <span className={styles.officerRole}>{officer.role}</span>
                    <h4 className={styles.officerDesignation}>{officer.designation}</h4>
                    <p className={styles.officerContact}>{officer.contact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}