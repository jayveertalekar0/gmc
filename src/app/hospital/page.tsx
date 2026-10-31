import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ShieldCheck, PhoneCall, Activity, HeartPulse } from 'lucide-react';

export const metadata = {
  title: 'Hospital & Clinical Services | GMC Baramati',
  description: 'Explore the tertiary healthcare facilities, ICUs, casualty, diagnostic laboratories, and operation theaters at GMC Hospital, Baramati.',
};

export default function HospitalPage() {
  return (
    <>
      <PageBanner 
        title="General Hospital & Healthcare Services" 
        subtitle="500+ Bedded Tertiary Care Teaching Hospital serving Baramati and surrounding regions" 
      />
      <Breadcrumb items={[{ label: 'Hospital Services', href: '/hospital' }]} />

      <div className="container" style={{ padding: '3rem 1rem' }}>
        {/* Emergency Callout Box */}
        <div style={{
          backgroundColor: '#fff5f5',
          border: '2px solid #feb2b2',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', color: '#c53030', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <PhoneCall size={20} color="#c53030" /> 24x7 Casualty & Emergency Medical Helpline
            </h2>
            <p style={{ color: '#742a2a', fontSize: '0.875rem', marginTop: '4px' }}>
              Round-the-clock emergency medical services, trauma care, and critical care transport.
            </p>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#9b2c2c' }}>
            02112-295000
          </div>
        </div>

        {/* Hospital Facilities Grid */}
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-blue)', paddingBottom: '6px' }}>
          Key Hospital Infrastructure & Services
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ backgroundColor: '#fff', border: '1px solid var(--color-border)', padding: '1.25rem', borderRadius: '6px' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Activity size={18} color="var(--color-blue)" /> Intensive Care Units (ICU)
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', lineHeight: '1.5' }}>
              Specialized Medical ICU, Surgical ICU, Neonatal ICU (NICU), Pediatric ICU (PICU), and Intensive Coronary Care Unit (ICCU).
            </p>
          </div>

          <div style={{ backgroundColor: '#fff', border: '1px solid var(--color-border)', padding: '1.25rem', borderRadius: '6px' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <HeartPulse size={18} color="var(--color-blue)" /> Operation Theaters
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', lineHeight: '1.5' }}>
              State-of-the-art modular operation theaters equipped for major general surgeries, orthopedic procedures, and OBGY surgeries.
            </p>
          </div>

          <div style={{ backgroundColor: '#fff', border: '1px solid var(--color-border)', padding: '1.25rem', borderRadius: '6px' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <ShieldCheck size={18} color="var(--color-blue)" /> Government Health Schemes
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', lineHeight: '1.5' }}>
              Cashless healthcare coverage under Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY) and Ayushman Bharat PM-JAY.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}