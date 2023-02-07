import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <>
<nav>
  <NavLink to='/' >Home</NavLink>
  <NavLink to='/first'>First</NavLink>
  <NavLink to='/second'>Second</NavLink>
              <NavLink to='/third'>Third</NavLink>
     
</nav>

    </>
  );
};

export default NavBar;
