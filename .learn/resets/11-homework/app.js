// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

 // Declaramos una función con el nombre exacto"fromDollarToyen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor dólares a euros
    let valueInEuro = valueInDollar / 1.07;
    // Convertimos euros a yen
    let valueInYen = valueInEuro * 156.5;
    // Retornamos el valor en yen
    return valueInYen;
};

// Declaramos una función con el nombre exacto "fromyenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos yenes a euros
    let valueInEuro = valueInYen / 156.5;
    // Convertimos euros a libras
    let valueInPound = valueInEuro * 0.87;
    // Retornamos el valor en libras
    return valueInPound;
};

// Exporta la función para usarla en otros archivos
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }