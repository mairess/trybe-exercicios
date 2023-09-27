import { ChangeEvent, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Gallery from './components/InfosCharBoard';
import Input from './components/Input';

function App() {
  const [inputValue, setInputValue] = useState('');
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <h1>Show me a Char!!</h1>
      <Button
        inpuValue={ inputValue }
      />
      <Input
        value={ inputValue }
        onChange={ handleClick }
      />
      <Gallery />
    </>
  );
}

export default App;
