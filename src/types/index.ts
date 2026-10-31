// Core Data Types for GMC Baramati Institutional Web Application

export interface Notice {
  id: string;
  title: string;
  category: 'academic' | 'admission' | 'recruitment' | 'hospital' | 'general';
  datePublished: string; // ISO format (YYYY-MM-DD)
  isNew?: boolean;
  documentUrl?: string;
  externalLink?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isExternal?: boolean;
}

export interface Department {
  id: string;
  name: string;
  type: 'clinical' | 'para-clinical' | 'pre-clinical';
  headOfDepartment: string;
  description: string;
}

export interface QuickLink {
  id: string;
  title: string;
  href: string;
  iconName: string;
  isImportant?: boolean;
}