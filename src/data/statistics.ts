export interface StatisticItem {
  id: string;
  label: string;
  value: string;
  description: string;
}

export const INSTITUTION_STATISTICS: StatisticItem[] = [
  {
    id: 'stat-01',
    label: 'Annual MBBS Intake',
    value: '100+',
    description: 'Recognized by the National Medical Commission (NMC)',
  },
  {
    id: 'stat-02',
    label: 'Hospital Bed Capacity',
    value: '500+',
    description: 'Fully equipped general and super-specialty teaching hospital',
  },
  {
    id: 'stat-03',
    label: 'Daily OPD Patients',
    value: '1,200+',
    description: 'Providing comprehensive healthcare across Pune district',
  },
  {
    id: 'stat-04',
    label: 'Clinical Departments',
    value: '20+',
    description: 'Pre-clinical, para-clinical, and clinical medical wings',
  },
];