import { servicios, notaPrecios } from '../contenido.js';
import { ruta as pub } from '../lib/ruta.js';
import Titulo from '../componentes/Titulo.jsx';
import Reveal from '../componentes/Reveal.jsx';
import SpotlightCard from '../reactbits/SpotlightCard/SpotlightCard.jsx';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent.jsx';

export default function Servicios() {
  return (
    <>
      <section className="pagina-cab campo-oscuro">
        <div className="envoltura">
          <Titulo as="h1" id="titulo-servicios" lineas={['Servicios que', 'te hacen brillar']} />
          <p className="t-lead">{notaPrecios}</p>
        </div>
      </section>
      <section className="envoltura seccion" aria-labelledby="titulo-servicios">
        <ul className="serv-lista">
          {servicios.map((s, i) => (
            <li key={s.id}>
              <AnimatedContent distance={50} duration={0.8}>
                <SpotlightCard className={`serv ${i % 2 ? 'serv--inv' : ''}`} theme="light" spotlightColor="#C9A24B" intensity={0.25}>
                  <div className="serv__foto"><img src={pub(s.foto)} alt={s.alt} loading="lazy" /></div>
                  <div className="serv__cuerpo">
                    <h2 className="t-head">{s.nombre}</h2>
                    <p className="t-lead">{s.texto}</p>
                    <a className="btn btn--chico" href={`#/reservar?servicio=${s.id}`}>Reservar este servicio</a>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
