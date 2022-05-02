import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItems, editedList } from '../../redux/Actions'
import ShowList from './ShowList'

const ToDo = () => {
  const list = useSelector(state => state.todoReducer.todoList )

    const [items, setItems] = useState('')
    const [editId, setEditId] = useState(0)
    const dispatch = useDispatch()

    const addBtn = () =>{
      if(items === ''){
        alert('First enter the item')
      }
      else if(editId){
        const findId = list.find((f) => f.id === editId)
        const updateTodo = list.map((elem) =>
        elem.id === findId.id ?
        (elem = {id: elem.id, item:items})
        : {id: elem.id, item: elem.item}
        )
        dispatch(editedList(updateTodo))
        setItems('')
        setEditId(0)
        return;
      }
      else{
        const data = {
          id: new Date(),
          item: items
        }
        dispatch(addItems(data))
        setItems('')
      }
    }

    const getEditId = (id) =>{
      const editTodo = list.find((val) => val.id === id)
      setItems(editTodo.item)
      setEditId(id)
    }

  return ( 
    <div>
        <h1>ToDo List</h1>
        <div className="inputArea" style={{display: 'flex',justifyContent: 'space-evenly'}}>

        <input type="text" placeholder='Enter the items ...' value={items} onChange={e => setItems(e.target.value)}
        style={{width: '50%',padding: '6px',outline:'none',borderRadius:'5px'}} />

        <button type="button" className="btn btn-primary" onClick={addBtn}>Add</button>

        </div>
        <ShowList getEditId={getEditId}/>
       
       
    </div>
  )
}

export default ToDo