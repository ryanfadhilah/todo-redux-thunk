import { combineReducers } from 'redux'

// I import data from (todo reducer) as todo
import todoReducer from './todo'

// I combile all of the data that I have import (GET)
export default combineReducers({

    // This is the data from (todo reducer) 
    // and now I name it (todo)
    todo: todoReducer,
})