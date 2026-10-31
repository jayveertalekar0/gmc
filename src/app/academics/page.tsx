import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { DocumentCard } from '@/components/common/DocumentCard';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Academics & MBBS Program | GMC Baramati',
  description: 'Academic programs, MBBS course details, and university curriculum at GMC Baramati.',
};

export default function AcademicsPage() {
  return (
    <>
      <PageBanner 
        title="Academic Programs" 
        subtitle="Undergraduate Medical Education (MBBS) under MUHS & National Medical Commission" 
      />
      <Breadcrumb items={[{ label: 'Academics', href: '/academics' }]} />

      <div className="container" style={{ padding: '3rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
              Bachelor of Medicine & Bachelor of Surgery (MBBS)
            </h2>
            <p style={{ lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
              Government Medical College, Baramati offers a comprehensive 5.5-year MBBS degree program comprising 4.5 years of rigorous academic training and clinical rotations followed by a mandatory 1-year rotating internship.
            </p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
              Program Key Highlights
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-main)' }}>
                <CheckCircle2 size={18} color="var(--color-blue)" /> Annual Approved Intake: 100 Students
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-main)' }}>
                <CheckCircle2 size={18} color="var(--color-blue)" /> Affiliation: Maharashtra University of Health Sciences (MUHS), Nashik
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-main)' }}>
                <CheckCircle2 size={18} color="var(--color-blue)" /> Regulatory Approval: Recognized by National Medical Commission (NMC)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-main)' }}>
                <CheckCircle2 size={18} color="var(--color-blue)" /> Admission Basis: National Eligibility cum Entrance Test (NEET-UG)
              </li>
            </ul>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
              Academic Circulars & Regulations
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <DocumentCard 
                title="MBBS Curriculum Structure & Competency Based Medical Education Guidelines"
                fileSize="1.2 MB PDF"
                dateAdded="2026-09-15"
                documentUrl="/assets/documents/academics/mbbs-curriculum.pdf"
              />
              <DocumentCard 
                title="MUHS Academic Calendar 2026-27 for Undergraduate Medical Courses"
                fileSize="850 KB PDF"
                dateAdded="2026-10-01"
                documentUrl="/assets/documents/academics/muhs-calendar-2026.pdf"
              />
            </div>
          </div>

          <div>
            <div style={{ 
              backgroundColor: 'var(--color-white)', 
              border: '1px solid var(--color-border)', 
              borderRadius: '8px', 
              padding: '1.5rem',
              boxShadow: '0 4px 12px rgba(9,45,85,0.04)'
            }}>
              <h3 style={{ fontSize: '1.125rem', color: 'var(--color-navy)', marginBottom: '1rem', borderBottom: '2px solid var(--color-blue)', paddingBottom: '6px' }}>
                Quick Academic Links
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><a href="/departments" style={{ color: 'var(--color-blue)', fontSize: '0.875rem' }}>View All Departments</a></li>
                <li><a href="/faculty" style={{ color: 'var(--color-blue)', fontSize: '0.875rem' }}>Faculty Directory</a></li>
                <li><a href="/admissions" style={{ color: 'var(--color-blue)', fontSize: '0.875rem' }}>Admission Procedure</a></li>
                <li><a href="/notices" style={{ color: 'var(--color-blue)', fontSize: '0.875rem' }}>Examination Notices</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}