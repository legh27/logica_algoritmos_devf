const productos = [
  { nombre: 'Camiseta', precio: 45, categoria: 'Ropa' },
  { nombre: 'Audífonos', precio: 120, categoria: 'Electrónica' },
  { nombre: 'Cuaderno', precio: 25, categoria: 'Papelería' },
  { nombre: 'Taza', precio: 80, categoria: 'Hogar' },
  { nombre: 'Lápiz', precio: 10, categoria: 'Papelería' },
  { nombre: 'Sudadera', precio: 95, categoria: 'Ropa' },
  { nombre: 'Mouse', precio: 65, categoria: 'Electrónica' },
];

// 1. Filtrar productos con precio menor a 100
const productosBaratos = productos.filter((producto) => producto.precio < 100);
console.log('Productos con precio menor a $100:');
console.log(productosBaratos);

// 2. Ordenar alfabéticamente por nombre
const productosBaratosOrdenados = productosBaratos.sort((a, b) => {
  const nombreA = a.nombre.toLowerCase();
  const nombreB = b.nombre.toLowerCase();
  return nombreA.localeCompare(nombreB);
});
console.log('\nProductos ordenados por nombre:');
console.log(productosBaratosOrdenados);

// 3. Crear un arreglo con solo los nombres
const nombresProductos = productosBaratosOrdenados.map((producto) => producto.nombre);
console.log('\nNombres de productos baratos ordenados:');
console.log(nombresProductos);

// 4. Ejemplo opcional con reduce: total del precio de los productos baratos
const totalProductosBaratos = productosBaratosOrdenados.reduce((acumulado, producto) => acumulado + producto.precio, 0);
console.log(`\nTotal de los productos baratos: $${totalProductosBaratos}`);

// 5. Ejemplo opcional con some: verificar si hay al menos un producto de categoría Electrónica
const tieneElectronica = productosBaratosOrdenados.some((producto) => producto.categoria === 'Electrónica');
console.log(`\n¿Hay productos baratos de Electrónica? ${tieneElectronica ? 'Sí' : 'No'}`);
