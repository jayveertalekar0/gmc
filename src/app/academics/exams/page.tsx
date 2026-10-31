import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { DocumentCard } from '@/components/common/DocumentCard';

export const metadata = { title: 'Examination Notices | GMC Baramati' };

export default function ExamNoticesPage() {
  return (
    <>
      <PageBanner title="Examination Notices & Timetables" subtitle="University theory/practical exam schedules and hall ticket updates" />
      <Breadcrumb items={[{ label: 'Academics', href: '/academics' }, { label: 'Exams', href: '/academics/exams' }]} />
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Recent Examination Circulars</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <DocumentCard 
            title="MUHS Winter 2026 Theory Examination Time Table & Guidelines"
            fileSize="720 KB PDF"
            dateAdded="2026-10-12"
            documentUrl="/assets/documents/notices/exam-timetable-winter-2026.pdf"
          />
        </div>
      </div>
    </>
  );
}