import { combineReducers } from 'redux';
import count from '../features/counter';

const rootReducer = combineReducers({ count });

export default rootReducer;
