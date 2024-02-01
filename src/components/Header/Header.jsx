import "./Header.css";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Logo from "./assets/kpmg-logo-white.png";

export default function Header() {
   return (
      <div className="header">
         <div className="header-details">
            <span className="header-details-item app-name">
               Supplier Portal
            </span>
            <img src={Logo} className="header-details-item logo" />
            <span className="header-details-item">
               <div className="user-details">
                  <div className="user-details-item">
                     <FaRegUserCircle
                        size={15}
                        style={{ marginRight: "10px" }}
                     />
                     Sujay
                  </div>
                  <div className="user-details-item">
                     <IoIosHelpCircleOutline
                        size={18}
                        style={{ marginRight: "10px" }}
                     />
                     Help
                  </div>
               </div>
            </span>
         </div>
         <div className="navbar">
            <div className="nav-button">
               <a href="#home">Dashboard</a>
            </div>
            <div className="nav-button">
               <a href="#home">Purchase Orders</a>
            </div>
            <div className="nav-button">
               <a href="#home">Item Listings</a>
            </div>
            <div className="nav-button">
               <a href="#home">Customer Orders</a>
            </div>
            <div className="nav-button">
               <a href="#home">Invoices</a>
            </div>
            <div className="nav-button">
               <a href="#home">Deals</a>
            </div>
            <div className="nav-button">
               <a href="#home">Analytics</a>
            </div>
         </div>
      </div>
   );
}
