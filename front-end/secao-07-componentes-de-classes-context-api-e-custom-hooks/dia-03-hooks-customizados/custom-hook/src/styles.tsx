import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
/* min-height: 100vh; */
padding: 0 1rem;
`;
export const Title = styled.p`
font-weight: 600;
padding: 2rem 0 1rem;
`;
export const Footer = styled.footer`
height: 2.5rem;
padding: 1rem;

display: flex;
align-items: center;
justify-content: end;

position: fixed;
width: 100vw;
bottom: 0;

color: white;
font-weight: 600;

background-color: #015801;
`;
