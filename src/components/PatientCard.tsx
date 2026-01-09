import type { WorklistPatient } from "../types/WorklistPatient";

type Props = {
  patient: WorklistPatient;
  onSelect: (patient: WorklistPatient) => void;
};

export function PatientCard({ patient, onSelect }: Props) {
  return (
    <div
      onClick={() => onSelect(patient)}
      style={{
        border: '1px solid #cccccc',
        padding: '12px',
        borderRadius: '8px',
        cursor: 'pointer',
        display: "flex",
        flexDirection: "column",
        gap: "3px"
      }}
    >
      <strong>{patient.patientName}</strong>
      <p>ID Paciente: {patient.patientID}</p>
      <small>accessionNumber:{patient.accessionNumber}</small>
      <small>modality:{patient.modality}</small>
      <small>scheduledDate:{patient.scheduledDate}</small>
    </div>
  );
}
