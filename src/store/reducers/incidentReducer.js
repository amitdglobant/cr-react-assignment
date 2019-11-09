export default (state = {}, action) => {
    switch (action.type) {
      case 'INCIDENTS_DATA':
        return {
          result: action.payload
        }
      default:
        return state
    }
  }