import { useEffect } from 'react';
import { StudyList } from '../components/StudyList';
import { PatientList } from '../components/PatientList';
import { Viewer } from './Viewer';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setStudies, selectStudy } from '../features/studies/studiesSlice';
import api from '../services/api';
import { selectPatient, setPatients } from '../features/patients/patientsSlice';


export function Home() {
  const dispatch = useAppDispatch();

  const patients = useAppSelector((state => state.patients.list));
  const selectedPatient = useAppSelector(
    (state) => state.patients.selectedPatient
  )

  const studies = useAppSelector((state) => state.studies.list);
  const selectedStudy = useAppSelector(
    (state) => state.studies.selectedStudy
  );
  


  useEffect(() => {


    async function loadData() {
      const response = await api.get('/worklist');
      if (response) {
        dispatch(setPatients(response.data))
      }
    }
    dispatch(setStudies([
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
    ]));

    loadData()





  }, [dispatch]);




  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '20px'
      }}
    >
      <StudyList
        studies={studies}
        onSelect={(study) => dispatch(selectStudy(study))}
      />

      <PatientList
        patients={patients}
        onSelect={(patient) => dispatch(selectPatient(patient))}
      />

      {selectedStudy ? (
        <Viewer />
      ) : (
        <p>Selecione um estudo para visualizar.</p>
      )}
    </div>
  );
}
