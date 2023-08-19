import './button.css';

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
}

function ButtonPropChildren ({ children, onClick }: ButtonProps) {
    // function handleClick () {
    //     return alert('Clicado propchildren');
    // }
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonPropChildren;