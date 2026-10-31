import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata = { title: 'MBBS Program | GMC Baramati' };

export default function MbbsProgramPage() {
  return (
    <>
      <PageBanner title="MBBS Course Curriculum" subtitle="Undergraduate medical education phases and training structure" />
      <Breadcrumb items={[{ label: 'Academics', href: '/academics' }, { label: 'MBBS Program', href: '/academics/mbbs' }]} />
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Course Structure</h2>
        <p style={{ lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
          The MBBS curriculum follows the Competency-Based Medical Education (CBME) guidelines mandated by the National Medical Commission across 4 professional phases.
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
          <li><strong>Phase 1 (1 Year):</strong> Pre-clinical subjects (Anatomy, Physiology, Biochemistry)</li>
          <li><strong>Phase 2 (1.5 Years):</strong> Para-clinical subjects (Pathology, Microbiology, Pharmacology) & Forensic Medicine</li>
          <li><strong>Phase 3 Part 1 (1 Year):</strong> Eye, ENT, Community Medicine, and Forensic Clinical postings</li>
          <li><strong>Phase 3 Part 2 (1 Year):</strong> General Medicine, Surgery, Pediatrics, and OBGY</li>
          <li><strong>Internship (1 Year):</strong> Compulsory Rotating Medical Internship in hospital wings</li>
        </ul>
      </div>
    </>
  );
}