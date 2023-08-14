import './App.css'
import Header from './conponents/Header'
import Footer from './conponents/Footer'
import { Button, Button2 } from './conponents/Button';

function App() {

  return (
    <>
      <div>
        <Header />
        <div>
          <button onClick={() => alert('Botão onClick direto no App meu bom!')}>
            Clica aqui
          </button>

          <br />
          <br />

          <Button />

          <br />
          <br />

          <Button2 />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
