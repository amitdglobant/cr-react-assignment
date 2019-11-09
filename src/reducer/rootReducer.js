import incidents from "./incidentReducer";
import {combineReducers} from "redux";

let rootReducer = combineReducers({
    incidents
});

export default rootReducer;