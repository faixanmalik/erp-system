import { React, Fragment, useState } from 'react'
import Logo from "../../logo/Logo";
import { useRouter } from "next/router";
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Menu, MenuItem, SubMenu, Sidebar } from 'react-pro-sidebar';

import {AiOutlineCloseCircle, AiOutlineContacts, AiOutlineFundProjectionScreen, AiOutlineShoppingCart, AiOutlineTeam, AiOutlineUser, AiOutlineUserSwitch } from 'react-icons/ai'
import { BiFingerprint, BiHomeAlt, BiPurchaseTagAlt, BiUserCheck, BiUserCircle } from 'react-icons/bi'
import {MdOutlineInventory2, MdProductionQuantityLimits} from 'react-icons/md'
import {IoPieChartSharp, IoBusinessOutline} from 'react-icons/io5'
import {HiOutlineCash, HiOutlineDocumentReport, HiOutlineReceiptTax} from 'react-icons/hi'
import {BsBank, BsChatQuote, BsShop} from 'react-icons/bs'
import {FiShoppingBag} from 'react-icons/fi'
import {FaToriiGate} from 'react-icons/fa'
import {TbFileInvoice} from 'react-icons/tb'
import {RiBillLine} from 'react-icons/ri'
import {SlCalender} from 'react-icons/sl'





