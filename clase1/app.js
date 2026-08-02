import { registrarDestino, obtenerDestinos } from './viajes.js';
import { mostrarBienvenida, mostrarItinerario } from './interfaz.js';

const iniciarApp = () => {
  mostrarBienvenida();

  registrarDestino("Paris", "2024-06-15", "Avión", 2);
  registrarDestino("Londres", "2024-07-01", "Tren", 3);
  registrarDestino("Barcelona", "2024-08-20", "Barco", 1);

  mostrarItinerario(obtenerDestinos());
};

iniciarApp();
