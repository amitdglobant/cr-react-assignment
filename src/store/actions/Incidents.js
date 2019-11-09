export const Incidents = () => dispatch => {
    dispatch({
      type: 'INCIDENTS_DATA',
      payload: 'result_of_incidents'
    })
  }