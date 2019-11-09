import { INCIDENT_ADDED, LOAD_INCIDENT } from "../types/types";

const initialState = {
 data : {}
};

export const incidentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INCIDENT: 
    return {
        ...state,
        data: action.data
    };
    case INCIDENT_ADDED:
      return {
        ...state,
        data: Object.assign(state.data,{title : action.title, description: action.description, id: action.id })
      };
    default:
      return state;
  }
};
