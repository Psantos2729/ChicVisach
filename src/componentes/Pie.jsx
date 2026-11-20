import { negocio, nav, pie } from '../contenido.js';
import { waUrl } from '../lib/wa.js';
import Titulo from './Titulo.jsx';

export default function Pie() {
  return (
    <footer className="pie">
      <div className="pie__in envoltura">
        <div>
          <Titulo lineas={pie.titulo} className="t-head" />
          <p>{negocio.horarioTexto} {pie.mensaje}</p>
          <nav className="pie__nav" aria-label="Secciones del sitio">
            <ul><li><a href="#/">Inicio</a></li>{nav.map((n) => <li key={n.href}><a href={n.href}>{n.texto}</a></li>)}</ul>
          </nav>
        </div>
        <ul className="pie__lineas">
          <li><a href={waUrl()} target="_blank" rel="noopener">Escribir por WhatsApp</a></li>
          <li>{negocio.direccion}</li>
        </ul>
        <p className="pie__imprenta">{negocio.nombre} · Página de demostración</p>
      </div>
    </footer>
  );
}
