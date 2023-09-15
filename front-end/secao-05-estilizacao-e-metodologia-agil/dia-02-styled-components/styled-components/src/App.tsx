// import './App.css'
import {Header, Container} from "./styles.tsx";
import { createGlobalStyle } from 'styled-components';

function App() {
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #333333;
}

h1 {
  color: white;
}
`;

  return (
   <>
   <GlobalStyle />
   <Header>
    <h1>Título</h1>
   </Header>
   <Container>
    <p>Conteúdo</p>
   </Container>
   </>
  )
}

export default App
