import React from "react";
import Button from "../../components/utils/Button";
import styles from "./Login.module.css";
import { BUTTON } from "../../constants/utils";
import Text from "../../components/utils/Text";
import Label from "../../components/utils/Label";
import Input from "../../components/utils/Input";
import Image from "../../components/utils/Image";
import Template from "../../components/Template";
import { Link } from "react-router-dom";

const Login = () => {
  const login = () => console.log("Log in Success");

  return (
    <>
     
     <div className="container">
        <div className="row">
          <div className="col-3"></div>

          <div className="col-5">
            <div className={`{styles.logoImgContainer}`}>
              <Image src="/media/images/logo.png" alt="logo" />
            </div>

            <div>
              <Text>
                <h3 className={`${styles.loginTitle}`}>
                  Login to your account
                </h3>
              </Text>

              <Label
                htmlFor="email"
                labelText={"Email or Phone Number"}
                className="form-label mb-3"
              />

              <Input
                id="email"
                placeholder="example@gmail.com"
                className="form-control w-100 mb-3"
              />

              <Label
                htmlFor="password"
                labelText={"Password"}
                className="form-label"
              />

              <Input
                id="password"
                placeholder="......"
                className="form-control w-100 mb-2"
              />

              <div className="d-flex justify-content-between mb-2">
                <div className="form-check">
                  <Input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
                <span> Forgot Password? </span>
              </div>
              <Link to="/home">
              <Button
                className="mb-3"
                btnTitle={`Login`}
                onClick={login}
                btnType={[BUTTON.DEFAULT]}
              />
              </Link>
             
            </div>
          </div>

          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
};

export default Login;