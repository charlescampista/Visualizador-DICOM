

import type { Instance } from '../types/Instance';


type Props = {
  instance: Instance;
  onSelect: (instance: Instance) => void;
};

export function InstanceCard({ instance, onSelect }: Props) {
  //const baseURL = 'https://teste.charlescampista.cloud'; // ou sua base_url
  const baseURL = 'http://localhost:3000'; // ou sua base_url

  return (
    <div
      onClick={() => onSelect(instance)}
      style={{
        border: '1px solid #cccccc',
        padding: '12px',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <p>ID: {instance.id}</p>

      <a
        href={`${baseURL}/api/instances/${instance.id}`}
        download={`${instance.id}.dcm`}
        style={{
          padding: '6px 12px',
          borderRadius: '6px',
          backgroundColor: '#4CAF50',
          color: 'white',
          textDecoration: 'none',
          textAlign: 'center',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Baixar Imagem
      </a>
    </div>
  );
}
