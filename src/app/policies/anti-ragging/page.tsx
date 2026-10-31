import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { DocumentCard } from '@/components/common/DocumentCard';
import { ShieldAlert } from 'lucide-react';

export const metadata = { title: 'Anti-Ragging Cell | GMC Baramati' };

export default function AntiRaggingPage() {
  return (
    <>
      <PageBanner title="Anti-Ragging Cell & Policies" subtitle="Zero-tolerance policy towards ragging in compliance with NMC guidelines" />
      <Breadcrumb items={[{ label: 'Admissions', href: '/admissions' }, { label: 'Anti-Ragging', href: '/policies/anti-ragging' }]} />
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <div style={{ backgroundColor: '#fff5f5', border: '2px solid #feb2b2', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ShieldAlert size={32} color="#c53030" />
          <div>
            <h2 style={{ fontSize: '1.25rem', color: '#c53030', marginBottom: '4px' }}>Zero Tolerance Policy</h2>
            <p style={{ color: '#742a2a', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Government Medical College, Baramati maintains a strict zero-tolerance policy against ragging. Any form of ragging within campus hostels or college premises is a punishable offense under law.
            </p>
          </div>
        </div>

        <h3 style={{ fontSize: '1.2rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Anti-Ragging Documents & Helpline</h3>
        <DocumentCard 
          title="National Anti-Ragging Helpline & Institutional Committee Contact Members"
          fileSize="450 KB PDF"
          dateAdded="2026-08-01"
          documentUrl="/assets/documents/policies/anti-ragging-committee.pdf"
        />
      </div>
    </>
  );
}