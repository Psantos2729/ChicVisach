import { useEffect, useState } from 'react';
import { negocio } from '../contenido.js';

const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const min = (h) => { const [a, b] = h.split(':'); return +a * 60 + +b; };

/* "Abierto ahora, hasta las 18:00" / "Mañana lunes abrimos a las 9:00" (hora de Guatemala, UTC-6) */
function texto() {
  const n = new Date();
  const t = new Date(n.getTime() + n.getTimezoneOffset() * 60000 - 6 * 3600000);
  const dia = t.getDay(), m = t.getHours() * 60 + t.getMinutes(), h = negocio.horario[dia];
  if (h && m < min(h[0])) return `Hoy abrimos a las ${h[0]}`;
  if (h && m < min(h[1])) return `Abierto ahora, hasta las ${h[1]}`;
  for (let k = 1; k <= 7; k++) {
    const d = (dia + k) % 7, x = negocio.horario[d];
    if (x) return `${k === 1 ? 'Mañana ' + dias[d] : 'El ' + dias[d]} abrimos a las ${x[0]}`;
  }
  return negocio.horarioTexto;
}

export function useHoy() {
  const [t, setT] = useState(negocio.horarioTexto);
  useEffect(() => { const f = () => setT(texto()); f(); const id = setInterval(f, 60000); return () => clearInterval(id); }, []);
  return t;
}
