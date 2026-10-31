
import { Notice, QuickLink, Department } from '@/types';
import { OFFICIAL_NOTICES } from '@/data/notices';
import { HOMEPAGE_QUICK_LINKS } from '@/data/quickLinks';
import { DEPARTMENTS_DATA } from '@/data/departments';

/**
 * Centralized Data Access Layer (DAL)
 * Future Backend Integration Note:
 * To connect a live API/Database in the future, replace the return statements
 * in these async functions with fetch() calls to your backend endpoints.
 */

export async function getNotices(): Promise<Notice[]> {
  // SIMULATED API DELAY / FETCH
  return Promise.resolve(OFFICIAL_NOTICES);
}

export async function getQuickLinks(): Promise<QuickLink[]> {
  return Promise.resolve(HOMEPAGE_QUICK_LINKS);
}

export async function getDepartments(): Promise<Department[]> {
  return Promise.resolve(DEPARTMENTS_DATA);
}

export async function getDepartmentsByType(type: Department['type']): Promise<Department[]> {
  return Promise.resolve(DEPARTMENTS_DATA.filter((dept) => dept.type === type));
}