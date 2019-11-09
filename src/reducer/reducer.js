import {ADD_ITEM,    EDIT_ITEM,    DELETE_ITEM} from '../actions/actionsTypes'

const initialState={
     dataReducer: null,
      idReducer: 0,
      titleReducer: "",
      currentPageReducer: 1,
      pageSizeReducer: 7,
      countReducer: 0,
      sortColumnReducer: { columnName: "id", order: "asc" },
      columnsReducer: []
};
 const reducer=(state=initialState,action)=>{
    switch(action){
        case ADD_ITEM:
            return{...state,state:action.payload};
        case EDIT_ITEM:
                return{...state,state:action.payload};
        case DELETE_ITEM:
                    return{...state,state:action.payload};
        default:
            return state;
    }
};


export default reducer