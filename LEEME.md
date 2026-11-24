# CRM Inmobiliario (basado en Atomic CRM)

Copia de [marmelab/atomic-crm](https://github.com/marmelab/atomic-crm) (commit `bfcb138`, 24/11/2026) adaptada para un taller con desarrolladoras e inmobiliarias.

## Qué se adaptó

- **Idioma**: castellano rioplatense por defecto (`src/components/atomic-crm/providers/commons/spanish*.ts`); inglés y francés siguen disponibles desde el menú del usuario.
- **Configuración** (`src/components/atomic-crm/root/defaultConfiguration.ts`):
  - Título "CRM Inmobiliario", moneda USD.
  - Tipos de empresa: desarrolladora, inmobiliaria, constructora, estudio de arquitectura, fideicomiso, inversor, banco, escribanía, cliente corporativo, proveedor.
  - Embudo: Consulta → Visita / Propuesta enviada → Negociación / Reserva → Boleto / Escritura firmada (o Perdida / En pausa).
  - Tipo de unidad: departamento, casa, lote, local, oficina, cochera, unidad en pozo, alquiler, tasación / captación.
  - Tareas: llamado, WhatsApp, email, visita a la propiedad, visita a obra / showroom, enviar ficha, tasación, reunión, seguimiento, firma.
  - Todo se puede cambiar después desde **Configuración** dentro del CRM.

## Correr

Requiere Node 24.

```bash
npm install
npm run dev:demo      # demo con datos de prueba en el navegador, sin base de datos
```

Con base real (necesita Docker para Supabase local): `make start` → http://localhost:5173.

## Producción

```bash
npx supabase link --project-ref <ref-del-proyecto>
npx supabase db push
npx supabase functions deploy
```

Frontend en Vercel/Netlify: build `npm run build`, salida `dist`, variables `VITE_SUPABASE_URL` y `VITE_SB_PUBLISHABLE_KEY`. Solo la demo (sin base): `npm run build:demo`.

Actualizaciones de upstream: `npx shadcn add https://marmelab.com/atomic-crm/r/atomic-crm.json -o` (revisar el diff: pisa los archivos adaptados).
