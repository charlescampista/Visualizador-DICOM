export type Study = {
  id: string;
  patientName: string;
  modality: 'CT' | 'MR' | 'XR' | 'US';
  date: string;
};