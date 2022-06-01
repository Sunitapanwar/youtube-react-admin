import "./sidebar.css";
import {
  Dashboard,Book,
  LocationOn,Category,PeopleAlt,Redeem,
  StoreMallDirectory,DirectionsCar,AddShoppingCart,Build,CreateNewFolder,AddCircle,RemoveCircle,ArrowDropDown
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Sidebar() {
 const [show, setShow] = useState(false);

 
 function onClick(){
   setShow(!show);
 }


  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <Dashboard className="sidebarIcon" />
              Home
            </li>
            </Link>
              <Link to="/book" className="link">           
              <li className="sidebarListItem" onClick={onClick}>
                <Book className="sidebarIcon"  />
                Bookings
              </li>{show && (
                <div className="treeviewmenu" >
                <ul  className="treeview">
                <li className="treelist"><span>All Booking</span></li>
                <li className="treelist"><span>New Booking</span></li>
                <li className="treelist"><span>Confirm Booking</span></li>
                <li className="treelist"><span>InActive Booking</span></li>
                <li className="treelist"><span>Carts Booking</span></li></ul>
                </div>
   
              )}
              </Link>
              <li className="sidebarListItem" onClick={onClick}>
                <LocationOn className="sidebarIcon"/>
                Location Manage
                {/* {show && (
                <div className="treeviewmenu" >
                <ul  className="treeview">
                <li className="treelist"><span>Country</span></li>
                <li className="treelist"><span>States</span></li>
                <li className="treelist"><span>Cities</span></li>
                <li className="treelist"><span>Area</span></li></ul>
                </div>
   
              )} */}
                
              </li>
              <li className="sidebarListItem" onClick={onClick}>
                <Category className="sidebarIcon"/>
                Manage Categories
                {/* {show && (
                <div className="treeviewmenu" >
                <ul  className="treeview">
                <li className="treelist"><span>All Booking</span></li>
                <li className="treelist"><span>New Booking</span></li>
                <li className="treelist"><span>Confirm Booking</span></li>
                <li className="treelist"><span>InActive Booking</span></li>
                <li className="treelist"><span>Carts Booking</span></li></ul>
                </div>
   
              )} */}
              </li>
              <li className="sidebarListItem">
                <PeopleAlt className="sidebarIcon"/>
                Manage Users
              </li>
              <li className="sidebarListItem">
                <Redeem className="sidebarIcon"/>
                Promocode
              </li>
              <li className="sidebarListItem">
                <StoreMallDirectory className="sidebarIcon" />
                Manage Store
              </li>
              <li className="sidebarListItem">
                <DirectionsCar  className="sidebarIcon"/>
                  Ser.Center Packages
              </li>
              <li className="sidebarListItem">
                <AddShoppingCart  className="sidebarIcon"/>
                Manage Vehicle
              </li>
              <li className="sidebarListItem">
                <Build className="sidebarIcon"/>
                Manage Product
              </li>
              <li className="sidebarListItem">
                <CreateNewFolder className="sidebarIcon"/>
                Manage Taxes
              </li>
              <li className="sidebarListItem">
                <Build className="sidebarIcon"/>
                Manage Leads
              </li>
              <li className="sidebarListItem">
                <AddCircle className="sidebarIcon"/>
                Training Status
              </li>
              <li className="sidebarListItem">
                <RemoveCircle className="sidebarIcon"/>
                Training Panel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
