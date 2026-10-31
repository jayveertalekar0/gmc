import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata = {
  title: 'About Us | Government Medical College & General Hospital, Baramati',
  description: 'Learn about the history, vision, mission, and leadership of GMC Baramati.',
};

export default function AboutPage() {
  return (
    <>
      <PageBanner 
        title="About GMC Baramati" 
        subtitle="Established under the Directorate of Medical Education and Research, Government of Maharashtra" 
      />
      <Breadcrumb items={[{ label: 'About Us', href: '/about' }]} />

      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '1.5rem' }}>
          Institution Overview
        </h2>
        <p style={{ lineHeight: '1.8', color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
          Government Medical College & General Hospital, Baramati is a premier state-funded medical institution committed to delivering exceptional healthcare services, advanced medical training, and clinical research. Located in Baramati, Pune district, the college offers undergraduate (MBBS) and postgraduate medical training under the affiliation of Maharashtra University of Health Sciences (MUHS), Nashik and recognition by the National Medical Commission (NMC).
        </p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
          Vision & Mission
        </h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--color-text-main)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li><strong>Excellence in Education:</strong> Fostering rigorous academic curricula paired with hands-on clinical exposure in our teaching hospital.</li>
          <li><strong>Accessible Healthcare:</strong> Providing affordable, high-quality tertiary healthcare services to rural and urban communities across Pune and neighboring regions.</li>
          <li><strong>Ethical Practice:</strong> Instilling unwavering medical ethics, empathy, and professional integrity in every student.</li>
        </ul>
      </div>
    </>
  );
};