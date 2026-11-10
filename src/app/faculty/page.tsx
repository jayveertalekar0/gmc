'use client';

import React, { useState } from 'react';
import { PageBanner } from '@/components/common/PageBanner';
import { Users, Search, GraduationCap, Mail, UserCheck } from 'lucide-react';
import facultyData from '@/data/faculty.json';
import styles from './faculty.module.css';

export default function FacultyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const filteredDepartments = facultyData.departments
    .filter((dept) => selectedDept === 'All' || dept.department === selectedDept)
    .map((dept) => ({
      ...dept,
      faculty: dept.faculty.filter(
        (member) =>
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.qualification.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((dept) => dept.faculty.length > 0);

  return (
    <main className={styles.main}>
      <PageBanner
        title="Faculty & Teaching Staff Directory"
        subtitle="Complete department-wise directory of teaching staff, medical educators, and institutional leadership at PAH GMC Baramati."
      />

      <div className="container">
        {/* Leadership Section */}
        <section className={styles.leadershipSection}>
          <h2 className={styles.sectionTitle}>
            <UserCheck className={styles.titleIcon} size={24} /> Institutional Leadership
          </h2>
          <div className={styles.leadershipGrid}>
            {facultyData.leadership.map((leader, idx) => (
              <div key={idx} className={styles.leaderCard}>
                <div className={styles.leaderBadge}>Executive</div>
                <h3>{leader.name}</h3>
                <p className={styles.designation}>{leader.designation}</p>
                <p className={styles.qual}>{leader.qualification}</p>
                <p className={styles.dept}>{leader.department}</p>
                <a href={`mailto:${leader.email}`} className={styles.emailLink}>
                  <Mail size={14} /> {leader.email}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Filter Controls */}
        <div className={styles.controlsBar}>
          <div className={styles.searchBox}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search faculty by name, designation, or degree..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className={styles.deptSelect}
          >
            <option value="All">All Departments</option>
            {facultyData.departments.map((d, idx) => (
              <option key={idx} value={d.department}>
                {d.department}
              </option>
            ))}
          </select>
        </div>

        {/* Faculty Grid by Department */}
        {filteredDepartments.map((dept, dIdx) => (
          <section key={dIdx} className={styles.deptBlock}>
            <h3 className={styles.deptHeader}>
              <GraduationCap size={20} className={styles.deptIcon} />
              {dept.department} Department
            </h3>
            <div className={styles.facultyGrid}>
              {dept.faculty.map((member, mIdx) => (
                <div key={mIdx} className={styles.facultyCard}>
                  <div className={styles.avatarPlaceholder}>
                    <Users size={24} />
                  </div>
                  <div className={styles.facultyInfo}>
                    <h4>{member.name}</h4>
                    <span className={styles.roleTag}>{member.designation}</span>
                    <p className={styles.qualText}>{member.qualification}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}