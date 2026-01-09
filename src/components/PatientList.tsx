import type { WorklistPatient } from "../types/WorklistPatient"; 
import { PatientCard } from "./PatientCard";

type Props = {
  patients: WorklistPatient[];
  onSelect: (patient: WorklistPatient) => void;
};

export function PatientList({ patients, onSelect }: Props) {
  return (
    <div style={{ display: 'grid', gap: '12px' }}>
      {patients.map((patient) => (
        <PatientCard
          key={patient.patientID}
          patient={patient}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
