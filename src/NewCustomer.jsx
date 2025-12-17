import React from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./redux/slices/customer";
const NewCustomer = () => {

  const dispatch = useDispatch()

  const addNewCustomer = (e)=>{
   
    e.preventDefault()
   dispatch(createCustomer())

  }

  return(
    <div className="bg-gray-200 min-h-screen">
        <div className="w-6/12 bg-white mx-auto p-8 shadow-lg space-y-8">
          <h1 className="text-5xl font-bold text-center">New Customer</h1>
          <form className="space-y-6" onSubmit={addNewCustomer}>
            <div className="flex flex-col gap-3">
                <label className="text-lg font-medium">Customers Name</label>
                <input className="rounded border border-gray-300 p-3" placeholder="Enter Name" required name="customer_name"/>
            </div>
             <div className="flex flex-col gap-3">
                <label className="text-lg font-medium">Product</label>
                <input className="rounded border border-gray-300 p-3" placeholder="Enter Product" required name="product_name"/>
            </div>
             <div className="flex flex-col gap-3">
                <label className="text-lg font-medium">Price</label>
                <input type="number" className="rounded border border-gray-300 p-3" placeholder="123" required name="price_name"/>
            </div>
              <div className="flex flex-col gap-3">
                <label className="text-lg font-medium">Discount</label>
                <input type="number" className="rounded border border-gray-300 p-3" placeholder="50" required name="discount"/>
            </div>
            <div className="flex flex-col gap-3">
                <button className="bg-indigo-600 py-3 rounded text-white font-medium">Submit</button>
            </div>
          </form>
        </div>
        
    </div>
  )


}

export default NewCustomer