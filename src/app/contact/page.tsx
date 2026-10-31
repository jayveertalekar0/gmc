import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Government Medical College & General Hospital, Baramati',
  description: 'Address, phone directory, emergency helpline, and campus map for GMC Baramati.',
};

export default function ContactPage() {
  return (
    <>
      <PageBanner 
        title="Contact Us" 
        subtitle="Get in touch with administrative offices, hospital casualty, or academic departments" 
      />
      <Breadcrumb items={[{ label: 'Contact Us', href: '/contact' }]} />

      <div className="container" style={{ padding: '3rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          
          {/* Main Postal Address */}
          <div style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', borderBottom: '2px solid var(--color-blue)', paddingBottom: '6px' }}>
              <Building2 size={20} color="var(--color-blue)" /> Campus Address
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', lineHeight: '1.7' }}>
              <strong>Government Medical College & General Hospital</strong><br />
              Plot No. R-1, MIDC Area, Opp. Women’s Hospital,<br />
              Baramati, District Pune,<br />
              Maharashtra – 413102, India
            </p>
          </div>

          {/* Key Helplines & Emails */}
          <div style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', borderBottom: '2px solid var(--color-blue)', paddingBottom: '6px' }}>
              <Phone size={20} color="var(--color-blue)" /> Key Phone Numbers
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>
              <li><strong>24x7 Emergency Casualty:</strong> 02112-295000</li>
              <li><strong>Dean Office:</strong> 02112-295001</li>
              <li><strong>Student Academic Section:</strong> 02112-295002</li>
              <li><strong>Hospital Reception Desk:</strong> 02112-295003</li>
            </ul>
          </div>

          {/* Email Contacts */}
          <div style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', borderBottom: '2px solid var(--color-blue)', paddingBottom: '6px' }}>
              <Mail size={20} color="var(--color-blue)" /> Official Emails
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>
              <li><strong>Principal & Dean:</strong> dean.gmcbaramati@gmail.com</li>
              <li><strong>Academic Inquiries:</strong> academics.gmcbaramati@gmail.com</li>
              <li><strong>RTI Cell:</strong> rti.gmcbaramati@gmail.com</li>
            </ul>
          </div>

        </div>

        {/* Map Section Placeholder */}
        <div style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={20} color="var(--color-blue)" /> Location & Map
          </h3>
          <div style={{ width: '100%', height: '300px', backgroundColor: 'var(--color-light-blue)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-navy)', fontWeight: 600 }}>
            Google Maps Embed Container (MIDC Area, Baramati, Maharashtra)
          </div>
        </div>
      </div>
    </>
  );
}