import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas 05 funciones', () => { 
    
    test('getUser deve de retornar un objeto', () => { 
        
        const testUser ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
    
        const user = getUser();

        expect(testUser).toEqual(user);

     

    })



    test('getUsuario activo deve ser igual', () => { 
        const nombre = "pepe";
        const testUserActivo ={
            uid: 'ABC567',
            username: nombre
        };
    
        const user = getUsuarioActivo(nombre);

        expect(testUserActivo).toEqual(user);

     

    })

    
    
    
})