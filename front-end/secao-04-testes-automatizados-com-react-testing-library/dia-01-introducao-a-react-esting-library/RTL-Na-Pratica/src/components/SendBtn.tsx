type SendProps = {
    onClick: () => void,
}

function Send({ onClick }: SendProps) {
    return (
        <button
        data-testid="id-send"
        onClick={ onClick }
        >
            Enviar
        </button>
    )
}

export default Send;