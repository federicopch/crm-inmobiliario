// Datos de ejemplo del rubro inmobiliario (Argentina) para la demo.
// Todas las empresas, personas y emprendimientos son ficticios.
import { datatype, random } from "faker/locale/en_US";

export type Place = { city: string; province: string; area: string };

export const places: Place[] = [
  { city: "Palermo", province: "CABA", area: "11" },
  { city: "Belgrano", province: "CABA", area: "11" },
  { city: "Núñez", province: "CABA", area: "11" },
  { city: "Caballito", province: "CABA", area: "11" },
  { city: "Villa Urquiza", province: "CABA", area: "11" },
  { city: "Puerto Madero", province: "CABA", area: "11" },
  { city: "Nordelta", province: "Buenos Aires", area: "11" },
  { city: "Pilar", province: "Buenos Aires", area: "230" },
  { city: "La Plata", province: "Buenos Aires", area: "221" },
  { city: "Mar del Plata", province: "Buenos Aires", area: "223" },
  { city: "Rosario", province: "Santa Fe", area: "341" },
  { city: "Córdoba", province: "Córdoba", area: "351" },
  { city: "Mendoza", province: "Mendoza", area: "261" },
  { city: "Neuquén", province: "Neuquén", area: "299" },
];

export const streets = [
  "Av. del Libertador",
  "Av. Cabildo",
  "Gorriti",
  "Av. Santa Fe",
  "Juramento",
  "Av. Rivadavia",
  "Monroe",
  "Av. Pellegrini",
  "Bv. Oroño",
  "Av. Colón",
  "Av. San Martín",
  "Calle 7",
  "Av. Colón",
  "Juana Manso",
  "Av. Olazábal",
  "Arribeños",
];

export const address = () =>
  `${random.arrayElement(streets)} ${datatype.number({ min: 100, max: 4800 })}`;

export const phoneFor = (place: Place) => {
  const digits = 8 - (place.area.length - 2);
  const n = String(
    datatype.number({ min: 10 ** (digits - 1), max: 10 ** digits - 1 }),
  );
  return `+54 9 ${place.area} ${n.slice(0, n.length - 4)}-${n.slice(-4)}`;
};

export const slug = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&/g, "y")
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 24);

export type CompanySeed = {
  name: string;
  sector: string;
  size: 1 | 10 | 50 | 250 | 500;
  description: string;
};

export const companySeeds: CompanySeed[] = [
  {
    name: "Altavista Desarrollos",
    sector: "desarrolladora",
    size: 50,
    description:
      "Desarrolladora de edificios residenciales de categoría en zona norte de CABA. Comercializa en pozo con planes de cuotas en dólares.",
  },
  {
    name: "Grupo Ribera Urbana",
    sector: "desarrolladora",
    size: 250,
    description:
      "Desarrollos de usos mixtos frente al río en Rosario y Nordelta. Trabaja con fideicomisos al costo.",
  },
  {
    name: "Nodo Desarrollos",
    sector: "desarrolladora",
    size: 10,
    description:
      "Edificios boutique de 12 a 20 unidades en Palermo y Villa Urquiza, foco en inversores de renta.",
  },
  {
    name: "Puerto Norte Desarrollos",
    sector: "desarrolladora",
    size: 50,
    description:
      "Torres residenciales con amenities en Puerto Norte, Rosario. Segunda etapa en preventa.",
  },
  {
    name: "Terrazas del Sur S.A.",
    sector: "desarrolladora",
    size: 50,
    description:
      "Barrios abiertos y lotes con servicios en La Plata y alrededores.",
  },
  {
    name: "Arboleda Desarrollos",
    sector: "desarrolladora",
    size: 10,
    description: "Barrios cerrados y casas llave en mano en Pilar.",
  },
  {
    name: "Distrito Verde",
    sector: "desarrolladora",
    size: 10,
    description: "Lofts y oficinas sustentables en Córdoba capital.",
  },
  {
    name: "Cordillera Desarrollos",
    sector: "desarrolladora",
    size: 50,
    description:
      "Edificios residenciales y apart hotel en Mendoza y Neuquén, demanda impulsada por Vaca Muerta.",
  },
  {
    name: "Paz & Asociados Propiedades",
    sector: "inmobiliaria",
    size: 10,
    description:
      "Inmobiliaria tradicional de Belgrano y Núñez. Venta y alquiler de usados, tasaciones.",
  },
  {
    name: "Lagos Propiedades",
    sector: "inmobiliaria",
    size: 10,
    description: "Especialistas en casas y lotes en Nordelta y Tigre.",
  },
  {
    name: "Ríos Negocios Inmobiliarios",
    sector: "inmobiliaria",
    size: 50,
    description:
      "Red de 4 sucursales en zona norte. Comercializa desarrollos de terceros en exclusiva.",
  },
  {
    name: "Casa Nueva Inmobiliaria",
    sector: "inmobiliaria",
    size: 10,
    description:
      "Inmobiliaria de barrio en Caballito, fuerte en alquileres y PH.",
  },
  {
    name: "Quintana Bienes Raíces",
    sector: "inmobiliaria",
    size: 10,
    description:
      "Propiedades premium en Puerto Madero y Palermo Chico. Clientes del exterior.",
  },
  {
    name: "Litoral Propiedades",
    sector: "inmobiliaria",
    size: 10,
    description:
      "Inmobiliaria de Rosario con cartera de departamentos para inversores.",
  },
  {
    name: "Costa Atlántica Propiedades",
    sector: "inmobiliaria",
    size: 10,
    description: "Venta y alquiler temporario en Mar del Plata.",
  },
  {
    name: "Constructora Andina",
    sector: "constructora",
    size: 250,
    description:
      "Constructora de obra húmeda y llave en mano para desarrolladoras medianas.",
  },
  {
    name: "Hormigón Sur S.A.",
    sector: "constructora",
    size: 50,
    description:
      "Estructuras de hormigón armado. Trabaja en canje de metros con desarrolladoras.",
  },
  {
    name: "Estudio Ferrari Arquitectos",
    sector: "estudio-arquitectura",
    size: 10,
    description: "Proyecto y dirección de obra de edificios residenciales.",
  },
  {
    name: "BRV Arquitectura",
    sector: "estudio-arquitectura",
    size: 1,
    description: "Estudio joven, interiorismo de unidades modelo y showrooms.",
  },
  {
    name: "Fideicomiso Torre Mirador",
    sector: "fideicomiso",
    size: 1,
    description:
      "Fideicomiso al costo para torre de 18 pisos en Núñez. 60% de unidades adjudicadas.",
  },
  {
    name: "Fideicomiso Los Aromos",
    sector: "fideicomiso",
    size: 1,
    description: "Fideicomiso de barrio cerrado en Pilar, 120 lotes.",
  },
  {
    name: "Pampa Capital Inversiones",
    sector: "inversor",
    size: 10,
    description:
      "Fondo que compra unidades en pozo en bloque para renta y reventa.",
  },
  {
    name: "Etchegaray Family Office",
    sector: "inversor",
    size: 1,
    description:
      "Familia de productores agropecuarios que dolariza excedentes en ladrillos.",
  },
  {
    name: "Banco Federal de Crédito",
    sector: "banco-financiera",
    size: 500,
    description:
      "Banco con línea de crédito hipotecario UVA. Contacto para preaprobaciones.",
  },
  {
    name: "Hipotecar Financiera",
    sector: "banco-financiera",
    size: 50,
    description:
      "Financiera especializada en créditos puente para compra en pozo.",
  },
  {
    name: "Escribanía Lorenzo & Vidal",
    sector: "escribania",
    size: 10,
    description:
      "Escribanía de confianza para boletos, escrituras y reglamentos de copropiedad.",
  },
  {
    name: "Logística Atlántica S.A.",
    sector: "empresa-corporativa",
    size: 250,
    description:
      "Empresa de logística que busca mudar su sede a oficinas premium.",
  },
  {
    name: "Laboratorios Sinergia",
    sector: "empresa-corporativa",
    size: 250,
    description:
      "Busca alquilar un piso corporativo y viviendas para personal trasladado.",
  },
  {
    name: "Amoblamientos Nórdica",
    sector: "proveedor",
    size: 10,
    description:
      "Cocinas y placares a medida para desarrollos. Ofrece paquetes por unidad.",
  },
  {
    name: "Domótica Integral",
    sector: "proveedor",
    size: 10,
    description:
      "Automatización, seguridad y control de accesos para edificios.",
  },
];

