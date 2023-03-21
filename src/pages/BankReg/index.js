import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Template from "../../components/Template";
import Button from "../../components/utils/Button";
import Input from "../../components/utils/Input";
import Label from "../../components/utils/Label";
import { BUTTON } from "../../constants/utils";
import styles from "./bankReg.module.css";
import DataContext from "../../context/DataContext";
import { Action } from "../../reducers/BankReducer";
import apiRequest from "../../apiRequest";
import axios from "axios";

const BankReg = () => {
  const { dispatch, updateData, setUpdateData } =useContext(DataContext);
  const [bankName, setBankName] = useState("");
  const [bankPhone, setBankPhone] = useState("");
  const [sendRequest, setSendRequest] = useState(false);
  const API_URL = "http://localhost:3500/bank";

  const navigate = useNavigate();

  useEffect(() => {
    if (sendRequest) {
      navigate("/home");
    }
  }, [sendRequest]);

  useEffect(() => {
    setTimeout(() => {
      setUpdateData('');
    }, 30000);
  }, [updateData]);
 

  const submitHandler = (e) => {
    e.preventDefault();
   
    dispatch({
      type: Action.ADD_BANK,
      bank: {
        id: Date.now(),
        name: bankName,
        phone: bankPhone,
      },
      
    });
    setBankName("");
    setBankPhone("");
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Do you wish to add more data?")){
      navigate('/bank')
    }else
    {
      navigate('/home');
    }
  };

  const updateHandler = (updateData) => {
    dispatch({
      type: Action.UPDATE_BANK,
      bank: {
        id: updateData.id,
        name: updateData.name,
        phone: updateData.phone,
      },
    });
    setUpdateData("");
  };


  return (
    <>
      <form id="create" onSubmit={submitHandler}/>
      <Template>
        {updateData ? (
      
            <div className="row position-fixed">
              <div className="col-2"></div>
              <div className={`col-10 justify-content-center ${styles.row}`}>
                <div className="row mt-3">
                  <div className="col-md-5 col-lg-3 p-2">
                    <Label
                      htmlFor="relate branch name"
                      labelText={"Enter Bank Name"}
                      className="form-label mb-3 m-2"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                  <Input
                    form="create" 
                      value={updateData && updateData.name}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, name: e.target.value })
                      }
                      
                      className="form-control"
                      id="branchname"
                      type="text"
                      placeholder="Enter Bank Name"
                      required
                    />
                  </div>
                </div>

                <div className="row mt-1">
                  <div className="col-md-5 col-lg-3 p-2">
                    <Label
                      htmlFor="branch name"
                      labelText={"Enter Bank Phone"}
                      className="form-label mb-3 m-2"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <Input
                      value={updateData && updateData.phone}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, phone: e.target.value })
                      }
                      form="create"
                      className="form-control"
                      id="branchname"
                      type="number"
                      placeholder="Enter Bank Phone"
                      required
                    />
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-md-5 col-lg-3">
                    <Label labelText="" />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <Button
                      btnTitle="Update"
                      type="submit"
                      form="create"
                      className="me-5"
                      onClick={() => {
                        updateHandler(updateData);
                        setSendRequest(true);
                      }}
                    />

                  <Button
                    form="create" 
                      btnType={[BUTTON.CANCEL]}
                      btnTitle="Cancel"
                    onClick={() => {
                        
                        setUpdateData();
                        setSendRequest(true);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
        
        ) : (
          
            <div className="row position-fixed">
              <div className="col-2"></div>
              <div className={`col-10 justify-content-center ${styles.row}`}>
                <div className="row mt-3">
                  <div className="col-md-5 col-lg-3 p-2">
                    <Label
                      htmlFor="relate branch name"
                      labelText={"Enter Bank Name"}
                      className="form-label mb-3 m-2"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <Input
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      form="create"
                      className="form-control"
                      id="branchname"
                      type="text"
                      placeholder="Enter Bank Name"
                      required
                    />
                  </div>
                </div>

                <div className="row mt-1">
                  <div className="col-md-5 col-lg-3 p-2">
                    <Label
                      htmlFor="branch name"
                      labelText={"Enter Bank Phone"}
                      className="form-label mb-3 m-2"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <Input
                      value={bankPhone}
                      onChange={(e) => setBankPhone(e.target.value)}
                      form="create"
                      className="form-control"
                      id="branchname"
                      type="number"
                      placeholder="Enter Bank Phone"
                      required
                    />
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-md-5 col-lg-3">
                    <Label labelText="" />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <Button
                      form="create" 
                      btnTitle="Register"
                      type="submit"
                      className="me-5"
                    />

                    <Button
                        form="create" 
                        btnType={[BUTTON.CANCEL]}
                        btnTitle="Cancel"
                        
                        onClick={() => {
                          setBankName("");
                          setBankPhone("");
                      
                        }}
                    />
                  </div>
                </div>
              </div>
            </div>
        )}
      </Template>
    </>
  );
};

export default BankReg;
