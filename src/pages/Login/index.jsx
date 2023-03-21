import React, { useState } from "react";
import Button from "../../components/utils/Button";
import styles from "./Login.module.css";
import { BUTTON } from "../../constants/utils";
import Text from "../../components/utils/Text";
import Label from "../../components/utils/Label";
import Input from "../../components/utils/Input";
import Image from "../../components/utils/Image";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("kminchelle");

  const [password, setPassword] = useState("0lelplR");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const API_URL = "https://dummyjson.com/auth/login";

  const loginHandler = async (userdata) => {
    const { data } = await axios.post(
      API_URL,
      userdata
    );
    console.log(data);
    setLoading(false);
    if (data) {
    }
    navigate("/home");
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userdata = { username: email, password };
    await loginHandler(userdata);
  };

  return (
    <>
      <form id="form" onSubmit={onSubmitHandler}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

                <Button
                  className="mb-3"
                  btnTitle={loading ? "Loading..." : "Login"}
                  type="submit"
                  btnType={[BUTTON.DEFAULT]}
                />
              </div>
            </div>

            <div className="col-3"></div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
