import { createSlice } from "@reduxjs/toolkit";

 const customerSlice = createSlice({
     name:'customer',
     initialState : null,
     reducers :{
        createCustomer:()=>{
           return {
            name:'fyfh'
           }
        }
     }
})

export const {createCustomer} = customerSlice.actions
export default customerSlice.reducer