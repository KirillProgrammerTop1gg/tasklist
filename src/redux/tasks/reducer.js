import { nanoid } from 'nanoid';
const initialState = [];

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addTask':
            return [
                ...state,
                {
                    id: nanoid(),
                    text: action.payload,
                    completed: false,
                }
            ]
        case 'delTask':
            return state.filter(task => task.id !== action.payload);
        case 'toggleCompleted':
            return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
        default:
            return state;
    }
}