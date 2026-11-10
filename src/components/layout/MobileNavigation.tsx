'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAVIGATION_MENU, NavItem } from '@/data/navigation';
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
            {NAVIGATION_MENU.map((item: NavItem, idx: number) => (
              <li key={`${item.label}-${idx}`} className={styles.navListItem}>
                <div className={styles.itemRow}>
                  <Link 
                    href={item.href} 
                    className={styles.navItemLink}
                    onClick={() => setIsOpen(true)} // Close drawer on any navigation link click
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button 
                      onClick={() => toggleSubmenu(idx)} 
                      className={`${styles.chevronBtn} ${expandedIndex === idx ? styles.rotated : ''}`}
                      aria-label={`Toggle ${item.label} Submenu`}
                    >
                      <ChevronDown size={16} />
                    </button>
                  )}
                </div>

                {item.children && expandedIndex === idx && (
                  <ul className={styles.subList}>
                    {item.children.map((child, childIdx) => (
                      <li key={`${child.label}-${childIdx}`}>
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