import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./authAPI";
import { signUp } from "./authAPI";

const initialState = {
    users: [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(signUp.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            });
    }
});

export const authReducer = authSlice.reducer;