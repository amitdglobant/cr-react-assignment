import { GET_INCIDENTS, ADD_INCIDENT, EDIT_INCIDENT, DELETE_INCIDENT
} from '../constants/appConstants'


const initialState = {
    incidentsList: []
  };


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INCIDENTS:
            return {
            ...state,
            incidentsList: action.payload,
            }
        case EDIT_INCIDENT:
        return {
            ...state,
            incidentId: action.payload.incidentId,
            }
        case ADD_INCIDENT:
        return {
            ...state,
            incidentObj: action.payload.incidentObj,
            }
        case DELETE_INCIDENT:
        return {
            ...state,
            incidentId: action.payload.incidentId,
            }
      default:
        return state
    }
  }

  export default appReducer;

export const getIncidents = state => state.incidentsList;
export const editIncident = state => state.incidentId;
export const addIncident = state => state.incidentObj;
export const deleteIncident = state => state.incidentId;