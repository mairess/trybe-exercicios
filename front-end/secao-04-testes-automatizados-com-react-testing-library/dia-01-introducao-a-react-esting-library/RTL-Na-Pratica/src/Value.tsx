import './Value.css';

type ValueProps = {
    valueToSend: string
}
function Value({ valueToSend }: ValueProps) {
    return (
        <div className="container-value">
            <h2>Valor: { valueToSend }</h2>
        </div>
    )
}

export default Value;