export const maleNames = [
  "Martín",
  "Santiago",
  "Juan Pablo",
  "Federico",
  "Nicolás",
  "Diego",
  "Matías",
  "Gonzalo",
  "Pablo",
  "Hernán",
  "Sebastián",
  "Lucas",
  "Agustín",
  "Tomás",
  "Facundo",
  "Ignacio",
  "Alejandro",
  "Marcelo",
  "Gustavo",
  "Rodrigo",
];
export const femaleNames = [
  "Lucía",
  "Florencia",
  "Carolina",
  "Valeria",
  "Sofía",
  "María José",
  "Paula",
  "Camila",
  "Julieta",
  "Agustina",
  "Mariana",
  "Gabriela",
  "Natalia",
  "Laura",
  "Victoria",
  "Romina",
  "Silvina",
  "Belén",
  "Cecilia",
  "Andrea",
];
export const lastNames = [
  "González",
  "Rodríguez",
  "Fernández",
  "López",
  "Martínez",
  "García",
  "Pérez",
  "Sánchez",
  "Romero",
  "Sosa",
  "Álvarez",
  "Torres",
  "Ruiz",
  "Ramírez",
  "Flores",
  "Acosta",
  "Benítez",
  "Medina",
  "Herrera",
  "Suárez",
  "Aguirre",
  "Giménez",
  "Gutiérrez",
  "Pereyra",
  "Rossi",
  "Ferrari",
  "Bianchi",
  "Etchegaray",
  "Iturralde",
  "Morales",
  "Castro",
  "Ortiz",
  "Silva",
  "Molina",
  "Domínguez",
];

// Cargos por tipo de empresa: [masculino, femenino]
export const titlesBySector: Record<string, [string, string][]> = {
  desarrolladora: [
    ["Director comercial", "Directora comercial"],
    ["Gerente de producto", "Gerenta de producto"],
    ["Socio fundador", "Socia fundadora"],
    ["Responsable de marketing", "Responsable de marketing"],
    ["Asesor comercial", "Asesora comercial"],
  ],
  inmobiliaria: [
    ["Corredor inmobiliario", "Corredora inmobiliaria"],
    ["Martillero", "Martillera"],
    ["Asesor comercial", "Asesora comercial"],
    ["Socio gerente", "Socia gerente"],
  ],
  constructora: [
    ["Jefe de obra", "Jefa de obra"],
    ["Gerente técnico", "Gerenta técnica"],
    ["Director", "Directora"],
  ],
  "estudio-arquitectura": [
    ["Arquitecto", "Arquitecta"],
    ["Director de proyecto", "Directora de proyecto"],
  ],
  fideicomiso: [
    ["Fiduciario", "Fiduciaria"],
    ["Fiduciante", "Fiduciante"],
    ["Administrador", "Administradora"],
  ],
  inversor: [
    ["Inversor", "Inversora"],
    ["Analista de inversiones", "Analista de inversiones"],
  ],
  "banco-financiera": [
    ["Oficial de crédito", "Oficial de crédito"],
    ["Gerente de sucursal", "Gerenta de sucursal"],
  ],
  escribania: [
    ["Escribano", "Escribana"],
    ["Escribano adscripto", "Escribana adscripta"],
  ],
  "empresa-corporativa": [
    ["Gerente de administración", "Gerenta de administración"],
    ["Responsable de RR.HH.", "Responsable de RR.HH."],
    ["CFO", "CFO"],
  ],
  proveedor: [
    ["Ejecutivo de cuentas", "Ejecutiva de cuentas"],
    ["Dueño", "Dueña"],
  ],
  otro: [["Contacto", "Contacto"]],
};

export const backgroundsBySector: Record<string, string[]> = {
  desarrolladora: [
    "Decide sobre comisiones y exclusividades de comercialización.",
    "Quiere sumar canales de venta para la segunda etapa del proyecto.",
    "Lleva el control del stock de unidades y la lista de precios.",
  ],
  inmobiliaria: [
    "Trae compradores particulares de la zona; comparte comisión 50/50.",
    "Tiene cartera de inversores que compran en pozo para renta.",
    "Muy activo en portales; pide fichas y renders actualizados.",
  ],
  constructora: [
    "Interesado en canje de metros por obra.",
    "Coordina avance de obra y fechas de entrega.",
  ],
  "estudio-arquitectura": [
    "Proyectista de varios edificios de la zona; recomienda clientes.",
    "Arma las unidades modelo y el showroom.",
  ],
  fideicomiso: [
    "Administra las cuotas de los fiduciantes y el cronograma de aportes.",
    "Busca colocar las unidades que quedan sin adjudicar.",
  ],
  inversor: [
    "Compra 2 a 4 unidades por año, prefiere monoambientes para renta.",
    "Busca rentabilidad en dólares superior al 5% anual.",
    "Evalúa comprar en bloque con descuento por pago contado.",
  ],
  "banco-financiera": [
    "Gestiona preaprobaciones de crédito hipotecario UVA para nuestros compradores.",
    "Contacto para créditos puente de compradores en pozo.",
  ],
  escribania: [
    "Hace los boletos y escrituras de los últimos tres proyectos.",
    "Necesita la documentación con 10 días de anticipación a la firma.",
  ],
  "empresa-corporativa": [
    "Busca piso de oficinas de 500 a 800 m² con cocheras.",
    "Necesita viviendas para personal trasladado, contratos corporativos.",
  ],
  proveedor: [
    "Ofrece paquete de equipamiento por unidad para mejorar la propuesta.",
    "Presupuestó la domótica del edificio nuevo.",
  ],
  otro: ["Contacto general."],
};

