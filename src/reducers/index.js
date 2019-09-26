import { combineReducers } from 'redux';

import timeReducer from './timeReducer';

const rootReducer = combineReducers({
    time: timeReducer,
});

export default rootReducer;