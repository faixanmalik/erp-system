import { Fragment, useState } from 'react'
import { Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'



const Sidebar = ({ showMobilemenu }) => {

  const router = useRouter();
  const location = router.pathname;
  const [customer, setCustomer] = useState(false)
  const [supplier, setSupplier] = useState(false)
  const [product, setProduct] = useState(false)
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
                              <a href={'/pannel/forms/invoice'} className='no-underline text-gray-500 font-semibold text-base'>Invoice</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/expense'} className='no-underline text-gray-500 font-semibold text-base'>Expense</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/singleTimeActivity'} className='no-underline text-gray-500 font-semibold text-base'>Single time activity</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/bankDeopsit'} className='no-underline text-gray-500 font-semibold text-base'>Bank deposit</a>
                            </td>
                          </tr>

                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/receivePayment'} className='no-underline text-gray-500 font-semibold text-base'>Receive payment</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/cheque'} className='no-underline text-gray-500 font-semibold text-base'>Cheque</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/weeklyTimeSheet'} className='no-underline text-gray-500 font-semibold text-base'>Weekly time sheet</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/transfer'} className='no-underline text-gray-500 font-semibold text-base'>Transfer</a>
                            </td>
                          </tr>


                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/estimate'} className='no-underline text-gray-500 font-semibold text-base'>Estimate</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/bill'} className='no-underline text-gray-500 font-semibold text-base'>Bill</a>
                            </td>
                            <td className="px-6 py-2">

                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/addVouchers'} className='no-underline text-gray-500 font-semibold text-base'>Journal entry</a>
                            </td>
                          </tr>


                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/creditNote'} className='no-underline text-gray-500 font-semibold text-base'>Credit Note</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/payBills'} className='no-underline text-gray-500 font-semibold text-base'>Pay bills</a>
                            </td>
                            <td className="px-6 py-2">

                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/statement'} className='no-underline text-gray-500 font-semibold text-base'>Statement</a>
                            </td>
                          </tr>

                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/salesReceipt'} className='no-underline text-gray-500 font-semibold text-base'>Sales receipt</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/purchaseOrder'} className='no-underline text-gray-500 font-semibold text-base'>Purchase order</a>
                            </td>
                            <td className="px-6 py-2">

                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/payDownCreditCard'} className='no-underline text-gray-500 font-semibold text-base'>Pay down credit card</a>
                            </td>
                          </tr>


                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/refundReceipt'} className='no-underline text-gray-500 font-semibold text-base'>Refund receipt</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/supplierCredit'} className='no-underline text-gray-500 font-semibold text-base'>Supplier credit</a>
                            </td>
                            <td className="px-6 py-2">

                            </td>
                            <td className="px-6 py-2">

                            </td>
                          </tr>

                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/delayedCredit'} className='no-underline text-gray-500 font-semibold text-base'>Delayed credit</a>
                            </td>
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/creditCardCredit'} className='no-underline text-gray-500 font-semibold text-base'>Credit card credit</a>
                            </td>
                            <td className="px-6 py-2">

                            </td>
                            <td className="px-6 py-2">

                            </td>
                          </tr>
                          <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-2">
                              <a href={'/pannel/forms/delayedCharge'} className='no-underline text-gray-500 font-semibold text-base'>Delayed charge</a>
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
            <button onClick={() => { setOpen(true) }} className='bg-blue-800 font-semibold text-white px-24 py-2 rounded-lg'>New</button>
          </NavItem>

          <NavItem className="sidenav-bg">
            <Link href={'/'} className={location === '/' ? "text-primary nav-link py-3" : "nav-link text-secondary py-3"}>
              <i className='bi bi-speedometer2'></i>
              <span className="ms-3 d-inline-block">Dashboard</span>
            </Link>
          </NavItem>

    
          <NavItem className="sidenav-bg">
            <Link href={'/pannel/manageVouchers'} className={location === '/pannel/manageVouchers' ? "text-primary nav-link py-3" : "nav-link text-secondary py-3"}>
              <i className='bi bi-receipt'></i>
              <span className="ms-3 d-inline-block">Vouchers</span>
            </Link>
          </NavItem>


          <NavItem className="sidenav-bg">
            <Link href={'/pannel/manageCustomer'} className={location === '/pannel/manageCustomer' ? "text-primary nav-link py-3" : "nav-link text-secondary py-3"}>
              <i className='bi bi-people'></i>
              <span className="ms-3 d-inline-block">Customer</span>
            </Link>
          </NavItem>

          <NavItem className="sidenav-bg">
            <Link href={'/pannel/supplierList'} className={location === '/pannel/supplierList' ? "text-primary nav-link py-3" : "nav-link text-secondary py-3"}>
              <i className='bi bi-person'></i>
              <span className="ms-3 d-inline-block">Suppliers List</span>
            </Link>
          </NavItem>

          <NavItem className="sidenav-bg">
            <Link href={'/pannel/manageProduct'} className={location === '/pannel/manageProduct' ? "text-primary nav-link py-3" : "nav-link text-secondary py-3"}>
              <i className='bi bi-bag'></i>
              <span className="ms-3 d-inline-block">product</span>
            </Link>
          </NavItem>


          <NavItem className="sidenav-bg">
            <Link href={'/pannel/bank'} className={location === '/pannel/bank' ? "text-primary nav-link py-3" : "nav-link text-secondary py-3"}>
              <i className='bi bi-bank'></i>
              <span className="ms-3 d-inline-block">Banks</span>
            </Link>
          </NavItem>

          <NavItem className="sidenav-bg">
            <Link href={'/pannel/chartsOfAccount'} className={location === '/pannel/chartsOfAccount' ? "text-primary nav-link py-3" : "nav-link text-secondary py-3"}>
              <i className='bi bi-alexa'></i>
              <span className="ms-3 d-inline-block">Charts of Account</span>
            </Link>
          </NavItem>

          <NavItem className="sidenav-bg">
            <Link href={'/pannel/report'} className={location === '/pannel/report' ? "text-primary nav-link py-3" : "nav-link text-secondary py-3"}>
              <i className='bi bi-activity'></i>
              <span className="ms-3 d-inline-block">Report</span>
            </Link>
          </NavItem>

          <NavItem className="sidenav-bg">
            <Link href={'/pannel/setting'} className={location === '/pannel/setting' ? "text-primary nav-link py-3" : "nav-link text-secondary py-3"}>
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
