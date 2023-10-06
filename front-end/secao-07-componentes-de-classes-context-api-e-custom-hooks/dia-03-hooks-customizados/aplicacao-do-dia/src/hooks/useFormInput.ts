import { useState } from 'react';

function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function handleChange(newValue: string) {
    setValue(newValue);
  }

  return {
    value,
    onChange: handleChange,
  };
}

export default useFormInput;
