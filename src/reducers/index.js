import {combineReducers} from 'redux';
import FactionsReducer from './FactionsReducer'
import UnitsReducer from './unitsReducer';
import PickedUnitsReducer from './PickedUnitsReducer';
import PointsReducer from './PointsReducer';
import SessionReducer from './SessionReducer';
import UserRducer from './UserReducer';
import RostersReducer from './RostersReducer';

const allReducers = combineReducers({
   FactionsReducer,
   UnitsReducer,
   PickedUnitsReducer,
   PointsReducer,
   SessionReducer,
   UserRducer,
   RostersReducer
});

export default allReducers