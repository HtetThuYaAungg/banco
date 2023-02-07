import React from 'react'

const Navbar = ({logoutHandler}) => {

      
    const user = JSON.parse(localStorage.getItem("userData"));
    

  return (
      <nav className='flex justify-between items-center p-3'>
          <h1>Hello</h1>
          <div className='flex items-center gap-2'>
              <p>{user?.name}</p>
          <img src={user?.image} alt="" className='w-10 border p-2 rounded-full' />
            <button onClick={logoutHandler} className='bg-gray-800 text-white px-4 py-1 rounded shadow-md'>Logout</button>
          </div>
            
              
    </nav>
  )
}

export default Navbar