const Sidebar2 = ({ showMobilemenu }) => {

    
  const router = useRouter();
  const location = router.pathname;
  const [open, setOpen] = useState(false)

  
  

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <button className="text-2xl ml-6 items-center lg:hidden" onClick={showMobilemenu} >
          <AiOutlineCloseCircle />
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
                    <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-6 lg:right-8" onClick={() => setOpen(false)}>
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
                              <a href={'/pannel/dashboard/forms/invoice'} className='no-underline text-gray-500 font-semibold text-base'>Invoice</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/expense'} className='no-underline text-gray-500 font-semibold text-base'>Expense</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/singleTimeActivity'} className='no-underline text-gray-500 font-semibold text-base'>Single time activity</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/bankDeopsit'} className='no-underline text-gray-500 font-semibold text-base'>Bank deposit</a>
                            </td>
                          </tr>

                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/receivePayment'} className='no-underline text-gray-500 font-semibold text-base'>Receive payment</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/cheque'} className='no-underline text-gray-500 font-semibold text-base'>Cheque</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/weeklyTimeSheet'} className='no-underline text-gray-500 font-semibold text-base'>Weekly time sheet</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/transfer'} className='no-underline text-gray-500 font-semibold text-base'>Transfer</a>
                            </td>
                          </tr>


                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/estimate'} className='no-underline text-gray-500 font-semibold text-base'>Estimate</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/bill'} className='no-underline text-gray-500 font-semibold text-base'>Bill</a>
                            </td>
                            <td className="px-6 py-2">

                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/addVouchers'} className='no-underline text-gray-500 font-semibold text-base'>Journal entry</a>
                            </td>
                          </tr>


                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/creditNote'} className='no-underline text-gray-500 font-semibold text-base'>Credit Note</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/payBills'} className='no-underline text-gray-500 font-semibold text-base'>Pay bills</a>
                            </td>
                            <td className="px-6 py-2">

                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/statement'} className='no-underline text-gray-500 font-semibold text-base'>Statement</a>
                            </td>
                          </tr>

                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/salesReceipt'} className='no-underline text-gray-500 font-semibold text-base'>Sales receipt</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/purchaseOrder'} className='no-underline text-gray-500 font-semibold text-base'>Purchase order</a>
                            </td>
                            <td className="px-6 py-2">

                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/payDownCreditCard'} className='no-underline text-gray-500 font-semibold text-base'>Pay down credit card</a>
                            </td>
                          </tr>


                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/refundReceipt'} className='no-underline text-gray-500 font-semibold text-base'>Refund receipt</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/supplierCredit'} className='no-underline text-gray-500 font-semibold text-base'>Supplier credit</a>
                            </td>
                            <td className="px-6 py-2">

                            </td>
                            <td className="px-6 py-2">

                            </td>
                          </tr>

                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/delayedCredit'} className='no-underline text-gray-500 font-semibold text-base'>Delayed credit</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/creditCardCredit'} className='no-underline text-gray-500 font-semibold text-base'>Credit card credit</a>
                            </td>
                            <td className="px-6 py-2">

                            </td>
                            <td className="px-6 py-2">

                            </td>
                          </tr>
                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/dashboard/forms/delayedCharge'} className='no-underline text-gray-500 font-semibold text-base'>Delayed charge</a>
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



      <Sidebar width='255px' className='-ml-3'>
      <Menu className='bg-white'>
        <div className='justify-center flex mb-3'>
          <button onClick={() => { setOpen(true) }} className='bg-blue-800 mb-2 font-semibold text-white px-24 py-2 rounded-lg'>New</button>
        </div>
        
        <Menu>
          <MenuItem icon={<BiHomeAlt className='text-lg'/>} className={ location === '/' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'} href="/" >
              Dashboard
          </MenuItem>

        
          <SubMenu label={'User Mangment'} icon={<AiOutlineUser className='text-lg'/>}>
            <MenuItem icon={<BiUserCheck className='text-lg'/>} >User Details</MenuItem>
            <MenuItem icon={<BiUserCircle className='text-lg'/>} >User Authentication</MenuItem>
            <MenuItem icon={<AiOutlineUserSwitch className='text-lg'/>} >Reistriction Area</MenuItem>
          </SubMenu> 


          
          <SubMenu label="Business Setup" icon={<IoBusinessOutline className='text-lg'/>}>
            <MenuItem href="/pannel/dashboard/financialYear" icon={<SlCalender className='text-lg'/>} className={ location === '/pannel/dashboard/financialYear' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Financial Year
            </MenuItem>
            <MenuItem href="/pannel/dashboard/chartsOfAccount" icon={<IoPieChartSharp className='text-lg'/>} className={ location === '/pannel/dashboard/chartsOfAccount' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Charts of Accounts
            </MenuItem>
            <MenuItem href="/pannel/dashboard/contactList" icon={<AiOutlineContacts className='text-lg'/>} className={ location === '/pannel/dashboard/contactList' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Contact List
            </MenuItem>
            <MenuItem href="/pannel/dashboard/productAndServices" icon={<MdProductionQuantityLimits className='text-lg'/>} className={ location === '/pannel/dashboard/productAndServices' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Product and Services
            </MenuItem>
            <MenuItem href="/pannel/dashboard/fixedAssets" icon={<HiOutlineCash className='text-lg'/>} className={ location === '/pannel/dashboard/fixedAssets' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Fixed Assets
            </MenuItem>
            <MenuItem href="/pannel/dashboard/bankAccounts" icon={<BsBank className='text-lg'/>} className={ location === '/pannel/dashboard/bankAccounts' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Bank Accounts
            </MenuItem>
            <MenuItem href="/pannel/dashboard/taxRates" icon={<HiOutlineReceiptTax className='text-lg'/>} className={ location === '/pannel/dashboard/taxRates' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Tax Rates
            </MenuItem>
          </SubMenu>

        
          <SubMenu label="Purchase Module" icon={<AiOutlineShoppingCart className='text-lg'/>}>
            <MenuItem href="/pannel/dashboard/purchaseOrder" icon={<FiShoppingBag className='text-lg'/>} className={ location === '/pannel/dashboard/purchaseOrder' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Purchase Order
            </MenuItem>
            <MenuItem href="/pannel/dashboard/inwardGatePass" icon={<FaToriiGate className='text-lg'/>} className={ location === '/pannel/dashboard/inwardGatePass' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Inward Gateway Pass
            </MenuItem>
            <MenuItem href="/pannel/dashboard/purchaseOverview" icon={<FaToriiGate className='text-lg'/>} className={ location === '/pannel/dashboard/purchaseOverview' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Overview
            </MenuItem> 
          </SubMenu>

    
          <SubMenu label="Sales Module" icon={<BsShop className='text-lg'/>}>
            <MenuItem href="/pannel/dashboard/quotations" icon={<BsChatQuote className='text-lg'/>} className={ location === '/pannel/dashboard/quotations' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Quotations
            </MenuItem>
            <MenuItem href="/pannel/dashboard/saleOrder" icon={<BiPurchaseTagAlt className='text-lg'/>} className={ location === '/pannel/dashboard/saleOrder' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Sale Order
            </MenuItem>
            <MenuItem href="/pannel/dashboard/outwardGatewayPass" icon={<FaToriiGate className='text-lg'/>} className={ location === '/pannel/dashboard/outwardGatewayPass' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Outward Gateway Pass
            </MenuItem>
            <MenuItem href="/pannel/dashboard/saleOverview" icon={<TbFileInvoice className='text-lg'/>} className={ location === '/pannel/dashboard/saleOverview' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Overview
            </MenuItem>
          </SubMenu>

         
          <SubMenu label="Inventory Module" icon={<MdOutlineInventory2 className='text-lg'/>}>
            <MenuItem href="/pannel/dashboard/inventory" icon={<MdOutlineInventory2 className='text-lg'/>} className={ location === '/pannel/dashboard/inventory' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Inventory
            </MenuItem>
          </SubMenu>


         
          <SubMenu label="Payroll Department" icon={<AiOutlineTeam className='text-lg'/>}>
            <MenuItem href="/pannel/dashboard/employeesDetails" icon={<AiOutlineTeam className='text-lg'/>} className={ location === '/pannel/dashboard/employeesDetails' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Employees Details
            </MenuItem>
            <MenuItem href="/pannel/dashboard/employeesAttendance" icon={<BiFingerprint className='text-lg'/>} className={ location === '/pannel/dashboard/employeesAttendance' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Employees Attendance
            </MenuItem>
          </SubMenu>

          
          <SubMenu label="Financial Managment" icon={<HiOutlineCash className='text-lg'/>}>
            <MenuItem href="/pannel/dashboard/saleBilling" icon={<RiBillLine className='text-lg'/>} className={ location === '/pannel/dashboard/saleBilling' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Sale Invoice & Billing
            </MenuItem>
            <MenuItem href="/pannel/dashboard/purchaseBilling" icon={<RiBillLine className='text-lg'/>} className={ location === '/pannel/dashboard/purchaseBilling' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Purchase Invoice & Billing
            </MenuItem>
            <MenuItem href="/pannel/dashboard/vouchers" icon={<HiOutlineDocumentReport className='text-lg'/>} className={ location === '/pannel/dashboard/vouchers' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Vouchers
            </MenuItem>
            <MenuItem href="/pannel/dashboard/financialReports" icon={<HiOutlineDocumentReport className='text-lg'/>} className={ location === '/pannel/dashboard/financialReports' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Reports
            </MenuItem>
            <MenuItem href="/pannel/dashboard/projections" icon={<AiOutlineFundProjectionScreen className='text-lg'/>} className={ location === '/pannel/dashboard/projections' ?  'text-indigo-700 bg-zinc-50 font-semibold' : 'text-gray-600 font-semibold'}>
                Projections
            </MenuItem>
          </SubMenu>
          
      
        </Menu>
      </Menu>
      </Sidebar>


      </div>
    </div>
  );
};



export default Sidebar2;
