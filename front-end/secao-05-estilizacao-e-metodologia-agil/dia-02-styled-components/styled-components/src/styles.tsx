import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    background-color: #022c16;
    margin-bottom: 3em;
  `
export const Container = styled.div`
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    background-color: #022c16;
  `

type ButtonProps = {
  color: string;
}
export const Button = styled.button<ButtonProps>`
  width: 8rem;
  color: green;
  border: 1px solid gray;
  cursor: pointer;
  color: ${props => props.color};
`;