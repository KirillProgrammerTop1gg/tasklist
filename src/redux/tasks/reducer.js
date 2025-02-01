import { nanoid } from 'nanoid';
import { createReducer } from "@reduxjs/toolkit";
import { addTask, delTask, toggleCompleted } from "./action";

const initialState = [];

export const tasksReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTask, (state, action) => {
            state.push({
                id: nanoid(),
                text: action.payload,
                completed: false,
            })
        })
        .addCase(delTask, (state, action) => state.filter(task => task.id !== action.payload))
        .addCase(toggleCompleted, (state, action) => state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task))
});