import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('first', () => { 
   const tittle = "hola soy Goku"
   const subtitle = 'Soy un subtitulo'
    
     test('debe de hacer match con el snapshot', () => { 

         const {container} = render ( <FirstApp title={tittle}/>);

         expect(container).toMatchSnapshot();

        
      })   
     
     test('debe mostrar el titulo soy goku', () => { 
       
        render ( <FirstApp title={tittle}/>);

        expect(screen.getByAltText(tittle)).toBeTruthy();
      
        
     })   

     test('debe mostrar el titulo soy goku en un h1', () => { 
       
      render ( <FirstApp title={tittle}/>);

      expect(screen.getByRole('heading',{level: 1}).innerHTML).toContain(tittle);
    
      
   })   

     test('debe mostrar el subtitulo por propst', () => { 
     
        render ( <FirstApp 
             title={tittle} 
             subTitle={subtitle}/>);

         expect(screen.getAllByText(subtitle).lenght).toBe(2);

        
     })  

})
