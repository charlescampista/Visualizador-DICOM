import type { Study } from '../types/Study'

type Props = {
    study: Study | null;
};

export function ViewerPlaceholder({ study }: Props) {
    if (!study) {
        return <p>Selecione um estudo para visualizar</p>;
    }

    return (
        <div style={{ border: '1px dashed #999', padding: '20px' }}>
            <h3>Visualizando estudo</h3>
            <p>Paciente: {study.patientName}</p>
            <p>Modalidade: {study.modality}</p>
        </div>
    );
}