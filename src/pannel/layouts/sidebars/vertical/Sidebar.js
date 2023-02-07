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
    href: "/ui/alerts",
    icon: "bi bi-receipt",
  },
  {
    title: "Customer",
    href: "/ui/badges",
    icon: "bi bi-people",
  },
  {
    title: "Supplier",
    href: "/ui/buttons",
    icon: "bi bi-person",
  },
  {
    title: "Product",
    href: "/ui/cards",
    icon: "bi bi-bag",
  },
  {
    title: "Purchase",
    href: "/ui/grid",
    icon: "bi bi-truck",
  },
  {
    title: "Stock",
    href: "/ui/tables",
    icon: "bi bi-shop",
  },
  {
    title: "Accounts",
    href: "/ui/forms",
    icon: "bi bi-wallet2",
  },
  {
    title: "Report",
    href: "/ui/breadcrumbs",
    icon: "bi bi-link",
  },
  {
    title: "Setting",
    href: "/setting",
    icon: "bi bi-gear",
  },
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

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
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
