import { useState } from 'react'
import './App.css'
import Counter from './conponents/Counter'

function App() {
  const [name, setName] = useState('');
  const [showCounter, setShowCounter]= useState(true);


  return (
    <div>
<input type="text" value={ name } onChange={ ({ target: { value }}) => setName(value) } />
<button onClick={() => setShowCounter((prevShowCounter) => !prevShowCounter)}>
  { showCounter ? 'Esconder Contador' : 'Mostrar contador' }
</button>
{ showCounter && <Counter name={ name } /> }
    </div>
  )
}

export default App
