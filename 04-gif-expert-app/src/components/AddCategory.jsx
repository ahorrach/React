import { useState } from "react"

export const AddCategory = ({ onNewcategory }) => {

    const [imputValue,setImputValues] = useState('');
    
  const onImputChange = ({ target }) => {
      setImputValues(target.value);
  }

  const onSubmit = (event) => {
      event.preventDefault();
      if( imputValue.trim().length <=1) return;

    //  setCategories(categories =>[ imputValue, ...categories]);
    setImputValues('');
    onNewcategory (imputValue.trim());
   

  }
  return (  
    <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder="Buscar Gift" 
        onChange={onImputChange}
        values={imputValue}/>
     </form>
  )
}
