const PointsReducer = (state = 0, action) => {
  switch(action.type){
    case 'calculatePointsAction':
      return state = action.payload
    default: 
      return state
  }
}

export default PointsReducer;