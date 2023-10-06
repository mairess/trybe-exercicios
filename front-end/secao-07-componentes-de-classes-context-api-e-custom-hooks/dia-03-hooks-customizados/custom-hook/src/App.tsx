import './App.css'
import Header from './components/header/Header'
import ProductCounter from './components/product-counter';
import { useState } from 'react';
import { Container, Title, Footer } from './styles';

const LIMITS = {
  samll: 10,
  medium: 20,
  large: 15,
};

function App() {
const [smallQty, setSmallQty] = useState(0);
const [mediumQty, setMediumQty] = useState(0);
const [largeQty, setLargeQty] = useState(0);

const addSmall = () => {
  setSmallQty((prevSmallQty) => prevSmallQty + 1);
};

const removeSmall = () => {
  setSmallQty((prevSmallQty) => prevSmallQty - 1);
};

const addMedium = () => {
  setMediumQty((prevMediumQty) => prevMediumQty + 1);
};

const removeMedium = () => {
  setMediumQty((prevMediumQty) => prevMediumQty - 1);
};

const addLarge = () => {
  setLargeQty((prevLargeQty) => prevLargeQty + 1);
};

const removeLarge = () => {
  setLargeQty((prevLargeQty) => prevLargeQty - 1);
};
  return (
    <>
      <Header />
      <Container>
        <Title>Faça se pedido</Title>

        <ProductCounter
          productName="Camiseta pequena"
          quantity={smallQty}
          addProduct={addSmall}
          removeProduct={removeSmall}
        />

        <ProductCounter
          productName="Camiseta media"
          quantity={mediumQty}
          addProduct={addMedium}
          removeProduct={removeMedium}
        />

        <ProductCounter
          productName="Camiseta grande"
          quantity={largeQty}
          addProduct={addLarge}
          removeProduct={removeLarge}
        />
      </Container>

      <Footer>
        {`Total: ${smallQty + mediumQty + largeQty} camisetas`}
      </Footer>
    </>
  )
}

export default App
