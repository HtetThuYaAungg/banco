import React from 'react'
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'


const Input = () => {


  const [toDo,setToDo] = useState([
    {"id":1, "title":"ListItem1","status":false},
    {"id":2, "title":"ListItem2","status":false}
  ])

  const [newList, setNewList] = useState('');
  const [updateList, setUpdateList] = useState('');

  const inputText = useRef();
  const showAlert = () => {
   alert(inputText.current.value);
    if(newList){
      let num = toDo.length + 1 ;
      let newEntry = {id:num, title:newList, status:false}
      setToDo ([...toDo, newEntry])
      setNewList('');
    }
  }

  //select input => document.
  //input.value
  //event onclick => alert(input.value)
  //hook
  //ref

  return (
    <>
      <div className='row'>
        <div className='col-6'>
          <input type='text' className='form-control'>

          </input>
        </div>
        <div className='col-auto'>

          <button type="button" className='btn  btn-success'>
            Update
          </button>
          &nbsp;
          <button type='button' className='btn  btn-warning'>
            Cancel
          </button>

        </div>
      </div>
      <br />
      <div className='row'>
        <div className='col-7'>
          <input ref={inputText}  value={newList} onChange={ (e) => setNewList(e.target.value)}type='text' className='form-control' />
        </div>
        <div className='col-auto'>
          <button onClick={showAlert} className='btn btn-primary'>Add List</button>
        </div>
      </div>
      <br/>
      {toDo && toDo.length? '': 'No ListItem...'}
      {toDo && toDo.map((item,index)=>{
        return(
         <React.Fragment key={item.id}>

        <div className='listBg'>
          
            <div className={item.status ? 'done': ''}>
              <span className='listNumber'> {index+1} </span>
              <span className='listText'> {item.title} </span>
              </div>

              <div className='iconsWrap'>
                <span>
                  <FontAwesomeIcon icon={faCircleCheck}/> 
                </span>
                <span>
                  <FontAwesomeIcon icon={faPen}/> 
                </span>
                <span>
                  <FontAwesomeIcon icon={faTrashCan}/> 
                </span>
              </div>
            
          </div>
          
         </React.Fragment>
        )
      })}
    </>
  )
}

export default Input