import { negocio, nav } from '../contenido.js';
import { ruta as pub } from '../lib/ruta.js';
import Magnet from '../reactbits/Magnet/Magnet.jsx';

export default function Cabecera({ ruta }) {
  return (
    <header className="cabecera">
      <div className="cabecera__in envoltura">
        <a className="marca" href="#/">
          <img src={pub(negocio.logo)} alt="" width="44" height="44" />
          <span>{negocio.nombre}</span>
        </a>
        <nav className="nav" aria-label="Principal">
          <ul>{nav.map((n) => <li key={n.href}><a href={n.href} aria-current={n.href === '#' + ruta ? 'page' : undefined}>{n.texto}</a></li>)}</ul>
        </nav>
        <Magnet padding={40} magnetStrength={4}><a className="btn btn--chico" href="#/reservar">Reservar</a></Magnet>
      </div>
    </header>
  );
}
