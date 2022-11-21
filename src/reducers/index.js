import {combineReducers} from 'redux';
import FactionsReducer from './FactionsReducer'
import UnitsReducer from './unitsReducer';
import PickedUnitsReducer from './PickedUnitsReducer';
import PointsReducer from './PointsReducer';
import SessionReducer from './SessionReducer';
import UserRducer from './UserReducer';

const allReducers = combineReducers({
   FactionsReducer,
   UnitsReducer,
   PickedUnitsReducer,
   PointsReducer,
   SessionReducer,
   UserRducer
});

export default allReducers