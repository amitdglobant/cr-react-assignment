import { store } from "../App";
import {
  LOAD_INCIDENT,
  IS_SAVED,
  IS_DELETED,
  IS_DELETE_CLICKED,
  IS_EDIT_CLICKED
} from "../types/types";

export const loadData = data => {
  return store.dispatch({
    type: LOAD_INCIDENT,
    data
  });
};

export const saveIncident = (incident, isSaved) => {
  let data = store.getState().incidentState.data;
  setIteminSessionStorage(data);
  if (isSaved) {
    data.unshift(incident);
  } else {
    data.forEach((d, index) => {
      if (d.id === incident.id) {
        data[index] = incident;
      }
    });
  }
  return store.dispatch({
    type: IS_SAVED,
    data,
    toEdit: false,
    incidentToEdit: {}
  });
};

export const deleteIncident = (id, isClosed) => {
  const data = store.getState().incidentState.data;
  let dataAfterDelete = data.filter(d => d.id !== id);
  setIteminSessionStorage(isClosed ? data : dataAfterDelete);
  return store.dispatch({
    type: IS_DELETED,
    data: isClosed ? data : dataAfterDelete,
    toDelete: false,
    deleteId: null
  });
};

export const deleteClicked = id => {
  return store.dispatch({
    type: IS_DELETE_CLICKED,
    data: store.getState().incidentState.data,
    toDelete: true,
    deleteId: id
  });
};

export const editClicked = incident => {
  return store.dispatch({
    type: IS_EDIT_CLICKED,
    data: store.getState().incidentState.data,
    toEdit: true,
    incidentToEdit: incident
  });
};

export const editIncident = id => {
  let dataAfterDelete = store
    .getState()
    .incidentState.data.filter(d => d.id !== id);
  setIteminSessionStorage(dataAfterDelete);
  return store.dispatch({
    type: IS_DELETED,
    data: dataAfterDelete
  });
};

const setIteminSessionStorage = data => {
  sessionStorage.setItem("apiIncidentData", JSON.stringify(data));
};
