import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1)    
  }

  return (
    <div>
      <button onClick={handleClick}>Botão {counter}</button>
    </div>
  );
}

export default App;
