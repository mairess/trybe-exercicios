import { useEffect, useState } from "react"

function Counter({ name }: { name: string }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Estado Counter foi renderizado a primeira vez');

        return () => {
            console.log('Component Counter vai sar da tela');
            
        }
        
    }, []);
    return (
        <>
        <h1>Olá { name}</h1>
        <div>
            <p>
                Counter: <code>{ count }</code>
            </p>
            <button onClick={ () => setCount((prevCount) => prevCount + 1) }>Incrementear</button>
        </div>
        </>
    )
}

export default Counter;