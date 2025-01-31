import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { filtersReducer } from './filter/reducer.js';
import { tasksReducer } from './tasks/reducer.js';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    filters: filtersReducer,
});

export default createStore(rootReducer, composeWithDevTools());