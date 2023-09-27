import { useDispatch } from 'react-redux';
import { Dispatch } from '../types';
import { fetchAPI } from '../redux/actions';

type ButtonProps = {
  inpuValue: string,
};

function Button({ inpuValue }: ButtonProps) {
  const dispatch: Dispatch = useDispatch();
  return (
    <button type="button" onClick={ () => dispatch(fetchAPI(inpuValue)) }>
      Show me
    </button>
  );
}

export default Button;
