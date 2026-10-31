import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { User } from 'lucide-react';

export const metadata = { title: 'Principal & Dean Desk | GMC Baramati' };

export default function PrincipalPage() {
  return (
    <>
      <PageBanner title="From the Principal's Desk" subtitle="Leadership message and administrative vision" />
      <Breadcrumb items={[{ label: 'About', href: '/about' }, { label: 'Principal Desk', href: '/about/principal' }]} />
      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Message from the Dean</h2>
        <p style={{ lineHeight: '1.8', color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
          Welcome to Government Medical College, Baramati. Our commitment is rooted in fostering clinical brilliance, uncompromising ethical standards, and community healthcare outreach...
        </p>
      </div>
    </>
  );
}