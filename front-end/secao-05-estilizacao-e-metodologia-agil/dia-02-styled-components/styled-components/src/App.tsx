import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0)
  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    background-color: #022c16;
    margin-bottom: 3em;
  `
  const Container = styled.div`
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    background-color: #022c16;
  `

  return (
   <>
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
