import React from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  GraduationCap, 
  FileText, 
  ShieldCheck, 
  PhoneCall, 
  AlertTriangle,
  LucideIcon 
} from 'lucide-react';
import { HOMEPAGE_QUICK_LINKS } from '@/data/quickLinks';
import { SectionTitle } from '@/components/common/SectionTitle';
import styles from './QuickLinks.module.css';

const ICON_MAP: Record<string, LucideIcon> = {
  Calendar,
  GraduationCap,
  FileText,
  ShieldCheck,
  PhoneCall,
  AlertTriangle,
};

export const QuickLinks: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Quick Access Services">
      <div className="container">
        <SectionTitle 
          title="Quick Access Portals" 
          subtitle="Direct links to hospital services, student portals, and mandatory disclosures" 
        />

        <div className={styles.grid}>
          {HOMEPAGE_QUICK_LINKS.map((link) => {
            const IconComponent = ICON_MAP[link.iconName] || FileText;

            return (
              <Link 
                key={link.id} 
                href={link.href} 
                className={`${styles.card} ${link.isImportant ? styles.important : ''}`}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent size={22} />
                </div>
                <h3 className={styles.cardTitle}>{link.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};