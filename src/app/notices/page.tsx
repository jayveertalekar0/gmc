import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { getNotices } from '@/lib/dataService';
import { NoticeListClient } from './NoticeListClient';

export const metadata = {
  title: 'Official Notices & Circulars | GMC Baramati',
  description: 'View and download recent academic timetables, admission updates, recruitment circulars, and hospital notices from GMC Baramati.',
};

export default async function NoticesPage() {
  // Fetch initial dataset via Data Access Layer
  const notices = await getNotices();

  return (
    <>
      <PageBanner 
        title="Official Notices & Circulars" 
        subtitle="Archive of institutional announcements, exam schedules, recruitment notices, and general circulars" 
      />
      <Breadcrumb items={[{ label: 'Notices', href: '/notices' }]} />

      <div className="container" style={{ padding: '3rem 1rem' }}>
        <NoticeListClient initialNotices={notices} />
      </div>
    </>
  );
}