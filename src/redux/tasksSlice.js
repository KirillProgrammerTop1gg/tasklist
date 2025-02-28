import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, delTask, toggleCompleted, addTask } from "../tasksApi";

const initialState = {
    tasksList: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    extraReducers: (builer) => {
        builer.addCase(fetchTasks.fulfilled, (state, {payload}) => {
            state.tasksList = payload;
        });
        builer.addCase(delTask.fulfilled, (state, {payload}) => {
            state.tasksList = state.tasksList.filter(task => task.id !== payload);
        });
        builer.addCase(toggleCompleted.fulfilled, (state, {payload}) => {
            state.tasksList = state.tasksList.map(task => task.id === payload ? { ...task, completed: !task.completed } : task);
        });
        builer.addCase(addTask.fulfilled, (state, {payload}) => {
            state.tasksList.push(payload);
        });
    }
});

export const tasksReducer = tasksSlice.reducer;