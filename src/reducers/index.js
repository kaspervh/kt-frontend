import {combineReducers} from 'redux';
import FactionsReducer from './FactionsReducer'
import UnitsReducer from './unitsReducer';

const allReducers = combineReducers({
   FactionsReducer,
   UnitsReducer
});

export default allReducers