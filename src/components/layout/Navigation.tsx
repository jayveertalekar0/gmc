'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { NAVIGATION_MENU, NavItem } from '@/data/navigation';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav} role="navigation" aria-label="Main Navigation">
      <div className="container">
        <ul className={styles.navList}>
          {NAVIGATION_MENU.map((item: NavItem, idx: number) => (
            <li key={`${item.label}-${idx}`} className={styles.navItem}>
              {item.children ? (
                <div className={styles.dropdownWrapper}>
                  <Link href={item.href} className={styles.navLink}>
                    <span>{item.label}</span>
                    <ChevronDown size={14} />
                  </Link>
                  <ul className={styles.dropdownMenu}>
                    {item.children.map((child, childIdx) => (
                      <li key={`${child.label}-${childIdx}`}>
                        <Link href={child.href} className={styles.dropdownLink}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};