import { waUrl } from '../lib/wa.js';
export default function BotonWA({ children, texto, className = 'btn', ...r }) {
  return <a className={className} href={waUrl(texto)} target="_blank" rel="noopener" {...r}>{children}</a>;
}
