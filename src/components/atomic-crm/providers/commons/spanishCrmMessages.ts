import type { CrmMessages } from "./englishCrmMessages";

export const spanishCrmMessages = {
  resources: {
    companies: {
      name: "Empresa |||| Empresas",
      forcedCaseName: "Empresa",
      fields: {
        name: "Nombre de la empresa",
        website: "Sitio web",
        linkedin_url: "URL de LinkedIn",
        phone_number: "Teléfono",
        created_at: "Fecha de alta",
        nb_contacts: "Cantidad de contactos",
        revenue: "Facturación",
        sector: "Rubro",
        size: "Tamaño",
        tax_identifier: "CUIT",
        address: "Dirección",
        city: "Localidad",
        zipcode: "Código postal",
        state_abbr: "Provincia",
        country: "País",
        description: "Descripción",
        context_links: "Enlaces de contexto",
        sales_id: "Responsable de cuenta",
      },
      empty: {
        description: "Parece que tu lista de empresas está vacía.",
        title: "No se encontraron empresas",
      },
      import: {
        title: "Importar empresas",
      },
      field_categories: {
        contact: "Datos de contacto",
        additional_info: "Información adicional",
        address: "Dirección",
        context: "Contexto",
      },
      action: {
        create: "Crear empresa",
        edit: "Editar empresa",
        new: "Nueva empresa",
        show: "Ver empresa",
      },
      added_on: "Agregada el %{date}",
      followed_by: "Seguida por %{name}",
      followed_by_you: "Seguida por vos",
      no_contacts: "Sin contactos",
      nb_contacts: "%{smart_count} contacto |||| %{smart_count} contactos",
      nb_deals: "%{smart_count} oportunidad |||| %{smart_count} oportunidades",
      sizes: {
        one_employee: "1 empleado",
        two_to_nine_employees: "2-9 empleados",
        ten_to_forty_nine_employees: "10-49 empleados",
        fifty_to_two_hundred_forty_nine_employees: "50-249 empleados",
        two_hundred_fifty_or_more_employees: "250 empleados o más",
      },
      autocomplete: {
        create_error: "Ocurrió un error al crear la empresa",
        create_item: "Crear %{item}",
        create_label: "Empezá a escribir para crear una empresa nueva",
      },
    },
    contacts: {
      name: "Contacto |||| Contactos",
      forcedCaseName: "Contacto",
      field_categories: {
        background_info: "Antecedentes",
        identity: "Identidad",
        misc: "Varios",
        personal_info: "Información personal",
        position: "Cargo",
      },
      fields: {
        first_name: "Nombre",
        last_name: "Apellido",
        last_seen: "Última actividad",
        title: "Cargo",
        company_id: "Empresa",
        email_jsonb: "Direcciones de email",
        email: "Email",
        phone_jsonb: "Teléfonos",
        phone_number: "Teléfono",
        linkedin_url: "URL de LinkedIn",
        background: "Antecedentes (bio, cómo se conocieron, etc.)",
        has_newsletter: "Recibe newsletter",
        sales_id: "Responsable de cuenta",
      },
      action: {
        add: "Agregar contacto",
        add_first: "Agregá tu primer contacto",
        create: "Crear contacto",
        edit: "Editar contacto",
        export_vcard: "Exportar a vCard",
        new: "Nuevo contacto",
        show: "Ver contacto",
      },
      autocomplete: {
        create_item: "Crear %{item}",
        create_label: "Empezá a escribir para crear un contacto nuevo",
      },
      background: {
        last_activity_on: "Última actividad el %{date}",
        added_on: "Agregado el %{date}",
        followed_by: "Seguido por %{name}",
        followed_by_you: "Seguido por vos",
        status_none: "Ninguno",
      },
      position_at: "%{title} en",
      position_at_company: "%{title} en %{company}",
      empty: {
        description: "Parece que tu lista de contactos está vacía.",
        title: "No se encontraron contactos",
      },
      import: {
        title: "Importar contactos",
      },
      inputs: {
        genders: {
          male: "Él",
          female: "Ella",
          nonbinary: "Elle",
        },
        personal_info_types: {
          work: "Trabajo",
          home: "Casa",
          other: "Otro",
        },
      },
      list: {
        error_loading: "Error al cargar los contactos",
      },
      show: {
        error_loading: "Error al cargar el contacto",
      },
      bulk_tag: {
        action: "Etiquetar",
        back: "Volver a las etiquetas",
        create_description:
          "Creá una etiqueta nueva y aplicala a los contactos seleccionados.",
        description:
          "Elegí una etiqueta existente o creá una nueva para los contactos seleccionados.",
        empty:
          "Todavía no hay etiquetas. Creá una para etiquetar los contactos seleccionados.",
        error: "No se pudo agregar la etiqueta a los contactos",
        removed:
          "Etiqueta quitada de %{smart_count} contacto |||| Etiqueta quitada de %{smart_count} contactos",
        success:
          "Etiqueta agregada a %{smart_count} contacto |||| Etiqueta agregada a %{smart_count} contactos",
        title: "Agregar etiqueta a los contactos",
      },
      merge: {
        action: "Combinar con otro contacto",
        confirm: "Combinar contactos",
        current_contact: "Contacto actual (se va a eliminar)",
        description: "Combiná este contacto con otro.",
        error: "No se pudieron combinar los contactos",
        merging: "Combinando...",
        no_additional_data: "No hay datos adicionales para combinar",
        select_target: "Elegí un contacto con el cual combinar",
        success: "Contactos combinados correctamente",
        target_contact: "Contacto destino (se va a conservar)",
        title: "Combinar contacto",
        warning_description:
          "Todos los datos se van a transferir al segundo contacto. Esta acción no se puede deshacer.",
        warning_title: "Atención: operación destructiva",
        what_will_be_merged: "Qué se va a combinar:",
      },
      filters: {
        before_last_month: "Antes del mes pasado",
        before_this_month: "Antes de este mes",
        before_this_week: "Antes de esta semana",
        managed_by_me: "A mi cargo",
        search: "Buscar nombre, empresa...",
        this_week: "Esta semana",
        today: "Hoy",
        tags: "Etiquetas",
        tasks: "Tareas",
      },
      hot: {
        empty_change_status:
          'Cambiá el estado de un contacto agregándole una nota y haciendo clic en "Mostrar opciones".',
        empty_hint: 'Los contactos con estado "caliente" van a aparecer acá.',
        title: "Contactos calientes",
      },
    },
    deals: {
      name: "Oportunidad |||| Oportunidades",
      fields: {
        name: "Nombre",
        description: "Descripción",
        company_id: "Empresa",
        contact_ids: "Contactos",
        categories: "Categorías",
        amount: "Monto",
        expected_closing_date: "Fecha estimada de cierre",
        stage: "Etapa",
      },
      action: {
        back_to_deal: "Volver a la oportunidad",
        create: "Crear oportunidad",
        new: "Nueva oportunidad",
      },
      field_categories: {
        misc: "Varios",
      },
      filters: {
        only_mine: "Solo las oportunidades a mi cargo",
      },
      archived: {
        action: "Archivar",
        error: "Error: no se archivó la oportunidad",
        list_title: "Oportunidades archivadas",
        success: "Oportunidad archivada",
        title: "Oportunidad archivada",
        view: "Ver oportunidades archivadas",
      },
      inputs: {
        linked_to: "Vinculada a",
      },
      unarchived: {
        action: "Devolver al tablero",
        error: "Error: no se desarchivó la oportunidad",
        success: "Oportunidad desarchivada",
      },
      updated: "Oportunidad actualizada",
      empty: {
        before_create: "antes de crear una oportunidad.",
        description: "Parece que tu lista de oportunidades está vacía.",
        title: "No se encontraron oportunidades",
      },
      import: {
        title: "Importar oportunidades",
      },
      invalid_date: "Fecha inválida",
      no_closing_date: "Sin fecha de cierre",
    },
    notes: {
      name: "Nota |||| Notas",
      forcedCaseName: "Nota",
      fields: {
        status: "Estado",
        date: "Fecha",
        attachments: "Adjuntos",
        contact_id: "Contacto",
        deal_id: "Oportunidad",
      },
      action: {
        add: "Agregar nota",
        add_first: "Agregá tu primera nota",
        delete: "Eliminar nota",
        edit: "Editar nota",
        update: "Actualizar nota",
        add_this: "Agregar esta nota",
      },
      sheet: {
        create: "Crear nota",
        create_for: "Crear nota para %{name}",
        edit: "Editar nota",
        edit_for: "Editar nota de %{name}",
      },
      deleted: "Nota eliminada",
      empty: "Todavía no hay notas",
      author_added: "%{name} agregó una nota",
      you_added: "Agregaste una nota",
      me: "Yo",
      list: {
        error_loading: "Error al cargar las notas",
      },
      note_for_contact: "Nota para %{name}",
      stepper: {
        hint: "Andá a la página de un contacto y agregá una nota",
      },
      added: "Nota agregada",
      inputs: {
        add_note: "Agregá una nota",
        options_hint: "(adjuntá archivos o cambiá detalles)",
        show_options: "Mostrar opciones",
      },
      actions: {
        attach_document: "Adjuntar documento",
      },
      validation: {
        note_or_attachment_required: "Se requiere una nota o un adjunto",
      },
    },
    sales: {
      name: "Vendedor |||| Vendedores",
      fields: {
        first_name: "Nombre",
        last_name: "Apellido",
        email: "Email",
        secondary_email: "Email secundario",
        secondary_emails: "Emails secundarios",
        administrator: "Administrador",
        disabled: "Deshabilitado",
      },
      create: {
        error: "Ocurrió un error al crear el vendedor.",
        success:
          "Vendedor creado. En breve va a recibir un email para definir su contraseña.",
        title: "Crear un vendedor nuevo",
      },
      edit: {
        error: "Ocurrió un error. Intentá de nuevo.",
        record_not_found: "Registro no encontrado",
        success: "Vendedor actualizado correctamente",
        title: "Editar a %{name}",
      },
      action: {
        new: "Nuevo vendedor",
      },
    },
    tasks: {
      name: "Tarea |||| Tareas",
      forcedCaseName: "Tarea",
      fields: {
        text: "Descripción",
        due_date: "Fecha de vencimiento",
        type: "Tipo",
        contact_id: "Contacto",
        due_short: "vence",
      },
      action: {
        add: "Agregar tarea",
        create: "Crear tarea",
        edit: "Editar tarea",
      },
      actions: {
        postpone_next_week: "Posponer a la semana que viene",
        postpone_tomorrow: "Posponer a mañana",
        title: "acciones de la tarea",
      },
      added: "Tarea agregada",
      deleted: "Tarea eliminada correctamente",
      dialog: {
        create: "Crear tarea",
        create_for: "Crear tarea para %{name}",
      },
      sheet: {
        edit: "Editar tarea",
        edit_for: "Editar tarea de %{name}",
      },
      empty: "Todavía no hay tareas",
      empty_list_hint:
        "Las tareas que agregues a tus contactos van a aparecer acá.",
      filters: {
        later: "Más adelante",
        overdue: "Vencidas",
        this_week: "Esta semana",
        today: "Hoy",
        tomorrow: "Mañana",
        with_pending: "Con tareas pendientes",
      },
      regarding_contact: "(Ref.: %{name})",
      updated: "Tarea actualizada",
    },
    tags: {
      name: "Etiqueta |||| Etiquetas",
      action: {
        add: "Agregar etiqueta",
        create: "Crear etiqueta nueva",
      },
      dialog: {
        color: "Color",
        create_title: "Crear una etiqueta nueva",
        edit_title: "Editar etiqueta",
        name_label: "Nombre de la etiqueta",
        name_placeholder: "Ingresá el nombre de la etiqueta",
      },
      empty: "Todavía no hay etiquetas.",
    },
  },
  crm: {
    action: {
      reset_password: "Restablecer contraseña",
    },
    auth: {
      first_name: "Nombre",
      last_name: "Apellido",
      confirm_password: "Confirmá la contraseña",
      confirmation_required:
        "Seguí el enlace que te acabamos de mandar por email para confirmar tu cuenta.",
      recovery_email_sent:
        "Si sos un usuario registrado, en breve vas a recibir un email para recuperar tu contraseña.",
      sign_in_failed: "No se pudo iniciar sesión.",
      sign_in_google_workspace: "Ingresar con Google Workspace",
      signup: {
        create_account: "Crear cuenta",
        create_first_user:
          "Creá la primera cuenta de usuario para completar la configuración.",
        creating: "Creando...",
        initial_user_created: "Usuario inicial creado correctamente",
      },
      welcome_title: "Bienvenido a Atomic CRM",
    },
    common: {
      account_manager: "Responsable de cuenta",
      activity: "Actividad",
      added: "agregó",
      details: "Detalles",
      last_activity_with_date: "última actividad %{date}",
      load_more: "Cargar más",
      misc: "Varios",
      past: "Pasadas",
      read_more: "Leer más",
      retry: "Reintentar",
      show_less: "Mostrar menos",
      copied: "¡Copiado!",
      copy: "Copiar",
      loading: "Cargando...",
      me: "Yo",
      task_count: "%{smart_count} tarea |||| %{smart_count} tareas",
    },
    changelog: {
      title: "Novedades",
    },
    activity: {
      added_company: "%{name} agregó la empresa",
      you_added_company: "Agregaste la empresa",
      added_contact: "%{name} agregó a",
      you_added_contact: "Agregaste a",
      added_note: "%{name} agregó una nota sobre",
      you_added_note: "Agregaste una nota sobre",
      added_note_about_deal: "%{name} agregó una nota sobre la oportunidad",
      you_added_note_about_deal: "Agregaste una nota sobre la oportunidad",
      added_deal: "%{name} agregó la oportunidad",
      you_added_deal: "Agregaste la oportunidad",
      at_company: "en",
      to: "a",
      load_more: "Cargar más actividad",
    },
    dashboard: {
      deals_chart: "Ingresos previstos por oportunidades",
      deals_pipeline: "Embudo de oportunidades",
      latest_activity: "Actividad reciente",
      latest_activity_error: "Error al cargar la actividad reciente",
      latest_notes: "Mis últimas notas",
      latest_notes_added_ago: "agregada %{timeAgo}",
      stepper: {
        install: "Instalar Atomic CRM",
        progress: "%{step}/3 completados",
        whats_next: "¿Qué sigue?",
      },
      upcoming_tasks: "Próximas tareas",
    },
    data_import: {
      button: "Importar CSV",
      complete:
        "Importación completa. Se importaron %{importCount} registros, con %{errorCount} errores",
      csv_file: "Archivo CSV",
      error:
        "No se pudo importar este archivo. Asegurate de cargar un archivo CSV válido.",
      in_progress: "Importación en curso…",
      progress:
        "Se importaron %{importCount} / %{rowCount} registros, con %{errorCount} errores.",
      remaining_time: "Tiempo restante estimado:",
      resource: "Recurso",
      sample_download: "Descargar CSV de ejemplo",
      sample_hint:
        "Acá tenés un archivo CSV de ejemplo para usar como plantilla",
      start: "Iniciar importación",
      stop: "Detener importación",
      stopped:
        "Importación detenida. Se importaron %{importCount} registros, con %{errorCount} errores",
      title: "Importar datos",
    },
    header: {
      import_data: "Importar desde JSON",
    },
    search: {
      title: "Buscar",
      placeholder:
        "Buscá contactos, empresas, oportunidades, tareas y notas...",
      hint: "Escribí al menos %{min} caracteres para buscar",
      recent_contacts: "Vistos recientemente",
      empty: "No se encontraron resultados",
      error:
        "La búsqueda no está disponible en este momento. Intentá de nuevo.",
      untitled_result: "(sin título)",
      show_more: "Mostrar más",
      groups: {
        contacts: "Contactos",
        companies: "Empresas",
        deals: "Oportunidades",
        tasks: "Tareas",
        contact_notes: "Notas de contactos",
        deal_notes: "Notas de oportunidades",
      },
    },
    image_editor: {
      change: "Cambiar",
      drop_hint: "Arrastrá un archivo para subirlo, o hacé clic para elegirlo.",
      editable_content: "Contenido editable",
      title: "Subir y redimensionar imagen",
      update_image: "Actualizar imagen",
    },
    import: {
      action: {
        download_error_report: "Descargar el informe de errores",
        import: "Importar",
        import_another: "Importar otro archivo",
      },
      error: {
        unable: "No se pudo importar este archivo.",
      },
      idle: {
        description_1:
          "Podés importar vendedores, empresas, contactos, notas y tareas.",
        description_2:
          "Los datos tienen que estar en un archivo JSON con el siguiente formato de ejemplo:",
      },
      status: {
        all_success: "Todos los registros se importaron correctamente.",
        complete: "Importación completa.",
        failed: "Fallidos",
        imported: "Importados",
        in_progress:
          "Importación en curso, por favor no salgas de esta página.",
        some_failed: "Algunos registros no se importaron.",
        table_caption: "Estado de la importación",
      },
      title: "Importar desde JSON",
    },
    settings: {
      about: "Acerca de",
      companies: {
        sectors: "Rubros",
      },
      dark_mode_logo: "Logo para modo oscuro",
      deals: {
        categories: "Categorías",
        currency: "Moneda",
        pipeline_help:
          "Elegí qué etapas de las oportunidades cuentan como parte del embudo.",
        pipeline_statuses: "Estados del embudo",
        stages: "Etapas",
      },
      light_mode_logo: "Logo para modo claro",
      notes: {
        statuses: "Estados",
      },
      reset_defaults: "Restablecer valores predeterminados",
      save_error: "No se pudo guardar la configuración",
      saved: "Configuración guardada correctamente",
      saving: "Guardando...",
      tasks: {
        types: "Tipos",
      },
      preferences: "Preferencias",
      title: "Configuración",
      app_title: "Título de la aplicación",
      sections: {
        branding: "Marca",
      },
      validation: {
        duplicate: "%{display_name} duplicadas: %{items}",
        in_use:
          "No se pueden quitar %{display_name} que todavía usan algunas oportunidades: %{items}",
        validating: "Validando…",
        entities: {
          categories: "categorías",
          stages: "etapas",
        },
      },
    },
    theme: {
      dark: "Oscuro",
      label: "Tema",
      light: "Claro",
      system: "Sistema",
    },
    language: "Idioma",
    navigation: {
      label: "Navegación del CRM",
    },
    profile: {
      add_secondary_email: "Agregar un email",
      email_taken: "%{email} ya está en uso por otro usuario",
      no_secondary_emails: "Ninguno",
      secondary_email_invalid: "%{email} no es una dirección de email válida",
      secondary_email_is_primary: "%{email} ya es tu dirección principal",
      secondary_email_taken: "%{email} ya está en uso por otro usuario",
      too_many_secondary_emails:
        "No podés agregar más de 10 direcciones de email secundarias",
      secondary_emails_help:
        "Otras direcciones desde las que mandás emails. Dejá una vacía para quitarla.",
      inbound: {
        description:
          "Podés empezar a mandar emails a la dirección de entrada de tu servidor, por ejemplo agregándola en el campo %{field}. Atomic CRM va a procesar los emails y agregar notas a los contactos correspondientes.",
        title: "Email entrante",
      },
      mcp: {
        title: "Servidor MCP",
        description:
          "Usá esta URL para conectar tu asistente de IA a los datos de tu CRM mediante el Model Context Protocol (MCP).",
      },
      password: {
        change: "Cambiar contraseña",
      },
      password_reset_sent:
        "Te enviamos un email para restablecer la contraseña a tu dirección de correo",
      record_not_found: "Registro no encontrado",
      title: "Perfil",
      updated: "Tu perfil se actualizó",
      update_error: "Ocurrió un error. Intentá de nuevo",
    },
    validation: {
      invalid_url: "Tiene que ser una URL válida",
      invalid_linkedin_url: "La URL tiene que ser de linkedin.com",
    },
  },
} satisfies CrmMessages;
