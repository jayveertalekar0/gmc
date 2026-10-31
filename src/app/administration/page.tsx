import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata = { title: 'Key Officials & Administration | GMC Baramati' };

export default function AdministrationPage() {
  return (
    <>
      <PageBanner title="Key Administrative Officials" subtitle="Leadership team overseeing academic and hospital wings" />
      <Breadcrumb items={[{ label: 'Administration', href: '/administration' }]} />
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1.5rem' }}>Administrative Roster</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: '#fff', border: '1px solid var(--color-border)', padding: '1.25rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-navy)' }}>Dr. Dean / Principal</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>Head of Institution</p>
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--color-border)', padding: '1.25rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-navy)' }}>Medical Superintendent</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>General Hospital Operations</p>
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--color-border)', padding: '1.25rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-navy)' }}>Administrative Officer</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>Establishment & Public Records</p>
          </div>
        </div>
      </div>
    </>
  );
}