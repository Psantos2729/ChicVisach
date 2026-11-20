/* ==========================================================================
   DEMO para ChicVisach. Todo lo que cambia por cliente vive aquí.
   Datos marcados "(ejemplo)" son de muestra: se confirman con el negocio.
   No hay precios ni reseñas inventadas.
   ========================================================================== */

export const negocio = {
  nombre: 'ChicVisach',
  tipo: 'Salon & Spa',
  tipoSchema: 'BeautySalon',
  zona: 'Villa Nueva',
  ciudad: 'Guatemala',
  direccion: 'Centro Comercial Galerías Catalina, local 22, zona 6 de Villa Nueva, Guatemala',
  telefono: 'se confirma por WhatsApp',
  whatsapp: '50200000000',               // número de ejemplo: reemplazar por el real
  mensajeWA: 'Hola ChicVisach, quiero reservar una cita',
  url: 'https://psantos2729.github.io/ChicVisach',
  descripcion: 'ChicVisach Salon & Spa en Galerías Catalina, Villa Nueva: servicio premium en cabello, uñas y productos de belleza. Reserva tu cita en línea y confirma por WhatsApp.',
  logo: 'logo.svg',
  ogImagen: 'fotos/decor.webp',
  // Horario de ejemplo (hora de Guatemala). 0 = domingo. null = cerrado.
  horario: { 0: null, 1: ['9:00', '18:00'], 2: ['9:00', '18:00'], 3: ['9:00', '18:00'], 4: ['9:00', '18:00'], 5: ['9:00', '18:00'], 6: ['9:00', '15:00'] },
  horarioTexto: 'Lunes a viernes de 9:00 a 18:00 y sábados de 9:00 a 15:00 (horario de ejemplo).'
};

export const nav = [
  { texto: 'Servicios', href: '#/servicios' },
  { texto: 'Catálogo', href: '#/catalogo' },
  { texto: 'Reservar', href: '#/reservar' },
  { texto: 'Contacto', href: '#/contacto' }
];

export const portada = {
  rotar: ['cabello', 'uñas', 'color', 'piel'],
  apoyo: 'Redefinimos tu estilo con un servicio premium y expertas capacitadas en las últimas tendencias internacionales de belleza. Un salón pensado para que salgas sintiéndote increíble. Mira lo que hacemos, elige tus productos y reserva tu cita en línea.',
  ctaTexto: 'Reservar mi cita',
  fotos: [
    { src: 'fotos/decor.webp', alt: 'Recepción del salón con rosas blancas y mármol' },
    { src: 'fotos/favorito.webp', alt: 'Cabello largo con balayage' },
    { src: 'fotos/formulas.webp', alt: 'Mezcla de color capilar en un tazón sobre una báscula' }
  ]
};

export const cifras = [
  { valor: 5, texto: 'servicios para ti' },
  { valor: 10, texto: 'productos en el catálogo' },
  { valor: 6, texto: 'días a la semana (ejemplo)' }
];

export const servicios = [
  { id: 'corte', nombre: 'Corte y peinado', texto: 'Corte a tu medida y peinado para el día a día o para una ocasión especial.', foto: 'fotos/luminosidad.webp', alt: 'Mujer de espaldas con cabello ondulado y productos capilares' },
  { id: 'nanoplastia', nombre: 'Nanoplastia y tratamientos', texto: 'Cabello con brillo, suave y más fácil de peinar. Mira el antes y el después.', foto: 'fotos/dano.webp', alt: 'Cabello dañado junto a cabello liso y brillante' },
  { id: 'balayage', nombre: 'Balayage y diseños de color', texto: 'Color con luz y dimensión, a tu medida. Pregunta por las promociones de color.', foto: 'fotos/favorito.webp', alt: 'Cabello largo con balayage en ondas' },
  { id: 'unas', nombre: 'Uñas: acrílico y gel', texto: 'Uñas en acrílico o gel, con diseños de color y el tono que más te guste.', foto: 'fotos/unas.webp', alt: 'Mano con esmalte rosa claro' },
  { id: 'productos', nombre: 'Productos de belleza', texto: 'Maquillaje, cuidado de la piel y del cabello que puedes llevarte a casa.', foto: 'fotos/prod-1.webp', alt: 'Paleta de sombras en tonos tierra' }
];

