import React, { createContext, useReducer, useState } from "react";
import { BankReducer, BranchReducer, CustomerReducer } from "../reducers/BankReducer";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [banks, dispatch] = useReducer(BankReducer, []);
  const [branches, dispatch1] = useReducer(BranchReducer, []);
  const [customers, dispatch2] = useReducer(CustomerReducer, []);
  const [isCheck, setIsCheck] = useState([]);

  const [updateData, setUpdateData] = useState();
  const [updateData1, setUpdateData1] = useState();
  const [updateData2, setUpdateData2] = useState();

  return (
    <DataContext.Provider
      value={{
        banks,
        dispatch,
        updateData,
        setUpdateData,
        updateData1,
        setUpdateData1,
        branches, dispatch1,
        customers, dispatch2,
        updateData2, setUpdateData2,
        isCheck, setIsCheck
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
