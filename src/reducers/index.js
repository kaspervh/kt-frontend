import {combineReducers} from 'redux';
import FactionsReducer from './FactionsReducer'
import UnitsReducer from './unitsReducer';
import PickedUnitsReducer from './PickedUnitsReducer';

const allReducers = combineReducers({
   FactionsReducer,
   UnitsReducer,
   PickedUnitsReducer
});

export default allReducers