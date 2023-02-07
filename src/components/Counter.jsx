import React,{useState} from 'react'

function Counter({start, increaseCount, decreaseCount}) {

    // const[count,setCount] = useState(start);
    // const substract = () => {
    //     if (count>0){
    //         setCount(count-1);
    //     }
    // }
    // const add = () =>{
    //     setCount(count+1);
    // }

    
  return (
    <div className='d-flex border m-3 p-3  align-items-center'>
        <h1 className='me-auto mb-0'>Counter : {start}</h1>
        <button onClick={decreaseCount} className='btn btn-primary me-2'>-</button>
        <button onClick={increaseCount}  className='btn btn-primary'>+</button>
    </div>
  )
}

export default Counter