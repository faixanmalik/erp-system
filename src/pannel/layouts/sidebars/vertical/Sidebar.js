import { useState } from "react";
import { Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import {AiOutlineCloseCircle} from 'react-icons/ai'



const Sidebar = ({ showMobilemenu }) => {
  let router = useRouter();
  const location = router.pathname;
  const [sale, setSale] = useState(false)
  const [customer, setCustomer] = useState(false)
  const [supplier, setSupplier] = useState(false)
  const [product, setProduct] = useState(false)

  
  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <button
          className="text-2xl ml-6 items-center lg:hidden"
          onClick={showMobilemenu}
        >
          <AiOutlineCloseCircle/>
        </button>
        
      </div>
 
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">

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
