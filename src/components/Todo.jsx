import React,{useState} from 'react'
import Input from './Input';
import ListItem from './ListItem';
import StatusBar from './StatusBar';

const Todo = () => {

  const [lists,setList] = useState(
    [
      {
        id:1,
        text:'to read book',
        isDone:true
      },
      {
        id:2,
        text:'to read Javascript',
        isDone:false
      },
      {
        id:3,
        text:'to read Php',
        isDone:true
      },
      {
        id:4,
        text:'to read Java',
        isDone:false
      }
    ]
  );

  function updateCheck(id){
    console.log(id);
    setList(lists.map((list)=>{
      if(list.id === id){
        list.isDone = !list.isDone;
      }
      return list;
    }));
  }

  function createList(text){
    const newList = {
      id : Date.now(),
      text,
      isDone : false,
    };
    setList ([...lists, newList])
  }

  function deleteList(id){
    console.log(id);
    if(confirm("Are U sure to delete?")){
    setList(lists.filter((list)=>list.id != id));
    }
  }

  return (
    <div className='p-3'>
        <h1>To Do</h1>
        <Input createList={createList}/>
        <hr/>
        <StatusBar lists={lists}/>
        <ul className='list-group'>
           { lists.map((list) => (
            <ListItem  deleteList={deleteList} updateCheck={updateCheck} list={list} key={list.id} />
           ))}
           
        </ul>
    </div>
  )
}

export default Todo
