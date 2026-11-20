import { useMemo, useState } from 'react';
import { servicios, reservaCfg, negocio } from '../contenido.js';
import { waUrl } from '../lib/wa.js';
import Titulo from '../componentes/Titulo.jsx';
import Stepper, { Step } from '../reactbits/Stepper/Stepper.jsx';

const hoyISO = () => new Date(Date.now() - 6 * 3600000).toISOString().slice(0, 10);
const minimo = hoyISO();
const diaSemana = (iso) => new Date(`${iso}T12:00:00`).getDay();
const fechaBonita = (iso) => new Date(`${iso}T12:00:00`).toLocaleDateString('es-GT', { weekday: 'long', day: 'numeric', month: 'long' });
const servicioInicial = () => {
  const q = new URLSearchParams((window.location.hash.split('?')[1]) || '').get('servicio');
  return servicios.some((s) => s.id === q) ? q : '';
};

function horasDelDia(iso) {
  if (!iso) return [];
  const h = negocio.horario[diaSemana(iso)];
  if (!h) return [];
  const m = (x) => +x.split(':')[0] * 60 + +x.split(':')[1];
  return reservaCfg.horas.filter((x) => m(x) >= m(h[0]) && m(x) < m(h[1]));
}

export default function Reservar() {
  const [paso, setPaso] = useState(1);
  const [d, setD] = useState({ servicio: servicioInicial(), fecha: '', hora: '', nombre: '', telefono: '', nota: '' });
  const set = (k, v) => setD((x) => ({ ...x, [k]: v, ...(k === 'fecha' ? { hora: '' } : {}) }));
  const horas = useMemo(() => horasDelDia(d.fecha), [d.fecha]);
  const cerrado = d.fecha && horas.length === 0;
  const serv = servicios.find((s) => s.id === d.servicio);
  const valido = [
    !!d.servicio,
    !!d.fecha && !!d.hora,
    d.nombre.trim().length >= 2 && d.telefono.replace(/\D/g, '').length >= 8,
    true
  ];
  const mensaje = serv
    ? `Hola ${negocio.nombre}, quiero reservar: ${serv.nombre}, ${fechaBonita(d.fecha)} a las ${d.hora}. Nombre: ${d.nombre.trim()}. Teléfono: ${d.telefono.trim()}.${d.nota.trim() ? ' Nota: ' + d.nota.trim() : ''}`
    : '';

  return (
    <>
      <section className="pagina-cab campo-oscuro">
        <div className="envoltura">
          <Titulo as="h1" id="titulo-reservar" lineas={reservaCfg.titulo} />
          <p className="t-lead">{reservaCfg.texto}</p>
        </div>
      </section>
      <section className="envoltura seccion reservar" aria-label="Formulario de reserva">
        <Stepper step={paso} onStepChange={(n) => (n <= paso || valido.slice(0, n - 1).every(Boolean)) && setPaso(n)}
          showFooter={false} theme="light" accentColor="#C9A24B" width={760} radius={8}
          completedContent={(
            <div className="listo">
              <h2 className="t-head">¡Solicitud lista!</h2>
              <p>Se abrió WhatsApp con tu solicitud. Si no se abrió, usa el botón. La cita queda confirmada cuando el salón te responde.</p>
              <a className="btn btn--oro" href={waUrl(mensaje)} target="_blank" rel="noopener">Enviar por WhatsApp</a>
              <button type="button" className="enlace" onClick={() => { setPaso(1); setD({ servicio: '', fecha: '', hora: '', nombre: '', telefono: '', nota: '' }); }}>Hacer otra reserva</button>
            </div>
          )}>
          <Step title="Servicio">
            <fieldset className="campos"><legend className="t-lead serif">¿Qué te gustaría hacerte?</legend>
              {servicios.map((s) => (
                <label key={s.id} className="opcion"><input type="radio" name="servicio" checked={d.servicio === s.id} onChange={() => set('servicio', s.id)} /><span>{s.nombre}</span></label>
              ))}
            </fieldset>
          </Step>
          <Step title="Fecha">
            <div className="campos">
              <label className="campo">Día<input type="date" min={minimo} value={d.fecha} onChange={(e) => set('fecha', e.target.value)} /></label>
              {cerrado && <p role="status">Ese día el salón está cerrado. Elige otro día.</p>}
              {horas.length > 0 && (
                <fieldset className="horas"><legend>Hora</legend>
                  {horas.map((h) => <button key={h} type="button" className="filtro" aria-pressed={d.hora === h} onClick={() => set('hora', h)}>{h}</button>)}
                </fieldset>
              )}
            </div>
          </Step>
          <Step title="Tus datos">
            <div className="campos">
              <label className="campo">Nombre<input autoComplete="name" value={d.nombre} onChange={(e) => set('nombre', e.target.value)} /></label>
              <label className="campo">Teléfono<input type="tel" autoComplete="tel" inputMode="tel" value={d.telefono} onChange={(e) => set('telefono', e.target.value)} /></label>
              <label className="campo">Nota (opcional)<textarea rows={2} value={d.nota} onChange={(e) => set('nota', e.target.value)} /></label>
            </div>
          </Step>
          <Step title="Confirmar">
            <dl className="resumen">
              <div><dt>Servicio</dt><dd>{serv?.nombre}</dd></div>
              <div><dt>Día</dt><dd>{d.fecha && fechaBonita(d.fecha)}</dd></div>
              <div><dt>Hora</dt><dd>{d.hora}</dd></div>
              <div><dt>A nombre de</dt><dd>{d.nombre}</dd></div>
              <div><dt>Teléfono</dt><dd>{d.telefono}</dd></div>
            </dl>
          </Step>
        </Stepper>
        {paso <= 4 && (
          <div className="reservar__botones">
            <button type="button" className="btn btn--claro" disabled={paso === 1} onClick={() => setPaso(paso - 1)}>Atrás</button>
            <button type="button" className="btn" disabled={!valido[paso - 1]}
              onClick={() => { if (paso === 4) window.open(waUrl(mensaje), '_blank', 'noopener'); setPaso(paso + 1); }}>
              {paso === 4 ? 'Confirmar por WhatsApp' : 'Continuar'}
            </button>
          </div>
        )}
      </section>
    </>
  );
}
