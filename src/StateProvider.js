import React,{createContext,useContext,useReducer} from "react";
//prepare hte datalayer
export const StateContext=createContext();
//wrap our app and provider the data Layer
export const StateProvider=({reducer,initialState,children})=>(
<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);
//pull the information from the data layer
export const useStateValue=()=>useContext(StateContext);