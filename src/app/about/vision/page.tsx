import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Target, Compass } from 'lucide-react';

export const metadata = { title: 'Vision & Mission | GMC Baramati' };

export default function VisionPage() {
  return (
    <>
      <PageBanner title="Vision & Mission" subtitle="Guiding principles of Government Medical College, Baramati" />
      <Breadcrumb items={[{ label: 'About', href: '/about' }, { label: 'Vision & Mission', href: '/about/vision' }]} />
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <div style={{ marginBottom: '2rem', backgroundColor: '#fff', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <Target size={22} color="var(--color-blue)" /> Our Vision
          </h2>
          <p style={{ lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            To emerge as a globally recognized center of excellence in medical education, biomedical research, and affordable tertiary healthcare delivery, fostering compassionate and clinically competent medical professionals.
          </p>
        </div>

        <div style={{ backgroundColor: '#fff', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <Compass size={22} color="var(--color-blue)" /> Our Mission
          </h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
            <li>Provide rigorous, evidence-based undergraduate and postgraduate medical training under MUHS and NMC standards.</li>
            <li>Deliver round-the-clock, accessible tertiary healthcare and emergency services to rural and urban communities.</li>
            <li>Promote innovative medical research and ethical clinical practices among faculty and students.</li>
          </ul>
        </div>
      </div>
    </>
  );
}