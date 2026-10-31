import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Patient & OPD Information | GMC Baramati',
  description: 'Outpatient registration timings, specialty clinic schedules, and visitor guidelines at GMC Hospital, Baramati.',
};

export default function PatientsPage() {
  return (
    <>
      <PageBanner 
        title="Patient & OPD Information" 
        subtitle="Registration timings, outpatient procedures, and public healthcare facilities" 
      />
      <Breadcrumb items={[{ label: 'Patients', href: '/patients' }]} />

      <div className="container" style={{ padding: '3rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
              Outpatient Department (OPD) Schedule
            </h2>

            <div style={{ 
              backgroundColor: 'var(--color-white)', 
              border: '1px solid var(--color-border)', 
              borderRadius: '8px', 
              padding: '1.5rem',
              marginBottom: '2rem' 
            }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <Clock size={18} color="var(--color-blue)" /> Daily OPD Registration Timings
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>
                <li><strong>Monday to Saturday (Morning Session):</strong> 08:30 AM – 12:30 PM</li>
                <li><strong>Sunday & Public Holidays:</strong> Emergency / Casualty Services Only (24 Hours)</li>
                <li><strong>OPD Registration Fee:</strong> Nominal State-prescribed fee (Free under government health schemes)</li>
              </ul>
            </div>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
              Steps for OPD Registration
            </h3>
            <ol style={{ paddingLeft: '1.25rem', lineHeight: '1.8', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
              <li>Visit the OPD Registration Counter located at the Hospital Main Block entrance.</li>
              <li>Present valid identity documentation (Aadhaar Card / Ration Card) for scheme verification.</li>
              <li>Collect your OPD case paper indicating the assigned department room number.</li>
              <li>Proceed to the respective department waiting area for consultation.</li>
            </ol>
          </div>

          <div>
            <div style={{ 
              backgroundColor: 'var(--color-light-blue)', 
              border: '1px solid var(--color-blue)', 
              borderRadius: '8px', 
              padding: '1.5rem' 
            }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <AlertCircle size={18} color="var(--color-navy)" /> Patient Rights & Responsibilities
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', lineHeight: '1.5' }}>
                Patients receive compassionate care regardless of social status. Please follow hospital visitor guidelines and maintain cleanliness across ward premises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}