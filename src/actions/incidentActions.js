import { store } from "../store/store";
import { LOAD_INCIDENT } from "../types/types";

export const loadData = data => {
  return store.dispatch({
    type: LOAD_INCIDENT,
    data
  });
};
