import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { DocumentCard } from '@/components/common/DocumentCard';

export const metadata = { title: 'Academic Calendar | GMC Baramati' };

export default function AcademicCalendarPage() {
  return (
    <>
      <PageBanner title="Academic Calendar" subtitle="Schedules, term dates, and examination timelines" />
      <Breadcrumb items={[{ label: 'Academics', href: '/academics' }, { label: 'Calendar', href: '/academics/calendar' }]} />
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>MUHS Academic Schedules</h2>
        <DocumentCard 
          title="Master Academic Calendar 2026-27 for Undergraduate Medical Batches"
          fileSize="950 KB PDF"
          dateAdded="2026-08-01"
          documentUrl="/assets/documents/academics/master-calendar.pdf"
        />
      </div>
    </>
  );
}