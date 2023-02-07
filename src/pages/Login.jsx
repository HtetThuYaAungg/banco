import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [name, setName] = useState("kminchelle");
    const [password, setPassword] = useState("0lelplR");

    const loginHandler = async (userdata) => {
        const { data } = await axios.post("https://dummyjson.com/auth/login", userdata);
        console.log(data);
        setLoading(false);
        if (data) {
            const user = {
                image : data?.image,
                name: data?.username,
                token : data?.token
            };
            localStorage.setItem("userData",JSON.stringify(user))
        }
            navigate("/dashboard")
        
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const userdata = { username:name, password };
        await loginHandler(userdata);
    }

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


  

  return (
    <>
      <div className="h-screen flex justify-center items-center ">
        <form className="w-96 max-w-sm p-4 bg-white border border-gray-200 rounded-lg drop-shadow-2xl md:p-10 dark:bg-gray-100" onSubmit={onSubmitHandler}>
          <div className="mb-6">
            <h3 className="block mb-5 text-lg font-medium text-gray-900 dark:text-dark">Login to Your Account</h3>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e=>setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={e=>setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
         
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
                      {loading ? "loading..." : "login"} 
                     
                  </button>
                     
        </form>
      </div>
    </>
  );
};

export default Login;
