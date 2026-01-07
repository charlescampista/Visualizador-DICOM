import { useEffect } from 'react';
import { StudyList } from '../components/StudyList';
import { Viewer } from './Viewer';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setStudies, selectStudy } from '../features/studies/studiesSlice';

export function Home() {
  const dispatch = useAppDispatch();

  const studies = useAppSelector((state) => state.studies.list);
  const selectedStudy = useAppSelector(
    (state) => state.studies.selectedStudy
  );

  useEffect(() => {
    dispatch(
      setStudies([
        {
          id: '1',
          patientName: 'João Silva',
          modality: 'CT',
          date: '2024-09-01',
        },
        {
          id: '2',
          patientName: 'Maria Souza',
          modality: 'MR',
          date: '2024-09-02',
        },
      ])
    );
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '20px',
      }}
    >
      <StudyList
        studies={studies}
        onSelect={(study) => dispatch(selectStudy(study))}
      />

      {selectedStudy ? (
        <Viewer />
      ) : (
        <p>Selecione um estudo para visualizar.</p>
      )}
    </div>
  );
}
