import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata = { title: 'Postgraduate Programs (MD/MS) | GMC Baramati' };

export default function PostgraduatePage() {
  return (
    <>
      <PageBanner title="Postgraduate Programs (MD/MS)" subtitle="Specialized residency and postgraduate medical training" />
      <Breadcrumb items={[{ label: 'Academics', href: '/academics' }, { label: 'Postgraduate', href: '/academics/pg' }]} />
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>PG Specializations</h2>
        <p style={{ lineHeight: '1.7', color: 'var(--color-text-main)' }}>
          GMC Baramati offers broad and super-specialty postgraduate residency training across clinical and para-clinical departments approved by the National Medical Commission (NMC).
        </p>
      </div>
    </>
  );
}