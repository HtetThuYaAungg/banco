import React from "react";
import { Children } from "react";
import { useState } from "react";
import Navbar from "./commons/Navbar";
import Sidebar from "./commons/Sidebar";

const Template = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div>{children}</div>
      <div className="">
        <div className="container-f">
          <div className="row">
            <Navbar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />

            {isSidebarOpen && <Sidebar />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
