import type { Study } from '../types/Study'

type Props = {
    study: Study,
    onSelect: (study: Study) => void;
};

export function StudyCard({ study, onSelect }: Props) {
    return (
        <div
            onClick={() => onSelect(study)}
            style={{
                border: '1px solid #CCC',
                padding: '12px',
                borderRadius: '8px',
                cursor: 'pointer'                
            }}
        >
            <strong>{study.patientName}</strong>
            <p>{study.modality}</p>
            <small>{study.date}</small>
        </div>
    )        
    
}