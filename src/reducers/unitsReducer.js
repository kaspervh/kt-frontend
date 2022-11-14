const UnitsReducer = (state = [], action) => {
  switch(action.type){
    case 'GetUnitsAction':
      return state = action.payload
    default:
      return state
  }
}

export default UnitsReducer