import type { Study } from '../types/Study';

type Props = {
  study: Study;
  onSelect: (study: Study) => void;
};

export function StudyCard({ study, onSelect }: Props) {
  return (
    <div
      onClick={() => onSelect(study)}
      style={{
        border: '1px solid #cccccc',
        padding: '12px',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: 'white'
      }}
      >
      <p>ID: {study.id}</p>
      <p>Nome: {study.patientName}</p>
      <p>Modalidade: {study.modality}</p>
      <small>{study.date}</small>
    </div>
  );
}
