import React from "react";
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'

const Home = () => {

  const data = [
    {
      customerName:"Aman",
      product:"book",
      price:50,
      discount:10
    },
     {
      customerName:"Raj",
      product:"book",
      price:50,
      discount:10
    },
     {
      customerName:"Ram",
      product:"book",
      price:50,
      discount:10
    },
     {
      customerName:"Kamal",
      product:"book",
      price:50,
      discount:10
    }
  ]

  return(
    <div className="bg-gray-200 min-h-screen py-16">
      <div className="bg-white rounded-lg shadow-lg w-8/12 mx-auto p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-rose-600">Redux Crud</h1>
        <Link to="/new-customer" className="text-white bg-indigo-600 px-6 py-2.5 rounded-md font-medium">
          <i className="ri-add-circle-line mr-1"></i>
          New Customer
        </Link>
      </div>
      <table className="w-full mt-2">
        <thead>
        <tr className="bg-violet-200 text-left">
          <th className="py-3 pl-3">S/No</th>
          <th>Customer's Name</th>
          <th>Product</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        { 
        data.map((item,index)=>(

          <tr key={index} className={index % 2 === 1 ? 'bg-rose-50':'bg-white'}>
            <td className="py-3 pl-3">{index+1}</td>
            <td>{item.customerName}</td>
            <td>{item.product}</td>
            <td>{item.price}</td>
            <td>{item.discount}</td>
            <td>
              <div className="space-x-3">
                <button className="bg-indigo-600 rounded w-10 h-10">
                 <i className="ri-pencil-line text-white"></i>
                </button>
                 <button className="bg-rose-600 rounded w-10 h-10">
                 <i className="ri-delete-bin-line text-white"></i>
                </button>
              </div>
            </td>
          </tr>
        ))
          
        }
        </tbody>
       
      </table>
      </div>
    </div>
  )


}

export default Home