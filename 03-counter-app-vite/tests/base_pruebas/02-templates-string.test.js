import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('testa 02 templates', () => { 
    
    test('getSaludo debe de retornar "Hola Fernando', () => {
        const name = 'Fernando'
        const message = getSaludo( name );

        expect(message).toBe("Hola "+name);

    });
    
    
     });
