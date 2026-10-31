import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata = { title: 'Institutional Committees | GMC Baramati' };

export default function CommitteesPage() {
  return (
    <>
      <PageBanner title="Institutional Committees" subtitle="Statutory and administrative committees ensuring campus welfare" />
      <Breadcrumb items={[{ label: 'Administration', href: '/administration' }, { label: 'Committees', href: '/administration/committees' }]} />
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Active Committees</h2>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
          <li>Anti-Ragging Committee & Squad</li>
          <li>Internal Complaints Committee (ICC)</li>
          <li>Institutional Ethics Committee (IEC) for Human Research</li>
          <li>Pharmacovigilance & Hospital Infection Control Committee</li>
        </ul>
      </div>
    </>
  );
}