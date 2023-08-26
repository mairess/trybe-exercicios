type InputProps = {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

function Input({value, onChange}: InputProps) {
    return (
        <>
        <label htmlFor="searchInput">Digita seu nome</label>
        <input type="text" id="searchInput" value={ value } onChange={ onChange }/>
        </>
    )
}

export default Input;