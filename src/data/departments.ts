import { Department } from '@/types';

export const DEPARTMENTS_DATA: Department[] = [
  // Pre-Clinical
  {
    id: 'dept-01',
    name: 'Anatomy',
    type: 'pre-clinical',
    headOfDepartment: 'Dr. Head of Department',
    description: 'Study of human gross anatomy, histology, embryology, and neuroanatomy with full cadaveric dissection labs.',
  },
  {
    id: 'dept-02',
    name: 'Physiology',
    type: 'pre-clinical',
    headOfDepartment: 'Dr. Head of Department',
    description: 'Comprehensive study of normal biological functions, organ systems, and practical hematology labs.',
  },
  {
    id: 'dept-03',
    name: 'Biochemistry',
    type: 'pre-clinical',
    headOfDepartment: 'Dr. Head of Department',
    description: 'Clinical biochemistry, metabolic pathways, molecular biology, and automated diagnostic lab training.',
  },
  // Para-Clinical
  {
    id: 'dept-04',
    name: 'Pathology',
    type: 'para-clinical',
    headOfDepartment: 'Dr. Head of Department',
    description: 'Histopathology, cytopathology, blood bank management, and clinical autopsy studies.',
  },
  {
    id: 'dept-05',
    name: 'Microbiology',
    type: 'para-clinical',
    headOfDepartment: 'Dr. Head of Department',
    description: 'Bacteriology, virology, mycology, immunology, and hospital infection control surveillance.',
  },
  {
    id: 'dept-06',
    name: 'Pharmacology',
    type: 'para-clinical',
    headOfDepartment: 'Dr. Head of Department',
    description: 'Experimental pharmacology, clinical pharmacokinetics, rational therapeutics, and pharmacovigilance.',
  },
  // Clinical
  {
    id: 'dept-07',
    name: 'General Medicine',
    type: 'clinical',
    headOfDepartment: 'Dr. Head of Department',
    description: 'Comprehensive inpatient and outpatient medical care, emergency resuscitation, and critical care units.',
  },
  {
    id: 'dept-08',
    name: 'General Surgery',
    type: 'clinical',
    headOfDepartment: 'Dr. Head of Department',
    description: 'Elective and emergency surgical procedures, trauma surgery, and modular operation theaters.',
  },
  {
    id: 'dept-09',
    name: 'Obstetrics & Gynecology (OBGY)',
    type: 'clinical',
    headOfDepartment: 'Dr. Head of Department',
    description: 'Maternal healthcare, high-risk pregnancy management, labor wards, and gynecological surgeries.',
  },
  {
    id: 'dept-10',
    name: 'Pediatrics',
    type: 'clinical',
    headOfDepartment: 'Dr. Head of Department',
    description: 'Neonatal Intensive Care Unit (NICU), Pediatric ICU (PICU), child immunization, and growth monitoring.',
  },
];