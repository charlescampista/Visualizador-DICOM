import type { Serie } from '../types/Serie';

type Props = {
  serie: Serie;
  onSelect: (serie: Serie) => void;
};

export function SerieCard({ serie, onSelect }: Props) {
  return (
    <div
      onClick={() => onSelect(serie)}
      style={{
        border: '1px solid #cccccc',
        padding: '12px',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: 'white'
      }}
      >
      <p>ID: {serie.id}</p>
      <p>Estudo: {serie.studyId}</p>
      <p>Modalidade: {serie.modality}</p>
      <p>QTD instâncias: {serie.instanceCount}</p>
    </div>
  );
}
