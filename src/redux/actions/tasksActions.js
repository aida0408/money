export const addTask = (data) => {
    return {type: "ADD_TASK", payload: data}
}

export const clearAll = () => {
    return {type: "CLEAR_ALL"}
}