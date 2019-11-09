import {ADD_INCIDENT} from "./actionType";

export function addIncidentAction(payload) {
    console.log('payload', payload);
    return {
        type: ADD_INCIDENT,
        payload : payload
    }

}