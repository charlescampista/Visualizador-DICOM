import { useState } from 'react';
import type { Study } from '../types/Study';
import { StudyList } from '../components/StudyList';
import { ViewerPlaceholder } from '../components/ViewerPlaceholder';

const mockStudies: Study[] = [
  {
    id: '1',
    patientName: 'João Silva',
    modality: 'CT',
    date: '2024-09-01'
  },
  {
    id: '2',
    patientName: 'Maria Souza',
    modality: 'MR',
    date: '2024-09-02'
  }
];

export function Home() {
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
      <StudyList studies={mockStudies} onSelect={setSelectedStudy} />
      <ViewerPlaceholder study={selectedStudy} />
    </div>
  );
}
