import { ADD_ITEMS, DEL_ITEMS, DEL_SEL_ITEMS, EDITED_LIST } from "./ActionTypes"

const initialState = {
    todoList: [],
    selectedList: []
}

 const todoReducer = (state = initialState, {type, payload}) => {
      switch(type){
        case ADD_ITEMS:
            return{
                ...state,
                todoList:[...state.todoList, payload]
            }

        case DEL_ITEMS:
            const updatedList = state.todoList.filter((val) => val !== payload)
            return{
                ...state,
                todoList: updatedList,
                // selectedList: []
            }

        case DEL_SEL_ITEMS: 
        return{
            ...state,
            selectedList: [...state.selectedList, payload]
        }

        case EDITED_LIST:
            return{
                todoList: payload
            }

            default:   return state
      }
}

export default todoReducer