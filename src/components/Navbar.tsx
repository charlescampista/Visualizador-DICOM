import { Link } from 'react-router-dom';
import type { Study } from '../types/Study';
import type { Serie } from '../types/Serie';

type Props = {
  selectedStudy: Study | null,
  selectedSerie: Serie | null
}


export function Navbar({selectedStudy, selectedSerie}: Props) {
  return (
    <nav
      style={{
        padding: '12px',
        borderBottom: '1px solid #dddddd',
        marginBottom: '20px',
      }}
    >
      <Link to="/" style={{ marginRight: '12px' }}>
        Estudos
      </Link>
      <Link to="/worklist" style={{ marginRight: '12px' }}>
        Worklist
      </Link>
      <Link to="/viewer" style={{ marginRight: '12px' }}>
        Visualizador
      </Link>
      <Link to="/about">
        Sobre
      </Link>
      { selectedStudy && (<h3>Estudo Selecionado: {selectedStudy.id}</h3>)}
      { selectedSerie && (<h3>Serie Selecionada: {selectedSerie.id}</h3>)}
    </nav>
  );
}
