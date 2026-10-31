import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata = { title: 'Faculty Directory | GMC Baramati' };

export default function FacultyPage() {
  return (
    <>
      <PageBanner title="Faculty Directory" subtitle="Professors, Associate Professors, and Assistant Professors" />
      <Breadcrumb items={[{ label: 'Faculty', href: '/faculty' }]} />
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Departmental Faculty Rosters</h2>
        <p style={{ lineHeight: '1.7', color: 'var(--color-text-main)' }}>
          Explore the complete list of qualified medical educators and clinical specialists across all pre-clinical, para-clinical, and clinical departments.
        </p>
      </div>
    </>
  );
}