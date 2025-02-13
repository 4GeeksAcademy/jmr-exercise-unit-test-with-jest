// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

     // Hago mi comparación (la prueba)
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    });

    test("Ten dollars should be converted to yen correctly", function() {
        // Importo la función desde app.js
        const { fromDollarToYen } = require('./app.js');
    
        // Uso la función como debe ser usada
        const yen = fromDollarToYen(10);
    
        // Si 1 dólar equivale a (1/1.07) euros y 1 euro equivale a 156.5 yenes,
        // entonces 10 dólares deben convertirse a (10 / 1.07) * 156.5 yenes.
        const expected = (10 / 1.07) * 156.5;
    
        // Hago mi comparación (la prueba)
        expect(fromDollarToYen(10)).toBeCloseTo(expected); // 10 dólares deberían convertirse a (10 / 1.07) * 156.5 yenes
    });
    
    test("One thousand yen should be converted to pounds correctly", function() {
        // Importo la función desde app.js
        const { fromYenToPound } = require('./app.js');
    
        // Uso la función como debe ser usada
        const pounds = fromYenToPound(1000);
    
        // Si 1 yen equivale a (1/156.5) euros y 1 euro equivale a 0.87 libras,
        // entonces 1000 yenes deben convertirse a (1000 / 156.5) * 0.87 libras.
        const expected = (1000 / 156.5) * 0.87;
    
        // Hago mi comparación (la prueba)
        expect(fromYenToPound(1000)).toBeCloseTo(expected); // 1000 yenes deberían convertirse a (1000 / 156.5) * 0.87 libras
    }); 
   
   
