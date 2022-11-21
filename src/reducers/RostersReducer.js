const RostersReducer = (state = [], action) => {
  switch(action.type){
    case 'saveRosterAction':
      return state = action.payload;
    case 'getRostersAction':
      return state = action.payload;
    default:
      return state    
  }
}

export default RostersReducer