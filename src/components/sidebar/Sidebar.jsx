import "./sidebar.css";
import {
  Dashboard,Book,
  LocationOn,Category,PeopleAlt,Redeem,
  StoreMallDirectory,DirectionsCar,AddShoppingCart,Build,CreateNewFolder,AddCircle,RemoveCircle
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem ">
              <Dashboard className="sidebarIcon" />
              Home
            </li>
            </Link>
           
            <Link to="/book" className="link">           
              <li className="sidebarListItem active">
                <Book className="sidebarIcon" />
                Bookings
              </li>
              </Link>
              <li className="sidebarListItem">
                <LocationOn className="sidebarIcon"/>
                Location Manage
              </li>
              <li className="sidebarListItem">
                <Category className="sidebarIcon"/>
                Manage Categories
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
