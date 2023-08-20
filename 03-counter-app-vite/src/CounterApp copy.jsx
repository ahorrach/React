import PropTypes from 'prop-types'

const  handleAdd2 = (event) =>{ 
  console.log(event);
}

export const CounterApp = ({ value }) => {

  // function handleAdd (event,  newValue) { 
  //   console.log(event);
  //   console.log(newValue);
  // }
  const  handleAdd = (event,  newValue) =>{ 
    console.log(event);
    console.log(newValue);
  }
  return (
    <>  
      <h1>CounterApp</h1>
      <h2>{ value }</h2>
      <button onClick={(event) => handleAdd(event, 'hola') }>
        +1
      </button>
      <button onClick={handleAdd2 }>
        +12
      </button>
    </>  
  )
}

CounterApp.prototype = {
  value: PropTypes.number
}

