import './App.css'
import Header from './conponents/Header'
import Footer from './conponents/Footer'
import { Button, Button2 } from './conponents/Button';
import ButtonPropChildren from './conponents/button';

function App() {

  function handleClick(messageText: string) {
    return alert(messageText);
  }

  function handleClick1() {
    return alert('Clicado propchildren man!');
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    return console.log(event.target.value);
  }

  return (
    <>
      <div>
        <Header />
        <div>
          <button onClick={() => alert('Botão onClick não é componente meu bom!')}>
            Clica aqui mano
          </button>

          <br />
          <br />

          <Button />

          <br />
          <br />

          <Button2 />

          <br />
          <br />

          <ButtonPropChildren
            onClick={handleClick1}
          >
            Botão prop
          </ButtonPropChildren>

          <br />
          <br />

          <ButtonPropChildren
            onClick={() => handleClick('Botão 1')}
          >
            passing param to hdl click 1
          </ButtonPropChildren>

          <br />
          <br />

          <ButtonPropChildren
            onClick={() => handleClick('Botão 2')}
          >
            passing param to hdl click 2
          </ButtonPropChildren>

          <br />
          <br />

          <input type="text" onChange={(event) => handleChange(event)} />

        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
