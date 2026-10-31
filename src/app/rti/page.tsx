import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ShieldCheck, Mail, Phone } from 'lucide-react';

export const metadata = {
  title: 'Right to Information (RTI) | GMC Baramati',
  description: 'Right to Information officers, public authority details, and application procedures for GMC Baramati.',
};

export default function RtiPage() {
  return (
    <>
      <PageBanner 
        title="Right to Information (RTI)" 
        subtitle="Transparency and accountability under the Right to Information Act, 2005" 
      />
      <Breadcrumb items={[{ label: 'RTI', href: '/rti' }]} />

      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
          RTI Act Implementation at GMC Baramati
        </h2>
        <p style={{ lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
          In accordance with Section 4(1)(b) of the Right to Information Act, 2005, Government Medical College and General Hospital, Baramati maintains proactive disclosure of administrative actions, expenditure, and institutional records.
        </p>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
          Designated RTI Officers
        </h3>

        <div style={{ 
          backgroundColor: 'var(--color-white)', 
          border: '1px solid var(--color-border)', 
          borderRadius: '8px', 
          padding: '1.5rem', 
          marginBottom: '2rem',
          boxShadow: '0 2px 6px rgba(9,45,85,0.03)'
        }}>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '8px' }}>
            Public Information Officer (PIO)
          </h4>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', lineHeight: '1.6' }}>
            Administrative Officer / Registrar<br />
            Government Medical College & General Hospital, Baramati<br />
            Pune District, Maharashtra - 413102<br />
            <strong>Email:</strong> rti.gmcbaramati@gmail.com<br />
            <strong>Phone:</strong> 02112-295000
          </p>
        </div>

        <div style={{ 
          backgroundColor: 'var(--color-white)', 
          border: '1px solid var(--color-border)', 
          borderRadius: '8px', 
          padding: '1.5rem',
          boxShadow: '0 2px 6px rgba(9,45,85,0.03)'
        }}>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '8px' }}>
            First Appellate Authority (FAA)
          </h4>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', lineHeight: '1.6' }}>
            Dean / Principal<br />
            Government Medical College & General Hospital, Baramati<br />
            Pune District, Maharashtra - 413102<br />
            <strong>Email:</strong> dean.gmcbaramati@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}