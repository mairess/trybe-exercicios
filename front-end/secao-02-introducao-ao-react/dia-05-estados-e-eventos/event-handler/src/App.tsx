import './App.css'
import Header from './conponents/Header'
import Footer from './conponents/Footer'
import { Button, Button2 } from './conponents/Button';
import ButtonPropChildren from './conponents/button';

function App() {
    function handleClick () {
        return alert('Clicado propchildren man!');
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
             onClick={handleClick}
            >
              Botão prop
            </ButtonPropChildren>

          </div>
          <Footer />
      </div>
    </>
  )
}

export default App
