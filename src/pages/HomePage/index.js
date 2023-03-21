import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import DataContext from "../../context/DataContext";
import { Action, Action1, Action2 } from "../../reducers/BankReducer";
import Navbar from "../../components/commons/Navbar";

const HomePage = () => {
  
  const { banks, dispatch, setUpdateData,setUpdateData1 ,branches, dispatch1,customers,dispatch2,setUpdateData2} = useContext(DataContext);

  const [sendRequest, setSendRequest] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (sendRequest) {
      navigate("/bank");
    }
  }, );



  return (
    <>
      <Navbar/>
      <div className="row">
        <div className="col-2 position-absolute"></div>
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

              {banks.map((bank) => {
                return (
                  <tbody key={bank.id} className="g-2 align-items-center">
                    <tr className="table table-striped">
                      <td>{bank.name}</td>
                      <td>{bank.phone}</td>

                      <td
                        className="me-2 my-2 "
                        onClick={() => {
                          setUpdateData({
                            id: bank.id,
                            name: bank.name,
                            phone: bank.phone,
                          });
                          setSendRequest(true);
                        }}
                      >
                        Edit<i className="bi bi-pencil-square"></i>
                      </td>

                      <td
                        className=""
                        onClick={() => {
                          // eslint-disable-next-line no-restricted-globals
                          if (confirm("delete?")) {
                            dispatch({
                              type: Action.REMOVE_BANK,
                              id: bank.id,
                            });
                          }
                        
                        }}
                      >
                        Delete<i className="bi bi-trash3-fill "></i>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
             <tbody className=" align-items-center">
                    <tr>
                      <td className="">
                        <Link to="/bank">
                          Register Here<i class="bi bi-sign-turn-left"></i>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
          </table>
         

            <hr />

            <table className="table table-borderlesstable table-striped table-hover">
              <thead>
                <tr>
                  <th>Related Bank Name</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Phone</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              {branches.map((branch) => {
                return (
                  <tbody key={branch.id} className="g-2 align-items-center">
                    <tr className="table table-striped">
                      <td>{branch.bankName}</td>
                      <td>{branch.name}</td>
                      <td>{branch.location}</td>
                      <td>{branch.phone}</td>
                      
                      <td
                        className="me-2 my-2 "
                        onClick={() => {
                          setUpdateData1({
                            id: branch.id,
                            bankName:branch.bankName,
                            name: branch.name,
                            location: branch.location,
                            phone: branch.phone,
                          });
                          navigate('/branch')
                        }}
                      >
                        Edit<i className="bi bi-pencil-square"></i>
                      </td>

                      <td 
                        onClick={() => {
                          // eslint-disable-next-line no-restricted-globals
                          if (confirm("delete?")) {
                            dispatch1({
                              type: Action1.REMOVE_BRANCH,
                              id: branch.id,
                            });
                          }
                      
                      }}
                      >
                        Delete<i className="bi bi-trash3-fill "></i>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
              <tbody className=" align-items-center">
                    <tr>
                      <td className="">
                        <Link to="/branch">
                          Register Here<i class="bi bi-sign-turn-left"></i>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
          </table>
        

            <hr />
            
            <table className="table table-borderlesstable table-striped table-hover">
              <thead>
                <tr>
                  <th>CustomerName</th>
                  <th>NRC NO</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>Account Type</th>
                  <th>Account</th>
                  <th>Address</th>
                  <th>Bank Name</th>
                  <th>Branch Branch</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              {customers.map((customer) => {
                return (
                  <tbody key={customer.id} className="g-2 align-items-center">
                    <tr className="table table-striped">
                      <td>{customer.name}</td>
                      <td>{customer.nrc}</td>
                      <td>{customer.phone}</td>
                      <td>{customer.gender}</td>
                      <td>{customer.type}</td>
                      <td>{customer.account}</td>
                      <td>{customer.address}</td>
                      <td>{customer.bankName}</td>
                      <td>{customer.branchName}</td>
                  
                      <td
                        className="me-2 my-2 "
                        onClick={() => {
                          setUpdateData2({
                            id: customer.id,
                            name:customer.name,
                            nrc: customer.nrc,
                            phone: customer.phone,
                            gender: customer.gender,
                            type: customer.type,
                            account: customer.account,
                            address: customer.address,
                            bankName: customer.bankName,
                            branchName:customer.branchName
                          });
                          navigate('/customer')
                        }}
                      >
                        Edit<i className="bi bi-pencil-square"></i>
                      </td>

                      <td
                       onClick={() => {
                          // eslint-disable-next-line no-restricted-globals
                          if (confirm("delete?")) {
                            dispatch2({
                              type: Action2.REMOVE_CUSTOMER,
                              id: customer.id,
                            });
                       }
                      }}
                      >
                        Delete<i className="bi bi-trash3-fill "></i>
                      </td>
                    </tr>
                  </tbody>
                 
                );
              })}
            <tbody className=" align-items-center">
                    <tr>
                      <td className="">
                        <Link to="/customer">
                          Register Here<i class="bi bi-sign-turn-left"></i>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
            </table>
          </div>
        </div>

        
    
    </>
  );
};

export default HomePage;
