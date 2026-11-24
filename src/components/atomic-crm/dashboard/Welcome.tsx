import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Welcome = () => (
  <Card>
    <CardHeader className="px-4">
      <CardTitle>Tu CRM inmobiliario</CardTitle>
    </CardHeader>
    <CardContent className="px-4">
      <p className="text-sm mb-4">
        <a
          href="https://marmelab.com/atomic-crm"
          className="underline hover:no-underline"
        >
          Atomic CRM
        </a>{" "}
        es una plantilla de código abierto para armar tu propio CRM, adaptada
        acá para desarrolladoras e inmobiliarias.
      </p>
      <p className="text-sm mb-4">
        Esta demo funciona con datos de prueba en tu navegador: podés cargar y
        modificar lo que quieras, y todo vuelve a cero al recargar la página. La
        versión completa guarda los datos en Supabase.
      </p>
      <p className="text-sm">
        Construido con{" "}
        <a
          href="https://marmelab.com/shadcn-admin-kit"
          className="underline hover:no-underline"
        >
          shadcn-admin-kit
        </a>
        , Atomic CRM es open source. El código está en{" "}
        <a
          href="https://github.com/marmelab/atomic-crm"
          className="underline hover:no-underline"
        >
          marmelab/atomic-crm
        </a>
        .
      </p>
    </CardContent>
  </Card>
);
