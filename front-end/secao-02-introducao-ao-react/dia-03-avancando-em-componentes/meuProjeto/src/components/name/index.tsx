import "./name.css";
import { AiOutlineMail } from "react-icons/ai";

export function NameHeader() {
  return (
    <header className="header">
      <p className="header-user">
        Olá, <span id="verde">Verde</span> <span id="amarelo">Amarelo</span>
      </p>
    </header>
  );
}

export function NameFooter() {
  return (
    <footer className="footer">
      <p>
        Acessando como <span id="verde">Verde</span>{" "}
        <span id="amarelo">Amarelo</span> Direitos reservados à <a className="header-user" id="trybe-link" href="https://www.betrybe.com/" target="blank">Trybe <AiOutlineMail/></a>
      </p>
    </footer>
  );
}
