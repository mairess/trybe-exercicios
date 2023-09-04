type GreetingProps = {
    name: string;
}

export const Greeting = ({ name }: GreetingProps) => {
    return (
        <h1>Olá, { name }!</h1>
    )
}