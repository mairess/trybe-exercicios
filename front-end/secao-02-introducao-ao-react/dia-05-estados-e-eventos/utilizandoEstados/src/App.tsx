import { useState } from 'react';

function App() {
  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  const [index, setIndex] = useState(0);
  const [toolList, setTooList] = useState(toolKit);
  const [inputValue, setInputValue] = useState('');

  function handleClickNext() {
    // setIndex((prevIndex) => (prevIndex + 1) % toolKit.length);
    if (index + 1 < toolKit.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleClickPrevious() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(toolKit.length - 1);
    }
    // setIndex((prevIndex) => (prevIndex - 1 + toolKit.length) % toolKit.length);
  }

  function handleAddClick() {
    if (inputValue) {
      setTooList([...toolList, inputValue]);
    }
  }

  return (
    <>
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{ toolKit[index] }</h2>
      {/* <button onClick={handleClickPrevious} disabled={index === 0}>Anterior</button>
      <button onClick=
      {handleClickNext} disabled={index === toolKit.length -1}>Próximo</button> */}
      <button onClick={ handleClickPrevious }>Anterior</button>
      <button onClick={ handleClickNext }>Próximo</button>

      <section>

        <h3>Adicione novas ferramentas:</h3>

        <input onChange={ ({ target }) => setInputValue(target.value) } />

        <button onClick={ handleAddClick }>Adicionar</button>

      </section>

      <section>
        <h3>Lista de itens do carrossel:</h3>
        <ul>
          {toolList.map((tool, i) => (
            <li key={ i }>
              { tool }
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
