import { negocio } from '../contenido.js';
import { useHoy } from '../hooks/useHoy.js';
import { waUrl } from '../lib/wa.js';
import Titulo from '../componentes/Titulo.jsx';
import ShinyText from '../reactbits/ShinyText/ShinyText.jsx';
import Magnet from '../reactbits/Magnet/Magnet.jsx';

const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

export default function Contacto() {
  const hoy = useHoy();
  return (
    <>
      <section className="pagina-cab campo-oscuro">
        <div className="envoltura">
          <Titulo as="h1" id="titulo-contacto" lineas={['Hablemos,', 'te esperamos']} />
          <p className="t-lead">{hoy}</p>
        </div>
      </section>
      <section className="envoltura seccion contacto">
        <div className="hoja">
          <h2 className="t-head">Horario (ejemplo)</h2>
          <ul className="horario">
            {[1, 2, 3, 4, 5, 6, 0].map((d) => (
              <li key={d}><span>{dias[d]}</span><span>{negocio.horario[d] ? `${negocio.horario[d][0]} a ${negocio.horario[d][1]}` : 'Cerrado'}</span></li>
            ))}
          </ul>
        </div>
        <div className="hoja">
          <h2 className="t-head">Escríbenos</h2>
          <p className="t-lead">Dirección: {negocio.direccion}. Teléfono: {negocio.telefono}.</p>
          <Magnet padding={50} magnetStrength={3}>
            <a className="btn btn--oro" href={waUrl()} target="_blank" rel="noopener"><ShinyText text="Abrir WhatsApp" color="#141210" shineColor="#FFF6DC" speed={3} /></a>
          </Magnet>
          <p className="nota t-small">Los datos de contacto de esta demo se reemplazan por los reales del negocio.</p>
        </div>
      </section>
    </>
  );
}
