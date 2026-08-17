function findMax(arr) {
    // Caso base: si el arreglo está vacío, retornamos -Infinity para que cualquier número sea mayor
    if (arr.length === 0) {
        return -Infinity;
    }

    // Caso base principal: si el arreglo tiene solo un elemento, ese es el máximo
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitades (Divide)
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid); // Primera mitad
    const right = arr.slice(mid);   // Segunda mitad

    // Llamar recursivamente a la función para ambas mitades (Conquer)
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar las soluciones comparando los máximos encontrados (Combine)
    if (leftMax > rightMax) {
        return leftMax;
    } else {
        return rightMax;
    }
}

// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(`El máximo de [${numbers}] es:`, findMax(numbers)); // Salida esperada: 10

// Otro ejemplo extra
const numbers2 = [25, 42, 1, 99, 12, 55, 80];
console.log(`El máximo de [${numbers2}] es:`, findMax(numbers2)); // Salida esperada: 99
