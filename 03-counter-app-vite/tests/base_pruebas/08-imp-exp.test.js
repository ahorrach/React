import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('first   ', () => { 

    test('should first', () => { 
        const id = 1; 
        const heroe = getHeroeById(id);

        expect(heroe).toEqual( { id: 1, name: 'Batman', owner: 'DC' });



      }); 

      test('deve devolver undefine', () => { 
        
        const id = 100; 
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();



      }); 

      test('should first', () => { 
        const owner = 'DC'; 
        const hero = getHeroesByOwner(owner);

        expect(hero.length).toBe(3);
        expect(hero).toEqual(   [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]
      
         );

         expect(hero).toEqual(heroes.filter((heroe) => heroe.owner===owner));
        })  

      test('should first', () => { 
        const owner = 'Marvel'; 
        const hero = getHeroesByOwner(owner);

        expect(hero.length).toBe(2);
      
        expect(hero).toEqual(heroes.filter((heroe) => heroe.owner===owner));

      }); 


 });

