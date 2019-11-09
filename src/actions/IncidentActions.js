export const incidentActions = {
  ADD_INCIDENT: "ADD_INCIDENT",
  SHOW_MODAL: "SHOW_MODAL",
  addIncident: incident => ({
    type: incidentActions.ADD_INCIDENT,
    payload: { incident } 
  }),

  showModal: () => ({
    type: incidentActions.SHOW_MODAL
  })
}