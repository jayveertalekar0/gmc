import React from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { FileCode, Calendar, Download, Clock } from 'lucide-react';
import quotations from '@/data/quotations.json';
import styles from './quotations.module.css';

export const metadata = {
  title: 'Quotations & Tenders | GMC Baramati',
  description: 'Official procurement tenders, quotations, and vendor notices for PAH GMC Baramati.',
};

export default function QuotationsPage() {
  return (
    <main className={styles.main}>
      <PageBanner
        title="Quotations & Procurement Tenders"
        subtitle="Official tender invitations, quotation notices, and procurement guidelines for suppliers and service providers."
      />

      <div className="container">
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Reference No.</th>
                <th>Title & Description</th>
                <th>Category</th>
                <th>Posted Date</th>
                <th>Submission Deadline</th>
                <th>Document</th>
              </tr>
            </thead>
            <tbody>
              {quotations.map((item) => (
                <tr key={item.id}>
                  <td className={styles.refNo}>{item.id}</td>
                  <td className={styles.titleCell}>
                    <strong>{item.title}</strong>
                    <span className={`${styles.badge} ${item.status === 'Active' ? styles.active : styles.archived}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>{item.category}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className={styles.deadline}>
                      <Clock size={14} /> {item.lastDate}
                    </span>
                  </td>
                  <td>
                    <a href={`/notices/${item.id}.pdf`} className={styles.downloadBtn} target="_blank" rel="noreferrer">
                      <Download size={14} /> Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}