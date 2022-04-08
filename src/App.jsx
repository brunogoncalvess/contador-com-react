import React, { useState } from 'react';

import Button from './components/Button';

import './App.css';


function App() {
  const [count, setCount] = useState(0)

  const handleIncrementation = () => {
    setCount(count + 1)
  }

  const handleDecrementation = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div className='container'>        
        <h1>{count}</h1>
        <div className='button-wrapper'>          
          <Button onclick={handleIncrementation} children={`+`}></Button>
          <Button onclick={handleDecrementation} children={`-`}></Button>
        </div>
      </div>
    </>
  );
}

export default App;
