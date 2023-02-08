import { useState } from "react";
import { Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import {AiOutlineCloseCircle} from 'react-icons/ai'

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Sale",
    href: "/pannel/sale",
    icon: "bi bi-receipt",
  },
  {
    title: "Customer",
    href: "/pannel/customer",
    icon: "bi bi-people",
  },
  {
    title: "Supplier",
    href: "/pannel/supplier",
    icon: "bi bi-person",
  },
  {
    title: "Product",
    href: "/pannel/product",
    icon: "bi bi-bag",
  },
  {
    title: "Purchase",
    href: "/pannel/purchase",
    icon: "bi bi-truck",
  },
  {
    title: "Stock",
    href: "/pannel/stock",
    icon: "bi bi-shop",
  },
  {
    title: "Accounts",
    href: "/pannel/acounts",
    icon: "bi bi-wallet2",
  },
  {
    title: "Report",
    href: "/pannel/report",
    icon: "bi bi-link",
  },
  {
    title: "Setting",
    href: "/pannel/setting",
    icon: "bi bi-gear",
  },
];


const Sidebar = ({ showMobilemenu }) => {
  let router = useRouter();
  const location = router.pathname;
  const [dropdown, setDropdown] = useState(false)
  
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
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">


              <Link href={navi.href}
                  className={location === navi.href? "text-primary nav-link py-3": "nav-link text-secondary py-3"}
                >
            <button onClick={()=>{setDropdown(!dropdown)}} type="submit" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <i className={navi.icon}></i>
              <span className="ms-3 d-inline-block">{navi.title}</span>
            </button>
                  
              </Link>
              
            </NavItem>
          ))}
          
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
