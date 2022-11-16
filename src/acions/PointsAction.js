export const calculatePointsAction = (pickedUnits) => {
  let points = 0;
  for(const unit of pickedUnits){
    points = points + unit.price;
    if(!!unit.weapon_options){
      for(const weapon of unit.weapon_options){
        if(!!weapon.price){
          points = points + weapon.price
        }
      }
    }
    if(!!unit.armourys){
      for(const wargear of unit.armourys){
        if(!!wargear.price){
          points = points + wargear.price
        }
      }
    }
  }
  
  return({
    type: 'calculatePointsAction',
    payload: points
  })
}