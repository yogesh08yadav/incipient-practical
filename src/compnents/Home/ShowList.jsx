import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Edit } from '@mui/icons-material';
import { delItems, delSelItems } from '../../redux/Actions';
import DeleteSelected from '../DeleteSelected';

const ShowList = ({getEditId}) => {

    const list = useSelector(state => state.todoReducer.todoList )

    const dispatch = useDispatch()

    const delBtn = (elem) =>{
        dispatch(delItems(elem))
    }

    const handleChange = (currElem) =>{
       dispatch(delSelItems(currElem))
    }

    const editBtn = (id) => {
        getEditId(id)
    }

  return (
    <div style={{width:'96%'}}>

        {
            list.map((elem) => {
                return (
                    <div key={elem.id} style={{display: 'flex',justifyContent: 'space-evenly', marginTop:'30px',alignItems:'center'}}>
                    <input type="checkbox" onChange={()=>handleChange(elem)} />
                    <h4 style={{display:'flex',width: '50%'}}>{elem.item}</h4>
                    <button onClick={()=>delBtn(elem)} type="button" className="btn btn-danger"><DeleteForeverIcon/></button>
                    <button onClick={()=>editBtn(elem.id)}  type="button" className="btn btn-info"><Edit/></button> 
                     </div>
                ) 
            })
        }
         <DeleteSelected/>
    </div>
  )
}

export default ShowList