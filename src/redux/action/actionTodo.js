import Axios from 'axios'

//Store data to => Process the PROPS data as a STATE
export const changeTodoCount = (newCount) => {
    return {
        type: "CHANGE_TODO_COUNT",
        payload: newCount
    }
}

export const incrementTodoCount = () => {
    return {
        type: "INCREMET_TODO_COUNT"
    }
}

export const fetchTodoGlobal = (e) => {
    return (dispatch) => {
        Axios.get('http://localhost:2000/todo')
            .then((response) => {
                dispatch({
                    type: "GET_TODO",
                    payload: response.data
                })
                dispatch({
                    type: "CHANGE_TODO_COUNT",
                    payload: response.data.length
                })
            })
            .catch((error) => {
                alert(`error : fetchTodo`)
            })
    }
}

// export const fetchTodoGlobal = (e) => {
//     return (dispatch) => {
//         Axios.get('http://localhost:2000/todo')
//             .then((response) => {
//                 dispatch({
//                     type: "GET_TODO",
//                     payload: response.data
//                 })
//             })
//             .catch((error) => {
//                 alert(`error : fetchTodo`)
//             })
//     }
// }