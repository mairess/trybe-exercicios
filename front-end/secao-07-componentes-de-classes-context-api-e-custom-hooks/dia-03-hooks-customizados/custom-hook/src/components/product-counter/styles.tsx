import styled from "styled-components";

export const Row = styled.div`
margin: 0.5rem 0;
padding: 1rem .5rem ;
box-shadow: 1px 2px 5px #006400;

display: flex;
align-items: center;
justify-content: space-between;

div {
    width: 5rem;
    height: 1.5rem;
    border-radius: 0.3125rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #03a40340;
}
`;

export const ButtonRemove = styled.button`
    border: none;
    background-color: #006400;
    width: 1.25rem;
    height: 1.5rem;
    border-top-left-radius: 0.3125rem;
    border-bottom-left-radius: 0.3125rem;

    color: white;
    font-weight: 600;
    font-size: medium;
    cursor: pointer;
`;

export const ButtonAdd = styled.button`
    border: none;
    background-color: #006400;
    width: 1.25rem;
    height: 1.5rem;
    border-top-right-radius: 0.3125rem;
    border-bottom-right-radius: 0.3125rem;

    color: white;
    font-weight: 600;
    font-size: medium;
    cursor: pointer;
`;