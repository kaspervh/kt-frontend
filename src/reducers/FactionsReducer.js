const FactionsReducer = (state = [], action) => {
  console.log(action)
  switch(action.type){
    case 'FactionsAction':
      console.log('diller')
      return state = action.payload
    default:
      return state;
  }
}

export default FactionsReducer