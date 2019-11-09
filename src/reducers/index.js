import { combineReducers } from "redux";
import modalShowReducer from "./modalshow";
import incidentsReducers from "./incidents";
import currenIncidentReducers from "./currentincident";

const rootReducers = combineReducers({
  isModalShow: modalShowReducer,
  incidents: incidentsReducers,
  currentIncident:currenIncidentReducers
});

export default rootReducers;
