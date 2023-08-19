export function Button() {
    return (
        <button
            onClick={() => alert('Botão onClick componente meu mano!')}
        >
            Clica aqui component
        </button>
    )
}

export function Button2() {

    function handleClick() {
        return alert('Botão handleClick componente meu brtoher!');
    }

    return (
            <button
                onClick={ handleClick }
            >
                Clica aqui component
            </button>
    )
}
