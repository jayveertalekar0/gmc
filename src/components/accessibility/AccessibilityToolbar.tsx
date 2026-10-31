'use client';

import React, { useState } from 'react';
import styles from './AccessibilityToolbar.module.css';

export const AccessibilityToolbar: React.FC = () => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extralarge'>('normal');
  const [isHighContrast, setIsHighContrast] = useState(false);

  const handleFontResize = (size: 'normal' | 'large' | 'extralarge') => {
    setFontSize(size);
    const root = document.documentElement;
    if (size === 'normal') root.style.fontSize = '16px';
    if (size === 'large') root.style.fontSize = '18px';
    if (size === 'extralarge') root.style.fontSize = '20px';
  };

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  return (
    <div className={styles.toolbar} role="region" aria-label="Accessibility Toolbar">
      <div className={`container ${styles.container}`}>
        <div className={styles.controls}>
          <span className={styles.label}>Text Size:</span>
          <button 
            onClick={() => handleFontResize('normal')} 
            className={styles.btn}
            aria-label="Default Text Size"
          >
            A
          </button>
          <button 
            onClick={() => handleFontResize('large')} 
            className={styles.btn}
            aria-label="Large Text Size"
          >
            A+
          </button>
          <button 
            onClick={() => handleFontResize('extralarge')} 
            className={styles.btn}
            aria-label="Extra Large Text Size"
          >
            A++
          </button>
        </div>

        <div className={styles.controls}>
          <button 
            onClick={toggleContrast} 
            className={styles.btn}
            aria-label="Toggle High Contrast Mode"
          >
            {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
          </button>
        </div>
      </div>
    </div>
  );
};