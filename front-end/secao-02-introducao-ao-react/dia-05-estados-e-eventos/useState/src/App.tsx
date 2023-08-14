import './App.css';

function App() {
  let counter = 0;
  function handleClick() {
    counter += 1
    console.log(counter);
    
  }

  return (
    <div>
      <button onClick={handleClick}>Botão {counter}</button>
    </div>
  );
}

export default App;
