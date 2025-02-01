import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./action";

const initialState = {
    status: 'all',
};

export const filtersReducer = createReducer(initialState, (builder) => {
    builder.addCase(changeFilter, (state, action) => {
        state.status = action.payload
    });
});
