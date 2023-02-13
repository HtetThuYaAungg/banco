import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Template from "../../components/Template";
import styles from "./Home.module.css";
import DataContext from "../../context/DataContext";

const HomePage = () => {

  const { API_URL,listInfo, isLoading, fetchError, deleteBankInfo, setUpdateData ,setListInfo, setFetchError,setIsLoading} =
    useContext(DataContext);
  
    useEffect(() => {
      const fetchLists = async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) throw Error("Did not receive expected data");
          const listItems = await response.json();
          setListInfo(listItems);
          setFetchError(null);
        } catch (err) {
          setFetchError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
  
      setTimeout(() => fetchLists(), 2000);
    }, [ ]);
  
  const navigate = useNavigate();
  return (
    <>
      <Template>
        <div className="row position-fixed">
          <div className="col-2"></div>
          <div className={`col-10 justify-content-center ${styles.row}`}>
            <table className="table table-borderlesstable table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone No</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              {listInfo &&
                listInfo.map((list) => (
                  <tbody className="g-2 align-items-center" key={list.id}>
                    <tr className="table table-striped">
                      <td>{list.name}</td>
                      <td>{list.phone}</td>

                      <td
                        className="me-2 my-2 "
                        onClick={() => 
                          setUpdateData({
                            id: list.id,
                            name: list.name,
                            phone: list.phone,
                        
                          })
                            
                        }
                     
                      
                      >
                        Edit<i class="bi bi-pencil-square"></i>
                      </td>

                      <td className="" onClick={() => deleteBankInfo(list.id)}>
                        Delete<i className="bi bi-trash3-fill "></i>
                      </td>
                    </tr>
                  </tbody>
                ))}

              {!listInfo.length && (
                <tbody>
                  <tr>
                    <td className=" justify-content-center" colSpan={3}>
                      {isLoading && <p>Loading Items...</p>}
                      {fetchError && (
                        <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
                      )}
                    </td>

                    <td className="">
                      <Link to="/bank">
                        Rgister Here<i class="bi bi-sign-turn-left"></i>{" "}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </Template>
    </>
  );
};

export default HomePage;
