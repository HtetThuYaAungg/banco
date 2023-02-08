import React from "react";
import Template from "../../components/Template";
import Button from "../../components/utils/Button";
import Input from "../../components/utils/Input";
import Label from "../../components/utils/Label";
import Select from "../../components/utils/Select";
import Textarea from "../../components/utils/Textarea";
import { BUTTON } from "../../constants/utils";

const CustomerRegister = () => {
  return (
    <>
      <Template />
        <div className=" container mb-4">
          <div className="col-3"></div>
          <div className="col-9 justify-content-center ms-auto">
            <div className="row">
              <div className="col-md-5 col-lg-3 p-2">
                <Label
                  className="p-2 col-form-label"
                  htmlFor="customerName"
                  labelText={"Enter Your Name"}
                />
              </div>
              <div className="col-12 col-md-9 col-lg-6">
                <Input
                  type="text"
                  className="form-control"
                  id="customerName"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-md-5 col-lg-3 p-2">
                <Label
                  className="p-2 col-form-label"
                  labelText={"Enter Your NRC"}
                  htmlFor="NRC"
                />
              </div>
              <div className="col-12 col-md-9 col-lg-6">
                <Input
                  className="form-control"
                  id="NRC"
                  type="text"
                  placeholder="Enter Your NRC"
                />
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-md-5 col-lg-3 p-2">
                <Label
                  className="p-2 col-form-label"
                  labelText={"Enter Your Phone Number"}
                  htmlFor="phNumber"
                />
              </div>
              <div className="col-12 col-md-9 col-lg-6">
                <Input
                  className="form-control"
                  id="phNumber"
                  type="number"
                  placeholder="Enter Your Phone Number"
                />
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-md-5 col-lg-3 p-2">
                <Label
                  className="p-2 col-form-label"
                  labelText={"Enter Your Account Number"}
                  htmlFor="account"
                />
              </div>
              <div className="col-12 col-md-9 col-lg-6">
                <Input
                  className="form-control"
                  id="account"
                  type="text"
                  placeholder="Enter Your Account Number"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-5 col-lg-3 p-2">
                <Label
                  className="p-2 col-form-label"
                  labelText={"Enter Your Address"}
                  htmlFor="address"
                />
              </div>
              <div className="col-12 col-md-9 col-lg-6">
                <Textarea id="address" placeholder="Enter Your Address!" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-5 col-lg-3 p-2">
                <Label
                  className="p-2 col-form-label"
                  labelText={"Bank Name"}
                  htmlFor="bankName"
                />
              </div>
              <div className="col-12 col-md-9 col-lg-6">
                <Select
                  style={{ height: "40px" }}
                  id="bankName"
                  options={[
                    {
                      text: "Abank",
                      value: "abank",
                    },
                    {
                      text: "Kbz",
                      value: "Kbz",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-5 col-lg-3 p-2">
                <Label
                  className="p-2 col-form-label"
                  labelText={"Branch Name"}
                  htmlFor="branchName"
                />
              </div>
              <div className="col-12 col-md-9 col-lg-6">
                <Select
                  style={{ height: "40px" }}
                  id="branchName"
                  options={[
                    {
                      text: "Hlaing",
                      value: "Hlaing",
                    },
                    {
                      text: "Natmauk",
                      value: "Natmauk",
                    },
                  ]}
                />
              </div>
            </div>
            <div>
              <form className="m-3 mt-5">
                <div className="row mt-5">
                  <div className="col-md-5 col-lg-3">
                    <Label labelText="" />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <Button
                      btnTitle="Register"
                      type="submit"
                      className="me-5"
                    />
                    <Button btnType={[BUTTON.CANCEL]} btnTitle="Cancel" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
 
    </>
  );
};

export default CustomerRegister;
