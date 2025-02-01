import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("addTask");
export const delTask = createAction("delTask");
export const toggleCompleted = createAction("toggleCompleted");