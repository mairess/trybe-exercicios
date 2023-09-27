import { ChangeEvent } from 'react';

type InputProps = {
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
};

function Input({ value, onChange }: InputProps) {
  return (
    <label htmlFor="searchInput">
      digite um nome aqui
      <input
        id="searchInput"
        type="text"
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}

export default Input;
