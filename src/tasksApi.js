import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://67bf3fdcb2320ee050132172.mockapi.io';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/tasks');
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});
export const delTask = createAsyncThunk('tasks/delTask', async (_, thunkAPI) => {
    try {
        await axios.delete(`/tasks/${_}`);
        return _;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});
export const toggleCompleted = createAsyncThunk('tasks/toggleCompleted', async (_, thunkAPI) => {
    try {
        await axios.put(`/tasks/${_.id}`, { 
            id: _.id,
            text: _.text,
            completed: !(_.completed),
        });
        return _.id;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});
export const addTask = createAsyncThunk('tasks/addTask', async (_, thunkAPI) => {
    try {
        await axios.post(`/tasks`, { 
            text: _,
            completed: false,
        });
        const fetch = await axios.get('/tasks');
        return { id: fetch.data.at(-1).id, text: _, completed: false };
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});