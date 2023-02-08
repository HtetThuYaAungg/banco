import React from "react";
import { NavLink } from "react-router-dom";
import Text from "../../utils/Text";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      
      <div className={`${styles.dblock} mt-5`}>
        <div>
          <NavLink to="/customer">
            <i className="bi bi-person-bounding-box me-1"></i>
            <Text>Customer Registration</Text>
          </NavLink>
          <NavLink to="/bank">
            {" "}
            <i className="bi bi-hospital me-1"></i>
            <Text>Bank Registration</Text>
          </NavLink>
          <NavLink to="/branch">
            {" "}
            <i className="bi bi-geo-alt me-1"></i>
            <Text>Branch Registration</Text>
          </NavLink>
        </div>
        </div>
      
    </>
  );
};

export default Sidebar;
