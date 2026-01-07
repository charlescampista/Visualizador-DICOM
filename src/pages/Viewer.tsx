import { useEffect, useRef } from 'react';
import cornerstone from 'cornerstone-core';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import { useAppSelector } from '../app/hooks';
import '../dicom/cornerstoneSetup';

export function Viewer() {
  const elementRef = useRef<HTMLDivElement>(null);

  const selectedStudy = useAppSelector(
    (state) => state.studies.selectedStudy
  );

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    cornerstone.enable(elementRef.current);

    return () => {
      if (elementRef.current) {
        cornerstone.disable(elementRef.current);
      }
    };
  }, []);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file || !elementRef.current) {
      return;
    }

    const imageId =
      cornerstoneWADOImageLoader.wadouri.fileManager.add(file);

    cornerstone.loadImage(imageId).then((image) => {
      cornerstone.displayImage(elementRef.current as HTMLDivElement, image);
    });
  }

  if (!selectedStudy) {
    return <p>Nenhum estudo selecionado.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Visualizador DICOM</h2>

      <p>Paciente: {selectedStudy.patientName}</p>
      <p>Modalidade: {selectedStudy.modality}</p>

      <input
        type="file"
        accept=".dcm"
        onChange={handleFileChange}
      />

      <div
        ref={elementRef}
        style={{
          width: '512px',
          height: '512px',
          backgroundColor: 'black',
          marginTop: '20px',
        }}
      />
    </div>
  );
}
