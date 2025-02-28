import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from '@redux-devtools/extension';
import { filterReducer } from './filterSlice.js';
import { tasksReducer } from './tasksSlice.js';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persisterFilterReducer = persistReducer(persistConfig, filterReducer);

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filter: persisterFilterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
    devTools: composeWithDevTools(),
});

export const persisterStore = persistStore(store);