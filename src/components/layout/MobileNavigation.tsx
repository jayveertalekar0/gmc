'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { PRIMARY_NAV_ITEMS } from '@/data/navigation';
import styles from './MobileNavigation.module.css';

export const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const toggleSubmenu = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.mobileNavWrapper}>
      <div className={`container ${styles.topBar}`}>
        <span className={styles.brandText}>GMC Baramati Menu</span>
        <button 
          onClick={toggleDrawer} 
          className={styles.menuButton}
          aria-label="Open Navigation Menu"
          aria-expanded={isOpen}
        >
          <Menu size={18} /> Menu
        </button>
      </div>

      {isOpen && <div className={styles.backdrop} onClick={toggleDrawer} aria-hidden="true" />}

      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`} role="dialog" aria-label="Mobile Navigation Drawer">
        <div className={styles.drawerHeader}>
          <h3>GMC Baramati</h3>
          <button onClick={toggleDrawer} className={styles.closeButton} aria-label="Close Menu">
            <X size={22} />
          </button>
        </div>

        <div className={styles.drawerBody}>
          <ul className={styles.navList}>
            {PRIMARY_NAV_ITEMS.map((item, idx) => (
              <li key={item.label}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link 
                    href={item.href} 
                    className={styles.navItemLink}
                    onClick={() => { if (!item.children) setIsOpen(false); }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button 
                      onClick={() => toggleSubmenu(idx)} 
                      style={{ padding: '8px', color: 'var(--color-navy)' }}
                      aria-label={`Toggle ${item.label} Submenu`}
                    >
                      <ChevronDown size={16} />
                    </button>
                  )}
                </div>

                {item.children && expandedIndex === idx && (
                  <ul className={styles.subList}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link 
                          href={child.href} 
                          className={styles.subItemLink}
                          onClick={() => setIsOpen(false)}
                        >
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
      </div>
    </div>
  );
};