import { combineReducers } from "redux";
import { createStore } from "redux";
import {incidentReducer} from "../reducers/incidentReducer";


export const store = createStore(
  combineReducers({
    incidentState: incidentReducer
  }));
