import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Dispatch } from '../types';
import { fetchAPI } from '../redux/actions';

type ButtonProps = {
  inpuValue: string,
};

const ButtonStyled = styled.button`
margin: 1rem;
`;

function Button({ inpuValue }: ButtonProps) {
  const dispatch: Dispatch = useDispatch();
  return (
    <ButtonStyled type="button" onClick={ () => dispatch(fetchAPI(inpuValue)) }>
      Show me
    </ButtonStyled>
  );
}

export default Button;
