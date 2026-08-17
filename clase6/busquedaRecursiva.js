// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Función para buscar recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {
    // Caso base 1: Si llegamos al final de la lista, significa que no lo encontramos
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base 2: Si encontramos el regalo en la posición actual
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Llamada recursiva: si no se encontró en el índice actual, buscamos en el siguiente (index + 1)
    return findGift(gifts, giftName, index + 1);
}

// Casos de ejemplo:
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Lego está en la posición 3."

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Camión no está en la lista."
