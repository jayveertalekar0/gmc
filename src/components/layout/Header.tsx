'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { NAVIGATION_MENU, NavItem } from '@/data/navigation';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const toggleHighContrast = () => {
    setIsHighContrast((prev) => {
      const nextState = !prev;
      if (nextState) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
      return nextState;
    });
  };

  return (
    <header className={styles.header} role="banner">
      {/* Top Accessibility Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <span>Punyashlok Ahilyadevi Holkar Government Medical College & General Hospital, Baramati</span>
          <button 
            onClick={toggleHighContrast} 
            className={styles.accessibilityBtn}
            aria-label="Toggle High Contrast Mode"
          >
            {isHighContrast ? <Sun size={14} /> : <Moon size={14} />}
            <span>{isHighContrast ? 'Standard' : 'High Contrast'}</span>
          </button>
        </div>
      </div>

      {/* Main Header Brand Bar */}
      <div className={styles.mainHeader}>
        <div className={`container ${styles.headerContainer}`}>
          <Link href="/" className={styles.logoGroup}>
            <div className={styles.logoBadge}>GMCB</div>
            <div>
              <h1 className={styles.title}>PAH GMC Baramati</h1>
              <p className={styles.subtitle}>शासकीय वैद्यकीय महाविद्यालय व सर्वोपचार रुग्णालय, बारामती</p>
            </div>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Single Unified Navigation Bar */}
      <nav 
        className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`} 
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className={`container ${styles.navContainer}`}>
          <ul className={styles.navList}>
            {NAVIGATION_MENU.map((item: NavItem, idx: number) => (
              <li key={`${item.label}-${idx}`} className={styles.navItem}>
                {item.children ? (
                  <div className={styles.dropdownWrapper}>
                    <button
                      className={styles.navDropdownTrigger}
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={openDropdown === item.label}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className={styles.chevron} />
                    </button>
                    <ul 
                      className={`${styles.dropdownMenu} ${
                        openDropdown === item.label ? styles.dropdownOpen : ''
                      }`}
                    >
                      {item.children.map((child, childIdx) => (
                        <li key={`${child.label}-${childIdx}`}>
                          <Link 
                            href={child.href} 
                            className={styles.dropdownLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link 
                    href={item.href} 
                    className={styles.navLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};