export const tagSeeds = [
  { id: 0, name: "inversor", color: "#dbe7e4" },
  { id: 1, name: "primera vivienda", color: "#fde2e4" },
  { id: 2, name: "crédito hipotecario", color: "#fff1e6" },
  { id: 3, name: "VIP", color: "#fad2e1" },
  { id: 4, name: "referido", color: "#c5dedd" },
  { id: 5, name: "broker", color: "#eddcd2" },
];

export const projects = [
  "Torre Mirador",
  "Altos de Ribera",
  "Edificio Ombú",
  "Nodo Palermo",
  "Barrio Los Aromos",
  "Puerto Norte II",
  "Terrazas del Sur",
  "Arboleda Pilar",
  "Distrito Verde Lofts",
  "Costanera 1450",
  "Cordillera Plaza",
];

// Unidad y rango de monto (USD) por categoría
export const unitsByCategory: Record<
  string,
  { units: string[]; min: number; max: number }
> = {
  departamento: {
    units: [
      "2 amb. piso 4 frente",
      "3 amb. con cochera",
      "monoambiente piso 2",
      "4 amb. semipiso",
      "2 amb. con balcón aterrazado",
    ],
    min: 95000,
    max: 320000,
  },
  casa: {
    units: [
      "casa 4 dorm. lote 312",
      "casa 3 dorm. con pileta",
      "casa llave en mano lote 45",
    ],
    min: 250000,
    max: 650000,
  },
  lote: {
    units: ["lote 18 · 800 m²", "lote esquina 1.000 m²", "lote 72 · 600 m²"],
    min: 40000,
    max: 180000,
  },
  local: {
    units: [
      "local PB 65 m²",
      "local en galería 40 m²",
      "local con vidriera 120 m²",
    ],
    min: 120000,
    max: 400000,
  },
  oficina: {
    units: [
      "piso 6 · 180 m²",
      "oficina 75 m² con cochera",
      "piso corporativo 600 m²",
    ],
    min: 200000,
    max: 900000,
  },
  cochera: {
    units: ["cochera fija 2° subsuelo", "cochera + baulera"],
    min: 18000,
    max: 35000,
  },
  "en-pozo": {
    units: [
      "unidad 5B · 2 amb.",
      "unidad 9A · 3 amb.",
      "unidad 3C · monoambiente",
      "bloque de 4 unidades",
    ],
    min: 70000,
    max: 420000,
  },
  alquiler: {
    units: [
      "alquiler 2 amb. amoblado",
      "alquiler corporativo 3 amb.",
      "alquiler local comercial",
    ],
    min: 7000,
    max: 30000,
  },
  tasacion: {
    units: [
      "tasación PH 3 amb.",
      "captación casa en exclusiva",
      "tasación departamento usado",
    ],
    min: 3000,
    max: 12000,
  },
  otro: { units: ["consulta general"], min: 5000, max: 20000 },
};

export const roundAmount = (min: number, max: number) =>
  Math.round(datatype.number({ min, max }) / 500) * 500;

export const dealDescriptions = [
  "Consulta entrante por el portal. Busca entrega en 2027 y financiación en cuotas.",
  "Cliente referido por la escribanía. Quiere pagar 30% anticipo y el saldo en 36 cuotas en dólares.",
  "Inversor que compara rentabilidad con otros dos proyectos de la zona.",
  "Pareja joven, primera vivienda. Depende de la aprobación del crédito hipotecario.",
  "Pide descuento por pago contado. Se ofreció 8% y bonificar la cochera.",
  "Ya visitó el showroom dos veces; falta definir el piso.",
  "Vende su departamento actual para comprar; necesita coordinar fechas.",
  "Empresa que busca unidad para un gerente trasladado desde Córdoba.",
];

