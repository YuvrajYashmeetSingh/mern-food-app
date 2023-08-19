import React, { createContext, useContext, useReducer } from "react";
const cartStateContext = createContext();
const cartDispatchContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];
    case "REMOVE":
      let arr = [...state];
      arr.splice(action.index, 1);
      return arr;
    case "UPDATE":
      let arr1 = [...state];
     
        arr1.find((food, index) => {
          if (food.id === action.id) 
         { arr1[index] = {
            ...food,
            qty: parseInt(action.qty) + food.qty,
            price: action.price + food.price,
          }}
          return arr1;
        });
        return arr1;
      case 'CLEAR':
        let empt_arr=[];
        return empt_arr;
      
    default:
      throw new Error("No action type found");
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <cartDispatchContext.Provider value={dispatch}>
      <cartStateContext.Provider value={state}>
        {children}
      </cartStateContext.Provider>
    </cartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);
