import React, { useContext, useEffect, useState } from "react";
import Label from "../../components/utils/Label";
import styles from "./branchReg.module.css";
import Input from "../../components/utils/Input";
import Button from "../../components/utils/Button";
import { BUTTON } from "../../constants/utils";
import Textarea from "../../components/utils/Textarea";
import Template from "../../components/Template";
import DataContext from "../../context/DataContext";
import { Action1 } from "../../reducers/BankReducer";
import { useNavigate } from "react-router-dom";

const BranchReg = () => {
  const { banks, dispatch1, updateData1, setUpdateData1 } =
    useContext(DataContext);

  const [branchName, setBranchName] = useState("");
  const [branchLocation, setBranchLocation] = useState("");
  const [branchPhone, setBranchPhone] = useState("");
  const [relatedBankName, setRelatedBankName] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    setTimeout(() => {
      setUpdateData1('');
    }, 30000);
  },);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch1({
      type: Action1.ADD_BRANCH,
      branch: {
        id: Date.now(),
        bankName: relatedBankName,
        name: branchName,
        location: branchLocation,
        phone: branchPhone,
      },
    });
    setBranchName("");
    setBranchPhone("");
    setBranchLocation("");
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Do you wish to add more data?")){
      navigate('/bank')
    }else
    {
      navigate('/home');
    }
  };

  const updateHandler = (updateData1) => {
    dispatch1({
      type: Action1.UPDATE_BRANCH,
      branch: {
        id: updateData1.id,
        bankName: updateData1.bankName,
        name: updateData1.name,
        location: updateData1.location,
        phone: updateData1.phone,
      },
    });
    setUpdateData1("");
  };

  // const cancelHandler = () => {
  //   setUpdateData("");
  // };

  return (
    <>
      <form action="" onSubmit={submitHandler} id="create" />
      <Template>
        {updateData1 ? (
          <div className="row position-fixed">
            <div className="col-2"></div>
            <div className={`col-10 justify-content-center ${styles.row}`}>
              <div className="row mt-3">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    htmlFor="relate branch name"
                    labelText={"Related Branch Name"}
                    className="form-label mb-3 m-2"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <select
                    required
                    style={{ height: "40px" }}
                    id="bankName"
                    form="create"
                    value={updateData1 && updateData1.bankName}
                    onChange={(e) =>
                      setUpdateData1({
                        ...updateData1,
                        bankName: e.target.value,
                      })
                    }
                    className={`form-select ${styles.container}`}
                  >
                    <option>--- Select One ---</option>
                    {banks.map((bank) => {
                      console.log({bank})
                      return <option key={bank.id} required>
                      {bank.name}
                      
                    </option>
                    }
                      
                    )}
                  </select>
                </div>
              </div>

              <div className="row mt-1">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    htmlFor="branch name"
                    labelText={"Branch Name"}
                    className="form-label mb-3 m-2"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                    required
                    form="create"
                    value={updateData1 && updateData1.name}
                    onChange={(e) =>
                      setUpdateData1({ ...updateData1, name: e.target.value })
                    }
                    className="form-control"
                    id="branchname"
                    type="text"
                    placeholder="Enter Branch Name"
                  />
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    htmlFor="location"
                    labelText={"Branch Location"}
                    className="form-label mb-3 m-2"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Textarea
                    required
                    form="create"
                    value={updateData1 && updateData1.location}
                    onChange={(e) =>
                      setUpdateData1({
                        ...updateData1,
                        location: e.target.value,
                      })
                    }
                    id="address"
                    placeholder="Enter Your Address!"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Branch Phone Number"}
                    htmlFor="phone"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                    required
                    className="form-control"
                    form="create"
                    value={updateData1 && updateData1.phone}
                    onChange={(e) =>
                      setUpdateData1({
                        ...updateData1,
                        phone: e.target.value,
                      })
                    }
                    id="phone"
                    type="number"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
              </div>

              <div>
                <div className="row mt-5">
                  <div className="col-md-5 col-lg-3">
                    <Label labelText="" />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <Button
                      form="create"
                      btnTitle="Update"
                      type="submit"
                      className="me-5"
                      onClick={() => {
                        updateHandler(updateData1);
                        navigate("/home");
                      }}
                    />
                    <Button
                      form="create"
                      btnType={[BUTTON.CANCEL]}
                      btnTitle="Cancel"
                      onClick={() => {
                        setUpdateData1("");
                        navigate("/home");
                      }}
                    />
                  </div>
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
                    htmlFor="bankName"
                    labelText={"Related Branch Name"}
                    className="form-label mb-3 m-2"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <select
                    style={{ height: "40px" }}
                    id="bankName"
                      form="create"
                  
                    value={relatedBankName}
                    onChange={(e) => setRelatedBankName(e.target.value)}
                      className={`form-select ${styles.container}`}
                      
                    required
                    >
                       <option key={0}  required>--- Select One ---</option>
                      {banks.map((bank) => (
                      
                        <option key={bank.id}  >
                       
                        {bank.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row mt-1">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    htmlFor="branch name"
                    labelText={"Branch Name"}
                    className="form-label mb-3 m-2"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                    form="create"
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                    className="form-control"
                    id="branchname"
                    type="text"
                    placeholder="Enter Branch Name"
                    required
                  />
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    htmlFor="location"
                    labelText={"Branch Location"}
                    className="form-label mb-3 m-2"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Textarea
                    form="create"
                    value={branchLocation}
                    onChange={(e) => setBranchLocation(e.target.value)}
                    id="address"
                    placeholder="Enter Your Address!"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Branch Phone Number"}
                    htmlFor="phone"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                    className="form-control"
                    form="create"
                    value={branchPhone}
                    onChange={(e) => setBranchPhone(e.target.value)}
                    id="phone"
                    type="number"
                    placeholder="Enter Your Phone Number"
                    required
                  />
                </div>
              </div>

              <div>
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
                        setRelatedBankName("");
                        setBranchName("");
                        setBranchLocation("");
                        setBranchPhone("");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Template>
    </>
  );
};

export default BranchReg;
