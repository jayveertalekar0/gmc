import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { DocumentCard } from '@/components/common/DocumentCard';
import { ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'MBBS Admissions 2026 | GMC Baramati',
  description: 'Information regarding MBBS admissions, intake capacity, fee structure, and counseling guidelines for Government Medical College, Baramati.',
};

export default function AdmissionsPage() {
  return (
    <>
      <PageBanner 
        title="MBBS Admissions 2026-27" 
        subtitle="Official guidelines, intake capacity, fee structures, and admission schedules for undergraduate medical courses."
      />

      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '1000px' }}>
        
        {/* Important Notice Box */}
        <div style={{ backgroundColor: 'var(--color-bg, #f5f8fc)', border: '2px solid var(--color-blue)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
          <ShieldAlert size={28} color="var(--color-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>Important Admission Notice</h2>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.9 }}>
              Admissions to the MBBS course at Government Medical College, Baramati are strictly conducted through National Eligibility cum Entrance Test (NEET-UG) centralized counseling managed by the Medical Counselling Committee (MCC) and State CET Cell Maharashtra.
            </p>
          </div>
        </div>

        {/* Quick Highlights */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Key Admission Details</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem', background: 'var(--color-white)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Intake Capacity</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-blue)' }}>100 Seats</p>
              <p style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '4px' }}>Approved by NMC & MUHS Nashik</p>
            </div>

            <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem', background: 'var(--color-white)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Qualifying Exam</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-blue)' }}>NEET-UG 2026</p>
              <p style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '4px' }}>Mandatory centralized counseling</p>
            </div>
          </div>
        </div>

        {/* Official Documents & Circulars */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Admission Circulars & Fee Structures</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <DocumentCard 
            title="MBBS Fee Structure & Hostel Charges 2026-27"
            fileSize="1.2 MB PDF"
            dateAdded="2026-08-15"
            documentUrl="/assets/documents/admissions/fee-structure-2026.pdf"
          />
          <DocumentCard 
            title="Document Verification Checklist for Reporting Students"
            fileSize="850 KB PDF"
            dateAdded="2026-08-10"
            documentUrl="/assets/documents/admissions/document-checklist.pdf"
          />
          <DocumentCard 
            title="Institutional Information Brochure 2026"
            fileSize="3.4 MB PDF"
            dateAdded="2026-08-01"
            documentUrl="/assets/documents/admissions/brochure-2026.pdf"
          />
        </div>

      </div>
    </>
  );
}