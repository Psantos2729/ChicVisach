import { useState } from 'react';
import { catalogo } from '../contenido.js';
import { ruta as pub } from '../lib/ruta.js';
import { waUrl } from '../lib/wa.js';
import Titulo from '../componentes/Titulo.jsx';
import TiltedCard from '../reactbits/TiltedCard/TiltedCard.jsx';
import AnimatedContent from '../reactbits/AnimatedContent/AnimatedContent.jsx';

export default function Catalogo() {
  const [cat, setCat] = useState('Todos');
  const lista = catalogo.productos.filter((p) => cat === 'Todos' || p.categoria === cat);
  return (
    <>
      <section className="pagina-cab campo-oscuro">
        <div className="envoltura">
          <Titulo as="h1" id="titulo-catalogo" lineas={catalogo.titulo} />
          <p className="t-lead">{catalogo.texto}</p>
        </div>
      </section>
      <section className="envoltura seccion" aria-label="Productos">
        <div className="filtros" role="group" aria-label="Filtrar por categoría">
          {catalogo.categorias.map((c) => (
            <button key={c} type="button" className="filtro" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <ul className="catalogo">
          {lista.map((p, i) => (
            <li key={p.id}>
              <AnimatedContent distance={40} duration={0.7} delay={(i % 4) * 0.08}>
                <TiltedCard
                  imageSrc={pub(p.foto)} altText={`${p.nombre}, ${p.texto}`}
                  containerHeight="440px" containerWidth="100%" imageHeight="440px" imageWidth="100%"
                  rotateAmplitude={9} scaleOnHover={1.03} showTooltip={false} radius={6}
                  backContent={(
                    <div className="prod-dorso">
                      <p className="prod-dorso__cat">{p.categoria}</p>
                      <h2 className="t-head">{p.nombre}</h2>
                      <p>{p.texto}</p>
                      <p className="t-small">Precio y disponibilidad: se confirman por WhatsApp.</p>
                      <a className="btn btn--oro btn--chico" href={waUrl(`Hola ChicVisach, me interesa: ${p.nombre}. ¿Está disponible y qué precio tiene?`)}
                        target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}>Pedir por WhatsApp</a>
                    </div>
                  )}
                />
                <p className="prod-nombre"><span className="serif">{p.nombre}</span><span className="nota t-small">{p.categoria}</span></p>
              </AnimatedContent>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
