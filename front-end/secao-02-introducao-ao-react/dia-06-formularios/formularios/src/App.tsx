import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  // function handleClear() {
  //   setName('');
  // }

  return (
    <>
      <label>
        Nome:
        <input value={ name } onChange={ (event) => setName(event.target.value) } />
        {/* <input onChange={ ({ target }) => setName(target.value) } />  */}
      </label>
      <h1>
        Olá,
        {' '}
        {name}
        !
      </h1>
      {/* <button onClick={ handleClear }>Limpar nome</button> */}
      <button onClick={ () => setName('') }>Limpar nome</button>
    </>
  );
}

export default App;
