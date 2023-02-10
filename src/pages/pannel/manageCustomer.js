import React from 'react'
import mongoose from "mongoose";
import Customer from '../../../models/Customer';

const ManageCustomer = ({customer}) => {


  return (
    <>
    <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Manage Customer</h3>
            </div>
          </div>
          <div className="mt-2 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
              
                
              <div className="relative overflow-x-auto shadow-sm">
                  <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                              <th scope="col" className="px-6 py-3">
                                  SL
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Customer Name
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Phone No
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Email
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Country
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  City
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  State
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Zip Code
                              </th>
                              
                              <th scope="col" className="px-6 py-3">
                                  <span className="sr-only">Edit</span>
                              </th>
                          </tr>

                      </thead>

                      <tbody> 

                        {customer.map((item, index)=>{
                        return  <tr key={item._id} className="bg-white border-b hover:bg-gray-50">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {index === 0 || 1 ? index + 1 : index}
                              </th>
                              <td className="px-6 py-4">
                                  {item.customerName}
                              </td>
                              <td className="px-6 py-4">
                                  {item.phoneNo}
                              </td>
                              <td className="px-6 py-4">
                                  {item.email}
                              </td>
                              <td className="px-6 py-4">
                                  {item.country}
                              </td>
                              <td className="px-6 py-4">
                                  {item.city}
                              </td>
                              <td className="px-6 py-4">
                                  {item.state}
                              </td>
                              <td className="px-6 py-4">
                                  {item.zip}
                              </td>
                              
                              <td className="px-6 py-4 text-right">
                                  <a href="#" className="font-medium text-blue-600  no-underline hover:underline">Edit</a>
                              </td>
                        </tr>})}
                      </tbody>
                  </table>
              </div>
              
              </div>
            </form>
          </div>
        </div>
    </div>

    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5">
        <div className="border-t border-gray-200" />
      </div>
    </div>

    </>
  )
}




export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState){
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI)
  }
  let customer = await Customer.find()

   
  // Pass data to the page via props
  return {
     props: { customer: JSON.parse(JSON.stringify(customer)) } 
    }
}



export default ManageCustomer