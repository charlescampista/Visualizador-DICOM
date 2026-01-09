import { useEffect } from 'react';
import { StudyList } from '../components/StudyList';
import { SerieList } from '../components/SerieList';
import { InstanceList } from '../components/InstanceList';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setStudies, selectStudy } from '../features/studies/studiesSlice';
import { setSeries, selectSerie } from '../features/series/seriesSlice';
import { setInstances, selectInstance } from '../features/instances/instanceSlice';
import type { Study } from '../types/Study';
import type { Serie } from '../types/Serie';
import type { Instance } from '../types/Instance';
import api from '../services/api';



export function Home() {
  const dispatch = useAppDispatch();

  const studies = useAppSelector((state) => state.studies.list);
  const selectedStudy = useAppSelector(
    (state) => state.studies.selectedStudy
  );

  const series = useAppSelector((state) => state.series.list);
  const selectedSerie = useAppSelector(
    (state) => state.series.selectedSerie
  );

  const instances = useAppSelector((state) => state.instances.list);
  const selectedInstance = useAppSelector(
    (state) => state.instances.selectedInstance
  );



  useEffect(() => {
    async function loadStudies() {
      const response = await api.get('/studies');
      if (response) {
        const studiesMapped: Study[] = response.data.map((serverStudy: any) => ({
          id: serverStudy.studyInstanceUID,
          patientName: serverStudy.patientName || 'Desconhecido',
          modality: serverStudy.modality,
          date: new Date().toISOString().split('T')[0],
        }));

        dispatch(setStudies(studiesMapped))
      }
    }



    async function loadSeries() {
      if (!selectedStudy) return;
      const response = await api.get(`/studies/${selectedStudy.id}/series`);
      if (response) {

        const seriesMapped: Serie[] = response.data.series.map((serverSerie: any) => ({
          id: serverSerie.seriesInstanceUID,
          studyId: serverSerie.studyInstanceUID,
          modality: serverSerie.modality,
          instanceCount: serverSerie.instanceCount,
        }));

        dispatch(setSeries(seriesMapped))
      }
    }

    async function loadInstances() {
      if (!selectedSerie) return;
      const response = await api.get(`/series/${selectedSerie.id}/instances`);
      if (response) {

        const instancesMapped: Instance[] = response.data.instances.map((serverInstance: any) => ({
          id: serverInstance.sopInstanceUID,
        }));

        dispatch(setInstances(instancesMapped))
      }
    }

    loadStudies();
    loadSeries();
    loadInstances();

  }, [dispatch, selectedStudy,selectedSerie]);




  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        gap: '6px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '3px',
          padding: '3px',
          backgroundColor: 'lightgreen'
        }}
      >
        {selectedStudy ? (<h5>Estudo Selecionado: {selectedStudy.id}</h5>) : (<h5>Nenhum estudo selecionado</h5>)}
        <h2>Estudos</h2>
        <StudyList
          studies={studies}
          onSelect={(study) => dispatch(selectStudy(study))}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '3px',
          padding: '3px',
          backgroundColor: 'lightblue'
        }}
      >
        {selectedStudy ? (<h5>Estudo Selecionado: {selectedStudy.id}</h5>) : (<h5>Nenhum estudo selecionado</h5>)}
        <h2>Series</h2>

        <SerieList
          series={series}
          onSelect={(serie) => dispatch(selectSerie(serie))}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '3px',
          padding: '3px',
          backgroundColor: 'lightseagreen'
        }}
      >

        <h2>Instances</h2>

        <InstanceList
          instances={instances}
          onSelect={(instance) => dispatch(selectInstance(instance))}
        />
      </div>

      {/* <Viewer /> */}
    </div>
  );
}
