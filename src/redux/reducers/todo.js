// Default Value
const init_state = {
    todoList: [],
    inputTodo: "",
    todoCount: 0,
}

// Action Object
// Action object <- from Components
// Action Object -> Reducers
export default (state = init_state, action) => {
    switch (action.type) {
        case "INCREMET_TODO_COUNT":
            return { ...state, todoCount: state.todoCount + 1 }
            break;
        case "CHANGE_TODO_COUNT":
            return { ...state, todoCount: action.payload }
            break
        case "GET_TODO":
            return { ...state, todoList: action.payload }
            break;
        default:
            return state
            break;
    }
}