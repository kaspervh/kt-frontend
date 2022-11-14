const FactionsReducer = (state = [], action) => {
  switch(action.type){
    case 'GetFactionsAction':
      return state = action.payload
    default:
      return state;
  }
}

export default FactionsReducer