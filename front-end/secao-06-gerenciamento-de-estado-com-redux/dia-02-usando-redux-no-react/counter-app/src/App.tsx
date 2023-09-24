import './App.css'
import { useSelector } from 'react-redux';

type RootState = {
  count: number;
}

function App() {
  const rootState = useSelector((state: RootState) => state);

  return (
    <div>
      <h1>Contador</h1>
      <h2>{rootState.count}</h2>
      <button>Incrementa 1</button>
      <button>Incrementa 5</button>
    </div>
  )
}

export default App