export const contactNoteTexts = [
  "Llamé para presentar el proyecto. Le interesa, pide ficha técnica y lista de precios.",
  "Le mandé por WhatsApp el brochure y el video del avance de obra.",
  "Visitó el showroom con su pareja. Les gustó la planta del 3 ambientes pero el precio está arriba de su presupuesto.",
  "Pidió que lo volvamos a llamar después del 15, cuando cobre la venta de su propiedad.",
  "Consulta si se acepta permuta por un departamento usado en Caballito.",
  "No atiende el teléfono; le dejé mensaje y mail.",
  "Está comparando con un proyecto de la competencia en la misma cuadra. Destacar amenities y fecha de entrega.",
  "Confirmó que tiene el crédito preaprobado por USD 110.000.",
  "Quiere saber las expensas estimadas y si se permite alquiler temporario.",
  "Reunión muy buena. Se va a decidir esta semana entre el 4° y el 7° piso.",
  "Pidió reservar la unidad por 7 días con USD 2.000.",
  "Se enfrió: posterga la compra hasta ver qué pasa con el dólar.",
  "Nos refirió a dos conocidos que buscan monoambientes para inversión.",
  "Envié el borrador del boleto para que lo revise su abogado.",
  "Pregunta por la forma de pago: acepta 40% anticipo y saldo en 24 cuotas.",
];

export const dealNoteTexts = [
  "Se envió propuesta formal con plan de pagos.",
  "Contraoferta del cliente: 5% menos y la cochera incluida.",
  "Aprobado por dirección comercial el descuento solicitado.",
  "Firmó la reserva. Coordinar boleto con la escribanía.",
  "El banco pidió documentación adicional para el crédito.",
  "Visita a obra realizada, quedó conforme con el avance.",
  "El cliente pidió cambiar la unidad por una de piso más alto.",
  "Se cayó la operación: compró en otro proyecto.",
  "Se reprogramó la firma del boleto para la semana próxima.",
  "Se cargó la seña. Pendiente factura de honorarios.",
];

export const taskTexts: Record<string, string[]> = {
  call: [
    "Llamar para confirmar interés después de la visita",
    "Llamar para ofrecer la nueva unidad disponible",
    "Llamar por la actualización de la lista de precios",
  ],
  whatsapp: [
    "Mandar por WhatsApp el video del avance de obra",
    "Enviar ubicación del showroom y horarios",
    "Confirmar visita del sábado por WhatsApp",
  ],
  email: [
    "Enviar propuesta con plan de pagos",
    "Mandar planos de la unidad elegida",
    "Enviar borrador de la reserva",
  ],
  visit: [
    "Mostrar la unidad modelo",
    "Visita a la propiedad con el comprador",
    "Segunda visita con la familia",
  ],
  showroom: [
    "Recorrida de obra con el inversor",
    "Visita al showroom con brokers",
  ],
  brochure: [
    "Enviar ficha técnica y lista de precios",
    "Mandar brochure actualizado con renders",
  ],
  appraisal: [
    "Tasar el PH del cliente para la permuta",
    "Tasación para captar la casa en exclusiva",
  ],
  meeting: [
    "Reunión con dirección comercial por descuentos",
    "Reunión con el banco por la línea de crédito",
  ],
  "follow-up": [
    "Seguimiento de la propuesta enviada",
    "Retomar contacto: estaba esperando cobrar una venta",
    "Consultar si pudo revisar el boleto",
  ],
  signing: [
    "Firma de reserva",
    "Firma de boleto en la escribanía",
    "Coordinar fecha de escritura",
  ],
  none: ["Actualizar datos de contacto", "Revisar documentación pendiente"],
};

export const salesSeeds = [
  { first_name: "Martín", last_name: "Aguirre" },
  { first_name: "Florencia", last_name: "Rossi" },
  { first_name: "Diego", last_name: "Benítez" },
  { first_name: "Camila", last_name: "Iturralde" },
  { first_name: "Tomás", last_name: "Medina" },
];

export const pickGenderedName = () => {
  const gender = random.arrayElement([
    "male",
    "male",
    "female",
    "female",
    "nonbinary",
  ]);
  const female =
    gender === "female" || (gender === "nonbinary" && datatype.boolean());
  return {
    gender,
    female,
    first_name: random.arrayElement(female ? femaleNames : maleNames),
    last_name: random.arrayElement(lastNames),
  };
};
