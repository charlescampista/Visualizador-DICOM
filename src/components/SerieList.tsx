import type { Serie } from '../types/Serie';
import { SerieCard } from './SerieCard';

type Props = {
  series: Serie[];
  onSelect: (serie: Serie) => void;
};

export function SerieList({ series, onSelect }: Props) {
  return (
    <div style={{ display: 'grid', gap: '12px' }}>
      {series.map((serie) => (
        <SerieCard
          key={serie.id}
          serie={serie}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
