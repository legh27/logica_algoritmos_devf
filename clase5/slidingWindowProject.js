function findLongestWord(text) {
    // Dividir el texto en palabras separadas por espacios
    const words = text.split(' ');

    let longestWord = ''; // Inicializar la palabra más larga

    // Recorrer el arreglo de palabras (ventana deslizante)
    for (let i = 0; i < words.length; i++) {
        // Comparar la longitud de la palabra actual con la más larga encontrada
        if (words[i].length > longestWord.length) {
            // Si es más larga, actualizamos la palabra más larga
            longestWord = words[i];
        }
    }

    // Retornar la palabra más larga encontrada
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text)); // Resultado esperado: "programación"

// Otro ejemplo extra para validar
const text2 = "La técnica Sliding Window nos ayuda a optimizar algoritmos";
console.log(findLongestWord(text2)); // Resultado esperado: "algoritmos"
