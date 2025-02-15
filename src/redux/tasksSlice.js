import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const initialState = {
    tasksList: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            state.tasksList.push({
                id: nanoid(),
                text: payload,
                completed: false,
            })
        },
        delTask: (state, { payload }) => {
            state.tasksList = state.tasksList.filter(task => task.id !== payload)
        },
        toggleCompleted: (state, { payload }) => {
            state.tasksList = state.tasksList.map(task => task.id === payload ? { ...task, completed: !task.completed } : task)
        }
    }
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, delTask, toggleCompleted } = tasksSlice.actions;