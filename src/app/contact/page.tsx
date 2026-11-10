import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';
import contactData from '@/data/contact.json';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact Us & Directions | GMC Baramati',
  description: 'Official address, phone contacts, email directories, and transit directions for Punyashlok Ahilyadevi Holkar Government Medical College & Hospital, Baramati.',
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <PageBanner
        title="Contact Us & Location"
        subtitle="Get in touch with the administration, hospital enquiry desks, or visit our campus in Baramati."
      />

      <div className="container">
        <div className={styles.contactGrid}>
          {/* Official Address & Info Card */}
          <div className={styles.infoCard}>
            <h2 className={styles.cardHeading}>Campus Location</h2>
            
            <div className={styles.infoRow}>
              <MapPin size={22} className={styles.infoIcon} />
              <div>
                <strong>Address:</strong>
                <p>{contactData.general.address}</p>
              </div>
            </div>

            <div className={styles.infoRow}>
              <Phone size={22} className={styles.infoIcon} />
              <div>
                <strong>Telephone / Helpline:</strong>
                <p>{contactData.general.phone.join(' / ')}</p>
              </div>
            </div>

            <div className={styles.infoRow}>
              <Mail size={22} className={styles.infoIcon} />
              <div>
                <strong>Official Email:</strong>
                <p>{contactData.general.email}</p>
              </div>
            </div>

            <div className={styles.infoRow}>
              <Clock size={22} className={styles.infoIcon} />
              <div>
                <strong>Office Hours:</strong>
                <p>{contactData.general.workingHours}</p>
              </div>
            </div>
          </div>

          {/* Key Section Extension Contacts */}
          <div className={styles.extensionBox}>
            <h2 className={styles.cardHeading}>Departmental Contacts</h2>
            <div className={styles.extList}>
              {contactData.departments.map((dept, index) => (
                <div key={index} className={styles.extCard}>
                  <h3>{dept.title}</h3>
                  <p><strong>Phone:</strong> {dept.phone}</p>
                  <p><strong>Email:</strong> {dept.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transit & How to Reach */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How to Reach Campus</h2>
          <div className={styles.transitGrid}>
            <div className={styles.transitCard}>
              <Building2 size={24} className={styles.transitIcon} />
              <h3>By Road</h3>
              <p>Located in the MIDC Area of Baramati. Regularly connected via MSRTC bus corridors from Pune (100 km), Daund, and Solapur.</p>
            </div>
            <div className={styles.transitCard}>
              <Building2 size={24} className={styles.transitIcon} />
              <h3>By Rail</h3>
              <p>Nearest major railway junction is <strong>Daund Junction (DD)</strong> (approx. 40 km) and <strong>Baramati Railway Station (BRMT)</strong> (approx. 6 km).</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}