import {combineReducers,createStore} from 'redux'
import todoReducer from './Reducers'

const rootReducer = combineReducers({
    todoReducer: todoReducer
})

 
export const store = createStore(rootReducer)

