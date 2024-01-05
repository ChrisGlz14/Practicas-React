// Helper para realizar solicitudes HTTP en aplicaciones React
export const helpHttp = () => {
  // Función interna para realizar la solicitud HTTP personalizada , para esto preguntamos: que necestaria una peticion fetch? el endpoint y las opciones.
  const customFetch = (endpoint, options) => {
    // Encabezado predeterminado para aceptar JSON
    const defaultHeader = {
      accept: "application/json",
    };

    // Crear un controlador de aborto para cancelar la solicitud si es necesario
    const controller = new AbortController();
    options.signal = controller.signal;

    // Establecer método HTTP predeterminado como "GET" si no se proporciona uno
    options.method = options.method || "GET";

    // Combinar encabezados predeterminados con los proporcionados en las opciones
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    // Convertir el cuerpo a formato JSON si está presente
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    // Mostrar las opciones de la solicitud en la consola (podemos eliminar esto en producción)
    //console.log(options);

    // Establecer un temporizador para abortar la solicitud después de 5 segundos
    setTimeout(() => controller.abort(), 5000);

    // Realizar la solicitud fetch y manejar la respuesta
    return fetch(endpoint, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          // Lanza un error para ser manejado en el catch
          throw {
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "No hay mensaje, ocurrió un error",
          };
        }
      })
      .catch((err) => {
        console.error("Error en la solicitud:", err);
        throw err;      
      });
  };

  // Funciones de ayuda para realizar solicitudes HTTP específicas
  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    // Establecer el método HTTP como "POST" en las opciones
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    // Establecer el método HTTP como "PUT" en las opciones
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    // Establecer el método HTTP como "DELETE" en las opciones
    options.method = "DELETE";
    return customFetch(url, options);
  };

  // Devolver un objeto que contiene las funciones de ayuda para cada método HTTP
  return {
    get,
    post,
    put,
    del,
  };
};
