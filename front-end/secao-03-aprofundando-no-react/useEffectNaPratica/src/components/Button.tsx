type ButtoProps = {
    children: React.ReactNode;
    onClick: () => void;
}

function Button({ children, onClick}: ButtoProps) {
    return (
        <button onClick={ onClick } >
            { children }
        </button>
    )
}

export default Button;