import type { ConfigurationContextValue } from "./ConfigurationContext";
// Import the logos as module assets so Vite resolves their URL relative to the
// JS chunk (import.meta.url), not the current route. A plain "./logos/..." path
// breaks on nested routes like /oauth/consent and under a deployment sub-path.
import darkModeLogo from "./logos/logo_atomic_crm_dark.svg";
import lightModeLogo from "./logos/logo_atomic_crm_light.svg";

export const defaultDarkModeLogo = darkModeLogo;
export const defaultLightModeLogo = lightModeLogo;

// Las operaciones inmobiliarias se cotizan en dólares.
export const defaultCurrency = "USD";

export const defaultTitle = "CRM Inmobiliario";

// Tipo de empresa/organización con la que se trabaja.
export const defaultCompanySectors = [
  { value: "desarrolladora", label: "Desarrolladora" },
  { value: "inmobiliaria", label: "Inmobiliaria" },
  { value: "constructora", label: "Constructora" },
  { value: "estudio-arquitectura", label: "Estudio de arquitectura" },
  { value: "fideicomiso", label: "Fideicomiso" },
  { value: "inversor", label: "Inversor / Family office" },
  { value: "banco-financiera", label: "Banco / Financiera" },
  { value: "escribania", label: "Escribanía" },
  { value: "empresa-corporativa", label: "Empresa (cliente corporativo)" },
  { value: "proveedor", label: "Proveedor" },
  { value: "otro", label: "Otro" },
];

// Los valores (value) se mantienen porque el tablero de oportunidades
// y el gráfico del inicio dependen de "won", "lost", etc. Solo cambian
// los textos visibles.
export const defaultDealStages = [
  { value: "opportunity", label: "Consulta" },
  { value: "proposal-sent", label: "Visita / Propuesta enviada" },
  { value: "in-negociation", label: "Negociación / Reserva" },
  { value: "won", label: "Boleto / Escritura firmada" },
  { value: "lost", label: "Perdida" },
  { value: "delayed", label: "En pausa" },
];

export const defaultDealPipelineStatuses = ["won"];

// Tipo de unidad u operación.
export const defaultDealCategories = [
  { value: "departamento", label: "Departamento" },
  { value: "casa", label: "Casa" },
  { value: "lote", label: "Lote / Terreno" },
  { value: "local", label: "Local comercial" },
  { value: "oficina", label: "Oficina" },
  { value: "cochera", label: "Cochera / Baulera" },
  { value: "en-pozo", label: "Unidad en pozo" },
  { value: "alquiler", label: "Alquiler" },
  { value: "tasacion", label: "Tasación / Captación" },
  { value: "otro", label: "Otro" },
];

export const defaultNoteStatuses = [
  { value: "cold", label: "Frío", color: "#7dbde8" },
  { value: "warm", label: "Tibio", color: "#e8cb7d" },
  { value: "hot", label: "Caliente", color: "#e88b7d" },
  { value: "in-contract", label: "Cliente", color: "#a4e87d" },
];

export const defaultTaskTypes = [
  { value: "none", label: "Ninguno" },
  { value: "call", label: "Llamado" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "Email" },
  { value: "visit", label: "Visita a la propiedad" },
  { value: "showroom", label: "Visita a obra / showroom" },
  { value: "brochure", label: "Enviar ficha / brochure" },
  { value: "appraisal", label: "Tasación" },
  { value: "meeting", label: "Reunión" },
  { value: "follow-up", label: "Seguimiento" },
  { value: "signing", label: "Firma (reserva / boleto / escritura)" },
];

export const defaultConfiguration: ConfigurationContextValue = {
  companySectors: defaultCompanySectors,
  currency: defaultCurrency,
  dealCategories: defaultDealCategories,
  dealPipelineStatuses: defaultDealPipelineStatuses,
  dealStages: defaultDealStages,
  noteStatuses: defaultNoteStatuses,
  taskTypes: defaultTaskTypes,
  title: defaultTitle,
  darkModeLogo: defaultDarkModeLogo,
  lightModeLogo: defaultLightModeLogo,
};
