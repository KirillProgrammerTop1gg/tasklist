const initialState = {
    status: 'all',
};

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'changeFilter':
            return {
                ...state,
                status: action.payload,
            }
        default:
            return state;
    }
}