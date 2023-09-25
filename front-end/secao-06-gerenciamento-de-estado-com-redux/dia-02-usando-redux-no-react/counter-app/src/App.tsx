import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator, clickCounter } from "./redux/actions";

type RootState = {
  count: number;
  clicks: number;
}

function App() {
  const rootState = useSelector((state: RootState) => state);
  // const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  function handleClick(count = 1) {
    dispatch(actionCreator(count));
    dispatch(clickCounter());
  }

  return (
    <div>
      <h1>Contador</h1>
      <h2>{rootState.count}</h2>
      <h1>Clicks</h1>
      <h2>{rootState.clicks}</h2>
      {/* <h2>{count}</h2> */}
      <button onClick={ () => handleClick() }>Incrementa 1</button>
      <button onClick={ () => handleClick(5) }>Incrementa 5</button>
    </div>
  )
}

export default App
