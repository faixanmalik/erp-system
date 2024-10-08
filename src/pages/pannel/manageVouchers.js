import React, {Fragment, useState} from 'react'
import JournalEntries from '../../../models/JournalEntries';
import mongoose from "mongoose";
import moment from 'moment/moment';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import AddVouchers from './forms/addVouchers';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const ManageVouchers = ({journalEntries}) => {

  const [open, setOpen] = useState(false)

  const editEntry = async(id)=>{

    setOpen(true)

    const data = { id , editPath: 'manageVouchers'};
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/editEntry`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      let response = await res.json()
      console.log(response)
      const date = moment(response.journalEntries.journalDate).utc().format('YYYY-MM-DD')
        
        setAccountCode(response.charts.accountCode)
        setAccount(response.charts.account)
        setAccountName(response.charts.accountName)
        setSubAccount(response.charts.subAccount)
        setBalance(response.charts.balance)
        setAsof(response.charts.asof)
        setDesc(response.charts.desc)
    
  }

  const delEntry = async(id)=>{

    const data = { id };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/delEntry`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      let response = await res.json()

      if (response.success === true) {
          toast.success(response.message , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
      }
      else {
          toast.error(response.message , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
      }
    
  }

  return (
    <>
    {/* React tostify */}
    <ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>

    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-1 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0 flex">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Manage Vouchers</h3>
            <button onClick={()=>{setOpen(true)}} className='ml-auto bg-blue-800 text-white px-14 py-2 rounded-lg'>
               New
            </button>
          </div>
        </div>
        <div className="mt-2 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
             
              <div className="overflow-x-auto shadow-sm">
                <table className="w-full text-sm text-left text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                          Sr
                      </th>
                      <th scope="col" className="px-6 py-3">
                          journal Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Account
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Debit
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Credit
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {journalEntries.map((item, index)=>{ 
                    return <tr key={item._id} className="bg-white border-b hover:bg-gray-50">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          {index + 1}
                      </th>
                      <td className="px-6 py-4">
                          {moment(item.journalDate).utc().format('YYYY-MM-DD')}
                          
                      </td>
                      <td className="px-6 py-4">
                          {item.account}
                      </td>
                      <td className="px-6 py-4">
                          {item.debit}
                      </td>
                      <td className="px-6 py-4">
                          {item.credit}
                      </td>
                      <td className="px-6 py-4">
                          {item.name}
                      </td>
                      <td className="px-6 py-4">
                          {item.desc}
                      </td>
                      <td className="px-6 py-4">
                        <Menu as="div" className=" inline-block text-left">
                          <div>
                            <Menu.Button className="z-0">
                              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                            </Menu.Button>
                          </div>
                          <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="absolute right-20 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1 z-20">
                                
                              <Menu.Item>{({ active }) => (
                                  <div onClick={()=>{editEntry(item._id)}} className={classNames(   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 no-underline', 'w-full text-left block px-4 py-2 text-sm hover:no-underline' )}>Edit</div>
                                )}
                              </Menu.Item>
                              <Menu.Item>{({ active }) => (
                                  <div onClick={()=>{delEntry(item._id)}} className={classNames(   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 no-underline', 'w-full text-left block px-4 py-2 text-sm hover:no-underline' )}>Delete</div>
                                )}
                              </Menu.Item>
                          
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </td>
                    </tr>})}
                    
                  </tbody>
                </table>
              </div>
              <div className="bg-slate-100 px-4 py-3 text-right sm:px-6">
                <h1 className='text-sm text-indigo-700 mr-48'>Total Amount: $100</h1>
              </div>
              
            </div>
          </form>
        </div>
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
                  
                  <div className='w-full'>
                    <AddVouchers/>
                  </div>


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
  let journalEntries = await JournalEntries.find()

   
  // Pass data to the page via props
  return {
     props: { journalEntries: JSON.parse(JSON.stringify(journalEntries)) } 
    }
}

export default ManageVouchers