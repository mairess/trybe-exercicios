type TitleProps = {
    children: React.ReactNode;
}

function Title({ children }: TitleProps) {
    return <h2>{children}</h2>
}

export default Title;