export const notaPrecios = 'Duración y precio de cada servicio se confirman por WhatsApp antes de tu cita.';

export const galeria = {
  ancho: 260,
  proporcion: 0.72,
  fotos: [
    { src: 'fotos/dano.webp', alt: 'Cabello dañado junto a cabello liso y brillante', titulo: 'Adiós al daño' },
    { src: 'fotos/formulas.webp', alt: 'Mezcla de color capilar', titulo: 'Fórmulas con precisión' },
    { src: 'fotos/decor.webp', alt: 'Recepción del salón con rosas', titulo: 'Nuestro espacio' },
    { src: 'fotos/favorito.webp', alt: 'Cabello con balayage', titulo: 'El favorito de todas' },
    { src: 'fotos/luminosidad.webp', alt: 'Cabello con movimiento natural', titulo: 'Luminosidad' }
  ]
};

export const catalogo = {
  titulo: ['Nuestros', 'productos de belleza'],
  texto: 'Toca una tarjeta para girarla y pedir el producto por WhatsApp. Disponibilidad y precio se confirman con el salón.',
  categorias: ['Todos', 'Maquillaje', 'Piel', 'Fragancia', 'Cabello', 'Uñas'],
  productos: [
    { id: 1, foto: 'fotos/prod-5.webp', nombre: 'Labial rojo', categoria: 'Maquillaje', texto: 'Color intenso para labios con presencia.' },
    { id: 2, foto: 'fotos/prod-4.webp', nombre: 'Máscara de pestañas', categoria: 'Maquillaje', texto: 'Pestañas largas y definidas.' },
    { id: 3, foto: 'fotos/prod-2.webp', nombre: 'Base líquida', categoria: 'Maquillaje', texto: 'Cobertura pareja de larga duración.' },
    { id: 4, foto: 'fotos/prod-1.webp', nombre: 'Paleta de sombras', categoria: 'Maquillaje', texto: 'Tonos tierra para ojos de día y de noche.' },
    { id: 5, foto: 'fotos/prod-3.webp', nombre: 'Crema hidratante facial', categoria: 'Piel', texto: 'Hidratación diaria con textura ligera.' },
    { id: 6, foto: 'fotos/prod-7.webp', nombre: 'Sérum de vitamina C', categoria: 'Piel', texto: 'Cuidado para una piel con luz.' },
    { id: 7, foto: 'fotos/prod-9.webp', nombre: 'Protector solar SPF 50', categoria: 'Piel', texto: 'Protección diaria para el rostro.' },
    { id: 8, foto: 'fotos/prod-8.webp', nombre: 'Perfume', categoria: 'Fragancia', texto: 'Una fragancia para acompañarte todo el día.' },
    { id: 9, foto: 'fotos/prod-6.webp', nombre: 'Champú', categoria: 'Cabello', texto: 'Limpieza suave para mantener tu cabello bonito.' },
    { id: 10, foto: 'fotos/prod-10.webp', nombre: 'Esmalte de uñas', categoria: 'Uñas', texto: 'Color y brillo para tus uñas.' }
  ]
};

export const reservaCfg = {
  titulo: ['Reserva tu cita', 'en cuatro pasos'],
  texto: 'Elige tu servicio, el día y la hora, y déjanos tus datos. Al final se abre WhatsApp con tu solicitud lista; la cita queda confirmada cuando el salón te responde.',
  horas: ['9:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00']
};

export const pie = { titulo: ['Tu cita', 'te espera'], mensaje: 'Escríbenos por WhatsApp para confirmar.' };
