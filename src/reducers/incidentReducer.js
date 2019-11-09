import {
  LOAD_INCIDENT,
  IS_SAVED,
  IS_DELETED,
  IS_DELETE_CLICKED
} from "../types/types";

const initialState = {
  data: {},
  toDelete: false,
  deleteId: 0
};

export const incidentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INCIDENT:
      return {
        ...state,
        data: action.data
      };

    case IS_SAVED:
      return {
        ...state,
        data: action.data
      };

    case IS_DELETE_CLICKED:
      return {
        ...state,
        data: action.data,
        toDelete: action.toDelete,
        deleteId: action.deleteId
      };

    case IS_DELETED:
      return {
        ...state,
        data: action.data,
        toDelete: false,
        deleteId: null
      };

    default:
      return { ...state };
  }
};
