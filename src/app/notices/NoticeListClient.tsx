'use client';

import React, { useState } from 'react';
import { Notice } from '@/types';
import { NoticeCard } from '@/components/common/NoticeCard';

interface NoticeListClientProps {
  initialNotices: Notice[];
}

export const NoticeListClient: React.FC<NoticeListClientProps> = ({ initialNotices }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { label: 'All Notices', value: 'all' },
    { label: 'Academic', value: 'academic' },
    { label: 'Admissions', value: 'admission' },
    { label: 'Recruitment', value: 'recruitment' },
    { label: 'Hospital', value: 'hospital' },
    { label: 'General', value: 'general' },
  ];

  const filteredNotices = selectedCategory === 'all'
    ? initialNotices
    : initialNotices.filter((n) => n.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Buttons */}
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        flexWrap: 'wrap', 
        marginBottom: '2rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid var(--color-border)' 
      }}>
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            style={{
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid var(--color-border)',
              backgroundColor: selectedCategory === cat.value ? 'var(--color-navy)' : 'var(--color-white)',
              color: selectedCategory === cat.value ? 'var(--color-white)' : 'var(--color-text-main)',
              transition: 'all 0.15s ease'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Notices Grid */}
      {filteredNotices.length > 0 ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '1.25rem' 
        }}>
          {filteredNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      ) : (
        <div style={{ padding: '3rem 0', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
          <p>No notices found under this category.</p>
        </div>
      )}
    </div>
  );
};