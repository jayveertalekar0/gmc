import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import styles from './Breadcrumb.module.css';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className={styles.breadcrumbNav} aria-label="Breadcrumb Navigation">
      <div className="container">
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/" className={styles.link} aria-label="Home">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={12} aria-hidden="true" />
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className={styles.item}>
                {isLast ? (
                  <span className={styles.current} aria-current="page">{item.label}</span>
                ) : (
                  <>
                    <Link href={item.href} className={styles.link}>{item.label}</Link>
                    <ChevronRight size={12} aria-hidden="true" />
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};