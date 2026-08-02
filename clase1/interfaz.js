const mostrarBienvenida = () => {
  console.log("Planificador de viajes iniciado.");
  console.log("===============================");
};

const mostrarItinerario = (viajes) => {
  if (viajes.length === 0) {
    console.log("No hay viajes registrados.");
    return;
  }

  viajes.forEach((viaje) => {
    console.log(`Destino: ${viaje.destino}`);
    console.log(`Fecha: ${viaje.fecha}`);
    console.log(`Transporte: ${viaje.transporte}`);
    console.log(`Personas: ${viaje.personas}`);
    console.log(`Costo estimado: $${viaje.costo}`);
    console.log("---------------------------");
  });
};

export { mostrarBienvenida, mostrarItinerario };
