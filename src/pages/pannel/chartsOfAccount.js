import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Charts from '../../../models/Charts';
import mongoose from 'mongoose';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const ChartsOfAccounts = ({charts}) => {

  const [open, setOpen] = useState(false)
  const [account, setaccount] = useState('')
  const [accountCode, setAccountCode] = useState('')
  const [balance, setBalance] = useState('')
  const [asof, setAsof] = useState('')
  const [desc, setDesc] = useState('')
  const [subAccount, setSubAccount] = useState('')

  const handleChange = (e) => {
    
    if(e.target.name === 'account'){
      setaccount(e.target.value)
    }
    else if(e.target.name === 'accountCode'){
      setAccountCode(e.target.value)
    }
    else if(e.target.name === 'balance'){
      setBalance(e.target.value)
    }
    else if(e.target.name === 'asof'){
      setAsof(e.target.value)
    }
    else if(e.target.name === 'referenceNo'){
      setReferenceNo(e.target.value)
    }
    else if(e.target.name === 'paymentReceived'){
      setPaymentReceived(e.target.value)
    }
    else if(e.target.name === 'desc'){
      setDesc(e.target.value)
    }
    else if(e.target.name === 'subAccount'){
      setSubAccount(e.target.value)
    }
    
  }

  const submit = async(e)=>{
    e.preventDefault()

    // fetch the data from form to makes a file in local system
    const data = { account, accountCode, balance , asof, desc, subAccount };

    console.log(data);

      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addCharts`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      let response = await res.json()
        setaccount('')
        setAccountCode('')
        setBalance('')
        setAsof('')
        setDesc('')
        setSubAccount('')

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
            <h3 className="text-lg font-medium leading-6 text-gray-900">Charts of Accounts</h3>
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
                          Account code
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Account
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Sub Account
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Balance
                      </th>
                      <th scope="col" className="px-6 py-3">
                          <span className="">Action</span>
                      </th>
                  </tr>
                </thead>

                <tbody>
                  
                  {Object.keys(charts).map((item)=>{
                    return <tr key={charts[item]._id} className="bg-white border-b hover:bg-gray-50">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {charts[item].accountCode}
                    </th>
                    <td className="px-6 py-4">
                        {charts[item].desc}
                    </td>
                    <td className="px-6 py-4">
                        {charts[item].account}
                    </td>
                    <td className="px-6 py-4">
                        {charts[item].subAccount}
                    </td>
                    <td className="px-6 py-4">
                        {charts[item].balance}
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
                                      <Link href="#" className={classNames(   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 no-underline', 'block px-4 py-2 text-sm hover:no-underline' )}>Edit</Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>{({ active }) => (
                                      <Link href="#" className={classNames(   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 no-underline', 'block px-4 py-2 text-sm hover:no-underline' )}>Make inactive</Link>
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
            </div>
          </form>
        </div>
      </div>
    </div>

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setOpen}>
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
                  <div className="mt-10 sm:mt-0 w-full">
                    <div className="md:grid md:grid-cols-1 md:gap-6">
                      <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                          <h3 className="text-lg font-medium leading-6 text-gray-900">Account</h3>
                        </div>
                      </div>
                      <div className="mt-2 md:col-span-2 md:mt-0">
                        <form method="POST" onSubmit={submit}>
                          <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                              <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-2">
                                  <label htmlFor="accountCode" className="block text-sm font-medium text-gray-700">
                                    Account Code
                                  </label>
                                  <input
                                    onChange={handleChange}
                                    value={accountCode}
                                    type="number"
                                    name="accountCode"
                                    id="accountCode"
                                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>
                                
                                <div className="col-span-6 sm:col-span-2">
                                  <label htmlFor="account" className="block text-sm font-medium text-gray-700">
                                    Account:
                                  </label>
                                  <input
                                    type="text"
                                    onChange={handleChange}
                                    name="account"
                                    value={account}
                                    id="account"
                                    autoComplete="account"
                                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>


                                <div className="col-span-6 sm:col-span-2">
                                  <label htmlFor="subAccount" className="block text-sm font-medium text-gray-700">
                                    Sub Account
                                  </label>
                                  <select id="subAccount" name="subAccount" onChange={handleChange} value={subAccount} className="mt-1 py-2 block w-full rounded-md border border-gray-300 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                    <option value={'Due on receipt'}>Due on receipt</option>
                                    <option value={'Net 15'}>Net 15</option>
                                    <option value={'Net 30'}>Net 30</option>
                                    <option value={'Net 60'}>Net 60</option>
                                  </select>
                                </div>
                                
                                
                                <div className="col-span-6 sm:col-span-3 lg:col-span-6">
                                  <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
                                    Description:
                                  </label>
                                  <textarea cols="30" rows="3" type="text"
                                    name="desc"
                                    id="desc"
                                    onChange={handleChange}
                                    value={desc}
                                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                  </textarea>
                                </div>


                                <div className="col-span-6 sm:col-span-2">
                                  <label htmlFor="balance" className="block text-sm font-medium text-gray-700">
                                    Balance:
                                  </label>
                                  <input
                                    type="number"
                                    onChange={handleChange}
                                    name="balance"
                                    id="balance"
                                    value={balance}
                                    autoComplete="balance"
                                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>
                                
                                
                                <div className="col-span-6 sm:col-span-2">
                                  <label htmlFor="asof" className="block text-sm font-medium text-gray-700">
                                    As of:
                                  </label>
                                  <input
                                    type="date"
                                    onChange={handleChange}
                                    name="asof"
                                    id="asof"
                                    value={asof}
                                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                  />
                                </div>
                           
                                


                              </div>

                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                              <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
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
  let charts = await Charts.find()

   
  // Pass data to the page via props
  return {
     props: { charts: JSON.parse(JSON.stringify(charts)) } 
    }
}

export default ChartsOfAccounts