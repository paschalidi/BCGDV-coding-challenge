import { combineReducers } from 'redux';
import { reducer } from './poll-store/reducer';


const rootReducer = combineReducers({ polls: reducer });
export default rootReducer;