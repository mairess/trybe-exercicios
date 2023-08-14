export function Button() {
    return (
        <button
            onClick={() => alert('Botão onClick meu mano!')}
        >
            Clica aqui
        </button>
    )
}

export function Button2() {

    function handleClick() {
        return alert('Botão handleClick meu brtoher!');
    }

    return (
            <button
                onClick={ handleClick }
            >
                Clica aqui
            </button>
    )
}
