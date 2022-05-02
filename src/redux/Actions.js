import { ADD_ITEMS, DEL_ITEMS, DEL_SEL_ITEMS, EDITED_LIST } from "./ActionTypes"

export const addItems = (data) =>{
    return{
        type: ADD_ITEMS,
        payload : data
    }
}

export const delItems = (data) =>{
    return{
        type: DEL_ITEMS,
        payload: data
    }
}

export const delSelItems = (data) => {
    return{
        type: DEL_SEL_ITEMS,
        payload: data
    }
}

export const editedList = (data) => {
    return{
        type: EDITED_LIST,
        payload: data
    }
}