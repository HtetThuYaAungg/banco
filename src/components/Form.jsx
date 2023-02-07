// import React, { useRef } from 'react'
// import { useForm } from 'react-hook-form';


// const Form = ({jobs}) => {

//   // const formRef = useRef();
//   // const handleSubmit =(e) => {
//   //   e.preventDefault();
//   //   const formData = new FormData(formRef.current);
    
//   //   console.log(formData.get('name'),formData.get('job_id'),formData.get('value'));
//   // }
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => {
    
//     alert(`
//            Name : ${data.name}
//            Professional : ${data.professional}
//            languages : ${data.language}
//            Gender : ${data.gender}
//            `)
   
  
//   }
//   return (
//     <>
//       <div className='border rounded p-5 mt-5'>
//         <form onSubmit={handleSubmit(onSubmit)}>

//           <div className='row gap-3'>
//           <div className="col-12 d-flex">
//             <label htmlFor="name" className='form-label col-4 '>Enter Your Name</label>
//             <input  type="text"   id='name' name='name' className='form-control' {...register("name")} />
//           </div>

//           <div className="col-12 d-flex">
//             <label htmlFor="select" className='form-label col-4'>Choose Your Professional</label>
//             <select name="job_id" id="select"  className='form-select' >
//               {jobs.map((job) => (
//                 <option {...register("professional")}>{job.name}</option>
//               ))}
//             </select>
//           </div>

//           <div className="col-12 d-flex">
//             <label htmlFor="age" className='form-label col-4 '>Select Your Programming</label>
            
//             <input  className="form-check-input "  type="checkbox" value="Java" name='checkbox1' id="flexCheckDefault"  {...register("language", { required: {value:true,message:'language is required'} })} />
//              <label className="form-check-label ms-2 me-2" htmlFor="flexCheckDefault">
//               Java
//             </label>

//             <input  className="form-check-input "  type="checkbox" value="JavaScript" name='checkbox1' id="flexCheckDefault"  {...register("language", { required: {value:true,message:'language is required'} })} />
//              <label className="form-check-label ms-2 me-2" htmlFor="flexCheckDefault">
//               JavaScript
//             </label>

//             <input  className="form-check-input "  type="checkbox" value="C" name='checkbox1' id="flexCheckDefault"  {...register("language", { required: {value:true,message:'language is required'} })} />
//              <label className="form-check-label ms-2 me-2" htmlFor="flexCheckDefault">
//               C
//             </label>
//           </div>

//           <div className="col-12 d-flex">
//             <label htmlFor="age" className='form-label col-4 '>Select Your Gender</label>

//              <input className="form-check-input"  type="radio" name="flexRadioDefault" value='Male' id="flexRadioDefault1"  {...register("gender", { required: {value:true,message:'gender is required'} })}  />
//             <label className="form-check-label ms-2 me-2" htmlFor="flexRadioDefault1">
//               Male
//             </label>

//              <input className="form-check-input"  type="radio" name="flexRadioDefault" value='FeMale' id="flexRadioDefault2" {...register("gender", { required: {value:true,message:'gender is required'} })}/>
//               <label className="form-check-label ms-2 me-2" htmlFor="flexRadioDefault2">
//                 FeMale
//               </label>
//             </div>
            
//             <div className='col-12 d-flex'>{errors.language && <span>{ errors.language.message}</span>}</div>
//             <div className='col-12 d-flex'>{errors.gender && <span>{ errors.gender.message}</span>}</div>
//           <div className="col-12 d-flex">
//             <button className="btn btn-lg w-100 h-100 btn-primary" type='submit' value='submit' >Add Item</button>
//           </div>
          


//         </div>

//          </form>
        
//       </div>
      
//     </>
//   )
// }

// export default Form

import React from 'react'
import { useState } from 'react';
import PopUp from './PopUp';



const Form = ({ jobs }) => {
  
  const [open, setOpen] = useState(false);
 
 
  const [name, setName] = useState('');
  const [pro, setPro] = useState('WebDeveloper');
  const [check, setCheck] = useState([]);
  const [gender, setGender] = useState(false);
  
 

  const submitValue = () => {
    console.log(name);
    console.log(pro);
    console.log(check);
    console.log(gender);
    
  }

  const checkData = e => {

    setCheck([...check,e.target.value])

  }

  return (
        <>
      <div className='border rounded p-5 mt-5'>

          <div className='row gap-3'>
          <div className="col-12 d-flex">
            <label htmlFor="name" className='form-label col-4 '>Enter Your Name</label>
            <input onChange={e=>setName(e.target.value)}  type="text" id='name' name='name'  className='form-control'  />
          </div>

          <div className="col-12 d-flex">
            <label htmlFor="select" className='form-label col-4'>Choose Your Professional</label>
            <select defaultValue={pro} onChange={e=>setPro(e.target.value)}  name="job_id" id="select"  className='form-select' >
              {jobs.map((job) => (
                <option  key={job.id}>{job.name}</option>
              ))}
            </select>
          </div>

          <div className="col-12 d-flex">
            <label htmlFor="age" className='form-label col-4 '>Select Your Programming</label>
            
            <input  onChange={checkData } className="form-check-input "  type="checkbox" value="Java" name='checkbox1' id="flexCheckDefault"  />
             <label className="form-check-label ms-2 me-2" htmlFor="flexCheckDefault">
              Java
            </label>

            <input onChange={checkData }  className="form-check-input "  type="checkbox" value="JavaScript" name='checkbox2' id="flexCheckDefault" />
             <label className="form-check-label ms-2 me-2" htmlFor="flexCheckDefault">
              JavaScript
            </label>

            <input  onChange={checkData } className="form-check-input "  type="checkbox" value="C" name='checkbox3' id="flexCheckDefault" />
             <label className="form-check-label ms-2 me-2" htmlFor="flexCheckDefault">
              C
            </label>
          </div>

          <div className="col-12 d-flex">
            <label htmlFor="age" className='form-label col-4 '>Select Your Gender</label>

             <input onChange={e=>setGender(e.target.value)} className="form-check-input"  type="radio" name="flexRadioDefault" value='Male' id="flexRadioDefault1"    />
            <label className="form-check-label ms-2 me-2" htmlFor="flexRadioDefault1">
              Male
            </label>

             <input onChange={e=>setGender(e.target.value)}  className="form-check-input"  type="radio" name="flexRadioDefault" value='Female' id="flexRadioDefault2" />
              <label className="form-check-label ms-2 me-2" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
            
            
          <div className="col-12 d-flex">
            <button className="btn btn-lg w-100 h-100 btn-primary" type='submit' value='submit' onClick={()=>setOpen(true)} >Add Item</button>
          </div>
         
      
          


        </div>

         
        
      </div>
      {open && (
        <PopUp  setOpen={setOpen} name={name} pro={pro} check={check} gender={gender} />
      )}
      
    </>
  )
}

export default Form
