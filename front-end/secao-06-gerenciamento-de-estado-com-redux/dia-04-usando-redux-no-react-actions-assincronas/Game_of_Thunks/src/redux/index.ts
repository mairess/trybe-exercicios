import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import gallery from './reducer/gallery';

const store = createStore(gallery, composeWithDevTools(applyMiddleware(thunk)));

export default store;
