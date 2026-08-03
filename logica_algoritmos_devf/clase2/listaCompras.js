const listaDeCompras = [];

const agregarProducto = (producto) => {
  const nombre = producto?.trim();

  if (!nombre) {
    return "Producto inválido. Por favor ingresa un nombre válido.";
  }

  const existe = listaDeCompras.some(
    (item) => item.toLowerCase() === nombre.toLowerCase()
  );

  if (existe) {
    return `${nombre} ya está en la lista.`;
  }

  listaDeCompras.push(nombre);
  return `${nombre} agregado a la lista.`;
};

const eliminarProducto = (producto) => {
  const nombre = producto?.trim();

  if (!nombre) {
    return "Producto inválido. Por favor ingresa un nombre válido.";
  }

  const index = listaDeCompras.findIndex(
    (item) => item.toLowerCase() === nombre.toLowerCase()
  );

  if (index === -1) {
    return `${nombre} no está en la lista.`;
  }

  listaDeCompras.splice(index, 1);
  return `${nombre} eliminado de la lista.`;
};

const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("La lista de compras está vacía.");
    return;
  }

  console.log("Lista de compras:");
  listaDeCompras.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto}`);
  });
};

export { listaDeCompras, agregarProducto, eliminarProducto, mostrarLista };