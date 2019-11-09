import { LOAD_INCIDENT, IS_SAVED } from "../types/types";

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

    case IS_SAVED: 
    return {
      ...state,
      data: action.data
    }
    
    default:
      return {...state};
  }
};
