// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
};

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor dólares a euros
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    // Convertimos euros a yen
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
};

// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos yenes a euros
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    // Convertimos euros a libras
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
};

// Definimos la función sum, que se estaba usando pero no existía
const sum = function(a, b) {
    return a + b;
};

// Exportamos todas las funciones en un solo module.exports
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


