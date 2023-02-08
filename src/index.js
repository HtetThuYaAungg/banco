import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import BranchReg from './pages/BranchReg';
import CustomerRegister from './pages/CustomerReg';
import BankReg from './pages/BankReg';
import Home from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/app" element={<App/>} />
      <Route path="/branch" element={<BranchReg />} />
      <Route path="/customer" element={<CustomerRegister />} />
      <Route path="/bank" element={<BankReg/>} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
