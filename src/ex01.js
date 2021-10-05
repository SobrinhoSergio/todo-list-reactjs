import React from 'react'
import './App.css'

import { useState } from 'react';

const App = () => {

  //let message = "Hello, Word!"

  const [message, setMessage] = useState("Hello, Word!");

  return(

    <>
      <div className="container">
          <h1>{message}</h1>
      </div>

      <button onClick={ () =>  setMessage('Heloooo')}
      >
        Mudar
      </button>
    </>
  );

}

export default App;