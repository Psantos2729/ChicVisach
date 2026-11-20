import LightRays from '../reactbits/LightRays/LightRays.jsx';
import Particles from '../reactbits/Particles/Particles.jsx';

/* Fondo de las páginas interiores: rayos de luz dorada y partículas. */
export default function FondoVivo() {
  return (
    <div className="fondo-vivo" aria-hidden="true">
      <div><LightRays raysOrigin="top-center" raysColor="#E6C374" raysSpeed={0.6} lightSpread={0.7} rayLength={2.4} intensity={0.8} glow={0.7} haze={0.3} followMouse mouseInfluence={0.08} clickPulse={false} /></div>
      <div><Particles particleCount={120} particleColors={['#C9A24B', '#F5EFE6']} particleSpread={10} speed={0.05} particleBaseSize={70} moveParticlesOnHover={false} clickBurst={false} /></div>
    </div>
  );
}
