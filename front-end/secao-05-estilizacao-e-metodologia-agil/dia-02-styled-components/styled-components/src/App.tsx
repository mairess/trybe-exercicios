// import './App.css'
import {Header, Container, Button} from "./styles.tsx";
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

const bgColor = '1FB621';

  return (
   <>
   <GlobalStyle />
   <Header>
    <h1>Título</h1>
   </Header>
   <Container>
    <p>Conteúdo</p>
   </Container>
   <Button
   color={ bgColor }>
    Change Theme
   </Button>
   </>
  )
}

export default App
