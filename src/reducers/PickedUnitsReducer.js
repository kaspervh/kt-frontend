const PickedUnitsReducer = (state = [], action) => {
    console.log(action)
    switch(action.type){
      case 'resetPickedUnitAction':
        return state = []
      case 'addPickedUnitAction':
        return state = action.payload;
      default:
        return state;
    }
}

export default PickedUnitsReducer;