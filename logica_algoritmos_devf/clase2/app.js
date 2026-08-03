import { agregarProducto, eliminarProducto, mostrarLista } from './listaCompras.js';

const main = () => {
  console.log(agregarProducto('Leche'));
  console.log(agregarProducto('Pan'));
  console.log(agregarProducto('Huevos'));
  console.log(agregarProducto('Pan')); // ya existe

  mostrarLista();

  console.log(eliminarProducto('Pan'));
  console.log(eliminarProducto('Azúcar')); // no existe

  mostrarLista();
};

main();
