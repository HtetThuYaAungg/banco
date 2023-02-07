import React from 'react'

const popup = ({setOpen,name,pro,check,gender}) => {
  return (
     <div className=" w-100 min-vh-100 fixed-top bg-dark bg-opacity-75" >
      <div className="row h-100 justify-content-center" style={{margin:"100px"}}>
        <div className="col-12 col-md-6 col-lg-4 " style={{width:"350px" }}>
          <div className="col-12 bg-white mt-4  me-3 p-3 mb-2  position-relative"  style={{height:"300px"}}>
           
              
            <h5 >Please Check Information</h5>
                      <hr />
                      <div className='row'>
                          <label htmlFor="name" className='form-label col-6'>Your Name </label>
                      <label htmlFor="name" className='form-label col-6 text-sm'>{name}</label>
                      </div>
                      <div className='row'>
                          <label htmlFor="name" className='form-label col-6'>Professional Life </label>
                      <label htmlFor="name" className='form-label col-6'>{pro}</label>
                      </div>
                      <div className='row '>
                          <label htmlFor="name" className='form-label col-6'>Programming Language </label>
                      <label htmlFor="name" className='form-label col-6'>{check}</label>
                      </div>
                      <div className='row'>
                          <label htmlFor="name" className='form-label col-6'>Gender </label>
                      <label htmlFor="name" className='form-label col-6'>{gender}</label>
                      </div>
                <div className='col-xl-3 bottom-0 align-items-center' >
                  <button onClick={(_) => setOpen(false)} className='btn btn-success btn-ls bottom-0 position-absolute' >OK</button>        
            </div>
          </div>
         
        </div>
        
          </div>
          
    </div>
  
  )
}

export default popup