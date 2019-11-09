export const addIncident = incident => {
  return { type: "ADD", incident };
};

export const deleteIncident = id => {
  return { type: "DELETE", id };
};
export const updateIncident = incident => {
  return { type: "UPDATE", incident };
};
export const setCurrentIncident = incident => {
  return { type: "SET", incident };
};
export const showModal = () => {
  return { type: "SHOW"};
};
export const hideModal = incident => {
  return { type: "HIDE", incident };
};
