describe("pruebas de jest ", () => {

    test('Esta prueba no deve de fallar',() => {
    

        // 1. inicializacion
        const message1 = 'Hola mundo';

        // 2. Estimulo
        const message2 = message1.trim();

        // 3. Observar el comportamiento
        expect(message1).toBe( message2);

        expect(message1).toBe(message2)

    })
});