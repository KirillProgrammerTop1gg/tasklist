export const addTask = text => {
    return {
        type: "addTask",
        payload: text
    };
};
export const delTask = taskId => {
    return {
        type: "delTask",
        payload: taskId,
    };
};
export const toggleCompleted = taskId => {
    return {
        type: "toggleCompleted",
        payload: taskId,
    };
};