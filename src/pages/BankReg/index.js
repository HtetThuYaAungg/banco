import React, { useState, useContext, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Template from "../../components/Template";
import Button from "../../components/utils/Button";
import Input from "../../components/utils/Input";
import Label from "../../components/utils/Label";
import { BUTTON } from "../../constants/utils";
import styles from "./bankReg.module.css";
import DataContext from "../../context/DataContext";
import { useReducer } from "react";
import axios from "axios";

const reducer = (state, action) => {
  if (action.type === 'add') {
    return {
     ...action.payload
    }
  }


}
  
const initialValue = {
  name: '', phone: ''
}

const BankReg = () => {

  const [state, dispatch] = React.useReducer(reducer, initialValue);
  
  const {
  
 
    updateData,
    updateBankInfo,
    
    setUpdateData,
   
    cancelUpdate,
    API_URL
  } = useContext(DataContext);
  const [bankName, setBankName] = useState("");
  const [bankPhone, setBankPhone] = useState("");

  

  const addBankInfo = async(name, phone) => { 
   
    const newBankInfo = {
          name,
          phone,
    };
    
    dispatch({ type: "add", payload: newBankInfo })   
  }

  const addData = async () => {
    try {
        await axios.post(API_URL,state)
        
      } catch (error) {
        console.log(error)  
      }
      
    }

useEffect(() => {
  if (initialValue != state)
    addData();
}, [state]);



  const submitHandler = (e) => {
    e.preventDefault();
    addBankInfo(bankName, bankPhone);
    setBankName("");
    setBankPhone("");
  };

  const navigate = useNavigate();

  return (
    <>
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
                    type="text"
                    className="form-control"
                    value={updateData && updateData.name}
                    // onChange={(e) => changeBankName(e)}
                    onChange={(e) =>
                      setUpdateData({ ...updateData, name: e.target.value })
                    }
                    id="bankname"
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
                    type="text"
                    className="form-control"
                    value={updateData && updateData.phone}
                    // onChange={(e) => changeBankPhone(e)}
                    onChange={(e) =>
                      setUpdateData({ ...updateData, phone: e.target.value })
                    }
                    id="bankphone"
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
                    onClick={() => updateBankInfo(updateData.id)}
                  />
                  <Button
                    btnType={[BUTTON.CANCEL]}
                    btnTitle="Cancel"
                    onClick={cancelUpdate}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form id="create" onSubmit={submitHandler}>
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
                      type="text"
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
                      btnTitle="Register"
                      type="submit"
                      form="create"
                      className="me-5"
                    />

                    <Button btnType={[BUTTON.CANCEL]} btnTitle="Cancel" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Template>
    </>
  );
};

export default BankReg;
