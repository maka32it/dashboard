import React, { useContext } from "react";
import "./Sidebar.scss";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
export default function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <Link to={"/"}>DashboardAdmin</Link>
        </span>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <LineAxisIcon className="icons" />
            <span>DashBoard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users">
            <li>
              <PersonIcon className="icons" />
              <span>Users</span>
            </li>
          </Link>
          <Link to={"/products"}>
            <li>
              <ProductionQuantityLimitsIcon className="icons" />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <ShoppingBagIcon className="icons" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icons" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icons" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icons" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartIcon className="icons" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icons" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icons" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icons" />
            <span>Profile</span>
          </li>
          <li>
            <LoginIcon className="icons" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}
