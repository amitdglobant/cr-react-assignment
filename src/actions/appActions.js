import { GET_INCIDENTS, ADD_INCIDENT, EDIT_INCIDENT, DELETE_INCIDENT
} from '../constants/appConstants'

function fetchIncidents(data) {
   return {
       type: GET_INCIDENTS,
       payload: data
   }
}

function addIncident() {
   return {
       type: ADD_INCIDENT
   }
}

function editIncident(products) {
   return {
       type: EDIT_INCIDENT,
       products: products
   }
}

function deleteIncident(error) {
   return {
       type: DELETE_INCIDENT,
       error: error
   }
}