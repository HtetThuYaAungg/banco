import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Template from "../../components/Template";
import Button from "../../components/utils/Button";
import Input from "../../components/utils/Input";
import Label from "../../components/utils/Label";

import Textarea from "../../components/utils/Textarea";
import { BUTTON } from "../../constants/utils";
import DataContext from "../../context/DataContext";
import { Action2 } from "../../reducers/BankReducer";
import styles from "./customerReg.module.css";

const CustomerRegister = () => {
 
  const { banks, branches, dispatch2, updateData2, setUpdateData2, } = useContext(DataContext);
  const [customerName, setCustomerName] = useState("");
  const [customerNrc, setCustomerNrc] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAccount, setCustomerAccount] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerBankName, setCustomerBankName] = useState("");
  const [customerBranchName, setCustomerBranchName] = useState("");
  const [customerGender, setCustomerGender] = useState();
  const[customerAccountType, setCustomerAccountType] = useState([]);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch2({
      type: Action2.ADD_CUSTOMER,
      customer: {
        id: Date.now(),
        name: customerName,
        nrc: customerNrc,
        phone: customerPhone,
        gender: customerGender,
        type:customerAccountType,
        account: customerAccount,
        address: customerAddress,
        bankName: customerBankName,
        branchName: customerBranchName
      }
    });
    setCustomerName("");
    setCustomerNrc("");
    setCustomerPhone("");
    setCustomerAccount("");
    setCustomerAddress("");
    setCustomerBankName("");
    setCustomerBranchName("");
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Do you wish to add more data?")){
      navigate('/customer')
    }else
    {
      navigate('/home');
    }
  }

  const updateHandler = (updateData2) => {
    dispatch2({
      type: Action2.UPDATE_CUSTOMER,
      customer: {
        id: updateData2.id,
        name: updateData2.name,
        nrc: updateData2.nrc,
        phone: updateData2.phone,
        gender: updateData2.gender,
        type: updateData2.type,
        account: updateData2.account,
        address: updateData2.address,
        bankName: updateData2.bankName,
        branchName: updateData2.branchName
      }
    });
    setUpdateData2("");
  }

  const checkData = e => {

    setCustomerAccountType([...customerAccountType,e.target.value])

  }


  return (
    <>
       <form action="" onSubmit={submitHandler} id="create" />
      <Template />
      {updateData2 ? (
        <div className="row ">
        <div className="col-3"></div>
        <div className={`col-8 justify-content-center ${styles.row}`}>
          <div className="row mt-3">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="relate branch name"
                labelText={"Enter Your Name"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <Input
                form="create"
                value={updateData2 && updateData2.name}
                onChange={(e) =>setUpdateData2({...updateData2, name : e.target.value})}
                className="form-control"
                id="name"
                type="text"
                placeholder="Enter Your Name"
                required
              />
            </div>
          </div>

          <div className="row mt-1">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="nrc number"
                labelText={"Enter NRC Number"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <Input
                form="create"
                value={updateData2 && updateData2.nrc}
                  onChange={(e) => setUpdateData2({ ...updateData2, nrc: e.target.value })}
                className="form-control"
                id="nrcnumber"
                type="text"
                placeholder="Enter Your NRC Number"
                required
              />
            </div>
          </div>

          <div className="row mt-1">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="your phone"
                labelText={"Enter Your Phone"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <Input
                form="create"
                value={updateData2 && updateData2.phone}
                onChange={(e) =>setUpdateData2({...updateData2, phone:e.target.value})}
                className="form-control"
                id="yourphone"
                type="number"
                placeholder="Enter Your Phone Number"
                required
              />
            </div>
            </div>
            
            <div className="row mt-1 align-items-center">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="your gender"
                labelText={"Select your gender"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6 ">
                <input onChange={e => setUpdateData2({ ...updateData2, gender: e.target.value })} className="form-check-input"  type="radio" name="flexRadioDefault"  value="Male"  id="flexRadioDefault1" checked={updateData2.gender === "Male"}/>
            <label className="form-check-label ms-2 me-2" htmlFor="flexRadioDefault1">
              Male
            </label>

                <input onChange={e => setUpdateData2({ ...updateData2, gender: e.target.value })} className="form-check-input" type="radio" name="flexRadioDefault" value="Female" id="flexRadioDefault2" checked={updateData2.gender === "Female"} />
              <label className="form-check-label ms-2 me-2" htmlFor="flexRadioDefault2">
                Female
                  </label>
                <input onChange={e=>setUpdateData2({ ...updateData2, gender: e.target.value })}  className="form-check-input"  type="radio" name="flexRadioDefault"  value="Others" id="flexRadioDefault3"  checked={updateData2.gender === "Others"}/>
              <label className="form-check-label ms-2 me-2" htmlFor="flexRadioDefault3">
                Others
              </label>
            </div>
            </div>
            
            <div className="row mt-1 align-items-center">
              <div className="col-md-5 col-lg-3 p-2">
            <Label  htmlFor="your gender"
                labelText={"Choose Account Type"}
                className="form-label mb-3 m-2"/>
                </div>
                <div className="col-12 col-md-9 col-lg-6 ">
                <input onChange={e=> setUpdateData2({ ...updateData2, type: e.target.value })} className="form-check-input " type="checkbox" value="i-banking" name='checkbox1' id="flexCheckDefault1"  />
             <label className="form-check-label ms-2 me-2" htmlFor="flexCheckDefault1">
              I-Banking
            </label>

            <input onClick={e=> setUpdateData2 ({ ...updateData2, type: e.target.value })} className="form-check-input "  type="checkbox" value="m-banking" name='checkbox2' id="flexCheckDefault2"   />
             <label className="form-check-label ms-2 me-2" htmlFor="flexCheckDefault2">
              M-Banking
                  </label>
                  </div>
            </div>
            

          <div className="row mt-1">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="your account"
                labelText={"Enter Your Account"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <Input
                form="create"
                value={updateData2 && updateData2.account}
                onChange={(e) =>setUpdateData2({...updateData2,account:e.target.value})}
                className="form-control"
                id="account"
                type="number"
                placeholder="Enter Your Account Number"
                required
              />
            </div>
          </div>

          <div className="row mt-1">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="address"
                labelText={"Enter Your Address"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <Textarea
                form="create"
                value={updateData2 && updateData2.address}
                onChange={(e) =>setUpdateData2({...updateData2,address:e.target.value})}
                id="address"
                placeholder="Enter Your Address!"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="bank name"
                labelText={"Bank Name"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <select
                style={{ height: "40px" }}
                id="bankName"
                form="create"
                value={updateData2 && updateData2.bankName}
                onChange={(e) =>setUpdateData2({...updateData2,bankName:e.target.value})}
                className={`form-select ${styles.container}`}
                required
              >
                {banks.map((bank) => (
                  <option key={bank.id} required>{bank.name}</option>
                ))}
                
              </select>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="branch name"
                labelText={"Branch Name"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <select
                style={{ height: "40px" }}
                id="branchName"
                form="create"
                value={updateData2 && updateData2.branchName}
                onChange={(e) =>setUpdateData2({...updateData2,branchName:e.target.value})}
                className={`form-select ${styles.container}`}
                required
              >
                {branches.map((branch) => (
                  <option key={branch.id} required>{branch.name}</option>
                ))}
                
              </select>
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
                    updateHandler(updateData2);
                    navigate("/home");
                  }}
              />

              <Button
                form="create"
                btnType={[BUTTON.CANCEL]}
                btnTitle="Cancel"
                  onClick={() => {
                    setUpdateData2("");
                    navigate("/home");
                  }}
              />
            </div>
          </div>
        </div>
      </div>
      ) : (
          
        <div className="row ">
        <div className="col-3 "></div>
        <div className={`col-9 justify-content-center ${styles.row}`}>
          <div className="row mt-3">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="relate branch name"
                labelText={"Enter Your Name"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <Input
                form="create"
                value={customerName}
                onChange={(e) =>setCustomerName(e.target.value)}
                className="form-control"
                id="name"
                type="text"
                placeholder="Enter Your Name"
                required
              />
            </div>
          </div>

          <div className="row mt-1">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="nrc number"
                labelText={"Enter NRC Number"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <Input
                form="create"
                value={customerNrc}
                onChange={(e) =>setCustomerNrc(e.target.value)}
                className="form-control"
                id="nrcnumber"
                type="text"
                placeholder="Enter Your NRC Number"
                required
              />
            </div>
          </div>

          <div className="row mt-1">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="your phone"
                labelText={"Enter Your Phone"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <Input
                form="create"
                value={customerPhone}
                onChange={(e) =>setCustomerPhone(e.target.value)}
                className="form-control"
                id="yourphone"
                    type="number"
                    onKeyDown="return false"
                placeholder="Enter Your Phone Number"
                required
              />
            </div>
          </div>

          <div className="row mt-1">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="your account"
                labelText={"Enter Your Account"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <Input
                form="create"
                value={customerAccount}
                onChange={(e) =>setCustomerAccount(e.target.value)}
                className="form-control"
                id="account"
                type="number"
                placeholder="Enter Your Account Number"
                required
              />
            </div>
              </div>
              
              <div className="row mt-1 align-items-center">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="your gender"
                labelText={"Select your gender"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6 ">
            <input onChange={e=>setCustomerGender(e.target.value)} className="form-check-input"  type="radio" name="flexRadioDefault" value='Male' id="flexRadioDefault1"    />
            <label className="form-check-label ms-2 me-2" htmlFor="flexRadioDefault1">
              Male
            </label>

             <input onChange={e=>setCustomerGender(e.target.value)}  className="form-check-input"  type="radio" name="flexRadioDefault" value='Female' id="flexRadioDefault2" />
              <label className="form-check-label ms-2 me-2" htmlFor="flexRadioDefault2">
                Female
                  </label>
                  <input onChange={e=>setCustomerGender(e.target.value)}  className="form-check-input"  type="radio" name="flexRadioDefault" value='Others' id="flexRadioDefault3" />
              <label className="form-check-label ms-2 me-2" htmlFor="flexRadioDefault3">
                Others
              </label>
            </div>
              </div>
              
              <div className="row mt-1 align-items-center">
              <div className="col-md-5 col-lg-3 p-2">
            <Label  htmlFor="your gender"
                labelText={"Choose Account Type"}
                className="form-label mb-3 m-2"/>
                </div>
                <div className="col-12 col-md-9 col-lg-6 ">
            <input  onChange={checkData} className="form-check-input "  type="checkbox" value="i-banking" name='checkbox1' id="flexCheckDefault1"  />
             <label className="form-check-label ms-2 me-2" htmlFor="flexCheckDefault1">
              I-Banking
            </label>

            <input onChange={checkData} className="form-check-input "  type="checkbox" value="m-banking" name='checkbox2' id="flexCheckDefault2" />
             <label className="form-check-label ms-2 me-2" htmlFor="flexCheckDefault2">
              M-Banking
                  </label>
                  </div>
            </div>

          <div className="row mt-1">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="address"
                labelText={"Enter Your Address"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <Textarea
                form="create"
                value={customerAddress}
                onChange={(e) =>setCustomerAddress(e.target.value)}
                id="address"
                placeholder="Enter Your Address!"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="bank name"
                labelText={"Bank Name"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <select
                style={{ height: "40px" }}
                id="bankName"
                form="create"
                value={customerBankName}
                onChange={(e) =>setCustomerBankName(e.target.value)}
                className={`form-select ${styles.container}`}
                required
                  >
                    <option key={0}  required>--- Select One ---</option>
                {banks.map((bank) => (
                  <option key={bank.id} required>{bank.name}</option>
                ))}
                
              </select>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-5 col-lg-3 p-2">
              <Label
                htmlFor="branch name"
                labelText={"Branch Name"}
                className="form-label mb-3 m-2"
              />
            </div>
            <div className="col-12 col-md-9 col-lg-6">
              <select
                style={{ height: "40px" }}
                id="branchName"
                form="create"
                value={customerBranchName}
                onChange={(e) =>setCustomerBranchName(e.target.value)}
                className={`form-select ${styles.container}`}
                required
                  >
                  <option key={0}  required>--- Select One ---</option>
                {branches.map((branch) => (
                  <option key={branch.id} required>{branch.name}</option>
                ))}
                
              </select>
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
                onClick={() => {}}
              />

              <Button
                form="create"
                btnType={[BUTTON.CANCEL]}
                btnTitle="Cancel"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
      )}
     
    </>
  );
};

export default CustomerRegister;
