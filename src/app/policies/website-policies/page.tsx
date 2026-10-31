import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ShieldCheck, Lock, RefreshCw, Eye, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Website Policies | GMC Baramati',
  description: 'Official website policies including Privacy Policy, Copyright Policy, Hyperlinking Policy, and Content Disclaimer for Government Medical College, Baramati.',
};

export default function WebsitePoliciesPage() {
  return (
    <>
      <PageBanner 
        title="Website Policies" 
        subtitle="Terms of use, privacy standards, copyright compliance, and hyperlinking guidelines of the institutional portal."
      />
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' }, 
          { label: 'Website Policies', href: '/policies/website-policies' }
        ]} 
      />

      <div className="container" style={{ padding: '3rem 1rem', maxWidth: '1000px' }}>
        
        {/* Privacy Policy */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Lock size={24} color="var(--color-blue)" />
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700 }}>1. Privacy Policy</h2>
          </div>
          <p style={{ lineHeight: '1.7', opacity: 0.9, marginBottom: '1rem' }}>
            Government Medical College & General Hospital, Baramati does not automatically collect any specific personal information (such as name, phone number, or email address) that allows us to identify you individually when you visit this website.
          </p>
          <p style={{ lineHeight: '1.7', opacity: 0.9 }}>
            If you choose to provide personal details through contact forms or feedback submissions, the information provided is used strictly to process your specific request or inquiry and is never shared or sold to third-party organizations.
          </p>
        </section>

        {/* Copyright Policy */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <ShieldCheck size={24} color="var(--color-blue)" />
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700 }}>2. Copyright Policy</h2>
          </div>
          <p style={{ lineHeight: '1.7', opacity: 0.9 }}>
            Material featured on this website may be reproduced free of charge in any format or media without requiring specific permission, subject to the material being reproduced accurately and not being used in a derogatory manner or misleading context. Where the material is being published or issued to others, the source must be prominently acknowledged as <strong>Government Medical College, Baramati</strong>.
          </p>
        </section>

        {/* Hyperlinking Policy */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <ExternalLink size={24} color="var(--color-blue)" />
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700 }}>3. Hyperlinking Policy</h2>
          </div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem' }}>Links to External Websites</h3>
          <p style={{ lineHeight: '1.7', opacity: 0.9, marginBottom: '1rem' }}>
            At many places in this website, you will find links to other government or autonomous organization websites. GMC Baramati is not responsible for the contents and reliability of the linked websites and does not necessarily endorse the views expressed in them.
          </p>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem' }}>Links to GMC Baramati Portal</h3>
          <p style={{ lineHeight: '1.7', opacity: 0.9 }}>
            Prior permission is required before hyperlinks are directed from any website to this portal. Permission for the same, stating the nature of the content on the pages from where the link has to be given, should be sent to the Principal/Dean office.
          </p>
        </section>

        {/* Content Review & Archival Policy */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <RefreshCw size={24} color="var(--color-blue)" />
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700 }}>4. Content Review & Archival Policy (CAP)</h2>
          </div>
          <p style={{ lineHeight: '1.7', opacity: 0.9 }}>
            In accordance with GIGW 3.0 guidelines, institutional notices, tender documents, and academic circulars are systematically reviewed and updated. Documents exceeding their validity period are automatically transferred to the Institutional Digital Archive for public audit access.
          </p>
        </section>

        {/* Disclaimer */}
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Eye size={24} color="var(--color-blue)" />
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700 }}>5. Disclaimer</h2>
          </div>
          <p style={{ lineHeight: '1.7', opacity: 0.9 }}>
            This portal is designed, developed, and maintained by Government Medical College & General Hospital, Baramati. Although every effort is made to ensure accuracy and correctness of content, the information contained herein should not be construed as a statement of law or used for any legal purposes.
          </p>
        </section>

      </div>
    </>
  );
}