const destinos = [];

const costosBase = {
  Paris: 500,
  Londres: 400,
  "New York": 600,
  Barcelona: 450,
  Tokio: 800
};

const costosTransporte = {
  Avión: 200,
  Tren: 100,
  Barco: 80
};

const calcularCosto = (destino, transporte, personas = 1) => {
  const costoBase = (costosBase[destino] ?? 300) + (costosTransporte[transporte] ?? 50);
  const descuento = personas > 2 ? Math.round(costoBase * 0.1) : 0;

  return costoBase - descuento;
};

const registrarDestino = (destino, fecha, transporte, personas = 1) => {
  const nuevoViaje = {
    destino,
    fecha,
    transporte,
    personas,
    costo: calcularCosto(destino, transporte, personas)
  };

  destinos.push(nuevoViaje);
  return nuevoViaje;
};

const obtenerDestinos = () => destinos;

export { registrarDestino, obtenerDestinos, calcularCosto };
