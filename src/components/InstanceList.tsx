import type { Instance } from '../types/Instance';
import { InstanceCard } from './InstanceCard';

type Props = {
  instances: Instance[];
  onSelect: (instance: Instance) => void;
};

export function InstanceList({ instances, onSelect }: Props) {
  return (
    <div style={{ display: 'grid', gap: '12px' }}>
      {instances.map((instance) => (
        <InstanceCard
          key={instance.id}
          instance={instance}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
