import React, { useState } from 'react'
import './App.css'
import Back from './components/BackBtn'
import Input from './components/Input'
import Send from './components/SendBtn'
import Value from './components/Value'

function App() {
  const [inputMail, setInputMail] = useState<string>('');
  const [mailValue, setMailValue] = useState<string>('');

  return (
    <div>
      <Input
        value={inputMail}
        onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setInputMail(value)}
      />
      <Send
        onClick={() => {setMailValue(inputMail); setInputMail('')}}
      />
      <Back
        onClick={() => setMailValue('')}
      />
      <Value
        valueToSend={mailValue}
      />
    </div>
  )
}

export default App
