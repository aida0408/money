const initialState = {
    tasks: [],
    initialAmount: 400,
    costs: 0,
    currentBalance: 400,
    sort: "asc"
}
export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {...state,
                tasks: [...state.tasks, action.payload],
                currentBalance: state.currentBalance - action.payload.amount,
                coast: +state.coast + +action.payload.amount
            }
        case "CLEAR_ALL":
                return initialState
        default:
            return state
    }
}