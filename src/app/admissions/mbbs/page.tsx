import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata = { title: 'MBBS Admissions | GMC Baramati' };

export default function MbbsAdmissionsPage() {
  return (
    <>
      <PageBanner title="MBBS Admissions 2026-27" subtitle="Eligibility criteria, NEET counseling process, and document verification" />
      <Breadcrumb items={[{ label: 'Admissions', href: '/admissions' }, { label: 'MBBS Admissions', href: '/admissions/mbbs' }]} />
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Admission Eligibility & Guidelines</h2>
        <p style={{ lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
          Admissions to the 100 annual MBBS seats at Government Medical College, Baramati are conducted strictly through centralized counseling based on national NEET-UG merit scores.
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
          <li>Qualification in NEET-UG conducted by the National Testing Agency (NTA).</li>
          <li>Participation in State Common Entrance Test Cell (CETCELL Maharashtra) counseling rounds.</li>
          <li>Original document verification at the institutional reporting desk during designated dates.</li>
        </ul>
      </div>
    </>
  );
}