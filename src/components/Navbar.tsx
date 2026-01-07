import { Link } from 'react-router-dom';

export function Navbar() {
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
      <Link to="/viewer" style={{ marginRight: '12px' }}>
        Visualizador
      </Link>
      <Link to="/about">
        Sobre
      </Link>
    </nav>
  );
}
