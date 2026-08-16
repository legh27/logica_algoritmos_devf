function encuentraInvitados(invitados) {
  // 1. Usa un puntero al inicio del arreglo y otro al siguiente elemento.
  let puntero1 = 0;
  let puntero2 = 1;

  // 5. Detén la búsqueda si recorres toda la lista sin encontrar un par.
  while (puntero2 < invitados.length) {
    // 2. Compara las iniciales de los nombres en las posiciones de ambos punteros.
    const inicial1 = invitados[puntero1][0].toUpperCase();
    const inicial2 = invitados[puntero2][0].toUpperCase();

    // 3. Si coinciden, detén la búsqueda y devuelve los nombres.
    if (inicial1 === inicial2) {
      return [invitados[puntero1], invitados[puntero2]];
    }

    // 4. Si no coinciden, avanza ambos punteros y repite.
    puntero1++;
    puntero2++;
  }

  return null; // Si no encuentra ningún par, retorna null
}

// Ejemplos de uso (Punto 3 de los entregables):
const mesa1 = ['Ana', 'Beto', 'Carlos', 'Cecilia', 'Diego'];
console.log("Mesa 1:", mesa1);
console.log("Invitados que se pueden sentar juntos:", encuentraInvitados(mesa1)); 
// Debería imprimir: ['Carlos', 'Cecilia']

console.log("--------------------------------------------------");

const mesa2 = ['Alberto', 'Bernardo', 'Daniel', 'Eduardo', 'Fernanda'];
console.log("Mesa 2:", mesa2);
console.log("Invitados que se pueden sentar juntos:", encuentraInvitados(mesa2)); 
// Debería imprimir: null

console.log("--------------------------------------------------");

const mesa3 = ['Zack', 'Yolanda', 'Ximena', 'Xavier', 'Hugo'];
console.log("Mesa 3:", mesa3);
console.log("Invitados que se pueden sentar juntos:", encuentraInvitados(mesa3));
// Debería imprimir: ['Ximena', 'Xavier']
