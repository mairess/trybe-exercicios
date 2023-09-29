import { ChangeEvent } from 'react';
import styled from 'styled-components';

type InputProps = {
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
};

const Label = styled.label`
input {
  margin: 0 1rem;
}
`;

function Input({ value, onChange }: InputProps) {
  return (
    <Label htmlFor="searchInput">
      Digite um nome aqui
      <input
        placeholder="nome completo"
        id="searchInput"
        type="text"
        value={ value }
        onChange={ onChange }
      />
    </Label>
  );
}

export default Input;
