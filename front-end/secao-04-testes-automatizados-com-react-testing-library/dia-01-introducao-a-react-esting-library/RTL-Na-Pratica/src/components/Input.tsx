type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ value, onChange }: InputProps) {
  return (
    <label htmlFor="mail-input">Email:
    <input id="mail-input" type="email" value={value} onChange={onChange} />
    </label>
  );
}

export default Input;
