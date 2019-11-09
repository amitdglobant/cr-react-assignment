import { combineReducers } from "redux";
import * as incidentReducer from "./reducers/incidentReducer";

export default combineReducers({
  incident: incidentReducer.incidentReducer
})