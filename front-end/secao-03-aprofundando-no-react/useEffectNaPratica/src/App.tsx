import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Input from './components/Input'

const handleClick = () => {
  return
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Input />
      <Button onClick={ handleClick }>
        Clica aqui
      </Button>
    </div>
  )
}

export default App
