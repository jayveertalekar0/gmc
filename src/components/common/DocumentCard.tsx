import React from 'react';
import { FileText, Download } from 'lucide-react';
import styles from './DocumentCard.module.css';

interface DocumentCardProps {
  title: string;
  fileSize?: string;
  dateAdded?: string;
  documentUrl: string;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  fileSize = 'PDF Document',
  dateAdded,
  documentUrl,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.fileInfo}>
        <div className={styles.iconWrapper} aria-hidden="true">
          <FileText size={20} />
        </div>
        <div className={styles.details}>
          <a 
            href={documentUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.title}
          >
            {title}
          </a>
          <span className={styles.meta}>
            {fileSize} {dateAdded ? `• Uploaded: ${dateAdded}` : ''}
          </span>
        </div>
      </div>

      <a
        href={documentUrl}
        download
        className={styles.downloadBtn}
        aria-label={`Download ${title}`}
      >
        <Download size={14} /> Download
      </a>
    </div>
  );
};