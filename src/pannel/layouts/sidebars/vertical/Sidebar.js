import { Fragment, useState } from 'react'
import { Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'



const Sidebar = ({ showMobilemenu }) => {

  const router = useRouter();
  const location = router.pathname;
  const [sale, setSale] = useState(false)
  const [customer, setCustomer] = useState(false)
  const [supplier, setSupplier] = useState(false)
  const [product, setProduct] = useState(false)
  const [open, setOpen] = useState(false)






  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <button className="text-2xl ml-6 items-center lg:hidden" onClick={showMobilemenu} >
          <AiOutlineCloseCircle/>
        </button>
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
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-6 lg:right-8"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="relative mt-6 w-full overflow-x-auto shadow-sm">
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Customers
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Suppliers
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Employees
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Others
                            </th>
                          
                        </tr>
                      </thead>
                      
                      <tbody> 
                          
                        <tr className="bg-white border-b hover:bg-gray-50"> 
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/invoice'} className='no-underline text-gray-500 font-semibold text-base'>Invoice</Link>
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/expense'} className='no-underline text-gray-500 font-semibold text-base'>Expense</Link>
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/singleTimeActivity'} className='no-underline text-gray-500 font-semibold text-base'>Single time activity</Link>
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/bankDeopsit'} className='no-underline text-gray-500 font-semibold text-base'>Bank deposit</Link>
                            </td>
                          </tr>

                          <tr className="bg-white border-b hover:bg-gray-50"> 
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/receivePayment'} className='no-underline text-gray-500 font-semibold text-base'>Receive payment</Link>
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/cheque'} className='no-underline text-gray-500 font-semibold text-base'>Cheque</Link>
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/weeklyTimeSheet'} className='no-underline text-gray-500 font-semibold text-base'>Weekly time sheet</Link>
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/transfer'} className='no-underline text-gray-500 font-semibold text-base'>Transfer</Link>
                            </td>
                          </tr>


                          <tr className="bg-white border-b hover:bg-gray-50"> 
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/estimate'} className='no-underline text-gray-500 font-semibold text-base'>Estimate</Link>
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/bill'} className='no-underline text-gray-500 font-semibold text-base'>Bill</Link>
                            </td>
                            <td className="px-6 py-2">
                                
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/journalEntry'} className='no-underline text-gray-500 font-semibold text-base'>Journal entry</Link>
                            </td>
                          </tr>


                          <tr className="bg-white border-b hover:bg-gray-50"> 
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/creditNote'} className='no-underline text-gray-500 font-semibold text-base'>Credit Note</Link>
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/payBills'} className='no-underline text-gray-500 font-semibold text-base'>Pay bills</Link>
                            </td>
                            <td className="px-6 py-2">
                                
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/statement'} className='no-underline text-gray-500 font-semibold text-base'>Statement</Link>
                            </td>
                          </tr>

                          <tr className="bg-white border-b hover:bg-gray-50"> 
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/salesReceipt'} className='no-underline text-gray-500 font-semibold text-base'>Sales receipt</Link>
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/purchaseOrder'} className='no-underline text-gray-500 font-semibold text-base'>Purchase order</Link>
                            </td>
                            <td className="px-6 py-2">
                                
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/payDownCreditCard'} className='no-underline text-gray-500 font-semibold text-base'>Pay down credit card</Link>
                            </td>
                          </tr>


                          <tr className="bg-white border-b hover:bg-gray-50"> 
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/refundReceipt'} className='no-underline text-gray-500 font-semibold text-base'>Refund receipt</Link>
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/supplierCredit'} className='no-underline text-gray-500 font-semibold text-base'>Supplier credit</Link>
                            </td>
                            <td className="px-6 py-2">
                                
                            </td>
                            <td className="px-6 py-2">
                                
                            </td>
                          </tr>
                          
                          <tr className="bg-white border-b hover:bg-gray-50"> 
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/delayedCredit'} className='no-underline text-gray-500 font-semibold text-base'>Delayed credit</Link>
                            </td>
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/creditCardCredit'} className='no-underline text-gray-500 font-semibold text-base'>Credit card credit</Link>
                            </td>
                            <td className="px-6 py-2">
                                
                            </td>
                            <td className="px-6 py-2">
                                
                            </td>
                          </tr>
                          <tr className="bg-white border-b hover:bg-gray-50"> 
                            <td className="px-6 py-2">
                                <Link href={'/pannel/forms/delayedCharge'} className='no-underline text-gray-500 font-semibold text-base'>Delayed charge</Link>
                            </td>
                            <td className="px-6 py-2">
                                
                            </td>
                            <td className="px-6 py-2">
                                
                            </td>
                            <td className="px-6 py-2">
                                
                            </td>
                          </tr>

                          


                          
                      </tbody>
                    </table>
                  </div>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">

            <NavItem className="sidenav-bg mx-auto">
                <button onClick={()=>{setOpen(true)}} className='bg-blue-800 text-white px-24 py-2 rounded-lg'>New</button>
            </NavItem>

            <NavItem className="sidenav-bg">
              <Link href={'/'} className={location === '/' ? "text-primary nav-link py-3": "nav-link text-secondary py-3"}>
                <i className='bi bi-speedometer2'></i>
                <span className="ms-3 d-inline-block">Dashboard</span>
              </Link>
            </NavItem>

             <NavItem className="sidenav-bg cursor-pointer">
              <div onClick={()=>{setSale(!sale)}} className={` ${location === '/pannel/addSale' || location === '/pannel/manageSale' ? "text-primary nav-link py-3" : "nav-link text-secondary py-3"} `}>
              <i className='bi bi-receipt'></i>
              <button className="ms-3 d-inline-block">Journal Entries</button>
        
                <ul id="dropdown-example" className={` ${sale === false ? 'hidden' : 'visible'} py-2 -ml-4 space-y-1`}>
                    <li className="flex items-center space-x-1 hover:text-indigo-700">
                        <i className='bi bi-plus-circle'></i>
                        <Link href={"/pannel/makeJournalEntries"} className="flex no-underline items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group">Make a Journal Entry</Link>
                    </li>
                    <li className="flex items-center space-x-1 hover:text-indigo-700">
                        <i className='bi bi-pen'></i>
                        <Link href={"/pannel/manageJournalEntries"} className="flex no-underline items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group">Manage Journal Entry</Link>
                    </li>
                </ul>
              </div>
            </NavItem>

            <NavItem className="sidenav-bg cursor-pointer">
              <div onClick={()=>{setCustomer(!customer)}} href={''} className={location === '/pannel/addCustomer' || location === '/pannel/manageCustomer' ? "text-primary nav-link": "nav-link text-secondary py-3"}>
                <i className='bi bi-people'></i>
                <span className="ms-3 d-inline-block">Customer</span>
        
                <ul id="dropdown-example" className={` ${customer === false ? 'hidden' : 'visible'} py-2 -ml-4 space-y-1`}>
                    <li className="flex items-center space-x-1 hover:text-indigo-700">
                        <i className='bi bi-plus-circle'></i>
                        <Link href={"/pannel/addCustomer"} className="flex no-underline items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group">Add Customer</Link>
                    </li>
                    <li className="flex items-center space-x-1 hover:text-indigo-700">
                        <i className='bi bi-pen'></i>
                        <Link href={"/pannel/manageCustomer"} className="flex no-underline items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group">Manage Customer</Link>
                    </li>
                </ul>
              </div>
            </NavItem>

            <NavItem className="sidenav-bg cursor-pointer">
              <div onClick={()=>{setSupplier(!supplier)}} href={''} className={location === '/pannel/addSupplier' || location === '/pannel/manageSupplier' ? "text-primary nav-link": "nav-link text-secondary py-3"}>
                <i className='bi bi-person'></i>
                <span className="ms-3 d-inline-block cursor-pointer">Supplier</span>
        
                <ul id="dropdown-example" className={` ${supplier === false ? 'hidden' : 'visible'} py-2 -ml-4 space-y-1`}>
                    <li className="flex items-center space-x-1 hover:text-indigo-700">
                        <i className='bi bi-plus-circle'></i>
                        <Link href={"/pannel/addSupplier"} className="flex no-underline items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group">Add Supplier</Link>
                    </li>
                    <li className="flex items-center space-x-1 hover:text-indigo-700">
                        <i className='bi bi-pen'></i>
                        <Link href={"/pannel/supplierList"} className="flex no-underline items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group">Manage Supplier</Link>
                    </li>
                </ul>
              </div>
            </NavItem>

            <NavItem className="sidenav-bg cursor-pointer">
              <div onClick={()=>{setProduct(!product)}} href={''} className={location === '/pannel/addProduct' || location === '/pannel/manageProduct' || location === '/pannel/addCategory' || location === '/pannel/categoryList' || location === '/pannel/addUnit' || location === '/pannel/unitList' ? "text-primary nav-link": "nav-link text-secondary py-3"}>
                <i className='bi bi-bag'></i>
                <span className="ms-3 d-inline-block cursor-pointer">Products</span>
        
                <ul id="dropdown-example" className={` ${product === false ? 'hidden' : 'visible'} py-2 -ml-4 space-y-1`}>

                    <li className="flex items-center space-x-1 hover:text-indigo-700">
                        <i className='bi bi-plus-circle'></i>
                        <Link href={"/pannel/addProduct"} className="flex no-underline items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group">Add Products</Link>
                    </li>
                    <li className="flex items-center space-x-1 hover:text-indigo-700">
                        <i className='bi bi-pen'></i>
                        <Link href={"/pannel/manageProduct"} className="flex no-underline items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group">Manage Products</Link>
                    </li>


                </ul>
              </div>
            </NavItem>

            <NavItem className="sidenav-bg">
              <Link href={'/pannel/bank'} className={location === '/pannel/bank'? "text-primary nav-link py-3": "nav-link text-secondary py-3"}>
                <i className='bi bi-bank'></i>
                <span className="ms-3 d-inline-block">Banks</span>
              </Link>
            </NavItem>

            <NavItem className="sidenav-bg">
              <Link href={'/pannel/chartsOfAccount'} className={location === '/pannel/chartsOfAccount'? "text-primary nav-link py-3": "nav-link text-secondary py-3"}>
                <i className='bi bi-alexa'></i>
                <span className="ms-3 d-inline-block">Charts of Account</span>
              </Link>
            </NavItem>

            <NavItem className="sidenav-bg">
              <Link href={'/pannel/report'} className={location === '/pannel/report'? "text-primary nav-link py-3": "nav-link text-secondary py-3"}>
                <i className='bi bi-activity'></i>
                <span className="ms-3 d-inline-block">Report</span>
              </Link>
            </NavItem>

            <NavItem className="sidenav-bg">
              <Link href={'/pannel/setting'} className={location === '/pannel/setting'? "text-primary nav-link py-3": "nav-link text-secondary py-3"}>
                <i className='bi bi-gear'></i>
                <span className="ms-3 d-inline-block">Setting</span>
              </Link>
            </NavItem>
          
        </Nav>
      </div>

    </div>
  );
};

export default Sidebar;
