const url = "https://jsonplaceholder.typicode.com/posts/1";

async function obtenerDatos() {
  try {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    console.log("Título:", datos.title);
    console.log("Contenido:", datos.body);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

obtenerDatos();