import './title.css';

type TitleProps = {
    children: React.ReactNode;
}

function Title({ children }: TitleProps) {
    return <h2 className="title">{children}</h2>
}

export default Title;