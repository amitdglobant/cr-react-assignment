import { MOCK_API } from "../config";
import {addIncidentAction} from "../action/incidentActions";

export function getData() {
    return function(dispatch) {
         return fetch(MOCK_API)
            .then(res => res.json())
            .then(
                result => {
                    dispatch(addIncidentAction(result.incidents))
                }
            );
    }
}