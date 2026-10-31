import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { DocumentCard } from '@/components/common/DocumentCard';

export const metadata = { title: 'Accreditation & Approvals | GMC Baramati' };

export default function AccreditationPage() {
  return (
    <>
      <PageBanner title="Accreditation & Approvals" subtitle="Statutory recognitions and institutional affiliations" />
      <Breadcrumb items={[{ label: 'About', href: '/about' }, { label: 'Accreditation', href: '/about/accreditation' }]} />
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Recognitions</h2>
        <p style={{ lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
          Government Medical College and General Hospital, Baramati is formally recognized and approved by regulatory bodies to conduct medical education and training.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <DocumentCard 
            title="National Medical Commission (NMC) Letter of Permission & Recognition Certificate"
            fileSize="1.1 MB PDF"
            dateAdded="2026-01-10"
            documentUrl="/assets/documents/disclosures/nmc-recognition.pdf"
          />
          <DocumentCard 
            title="Maharashtra University of Health Sciences (MUHS) Affiliation Continuation Letter"
            fileSize="820 KB PDF"
            dateAdded="2026-06-15"
            documentUrl="/assets/documents/disclosures/muhs-affiliation.pdf"
          />
        </div>
      </div>
    </>
  );
}