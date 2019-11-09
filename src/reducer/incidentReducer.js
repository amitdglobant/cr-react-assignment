import {ADD_INCIDENT} from "../action/actionType";

const initialState = {};

const incidentReducer = (state = initialState, action) => {
    console.log('action', action);
    switch (action.type) {
        case ADD_INCIDENT: {
            return {
                ...state,
                list : action.payload
            };
        }

        default:
            return state;
    }
};

export default incidentReducer;
