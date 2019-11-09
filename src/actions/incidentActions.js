import {store} from "../App";
import { LOAD_INCIDENT, IS_SAVED } from "../types/types";

export const loadData = data => {
  return store.dispatch({
    type: LOAD_INCIDENT,
    data
  });
};

export const saveIncident = incident => {
  let data = store.getState().incidentState.data;
  data.unshift(incident);
  sessionStorage.setItem("apiIncidentData",JSON.stringify(data));
  return store.dispatch({
    type: IS_SAVED,
    data
  });

};

export const DeleteIncident = id => {
  alert(`${id} to be deleted `);
}
