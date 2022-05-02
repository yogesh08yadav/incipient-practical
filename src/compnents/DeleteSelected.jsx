import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delItems } from '../redux/Actions'

const DeleteSelected = () => {
    const selList = useSelector(state => state.todoReducer.selectedList)

    const dispatch = useDispatch()

    const delSelBtn = () =>{
        selList.forEach(element => {
            dispatch(delItems(element))
        });
    }
    
  return (
    <div>
        <button onClick={delSelBtn}  type="button" className="btn btn-danger">Delete Selected</button>
    </div>
  )
}

export default DeleteSelected