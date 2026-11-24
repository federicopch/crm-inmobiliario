import type { TranslationMessages } from "ra-core";

export const spanishRaMessages: TranslationMessages = {
  ra: {
    action: {
      add_filter: "Agregar filtro",
      add: "Agregar",
      back: "Volver",
      bulk_actions:
        "1 elemento seleccionado |||| %{smart_count} elementos seleccionados",
      cancel: "Cancelar",
      clear_array_input: "Vaciar la lista",
      clear_input_value: "Borrar valor",
      clone: "Duplicar",
      confirm: "Confirmar",
      create: "Crear",
      create_item: "Crear %{item}",
      delete: "Eliminar",
      edit: "Editar",
      export: "Exportar",
      list: "Listado",
      refresh: "Actualizar",
      remove_filter: "Quitar este filtro",
      remove_all_filters: "Quitar todos los filtros",
      remove: "Quitar",
      reset: "Restablecer",
      save: "Guardar",
      search: "Buscar",
      search_columns: "Buscar columnas",
      select_all: "Seleccionar todo",
      select_all_button: "Seleccionar todo",
      select_row: "Seleccionar esta fila",
      show: "Ver",
      sort: "Ordenar",
      undo: "Deshacer",
      unselect: "Deseleccionar",
      expand: "Expandir",
      close: "Cerrar",
      open_menu: "Abrir menú",
      close_menu: "Cerrar menú",
      update: "Actualizar",
      move_up: "Subir",
      move_down: "Bajar",
      open: "Abrir",
      toggle_theme: "Cambiar modo claro/oscuro",
      select_columns: "Columnas",
      update_application: "Recargar la aplicación",
    },
    boolean: {
      true: "Sí",
      false: "No",
      null: " ",
    },
    page: {
      create: "Crear %{name}",
      dashboard: "Panel",
      edit: "%{name} %{recordRepresentation}",
      error: "Algo salió mal",
      list: "%{name}",
      loading: "Cargando",
      not_found: "No encontrado",
      show: "%{name} %{recordRepresentation}",
      empty: "Todavía no hay %{name}.",
      invite: "¿Querés agregar uno?",
      access_denied: "Acceso denegado",
      authentication_error: "Error de autenticación",
    },
    input: {
      file: {
        upload_several:
          "Arrastrá algunos archivos para subirlos, o hacé clic para elegir uno.",
        upload_single:
          "Arrastrá un archivo para subirlo, o hacé clic para elegirlo.",
      },
      image: {
        upload_several:
          "Arrastrá algunas imágenes para subirlas, o hacé clic para elegir una.",
        upload_single:
          "Arrastrá una imagen para subirla, o hacé clic para elegirla.",
      },
      references: {
        all_missing: "No se encontraron los datos de referencia.",
        many_missing:
          "Al menos una de las referencias asociadas ya no parece estar disponible.",
        single_missing: "La referencia asociada ya no parece estar disponible.",
      },
      password: {
        toggle_visible: "Ocultar contraseña",
        toggle_hidden: "Mostrar contraseña",
      },
    },
    message: {
      about: "Acerca de",
      access_denied:
        "No tenés los permisos necesarios para acceder a esta página",
      are_you_sure: "¿Estás seguro?",
      authentication_error:
        "El servidor de autenticación devolvió un error y no se pudieron verificar tus credenciales.",
      auth_error: "Ocurrió un error al validar el token de autenticación.",
      bulk_delete_content:
        "¿Estás seguro de que querés eliminar este %{name}? |||| ¿Estás seguro de que querés eliminar estos %{smart_count} elementos?",
      bulk_delete_title:
        "Eliminar %{name} |||| Eliminar %{smart_count} %{name}",
      bulk_update_content:
        "¿Estás seguro de que querés actualizar %{name} %{recordRepresentation}? |||| ¿Estás seguro de que querés actualizar estos %{smart_count} elementos?",
      bulk_update_title:
        "Actualizar %{name} %{recordRepresentation} |||| Actualizar %{smart_count} %{name}",
      clear_array_input: "¿Estás seguro de que querés vaciar toda la lista?",
      delete_content: "¿Estás seguro de que querés eliminar este %{name}?",
      delete_title: "Eliminar %{name} %{recordRepresentation}",
      details: "Detalles",
      error:
        "Ocurrió un error del cliente y no se pudo completar tu solicitud.",
      invalid_form: "El formulario no es válido. Revisá los errores",
      loading: "Esperá, por favor",
      no: "No",
      not_found: "Escribiste una URL incorrecta o seguiste un enlace roto.",
      select_all_limit_reached:
        "Hay demasiados elementos para seleccionarlos todos. Solo se seleccionaron los primeros %{max}.",
      unsaved_changes:
        "Algunos de tus cambios no se guardaron. ¿Estás seguro de que querés descartarlos?",
      yes: "Sí",
      placeholder_data_warning:
        "Problema de red: no se pudieron actualizar los datos.",
    },
    navigation: {
      clear_filters: "Limpiar filtros",
      no_filtered_results:
        "No se encontraron %{name} con los filtros actuales.",
      no_results: "No se encontraron %{name}",
      no_more_results:
        "La página número %{page} está fuera de rango. Probá con la página anterior.",
      page_out_of_boundaries: "Página número %{page} fuera de rango",
      page_out_from_end: "No se puede avanzar más allá de la última página",
      page_out_from_begin: "No se puede retroceder antes de la página 1",
      page_range_info: "%{offsetBegin}-%{offsetEnd} de %{total}",
      partial_page_range_info:
        "%{offsetBegin}-%{offsetEnd} de más de %{offsetEnd}",
      current_page: "Página %{page}",
      page: "Ir a la página %{page}",
      first: "Ir a la primera página",
      last: "Ir a la última página",
      next: "Ir a la página siguiente",
      previous: "Ir a la página anterior",
      page_rows_per_page: "Filas por página:",
      skip_nav: "Saltar al contenido",
    },
    sort: {
      sort_by: "Ordenar por %{field_lower_first} %{order}",
      ASC: "ascendente",
      DESC: "descendente",
    },
    auth: {
      auth_check_error: "Iniciá sesión para continuar",
      user_menu: "Perfil",
      username: "Usuario",
      password: "Contraseña",
      email: "Email",
      sign_in: "Ingresar",
      sign_in_error: "Falló la autenticación, intentá de nuevo",
      logout: "Cerrar sesión",
    },
    notification: {
      updated:
        "Elemento actualizado |||| %{smart_count} elementos actualizados",
      created: "Elemento creado",
      deleted: "Elemento eliminado |||| %{smart_count} elementos eliminados",
      bad_item: "Elemento incorrecto",
      item_doesnt_exist: "El elemento no existe",
      http_error: "Error de comunicación con el servidor",
      data_provider_error:
        "Error del dataProvider. Revisá la consola para más detalles.",
      i18n_error: "No se pudieron cargar las traducciones del idioma elegido",
      canceled: "Acción cancelada",
      logged_out: "Tu sesión terminó, volvé a conectarte.",
      not_authorized: "No tenés autorización para acceder a este recurso.",
      application_update_available: "Hay una nueva versión disponible.",
      offline: "Sin conexión. No se pudieron obtener los datos.",
    },
    validation: {
      required: "Obligatorio",
      minLength: "Debe tener al menos %{min} caracteres",
      maxLength: "Debe tener %{max} caracteres o menos",
      minValue: "Debe ser al menos %{min}",
      maxValue: "Debe ser %{max} o menos",
      number: "Debe ser un número",
      email: "Debe ser un email válido",
      oneOf: "Debe ser uno de: %{options}",
      regex: "Debe coincidir con un formato específico (regexp): %{pattern}",
      unique: "Debe ser único",
    },
    saved_queries: {
      label: "Consultas guardadas",
      query_name: "Nombre de la consulta",
      new_label: "Guardar la consulta actual...",
      new_dialog_title: "Guardar la consulta actual como",
      remove_label: "Eliminar consulta guardada",
      remove_label_with_name: 'Eliminar la consulta "%{name}"',
      remove_dialog_title: "¿Eliminar la consulta guardada?",
      remove_message:
        "¿Estás seguro de que querés eliminar ese elemento de tu lista de consultas guardadas?",
      help: "Filtrá el listado y guardá esta consulta para más adelante",
    },
    guesser: {
      empty: {
        title: "No hay datos para mostrar",
        message: "Revisá tu proveedor de datos",
      },
    },
    configurable: {
      customize: "Personalizar",
      configureMode: "Configurar esta página",
      inspector: {
        title: "Inspector",
        content:
          "Pasá el cursor sobre los elementos de la interfaz para configurarlos",
        reset: "Restablecer configuración",
        hideAll: "Ocultar todo",
        showAll: "Mostrar todo",
      },
      Datagrid: {
        title: "Tabla de datos",
        unlabeled: "Columna sin etiqueta #%{column}",
      },
      SimpleForm: {
        title: "Formulario",
        unlabeled: "Campo sin etiqueta #%{input}",
      },
      SimpleList: {
        title: "Lista",
        primaryText: "Texto principal",
        secondaryText: "Texto secundario",
        tertiaryText: "Texto terciario",
      },
    },
  },
};
