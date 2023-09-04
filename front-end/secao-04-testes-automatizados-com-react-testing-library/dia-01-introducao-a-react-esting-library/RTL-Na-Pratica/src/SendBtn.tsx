type SendProps = {
    onClick: () => void,
}

function Send({ onClick }: SendProps) {
    return (
        <button
        onClick={ onClick }
        >
            Enviar
        </button>
    )
}

export default Send;