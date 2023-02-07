import React,{useState} from 'react'

function ShowName() {
    const [show,setShow]=useState(false);
  return (
    <>
    {show && <h1>MyName</h1>}
    <button onClick={()=>setShow(!show)} className='btn btn-primary'>{show ? "Hide" : "Show"}Name</button>
    </>
  )
}

export default ShowName