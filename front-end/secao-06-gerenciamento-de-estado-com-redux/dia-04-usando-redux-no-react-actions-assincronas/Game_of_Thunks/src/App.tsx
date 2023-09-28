import { ChangeEvent, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Button from './components/Button';
import Gallery from './components/InfosCharBoard';
import Input from './components/Input';

const InputContainer = styled.div`
display: flex;
justify-content: center;
margin: 1rem 0;
padding: 0.25;
`;

function App() {
  const [inputValue, setInputValue] = useState('');
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h1>Show me a some one</h1>
      <InputContainer>
        <Input
          value={ inputValue }
          onChange={ handleClick }
        />
      </InputContainer>
      <Button
        inpuValue={ inputValue }
      />
      <Gallery />
    </>
  );
}

export default App;
