type BackProps = {
    onClick: () => void,
}

function Back({ onClick }: BackProps) {
    return (
        <button
        onClick={ onClick }
        >
            Voltar
        </button>
    )
}

export default Back;