import store from './redux/index.ts'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <Provider store={ store }>
    <App />
  </Provider>,
)
