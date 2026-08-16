// Otro ejemplo de cómo funciona el algoritmo de los dos punteros
// Problema diferente: Verificar si una palabra es un palíndromo usando dos punteros (uno al inicio y otro al final)

function esPalindromo(palabra) {
    let inicio = 0;
    let fin = palabra.length - 1;

    // Convertimos la palabra a minúsculas para ignorar diferencias entre mayúsculas y minúsculas
    palabra = palabra.toLowerCase();

    while (inicio < fin) {
        if (palabra[inicio] !== palabra[fin]) {
            return false; // Si los caracteres no coinciden, no es palíndromo
        }
        inicio++; // El puntero del inicio avanza hacia la derecha
        fin--;    // El puntero del final avanza hacia la izquierda
    }

    return true; // Si el bucle termina sin problemas, es palíndromo
}

console.log("¿'Reconocer' es un palíndromo?", esPalindromo("Reconocer")); // true
console.log("¿'Hola' es un palíndromo?", esPalindromo("Hola")); // false
console.log("¿'Ana' es un palíndromo?", esPalindromo("Ana")); // true
