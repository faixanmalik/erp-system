import React, {Fragment} from 'react'
import Link from 'next/link';
import JournalEntries from '../../../models/JournalEntries';
import mongoose from "mongoose";
import moment from 'moment/moment';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const ManageJournalEntries = ({journalEntries}) => {

  const edit = (id)=>{
    console.log(id);
    
  }

  return (
    <>
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-1 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Manage Journal Entries</h3>
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
                                    <Link href="#" onClick={()=>{edit(item._id)}} className={classNames(   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 no-underline', 'block px-4 py-2 text-sm hover:no-underline' )}>Edit</Link>
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
              <div className="bg-slate-100 px-4 py-3 text-right sm:px-6">
                <h1 className='text-sm text-indigo-700 mr-48'>Total Amount: $100</h1>
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
  let journalEntries = await JournalEntries.find()

   
  // Pass data to the page via props
  return {
     props: { journalEntries: JSON.parse(JSON.stringify(journalEntries)) } 
    }
}

export default ManageJournalEntries