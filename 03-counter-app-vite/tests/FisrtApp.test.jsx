import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('first', () => { 
    
    // test('debe de hacer match con el snapshot', () => { 
    //     const tittle = "hola soy Goku"
    //     const {container} = render ( <FirstApp title={tittle}/>);

    //     expect(container).toMatchSnapshot();

        
    //  })   
     
     test('debe mostrar el titulo en H1t', () => { 
        const tittle = "hola soy Goku"
        const {container, getByText,getByTestId} = render ( <FirstApp title={tittle}/>);

       expect( getByText(tittle)).toBeTruthy();
    //    const h1 = container.querySelector('h1');
    //    expect(h1.innerHTML).toContain( tittle);
        expect(getByTestId('test-title'))..toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(tittle);

        
     })   

     test('debe mostrar el subtitulo por propst', () => { 
        const tittle = "hola soy Goku"
        const subtitle = 'Soy un subtitulo'
        const {container, getByText,getByTestId,getAllByText} = render ( <FirstApp 
             title={tittle} 
             subTitle={subtitle}/>);

       expect( getByText(subtitle)).toBeTruthy();
    //    const h1 = container.querySelector('h1');
    //    expect(h1.innerHTML).toContain( tittle);
        expect(getAllByText(subtitle).lenght).toBe(2);

        
     })  

})
