const currentIncidentReducer = function(state = {}, action) {
  switch (action.type) {
    case "SET":
      return action.incident;
    default:
      return state;
  }
};

export default currentIncidentReducer;
