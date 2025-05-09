import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const users = axios.create({
    baseURL: 'http://localhost:3000'
});

export const signUp = createAsyncThunk('auth/signup', async (_, thunkAPI) => {
    const response = await users.post('/users', _);
    return _;
});

export const getAllUsers = createAsyncThunk('auth/getAllUsers', async (_, thunkAPI) => {
    const response = await users.get('/users');
    return response.data;
});