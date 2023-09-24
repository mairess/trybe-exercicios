import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import counterReducer from "./reducer/counterReducer";

type ActionType = {
    type: string;
}

const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER': {
            return {
                count: state.count + 1,
            };
        }

        case 'INCREMENT_COUNTER_IN_5': {
            return {
                count: state.count + 5,
            };
        }
        default: return state;
    }
};

const store = createStore(reducer, composeWithDevTools());

export default store;