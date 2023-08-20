import { getImagen } from "../../src/base-pruebas/11-async-await"

  

  describe('11 async await', () => { 
   test('should first', async() => { 

        const url = await getImagen();
        expect( typeof url).toBe('string');

    })

   })