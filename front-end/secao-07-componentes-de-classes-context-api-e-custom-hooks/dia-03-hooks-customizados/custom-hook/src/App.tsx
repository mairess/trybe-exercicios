import './App.css';
import Header from './components/header/Header';
import ProductCounter from './components/product-counter';
import { Container, Title, Footer } from './styles';
import useProduct from './hooks/useProduct';

const LIMITS = {
  samll: 10,
  medium: 20,
  large: 15,
};

function App() {
  const small = useProduct(LIMITS.samll);
  const medium = useProduct(LIMITS.medium);
  const large = useProduct(LIMITS.large);

  return (
    <>
      <Header />
      <Container>

        <Title>Faça se pedido</Title>

        <ProductCounter
          productName="Camiseta pequena"
          quantity={ small.productQty }
          addProduct={ small.addProduct }
          removeProduct={ small.removeProduct }
        />

        <ProductCounter
          productName="Camiseta media"
          quantity={ medium.productQty }
          addProduct={ medium.addProduct }
          removeProduct={ medium.removeProduct }
        />

        <ProductCounter
          productName="Camiseta grande"
          quantity={ large.productQty }
          addProduct={ large.addProduct }
          removeProduct={ large.removeProduct }
        />
      </Container>

      <Footer>
        {`Total: ${small.productQty + medium.productQty + large.productQty} camisetas`}
      </Footer>
    </>
  );
}

export default App;
