import { combineReducers, applyMiddleware } from "redux";
import { createStore } from "redux";
import { incidentReducer } from "../reducers/incidentReducer";
import thunk from "redux-thunk";

export default function configureStore(initialState = {}) {
  return createStore(
    combineReducers({
      incidentState: incidentReducer
    }),
    initialState,
    applyMiddleware(thunk)
  );
}
