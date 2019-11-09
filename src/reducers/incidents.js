
const  initialState = [{
    id:1,
    title:'Title',
    description:'Descriptio'
}]
const incidentsReducer = function(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.incident, id: state.length + 1 }];
    case "DELETE":
      return state.filter(incident => incident.id !== action.id);
    case "UPDATE":
      return state.map(incident => {
        if (incident.id === action.incident.id) {
          return action.incident;
        }
        return incident;
      });
    default:
      return state;
  }
};

export default incidentsReducer;
