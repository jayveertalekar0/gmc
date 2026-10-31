import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { DocumentCard } from '@/components/common/DocumentCard';

export const metadata = { title: 'Fee Structure | GMC Baramati' };

export default function FeesPage() {
  return (
    <>
      <PageBanner title="Fee Structure & Admissions" subtitle="Approved tuition fees, hostel charges, and caution deposits" />
      <Breadcrumb items={[{ label: 'Admissions', href: '/admissions' }, { label: 'Fee Structure', href: '/admissions/fees' }]} />
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>MBBS & PG Fee Schedules</h2>
        <DocumentCard 
          title="Official Government Fee Structure for Academic Year 2026-27"
          fileSize="520 KB PDF"
          dateAdded="2026-09-01"
          documentUrl="/assets/documents/disclosures/mbbs-fee-structure-2026.pdf"
        />
      </div>
    </>
  );
}