import "./sidebar.css";
import {
  Dashboard,Book,LocationOn,Category,PeopleAlt,Redeem,
  StoreMallDirectory,DirectionsCar,Build,AddCircle
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


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
            <ul className="sidebarList active">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <Dashboard className="sidebarIcon" />
              Home
            </li>
            </Link>
                       
              <li className="sidebarListItem" onClick={onClick}>
                <Book className="sidebarIcon"  />
                Bookings
              </li>{show && (
                <div className="treeviewmenu" >
                <ul  className="treeview">
                <li className="treelist"> <Link to="/book" className="link"><span>All Booking</span> </Link></li>
                <li className="treelist"><Link to="/newbook" className="link"><span>New Booking</span></Link></li>
                <li className="treelist"><Link to="/confirmbook" className="link"><span>Confirm Booking</span></Link></li>
                <li className="treelist"><Link to="/inactivebook" className="link"><span>InActive Booking</span></Link></li>
                <li className="treelist"><Link to="/newbook" className="link"><span>Carts Booking</span></Link></li></ul>
                </div>
   
              )}

              <li className="sidebarListItem">
                <LocationOn className="sidebarIcon"/>
                Location Manage
              </li>
              <Link to="/products" className="link">
              <li className="sidebarListItem" >
                <Category className="sidebarIcon"/>
                Manage Categories
              </li>
              </Link>
              <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PeopleAlt className="sidebarIcon"/>
                Manage Users
              </li>
              </Link>
              <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Build className="sidebarIcon"/>
                Manage Product
              </li>
              </Link>
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
                <AddCircle className="sidebarIcon"/>
                Training Status
              </li>
                
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
