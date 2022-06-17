import React from "react";
import {
  Dashboard,
  Book,
  LocationOn,
  Category,
  PeopleAlt,
  Redeem,
  StoreMallDirectory,
  DirectionsCar,
  Build,
  AddCircle,
} from "@material-ui/icons";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [show, setShow] = React.useState(false);
  const [selected, setSelected] = React.useState();

  const onClick = (n) => {
    if (n==='Bookings') {
      setShow(!show);
    }
   setSelected(n);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <ul className="sidebarList ">
              <Link to="/" className="link">
                <li  className={
                  selected === "Home"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => onClick("Home")}>
                  <Dashboard className="sidebarIcon" />
                  Home
                </li>
              </Link>

              <li
                className={
                  selected === "Bookings"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => onClick("Bookings")}
              >
                <Book className="sidebarIcon" />
                Bookings
              </li>
              {show && (
                <div className="treeviewmenu">
                  {/* <ul className="treeview"> */}
                    <li  className={
                  selected === "All Booking"
                    ? "treelist active"
                    : "treelist"
                }
                onClick={() => onClick("All Booking")}>
                      <Link to="/book" className="link">
                        <span className="treelistitem">All Booking</span>
                      </Link>
                    </li>
                    <li  className={
                  selected === "New Booking"
                    ? "treelist active"
                    : "treelist"
                }
                onClick={() => onClick("New Booking")}>
                      <Link to="/newbook" className="link">
                        <span className="treelistitem">New Booking</span>
                      </Link>
                    </li>
                    <li className={
                      selected==="Confirm Booking"
                      ? "treelist active"
                      : "treelist"
                    }
                    onClick={()=>onClick("Confirm Booking")}>
                      <Link to="/confirmbook" className="link">
                        <span className="treelistitem">Confirm Booking</span>
                      </Link>
                    </li>
                    <li className={
                      selected ==="InActive Booking"
                      ?"treelist active"
                      :"treelist"
                      }
                      onClick={()=>onClick("InActive Booking")}>
                      <Link to="/inactivebook" className="link">
                        <span className="treelistitem">InActive Booking</span>
                      </Link>
                    </li>
                    <li className={
                      selected==="Carts Booking"
                      ?"treelist active"
                      :"treelist"
                      }
                      onClick={()=>onClick("Carts Booking")}>
                      <Link to="/newbook" className="link">
                        <span className="treelistitem">Carts Booking</span>
                      </Link>
                    </li>
                </div>
              )}

              <li className={
                  selected === "Location Manage"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => onClick("Location Manage")}>
                <LocationOn className="sidebarIcon" />
                Location Manage
              </li>
              <Link to="/products" className="link">
                <li className={
                  selected === "Manage Categories"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => onClick("Manage Categories")}>
                  <Category className="sidebarIcon" />
                  Manage Categories
                </li>
              </Link>
              <Link to="/users" className="link">
                <li className={
                  selected === "Manage Users"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => onClick("Manage Users")}>
                  <PeopleAlt className="sidebarIcon" />
                  Manage Users
                </li>
              </Link>
              <Link to="/products" className="link">
                <li className={
                  selected === "Manage Product"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => onClick("Manage Product")}>
                  <Build className="sidebarIcon" />
                  Manage Product
                </li>
              </Link>
              <li className={
                  selected === "Promocode"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => onClick("Promocode")}>
                <Redeem className="sidebarIcon" />
                Promocode
              </li>
              <li className={
                  selected === " Manage Store"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => onClick("Manage Store")}>
                <StoreMallDirectory className="sidebarIcon" />
                Manage Store
              </li>
              <li className={
                  selected === "Ser.Center Packages"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => onClick("Ser.Center Packages")}>
                <DirectionsCar className="sidebarIcon" />
                Ser.Center Packages
              </li>
              <li className={
                  selected === "Training Status"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => onClick("Training Status")}>
                <AddCircle className="sidebarIcon" />
                Training Status
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
