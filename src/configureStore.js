import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducer/rootReducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default initialState =>
    createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );