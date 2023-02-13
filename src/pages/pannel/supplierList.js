import React, {useState, Fragment} from 'react'
import Supplier from '../../../models/Supplier';
import mongoose from "mongoose";
import AddSupplier from './addSupplier';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'

const SupplierList = ({supplier}) => {

  const [open, setOpen] = useState(false);
  
  return (
    <>
    <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 flex">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Manage Supplier</h3>
              <button onClick={()=>{setOpen(true)}} className='ml-auto bg-blue-800 text-white px-14 py-2 rounded-lg'>
               New
            </button>
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
                              Supplier Name
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
                      {supplier.map((item, index)=>{
                      return <tr key={item._id} className="bg-white border-b hover:bg-gray-50">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          {index === 0 || 1 ? index + 1 : index}
                        </th>
                        <td className="px-6 py-4">
                            {item.supplierName}
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



    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={()=>{setOpen(false)}}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95" enterTo="opacity-100 translate-y-0 md:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 md:scale-100" leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-5xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-6 lg:right-8" onClick={() => setOpen(false)}>
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>


                  <AddSupplier/>


                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}



export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState){
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI)
  }
  let supplier = await Supplier.find()

   
  // Pass data to the page via props
  return {
     props: { supplier: JSON.parse(JSON.stringify(supplier)) } 
    }
}



export default SupplierList