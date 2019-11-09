import { incidentActions } from "../../actions/IncidentActions";

export const initialState = {
 id: 1,
 title: "Title",
 description: "Description", 
}

export function incidentReducer(state = initialState, {type, payload}){
  switch(type){
    case incidentActions.ADD_INCIDENT:
      return Object.assign({}, state, {incident: payload.incident})
    default:
      return state;
  }
}