import React from 'react'

const ListItem = ({list,updateCheck,deleteList}) => {
  
  const isdone = list.isDone ? "text-decoration-line-through" : ""

  return (
    <div>
        <li className='list-group-item slide-down'>
          <div className="d-flex align-items-center">
            <input 
            onChange={()=> updateCheck(list.id)} 
            type="checkbox" checked={list.isDone} 
            className="form-check-input me-2" 
            />
            <span className={`${isdone} fw-bold`}>{list.text}</span>
            <button onClick={()=>deleteList(list.id)} className="btn btn-sm btn-danger ms-auto">Delete</button>
          </div>
        </li>
    </div>
  );
}

export default ListItem