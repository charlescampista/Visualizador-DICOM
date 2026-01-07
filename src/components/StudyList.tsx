import type { Study } from '../types/Study';
import { StudyCard } from './StudyCard';

type Props = {
  studies: Study[];
  onSelect: (study: Study) => void;
};

export function StudyList({ studies, onSelect }: Props) {
  return (
    <div style={{ display: 'grid', gap: '12px' }}>
      {studies.map((study) => (
        <StudyCard
          key={study.id}
          study={study}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
