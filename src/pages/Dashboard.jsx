import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Product from './product/Product';

const Dashboard = () => {

    const navigate = useNavigate();
    
    const logoutHandler = () => {
        localStorage.removeItem("userData");
        navigate('/')
    }

  return (
      <>
          <div className=''>
              
        <Navbar logoutHandler={logoutHandler} />
        <Product/>
            {/* <h3 className='text-btn-bg'>
                Dashboard
              </h3> 
              <img src={user?.image}/>
              <p>{user?.name}</p>  
              <p>{user?.token}</p>
              <button onClick={logoutHandler} className='bg-red-500 px-3 text-white drop-shadow-2xl '>Logout</button> */}
      </div>
      </>
  )
}

export default Dashboard
