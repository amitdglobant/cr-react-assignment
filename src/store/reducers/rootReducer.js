import { combineReducers } from 'redux';
import incidentReducer from './incidentReducer';
import modalReducer from './handleModal';

export default combineReducers({
    incidentReducer, modalReducer
});