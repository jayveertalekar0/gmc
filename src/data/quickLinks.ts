import { QuickLink } from '@/types';

export const HOMEPAGE_QUICK_LINKS: QuickLink[] = [
  {
    id: 'ql-01',
    title: 'OPD Schedule & Registration',
    href: '/patients',
    iconName: 'Calendar',
    isImportant: true,
  },
  {
    id: 'ql-02',
    title: 'MBBS Academic Portal',
    href: '/academics/mbbs',
    iconName: 'GraduationCap',
  },
  {
    id: 'ql-03',
    title: 'NMC Mandatory Disclosures',
    href: '/mandatory-disclosures',
    iconName: 'FileText',
    isImportant: true,
  },
  {
    id: 'ql-04',
    title: 'Right to Information (RTI)',
    href: '/rti',
    iconName: 'ShieldCheck',
  },
  {
    id: 'ql-05',
    title: 'Emergency & Casualty',
    href: '/hospital',
    iconName: 'PhoneCall',
    isImportant: true,
  },
  {
    id: 'ql-06',
    title: 'Anti-Ragging Directives',
    href: '/policies/anti-ragging',
    iconName: 'AlertTriangle',
  },
];