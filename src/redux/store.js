import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from '@redux-devtools/extension';
import { filterReducer } from './filterSlice.js';
import { tasksReducer } from './tasksSlice.js';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persisterTasksReducer = persistReducer(persistConfig, tasksReducer);
const persisterFilterReducer = persistReducer(persistConfig, filterReducer);

export const store = configureStore({
    reducer: {
        tasks: persisterTasksReducer,
        filter: persisterFilterReducer,
    },
    devTools: composeWithDevTools(),
});

export const persisterStore = persistStore(store);