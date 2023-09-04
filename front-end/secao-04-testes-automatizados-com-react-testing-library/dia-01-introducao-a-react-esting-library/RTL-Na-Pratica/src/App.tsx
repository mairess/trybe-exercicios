import React, { useState } from 'react'
import './App.css'
import Back from './BackBtn'
import Input from './Input'
import Send from './SendBtn'
import Value from './Value'

function App() {
  const [inputMail, setInputMail] = useState<string>('');
  const [mailValue, setMailValue] = useState<string>('');

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputMail(value);
  }

  const handleSetValue = () => {
    setMailValue(inputMail);
    setInputMail('');
  }

  const handleClear = () => {
    setMailValue('');
  }

  return (
    <div>
      <Input
        value={ inputMail }
        onChange={ handleChange }
      />
      <Send
        onClick={ handleSetValue }
      />
      <Back
        onClick={ handleClear }
      />
      <Value
        valueToSend={ mailValue }
      />
    </div>
  )
}

export default App
