import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { DocumentCard } from '@/components/common/DocumentCard';

export const metadata = {
  title: 'NMC Mandatory Disclosures | GMC Baramati',
  description: 'Official National Medical Commission (NMC) mandatory disclosure documents, fee structures, and institutional reports for GMC Baramati.',
};

export default function MandatoryDisclosuresPage() {
  return (
    <>
      <PageBanner 
        title="Mandatory Disclosures (NMC)" 
        subtitle="Statutory public disclosures required by the National Medical Commission (NMC)" 
      />
      <Breadcrumb items={[{ label: 'Mandatory Disclosures', href: '/mandatory-disclosures' }]} />

      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
          National Medical Commission (NMC) Information
        </h2>
        <p style={{ lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
          In compliance with the regulations of the National Medical Commission (formerly Medical Council of India), Government Medical College, Baramati publishes all institutional assessment reports, undergraduate/postgraduate seat matrices, faculty lists, and fee structures below.
        </p>

        <h3 style={{ fontSize: '1.2rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
          Official Disclosure Documents
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <DocumentCard 
            title="NMC Annual Inspection Self-Assessment Report & Bed Occupancy Data"
            fileSize="3.4 MB PDF"
            dateAdded="2026-10-10"
            documentUrl="/assets/documents/disclosures/nmc-assessment-report-2026.pdf"
          />
          <DocumentCard 
            title="Approved Fee Structure for MBBS Course (Admission Batch 2026-27)"
            fileSize="650 KB PDF"
            dateAdded="2026-09-20"
            documentUrl="/assets/documents/disclosures/mbbs-fee-structure-2026.pdf"
          />
          <DocumentCard 
            title="List of Approved Faculty Members & Departmental Staff Rosters"
            fileSize="1.8 MB PDF"
            dateAdded="2026-10-01"
            documentUrl="/assets/documents/disclosures/faculty-roster-2026.pdf"
          />
          <DocumentCard 
            title="Institutional Anti-Ragging Committee & Compliance Affidavit"
            fileSize="510 KB PDF"
            dateAdded="2026-08-15"
            documentUrl="/assets/documents/disclosures/anti-ragging-affidavit.pdf"
          />
        </div>
      </div>
    </>
  );
}