import './App.css'

// src/App.tsx

import { useState } from 'react';

function App() {
  const [showImg, setShowImg] = useState(true);

  function handleClick() {
    setShowImg(!showImg)
  }

  return (
    <div>
    {showImg && <img src="/trybe-icon-filled-256.png" />}
    <button onClick={handleClick}>
      {showImg ? 'Esconder imagem' : 'Mostrar imagem'}
    </button>
  </div>
  );
}

export default App;

