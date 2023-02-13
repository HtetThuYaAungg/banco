import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { useReducer } from "react";

import apiRequest from "../apiRequest";





// const actions = {
//   ADD_TODO_ITEM: "ADD_TODO_ITEM",
//   REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
//   TOGGLE_COMPLETED: "TOGGLE_COMPLETED"
// };


// const reducer = (state, action) => {
//   if (action.type === 'add') {
//     return {
//      ...action.payload
//     }
//   }


//   }


const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [listInfo, setListInfo] = useState([]);

  // const [state, dispatch] = React.useReducer(reducer, { name:'',phone:''});
  

  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [updateData, setUpdateData] = useState("");
  const API_URL = "http://localhost:3500/bank";

  const [branchList, setBranchList] = useState([{naem:'',id:''}]);
  const [select, setSelect] = useState('');

  // useEffect(() => {
  //   const fetchLists = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       if (!response.ok) throw Error("Did not receive expected data");
  //       const listItems = await response.json();
  //       setBranchList(listItems);
  //       setFetchError(null);
  //     } catch (err) {
  //       setFetchError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   setTimeout(() => fetchLists(), 2000);
  // }, [ branchList]);


  // const [tasks, dispatch] = useReducer({
  //   tasksReducer,
  //   initialTask
  // });
 

  // const addData = async () => {
  //     try {
  //         await axios.post(API_URL,state)
          
  //       } catch (error) {
  //         console.log(error)  
  //       }
        
  //     }
      
   
  
  

 

  
 

  // const addBankInfo = (name, phone) => { 
  //   console.log(state)
  //   const newBankInfo = {
  //         name,
  //         phone,
  //   };
  //   dispatch({ type: "add", payload: newBankInfo })   
  // }
  

  // useEffect(() => {
  //   addData()
  // },[])

  // const addBankInfo = async (name, phone) => {
  //   const newBankInfo = {
  //     id: listInfo.length ? listInfo[listInfo.length - 1].id + 1 : 1,
  //     name,
  //     phone,
  //   };
  //   setListInfo([...listInfo, newBankInfo]);
  //   const { data } = await axios.post(API_URL, newBankInfo);
  //   console.log(data);
  // };
  //delete function
  const deleteBankInfo = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Delete")) {
      setListInfo(listInfo.filter((list) => list.id !== id));

      const deleteOption = {
        method: "DELETE",
      };
      const reqUrl = `${API_URL}/${id}`;
      const result = await apiRequest(reqUrl, deleteOption);
      if (result) setFetchError(result);
    }
  };

  // const changeBankInfo = (e) => {
  //   let newEntry = {
  //     id: updateData.id,
  //     name: e.target.value,
  //     phone: e.target.value,
  //   };
  //   setUpdateData(newEntry);
  // };
//   const changeBankName = (e) => {
//     setUpdateData({
//       ...updateData,
//       name: e.target.value,
//   })
//   }
  
//   const changeBankPhone = (e) => {
//     setUpdateData({
//       ...updateData,
//       phone: e.target.value,
//   })
// }

  const updateBankInfo = async (id) => {
    let filter = [...listInfo].filter((list) => list.id !== updateData.id);
    let update = [updateData, ...filter];
    setListInfo(update);
    setUpdateData("");

    const updateOption = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: update[0].name, phone: update[0].phone }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOption);
    if (result) setFetchError(result);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  
  return (
    <DataContext.Provider
      value={{
        fetchError,
        setFetchError,
        isLoading,
        setIsLoading,
        listInfo,
        setListInfo,
        updateData,
        setUpdateData,
        // addBankInfo,
        deleteBankInfo,
        updateBankInfo,
        cancelUpdate,
        API_URL,
        setSelect,
        select,
        branchList,
        setBranchList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
