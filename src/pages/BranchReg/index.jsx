import React from 'react'
import Text from "../../components/utils/Text";
import Label from '../../components/utils/Label';
import styles from './branchReg.module.css';
import Input from "../../components/utils/Input";
import Image from "../../components/utils/Image";
import Select from '../../components/utils/Select';
import Button from "../../components/utils/Button";
import { BUTTON } from "../../constants/utils";
import Textarea from '../../components/utils/Textarea';
import Navbar from '../../components/commons/Navbar';
import Template from '../../components/Template';

const BranchReg = () => {
  return (
    <>
    {/* <div className='container'>
      <div className={`row ${styles.row}`}>
        <div className="col-2">

        </div>
        <div className="col-10 bg-light">
          <div className='justify-content-center mb-3'>
            <div className='row'>
              <div className='col-md-5 col-lg-4 '>
                <Label
                  htmlFor="relate branch name"
                  labelText={"Related Branch Name"}
                  className="form-label mb-3 m-2"
                />
              </div>
              <div className='col-md-5 col-lg-4'>
                <Select
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

          </div>
          <div className='justify-content-center mb-3'>
            <div className='row'>
              <div className='col-md-5 col-lg-4 '>
                <Label
                  htmlFor="branch name"
                  labelText={"Branch Name"}
                  className="form-label mb-3 m-2"
                />
              </div>
              <div className='col-md-5 col-lg-4 '>
                <Input
                  id="name"
                  placeholder="......"
                  className="form-control w-70 mb-2"
                />
              </div>

            </div>

          </div>

          <div className='justify-content-center mb-3'>
            <div className='row'>
              <div className='col-md-5 col-lg-4 '>
                <Label
                  htmlFor="location"
                  labelText={"Branch Location"}
                  className="form-label mb-3 m-2"
                />
              </div>
              <div className='col-md-5 col-lg-4 '>
                <Input
                  id="location"
                  placeholder="......"
                  className="form-control w-70 mb-2"
                />
              </div>

            </div>

          </div>

          <div className='justify-content-center'>
            <div className='row'>
              <div className='col-md-5 col-lg-4 '>
                <Label
                  htmlFor="phone"
                  labelText={"Branch Phone"}
                  className="form-label mb-3 m-2"
                />
              </div>
              <div className='col-md-5 col-lg-4 '>
                <Input
                  id="phone"
                  placeholder="......"
                  className="form-control w-70 mb-2"
                  />
                 
              </div>
              
            </div>
            
            </div>
            

         
            
                  <form className='m-3 mt-4'>
                    <div className='row justify-content-center '>

                      <div className="col-md-6 col-lg-4 d-flex">
                        <Button btnTitle="Register" type="submit" className='me-2'/>
                        <Button btnType={[BUTTON.CANCEL]} btnTitle="Cancel" />
                      </div>
                    </div>

                  </form>
                
              

              </div>

            </div>
            
             
            
          </div> */}
     
     <Template> 
      <div className='row position-fixed'>
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
              <Select style={{height:"40px",}}
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
              <Textarea id="address" placeholder="Enter Your Address!" className='form-control'/>
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
                id="phone"
                type="number"
                placeholder="Enter Your Phone Number"
              />
            </div>
          </div>
         
          
         
          <div>
            <form className='m-3 mt-5'>
              {/* {renderFields(fields)} */}

              <div className='row mt-5'>
                <div className="col-md-5 col-lg-3">
                  <Label labelText="" />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Button btnTitle="Register" type="submit" className='me-5' />
                  <Button btnType={[BUTTON.CANCEL]} btnTitle="Cancel" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </Template>
         
   
</>
  )
}

export default BranchReg