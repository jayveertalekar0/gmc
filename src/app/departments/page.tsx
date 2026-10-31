import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { getDepartments } from '@/lib/dataService';
import { Department } from '@/types';

export const metadata = {
  title: 'Departments | Government Medical College & General Hospital, Baramati',
  description: 'Explore Pre-Clinical, Para-Clinical, and Clinical departments at GMC Baramati.',
};

export default async function DepartmentsPage() {
  // Fetch dataset via Data Access Layer
  const departments: Department[] = await getDepartments();

  const preClinical = departments.filter((d) => d.type === 'pre-clinical');
  const paraClinical = departments.filter((d) => d.type === 'para-clinical');
  const clinical = departments.filter((d) => d.type === 'clinical');

  const renderSection = (title: string, items: Department[]) => (
    <div style={{ marginBottom: '2.5rem' }}>
      <h3 style={{ 
        fontSize: '1.25rem', 
        color: 'var(--color-navy)', 
        borderBottom: '2px solid var(--color-blue)', 
        paddingBottom: '6px', 
        marginBottom: '1rem' 
      }}>
        {title} ({items.length})
      </h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1rem' 
      }}>
        {items.map((dept) => (
          <div key={dept.id} style={{ 
            backgroundColor: 'var(--color-white)', 
            border: '1px solid var(--color-border)', 
            borderRadius: '6px', 
            padding: '1.25rem',
            boxShadow: '0 2px 6px rgba(9,45,85,0.03)'
          }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '4px' }}>
              {dept.name}
            </h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
              HOD: {dept.headOfDepartment}
            </span>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', marginTop: '8px', lineHeight: '1.5' }}>
              {dept.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <PageBanner 
        title="Academic & Clinical Departments" 
        subtitle="Specialized medical departments across pre-clinical, para-clinical, and clinical wings" 
      />
      <Breadcrumb items={[{ label: 'Departments', href: '/departments' }]} />

      <div className="container" style={{ padding: '3rem 1rem' }}>
        {renderSection('Pre-Clinical Departments', preClinical)}
        {renderSection('Para-Clinical Departments', paraClinical)}
        {renderSection('Clinical Departments & Hospital Wings', clinical)}
      </div>
    </>
  );
}