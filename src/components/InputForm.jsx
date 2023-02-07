import React, { useState } from 'react'
import Form from './Form'


const InputForm = () => {

    const [jobs,setJobs] = useState([
        {
            id : 1,
            name : "Web Developer",
            
        },
        {
            id : 2,
            name : "Mobile Developer",
            
        },
        {
            id : 3,
            name : "Designer",
           
        },
        {
            id : 4,
            name : "Quality Assurance",
            
        }
    ]);

    
  return (
      <>
          <div className='container'>
              <div className='row'>
                  <div className='col-12' >
                      <Form  jobs={jobs}  />
                  </div>
              </div>
      </div>
      </>
  )
}

export default InputForm