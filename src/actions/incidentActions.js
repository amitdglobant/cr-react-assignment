import {store} from "../App";
import { LOAD_INCIDENT, IS_SAVED, IS_DELETED } from "../types/types";

export const loadData = data => {
  return store.dispatch({
    type: LOAD_INCIDENT,
    data
  });
};

export const saveIncident = incident => {
  let data = store.getState().incidentState.data;
  setIteminSessionStorage(data);
  data.unshift(incident);
  return store.dispatch({
    type: IS_SAVED,
    data
  });

};

export const deleteIncident = id => {
  let dataAfterDelete = store.getState().incidentState.data.filter(d => d.id !== id);
  setIteminSessionStorage(dataAfterDelete);
  return store.dispatch({
    type: IS_DELETED,
    data: dataAfterDelete
  });
}
export const editIncident = id => {
  let dataAfterDelete = store.getState().incidentState.data.filter(d => d.id !== id);
  setIteminSessionStorage(dataAfterDelete);
  return store.dispatch({
    type: IS_DELETED,
    data: dataAfterDelete
  });
}

const setIteminSessionStorage = (data) => {
  sessionStorage.setItem("apiIncidentData",JSON.stringify(data));
  
};
