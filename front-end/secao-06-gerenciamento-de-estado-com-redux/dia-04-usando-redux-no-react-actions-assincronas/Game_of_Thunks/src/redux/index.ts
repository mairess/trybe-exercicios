import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import reducerCharInfos from './reducer/reducerCharInfos';

const store = createStore(reducerCharInfos, composeWithDevTools(applyMiddleware(thunk)));

export default store;
