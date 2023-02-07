import React from 'react'
import "../styles/navbar.css"
const Nav = () => {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
      }
  return (
    <>
  <div id="mySidenav" className='sidenav'>
  <a  className="closebtn" onClick={closeNav}>CLOSE&#9776;</a>
  <a href="#">About</a>
  <a href="#">Services</a> 
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
<span className='tt' onClick={openNav}>&#9776; open</span>

    </>
  )
}

export default Nav
