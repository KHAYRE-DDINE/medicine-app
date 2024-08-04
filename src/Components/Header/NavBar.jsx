import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/nav-bar-logo.png";
import Icons from "../socialMedia/socialMediaLinks";

function NavBar() {
  let burger = document.querySelector(".burger");
  let sideNavbar = document.querySelector(".side-navbar");
  const [click, setClick] = useState();
  let changePlusToMins = (e) => {
    let iconClass = "bi bi-";
    console.log(e.target);
    switch (e.target.children[0].className) {
      case "bi bi-plus":
        iconClass += "dash";
        e.target.children[0].className = "bi bi-dash";
        e.target.classList.toggle("show");
        break;
      case "bi bi-dash":
        iconClass += "plus";
        e.target.children[0].className = "bi bi-plus";
        e.target.classList.toggle("show");
        break;
      default:
        console.log("nothing");
        break;
    }
    return iconClass;
  };
  let showHideNavbar = () => {
    if (click) {
      burger.classList.add("clicked");
      sideNavbar.classList.add("show");
    } else if (click === false) {
      burger.classList.remove("clicked");
      sideNavbar.classList.remove("show");
    }
  };
  showHideNavbar();
  return (
    <div className="navbar-header">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="NavBar Logo" />
        </NavLink>
      </div>
      <div className="navbar-list">
        <div onClick={() => setClick(true)} className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <li className="search media">
          <NavLink to="/Search">
            <i className="bi bi-search"></i>
          </NavLink>
        </li>
        <ul className="list">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            pages<i className="bi bi-plus"></i>
            <ul className="nested-list">
              <NavLink to="/About">about us</NavLink>
              <NavLink to="/Team">our team</NavLink>
              <NavLink to="/Faq">FAQ's</NavLink>
              <NavLink to="/Booking">booking</NavLink>
              <NavLink to="/Error">Error 404</NavLink>
              <NavLink to="/LoginRegister">login / register</NavLink>
            </ul>
          </li>
          <li>
            services<i className="bi bi-plus"></i>
            <ul className="nested-list">
              <NavLink to="/Service">service</NavLink>
              <NavLink to="/ServiceDetail">service detail</NavLink>
            </ul>
          </li>
          <li>
            blog<i className="bi bi-plus"></i>
            <ul className="nested-list">
              <NavLink to="/Blog">blog</NavLink>
              <NavLink to="/BlogDetail">blog details</NavLink>
            </ul>
          </li>
          <li className="search">
            <NavLink to="/Search">
              <i className="bi bi-search"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact">
              Contact us <i className="bi bi-caret-right-fill"></i>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="side-navbar ">
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={logo} alt="NavBar Logo" />
          </NavLink>
        </div>
        <div className="navbar-list ">
          <div onClick={() => setClick(false)} className="close">
            <i className="bi bi-x-lg"></i>
          </div>
          <ul className="list">
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li onClick={changePlusToMins}>
              pages
              <i className="bi bi-plus"></i>
              <ul className="nested-list">
                <NavLink to="/About">about us</NavLink>
                <NavLink to="/Team">our team</NavLink>
                <NavLink to="/Faq">FAQ's</NavLink>
                <NavLink to="/Booking">booking</NavLink>
                <NavLink to="/Error">Error 404</NavLink>
                <NavLink to="/LoginRegister">login / register</NavLink>
              </ul>
            </li>
            <li onClick={changePlusToMins}>
              services
              <i className="bi bi-plus"></i>
              <ul className="nested-list">
                <NavLink to="/Search">service</NavLink>
                <NavLink to="/SearchDetail">service detail</NavLink>
              </ul>
            </li>
            <li onClick={changePlusToMins}>
              blog
              <i className="bi bi-plus"></i>
              <ul className="nested-list">
                <NavLink to="/Blog">blog</NavLink>
                <NavLink to="/BlogDetail">blog details</NavLink>
              </ul>
            </li>
          </ul>
        </div>
        <Icons />
      </div>
    </div>
  );
}
export default NavBar;