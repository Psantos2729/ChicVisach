import { portada, cifras, servicios, galeria, negocio } from '../contenido.js';
import { ruta as pub } from '../lib/ruta.js';
import { useHoy } from '../hooks/useHoy.js';
import { useVarCss } from '../hooks/useVarCss.js';
import Titulo from '../componentes/Titulo.jsx';
import Reveal from '../componentes/Reveal.jsx';
import Aurora from '../reactbits/Aurora/Aurora.jsx';
import BlurText from '../reactbits/BlurText/BlurText.jsx';
import RotatingText from '../reactbits/RotatingText/RotatingText.jsx';
import ShinyText from '../reactbits/ShinyText/ShinyText.jsx';
import Magnet from '../reactbits/Magnet/Magnet.jsx';
import BounceCards from '../reactbits/BounceCards/BounceCards.jsx';
import CountUp from '../reactbits/CountUp/CountUp.jsx';
import ScrollVelocity from '../reactbits/ScrollVelocity/ScrollVelocity.jsx';
import CurvedLoop from '../reactbits/CurvedLoop/CurvedLoop.jsx';
import CircularCarousel from '../reactbits/CircularCarousel/CircularCarousel.jsx';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent.jsx';
import GlareHover from '../reactbits/GlareHover/GlareHover.jsx';
import SplitText from '../reactbits/SplitText/SplitText.jsx';
import GradientText from '../reactbits/GradientText/GradientText.jsx';
import Particles from '../reactbits/Particles/Particles.jsx';

export default function Inicio() {
  const hoy = useHoy();
  const fondo = useVarCss('--oscuro', '#0F0E0C');
  const items = galeria.fotos.map((f) => ({ src: pub(f.src), alt: f.alt, title: f.titulo }));
  const tarjetas = portada.fotos.map((f) => pub(f.src));
  return (
    <>
      <section className="hero campo-oscuro" aria-labelledby="titulo-inicio">
        <div className="hero__fondo" aria-hidden="true">
          <Aurora colorStops={['#7A5B1E', '#C9A24B', '#3B2A0B']} amplitude={0.9} blend={0.6} speed={0.6} opacity={0.55} />
        </div>
        <div className="hero__in envoltura">
          <div className="hero__texto">
            <p className="hero__hoy" aria-live="polite">{hoy}</p>
            <div role="heading" aria-level="1" aria-label="Belleza con estilo para tu cabello, uñas, maquillaje y piel" id="titulo-inicio" className="t-display hero__h1">
              <BlurText text="Belleza con" animateBy="words" direction="top" delay={120} className="hero__linea" />
              <span className="hero__linea hero__rota">
                <span>estilo para tu&nbsp;</span>
                <RotatingText texts={portada.rotar} rotationInterval={2600} effect="slide" className="hero__rotante" />
              </span>
            </div>
            <p className="t-lead">{portada.apoyo}</p>
            <div className="hero__botones">
              <Magnet padding={60} magnetStrength={3}>
                <a className="btn btn--oro" href="#/reservar"><ShinyText text={portada.ctaTexto} color="#141210" shineColor="#FFF6DC" speed={3} /></a>
              </Magnet>
              <a className="enlace" href="#/catalogo">Ver el catálogo</a>
            </div>
          </div>
          <div className="hero__cartas">
            <BounceCards images={tarjetas} containerWidth={Math.min(460, window.innerWidth - 32)} containerHeight={400} cardSize={Math.min(230, (window.innerWidth - 32) / 2)} spread={110}
              rotation={9} borderWidth={4} borderColor="#F5EFE6" radius={6} shadow={false} />
          </div>
        </div>
      </section>

      <section className="velocidad campo-acento" aria-label="Lo que hacemos">
        <ScrollVelocity texts={[servicios.map((s) => s.nombre).concat(['Catálogo de belleza']).join('  ✦  ')]} separator="  ✦  " velocity={60}
          fontSize="clamp(1.5rem, 1rem + 2vw, 2.5rem)" fontWeight={600} color="#141210" numCopies={4} />
      </section>

      <section className="cifras envoltura seccion" aria-label="ChicVisach en números">
        <ul className="cifras__fila">
          {cifras.map((c) => (
            <li key={c.texto}>
              <CountUp to={c.valor} duration={1.6} className="cifras__n" />
              <p className="nota">{c.texto}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mascara envoltura seccion" aria-label="Belleza que se nota">
        <h2 className="mascara__t">
          <GradientText colors={['#141210', '#8A6A24', '#C9A24B', '#E6C374', '#C9A24B', '#141210']} animationSpeed={7} angle={90}>Belleza que se nota</GradientText>
        </h2>
      </section>

      <section className="intro envoltura seccion" aria-labelledby="titulo-que">
        <SplitText tag="h2" id="titulo-que" text="Tu cabello, tus uñas y tu piel en un solo lugar" className="t-head intro__t"
          splitType="words" delay={60} textAlign="left" rootMargin="0px" />
        <div className="intro__rejilla">
          {servicios.slice(0, 3).map((s, i) => (
            <AnimatedContent key={s.id} distance={60} delay={i * 0.12} duration={0.9}>
              <GlareHover borderRadius="4px" glareColor="#FFF1C9" glareOpacity={0.35}>
                <a className="mini" href="#/servicios">
                  <img src={pub(s.foto)} alt={s.alt} loading="lazy" />
                  <span className="mini__t t-lead serif">{s.nombre}</span>
                </a>
              </GlareHover>
            </AnimatedContent>
          ))}
        </div>
        <p><a className="enlace" href="#/servicios">Ver todos los servicios</a></p>
      </section>

      <section className="galeria3d campo-oscuro seccion" aria-labelledby="titulo-galeria">
        <div className="galeria3d__particulas" aria-hidden="true">
          <Particles particleCount={90} particleColors={['#C9A24B', '#F5EFE6']} particleSpread={9} speed={0.05} particleBaseSize={70} moveParticlesOnHover={false} clickBurst={false} />
        </div>
        <div className="envoltura"><Reveal><Titulo id="titulo-galeria" lineas={['Un vistazo', 'a nuestro trabajo']} /></Reveal></div>
        <div className="carrusel3d">
          <CircularCarousel items={items} preset="cylinder" cardWidth={galeria.ancho} aspectRatio={galeria.proporcion}
            autoplay="drift" speed={10} captions fadeColor={fondo} cornerRadius={0} intro="rise" />
        </div>
      </section>

      <section className="curva campo-oscuro" aria-hidden="true">
        <CurvedLoop marqueeText="Belleza ✦ Cuidado ✦ Estilo ✦ " speed={1.5} curveAmount={120} fontSize={72} color="#C9A24B" />
      </section>

      <section className="reserva campo-acento" aria-labelledby="titulo-cierre">
        <div className="envoltura">
          <Reveal><Titulo id="titulo-cierre" lineas={['Hoy es un buen día', 'para consentirte']} /></Reveal>
          <Reveal as="p" i={1} className="t-lead">{negocio.horarioTexto}</Reveal>
          <Reveal i={2}><a className="btn btn--claro" href="#/reservar">{portada.ctaTexto}</a></Reveal>
        </div>
      </section>
    </>
  );
}
