export const ADD_INCIDENT = 'ADD_INCIDENT';

export const Incidents = () => dispatch => {
    dispatch({
      type: 'INCIDENTS_DATA',
      payload: 'result_of_incidents'
    })
  }

  export const addIncident = (data) => dispatch => {
    dispatch({
      type: 'ADD_INCIDENT',
      payload: data
    })
  }