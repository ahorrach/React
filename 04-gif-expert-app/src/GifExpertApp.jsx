import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory = ( newCategory) => {
      if ( categories.includes(newCategory)) return;
        setCategories( [newCategory,...categories]);
    }

  return (
    <>

       <h1>GifExpertApp</h1>

       <AddCategory 
       //setCategories={ setCategories }
       onNewcategory = { (event )=> onAddCategory(event) }
       />

       <button onClick={onAddCategory}>Aggregar</button>
       <ol>
       { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }
       </ol>
    </>
   
  )
}
