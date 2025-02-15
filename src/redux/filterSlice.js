import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'all',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, { payload }) => {
            state.status = payload
        }
    }
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;