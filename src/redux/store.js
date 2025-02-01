import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from '@redux-devtools/extension';
import { filtersReducer } from './filter/reducer.js';
import { tasksReducer } from './tasks/reducer.js';

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer,
    },
    devTools: composeWithDevTools(),
});