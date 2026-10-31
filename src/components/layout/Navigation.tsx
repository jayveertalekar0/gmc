import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { PRIMARY_NAV_ITEMS } from '@/data/navigation';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.navWrapper} aria-label="Main Desktop Navigation">
      <div className="container">
        <ul className={styles.navList}>
          {PRIMARY_NAV_ITEMS.map((item) => (
            <li key={item.label} className={styles.navItem}>
              <Link 
                href={item.href} 
                className={styles.navLink}
                aria-haspopup={!!item.children}
                aria-expanded={item.children ? 'false' : undefined}
              >
                {item.label}
                {item.children && <ChevronDown size={14} aria-hidden="true" />}
              </Link>

              {item.children && (
                <ul className={styles.dropdown} role="menu">
                  {item.children.map((child) => (
                    <li key={child.label} className={styles.dropdownItem} role="none">
                      <Link href={child.href} role="menuitem">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};