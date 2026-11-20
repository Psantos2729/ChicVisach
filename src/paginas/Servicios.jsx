import { useEffect, useRef, useState } from 'react';
import { servicios, notaPrecios } from '../contenido.js';
import { ruta as pub } from '../lib/ruta.js';
import Titulo from '../componentes/Titulo.jsx';
import SpotlightCard from '../reactbits/SpotlightCard/SpotlightCard.jsx';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent.jsx';
import SpecularButton from '../reactbits/SpecularButton/SpecularButton.jsx';
import DepthCarousel from '../reactbits/DepthCarousel/DepthCarousel.jsx';
import ProfileCard from '../reactbits/ProfileCard/ProfileCard.jsx';

function Perfil({ s, cerrar }) {
  const ref = useRef(null);
  useEffect(() => {
    const previo = document.activeElement;
    ref.current?.focus();
    const f = (e) => e.key === 'Escape' && cerrar();
    window.addEventListener('keydown', f);
    return () => { window.removeEventListener('keydown', f); previo?.focus?.(); };
  }, [cerrar]);
  return (
    <div className="perfil" onClick={cerrar}>
      <div className="perfil__in" role="dialog" aria-modal="true" aria-label={s.nombre} tabIndex={-1} ref={ref} onClick={(e) => e.stopPropagation()}>
        <ProfileCard avatarUrl={pub(s.foto)} miniAvatarUrl={pub('logo.svg')} name={s.nombre} title={s.texto} handle="chicvisach"
          status="Reserva en línea" statusColor="#C9A24B" contactText="Reservar" theme="dark" holo={0.7} glare={0.5}
          onContactClick={() => { window.location.hash = `#/reservar?servicio=${s.id}`; }} />
        <button type="button" className="btn btn--chico" onClick={cerrar}>Cerrar</button>
      </div>
    </div>
  );
}

export default function Servicios() {
  const [abierto, setAbierto] = useState(false);
  const [perfil, setPerfil] = useState(null);
  const down = useRef(null);
  const items = servicios.map((s) => ({ image: pub(s.foto), alt: s.alt }));
  const alSoltar = (e) => {
    const c = e.target.closest('.depth-carousel__card');
    if (!c || !down.current || Math.hypot(e.clientX - down.current.x, e.clientY - down.current.y) > 6) return;
    const i = [...c.parentElement.children].indexOf(c);
    if (servicios[i]) setPerfil(servicios[i]);
  };
  return (
    <>
      <section className="pagina-cab campo-oscuro">
        <div className="envoltura">
          <Titulo as="h1" id="titulo-servicios" lineas={['Servicios que', 'te hacen brillar']} />
          <p className="t-lead">{notaPrecios}</p>
          <div className="serv3d">
            <SpecularButton size="lg" radius={10} baseColor="#2A2110" lineColor="#E6C374" textColor="#F5EFE6" tint="#C9A24B" tintOpacity={0.12}
              autoAnimate aria-expanded={abierto} aria-controls="serv3d-panel" onClick={() => setAbierto((a) => !a)}>
              {abierto ? 'Ocultar vista 3D' : 'Explorar servicios en 3D'}
            </SpecularButton>
            {abierto && (
              <div id="serv3d-panel" className="serv3d__panel" onPointerDown={(e) => { down.current = { x: e.clientX, y: e.clientY }; }} onPointerUp={alSoltar}>
                <DepthCarousel items={items} cardWidth={250} cardHeight={340} radius={10} visibleCards={3} blur={4} tint="#0F0E0C" />
              </div>
            )}
            {abierto && <p className="serv3d__ayuda">Desliza o usa las flechas. Toca un servicio para ver su ficha.</p>}
          </div>
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
      {perfil && <Perfil s={perfil} cerrar={() => setPerfil(null)} />}
    </>
  );
}
