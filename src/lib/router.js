import { useEffect, useState } from 'react';
/* Router por hash: #/servicios -> "/servicios". Sirve en GitHub Pages sin dependencias. */
const leer = () => (window.location.hash.replace(/^#/, '') || '/').split('?')[0];
export function useRuta() {
  const [r, setR] = useState(leer);
  useEffect(() => { const f = () => setR(leer()); window.addEventListener('hashchange', f); return () => window.removeEventListener('hashchange', f); }, []);
  return r;
}
