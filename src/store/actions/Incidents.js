export const Incidents = () => dispatch => {
    dispatch({
      type: 'INCIDENTS_DATA',
      payload: 'result_of_incidents'
    })
  }

export const addIncident = incident => {
  return { type: "ADD", incident };
};

export const editIncident = incident => {
  return { type: "Edit", incident };
};

export const showModal = () => {
  return { type: "SHOW"};
};
export const hideModal = incident => {
  return { type: "HIDE", incident };
};