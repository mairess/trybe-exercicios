type InputProps = {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

function Input({ value, onChange }: InputProps) {
    return (
        <input
          type="email"
          value={ value }
          onChange={ onChange }
        />
    )
}

export default Input;