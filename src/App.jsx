import { useEffect } from 'react';
import { useRuta } from './lib/router.js';
import Cabecera from './componentes/Cabecera.jsx';
import Pie from './componentes/Pie.jsx';
import FondoVivo from './componentes/FondoVivo.jsx';
import Inicio from './paginas/Inicio.jsx';
import Servicios from './paginas/Servicios.jsx';
import Catalogo from './paginas/Catalogo.jsx';
import Reservar from './paginas/Reservar.jsx';
import Contacto from './paginas/Contacto.jsx';

const paginas = {
  '/': { C: Inicio, titulo: 'Inicio' },
  '/servicios': { C: Servicios, titulo: 'Servicios' },
  '/catalogo': { C: Catalogo, titulo: 'Catálogo' },
  '/reservar': { C: Reservar, titulo: 'Reservar' },
  '/contacto': { C: Contacto, titulo: 'Contacto' }
};

export default function App() {
  const r = useRuta();
  const { C, titulo } = paginas[r] || paginas['/'];
  const interior = r !== '/' && paginas[r];
  useEffect(() => {
    document.title = `${titulo} | ChicVisach`;
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.getElementById('principal')?.focus({ preventScroll: true });
  }, [r, titulo]);
  return (
    <>
      <a className="salto" href="#principal">Saltar al contenido</a>
      {interior && <FondoVivo />}
      <Cabecera ruta={r} />
      <main id="principal" tabIndex={-1} key={r} className={interior ? 'pagina-viva' : undefined}><C /></main>
      <Pie />
    </>
  );
}
