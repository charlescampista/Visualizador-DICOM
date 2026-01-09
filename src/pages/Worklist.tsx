import { useEffect } from 'react';
import { PatientList } from '../components/PatientList';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import api from '../services/api';
import { selectPatient, setPatients } from '../features/patients/patientsSlice';


export function Worklist() {
  const dispatch = useAppDispatch();

  const patients = useAppSelector((state => state.patients.list));
//   const selectedPatient = useAppSelector(
//     (state) => state.patients.selectedPatient
//   )



  useEffect(() => {
    async function loadData() {
      const response = await api.get('/worklist');
      if (response) {
        dispatch(setPatients(response.data))
      }
    }

    loadData();
  }, [dispatch]);




  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '20px'
      }}
    >
      <PatientList
        patients={patients}
        onSelect={(patient) => dispatch(selectPatient(patient))}
      />
    </div>
  );
}
