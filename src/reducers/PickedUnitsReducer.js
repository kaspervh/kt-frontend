const PickedUnitsReducer = (state = [], action) => {
  console.log(action.type, action.payload)
  switch(action.type){
    case 'resetPickedUnitAction':
      return state = [{}]
    case 'addPickedUnitAction':
      return state = [...state, {}];
    case 'pickUnitAction':
      return state = action.payload;
    case 'selecteUnitWeaponAction':
      return state = action.payload;
    case 'addUnitWeaponAction':
      return state = action.payload;
    case 'selectUnitWargearAction':
      return state = action.payload;
    case 'addUnitWargearAction':
      return state = action.payload;
    default:
      return state;
  }
}

export default PickedUnitsReducer;