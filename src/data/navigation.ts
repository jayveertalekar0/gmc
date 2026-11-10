export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAVIGATION_MENU: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About PAH GMC Baramati', href: '/about#overview' },
      { label: "Dean's Desk", href: '/about#deans-desk' },
      { label: 'RTI Information (17 BABI)', href: '/about#rti' },
    ],
  },
  { label: 'Departments', href: '/departments' },
  {
    label: 'Student',
    href: '/admissions',
    children: [
      { label: 'Courses & Admissions', href: '/admissions' },
      { label: 'Committees & Welfare', href: '/student/committees' },
      { label: 'Faculty Directory', href: '/faculty' },
    ],
  },
  {
    label: 'NMC',
    href: '/mandatory-disclosures/nmc',
    children: [
      { label: 'Government Approval', href: '/mandatory-disclosures/nmc#nmc-approval' },
      { label: 'Department Wise Faculty', href: '/faculty' },
      { label: 'Clinical Material Statistics', href: '/mandatory-disclosures/nmc#clinical-material' },
    ],
  },
  {
    label: 'MUHS',
    href: '/mandatory-disclosures/muhs',
    children: [
      { label: 'MUHS Mandate & Affiliation', href: '/mandatory-disclosures/muhs#muhs-affiliation' },
      { label: 'Academic & Exam Timetable', href: '/mandatory-disclosures/muhs#muhs-timetable' },
    ],
  },
  { label: 'Quotation', href: '/quotations' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
];

export const PRIMARY_NAV_ITEMS = NAVIGATION_MENU;