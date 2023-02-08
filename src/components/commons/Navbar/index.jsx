import React from "react";
import { Link } from "react-router-dom";
import Text from "../../utils/Text";
import styles from "./Navbar.module.css";

function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  const toggleNavbar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <div className={`${styles.container} d-flex justify-content-between`}>
        {isSidebarOpen ? (
          <i onClick={toggleNavbar} className="bi bi-text-indent-right"></i>
        ) : (
          <i onClick={toggleNavbar} className="bi bi-justify"></i>
        )}

        <div className="me-3">
        <Link to="/home" className="me-3 fs-5 ">
            <Text>Home</Text>
          </Link>
          <Link to="/" className="me-1 fs-5">
            <Text>Log out</Text>
          </Link>
          <i className="bi bi-person-circle"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
