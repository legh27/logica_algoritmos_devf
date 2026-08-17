const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  let notas = [];
  // Si el archivo ya existe, leemos su contenido actual
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    // Si el archivo tiene datos, los convertimos de JSON a arreglo
    if (data) {
      notas = JSON.parse(data);
    }
  }

  // Creamos la nueva nota
  const nuevaNota = { titulo, contenido };
  // La agregamos al arreglo
  notas.push(nuevaNota);

  // Sobrescribimos el archivo con el arreglo actualizado (convertido de nuevo a JSON)
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log(`Nota "${titulo}" agregada con éxito.`);
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    if (data) {
      const notas = JSON.parse(data);
      if (notas.length === 0) {
        console.log('No hay notas guardadas.');
        return;
      }
      
      console.log('--- Lista de Notas ---');
      notas.forEach((nota, index) => {
        console.log(`${index + 1}. Título: ${nota.titulo}`);
        console.log(`   Contenido: ${nota.contenido}`);
      });
      console.log('----------------------');
    } else {
      console.log('El archivo de notas está vacío.');
    }
  } else {
    console.log('No hay notas guardadas (El archivo no existe aún).');
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    // Leemos las notas actuales
    const data = fs.readFileSync(filePath, 'utf8');
    let notas = [];
    if (data) {
      notas = JSON.parse(data);
    }

    // Filtramos las notas para quedarnos con todas excepto la que queremos eliminar
    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    // Si el tamaño del arreglo cambió, es porque sí se eliminó
    if (notas.length > notasRestantes.length) {
      // Guardamos el nuevo arreglo
      fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
      console.log(`Nota con título "${titulo}" eliminada.`);
    } else {
      console.log(`No se encontró ninguna nota con el título "${titulo}".`);
    }
  } else {
    console.log('No hay notas para eliminar.');
  }
}

// =======================
// Ejecución de pruebas
// =======================

console.log("== 1. AGREGANDO NOTAS ==");
agregarNota('Compras', 'Comprar leche y pan.');
agregarNota('Trabajo', 'Terminar reporte semanal.');

console.log("\n== 2. LISTANDO NOTAS ==");
listarNotas();

console.log("\n== 3. ELIMINANDO NOTA 'Compras' ==");
eliminarNota('Compras');

console.log("\n== 4. LISTANDO NOTAS NUEVAMENTE ==");
listarNotas();
