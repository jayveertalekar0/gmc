import { NavItem } from '@/types';

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'About Us', 
    href: '/about',
    children: [
      { label: 'Overview', href: '/about' },
      { label: 'Principal Desk', href: '/about/principal' },
      { label: 'Vision & Mission', href: '/about/vision' },
      { label: 'Accreditation & Approvals', href: '/about/accreditation' }
    ]
  },
  { 
    label: 'Administration', 
    href: '/administration',
    children: [
      { label: 'Key Officials', href: '/administration' },
      { label: 'Committees', href: '/administration/committees' },
      { label: 'RTI', href: '/rti' }
    ]
  },
  { 
    label: 'Academics', 
    href: '/academics',
    children: [
      { label: 'MBBS Program', href: '/academics/mbbs' },
      { label: 'Postgraduate (MD/MS)', href: '/academics/pg' },
      { label: 'Academic Calendar', href: '/academics/calendar' },
      { label: 'Examination Notices', href: '/academics/exams' }
    ]
  },
  { label: 'Departments', href: '/departments' },
  { label: 'Faculty', href: '/faculty' },
  { 
    label: 'Admissions', 
    href: '/admissions',
    children: [
      { label: 'MBBS Admissions', href: '/admissions/mbbs' },
      { label: 'Fee Structure', href: '/admissions/fees' },
      { label: 'Anti-Ragging Cell', href: '/policies/anti-ragging' }
    ]
  },
  { label: 'Hospital & Services', href: '/hospital' },
  { label: 'Patients', href: '/patients' },
  { label: 'Notices', href: '/notices' },
  { label: 'Mandatory Disclosures', href: '/mandatory-disclosures' },
  { label: 'Contact', href: '/contact' }
];