

export const Action = {
  ADD_BANK: "add-bank",
  REMOVE_BANK: "remove-bank",
  UPDATE_BANK: "update-bank",
};

export const BankReducer = (state, action) => {
  switch (action.type) {
    case Action.ADD_BANK: {
      // axios.post('http://localhost:3500/bank',action.bank)
      return [...state, action.bank];
    
    }
    case Action.REMOVE_BANK: {
      return state.filter((bank) => bank.id !== action.id);
    }
    case Action.UPDATE_BANK: {
      // console.log("action", action)
      // console.log("state", state)
      // const updateBank =  state.map(bank => {

      //     if (bank.id === action.bank.id) {
      //         console.log("if")
      //         return action.bank
      //     }
      //     return bank
      // })
      // console.log("updateBank", updateBank)
      // return updateBank
      return state.map((bank) => {
        if (bank.id === action.bank.id) {
          return action.bank;
        }
        return bank;
      });
    }
    default:
      return state;
  }
};

export const Action1 = {
  ADD_BRANCH: "add-branch",
  REMOVE_BRANCH: "remove-branch",
  UPDATE_BRANCH: "update-branch",
}

export const BranchReducer = (branch, action) => {
  switch (action.type) {
    
    case Action1.ADD_BRANCH: {
     
      return [...branch, action.branch];
      
    }
    case Action1.REMOVE_BRANCH: {
      return branch.filter((branch) => branch.id !== action.id);
    }
    case Action1.UPDATE_BRANCH: {
      return branch.map((b) => {
        if (b.id === action.branch.id) {
          return action.branch;
        }
        return b
      });
    }
    default:
      return branch
  }
};

export const Action2 = {
  ADD_CUSTOMER: "add-customer",
  REMOVE_CUSTOMER: "remove-customer",
  UPDATE_CUSTOMER: "update-customer",
}

export const CustomerReducer = (customer, action) => {
  switch (action.type) {
    
    case Action2.ADD_CUSTOMER: {
       
      return [...customer, action.customer];
      
    }
    case Action2.REMOVE_CUSTOMER: {
      return customer.filter((customer)=> customer.id !== action.id)
    }
    case Action2.UPDATE_CUSTOMER: {
      return customer.map((c) => {
        if (c.id === action.customer.id) {
          return action.customer
        }
        return c
      })
      
    }
    default:
      return customer
  }
};

