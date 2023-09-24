import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import counterReducer from "./reducer/counterReducer";

type ActionType = {
    type: string;
    payload: number;
}

const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER': {
            return {
                count: state.count + action.payload,
            };
        }
        default: return state;
    }
};

const store = createStore(reducer, composeWithDevTools());

export default store;