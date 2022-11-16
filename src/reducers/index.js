import {combineReducers} from 'redux';
import FactionsReducer from './FactionsReducer'
import UnitsReducer from './unitsReducer';
import PickedUnitsReducer from './PickedUnitsReducer';
import PointsReducer from './PointsReducer';

const allReducers = combineReducers({
   FactionsReducer,
   UnitsReducer,
   PickedUnitsReducer,
   PointsReducer
});

export default allReducers