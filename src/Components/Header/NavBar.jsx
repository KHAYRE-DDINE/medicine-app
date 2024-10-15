import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/nav-bar-logo.png";
import Icons from "../socialMedia/socialMediaLinks";
import { IoSearchOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function NavBar() {
  let burger = document.querySelector(".burger");
  let sideNavbar = document.querySelector(".side-navbar");
  const [showSearchPopUp, setShowSearchPopUp] = useState(false);
  const [scrollNum, setScrollNum] = useState(false);
  const [click, setClick] = useState();
  const refForm = useRef();
  const refBack = useRef();
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState(false);

  let changePlusToMins = (e, id) => {
    e.target.classList.toggle("show");
    setIndex(id);
    setStatus(!status);
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
  window.onclick = (e) => {
    if (e.target === refBack.current || e.target === refForm.current) {
      setShowSearchPopUp(false);
    }
  };
  showHideNavbar();

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
      setScrollNum(true);
    } else {
      setScrollNum(false);
    }
  });

  return (
    <motion.div
      className={`navbar-header`}
      style={
        scrollNum
          ? { backgroundColor: "#e3e3e3" }
          : { backgroundColor: "transparent" }
      }
    >
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
            <NavLink to="#" onClick={() => setShowSearchPopUp(true)}>
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
              <NavLink to="/" onClick={() => setClick(false)}>
                home
              </NavLink>
            </li>
            <li onClick={(e) => changePlusToMins(e, 1)}>
              pages
              <i
                className={`${
                  index === 1 && status ? "bi bi-dash" : "bi bi-plus"
                }`}
                data-class="bi bi-plus"
              ></i>
              <ul className="nested-list">
                <NavLink to="/About" onClick={() => setClick(false)}>
                  about us
                </NavLink>
                <NavLink to="/Team" onClick={() => setClick(false)}>
                  our team
                </NavLink>
                <NavLink to="/Faq" onClick={() => setClick(false)}>
                  FAQ's
                </NavLink>
                <NavLink to="/Booking" onClick={() => setClick(false)}>
                  booking
                </NavLink>
                <NavLink to="/Error" onClick={() => setClick(false)}>
                  Error 404
                </NavLink>
                <NavLink to="/LoginRegister" onClick={() => setClick(false)}>
                  login / register
                </NavLink>
              </ul>
            </li>
            <li onClick={(e) => changePlusToMins(e, 2)}>
              services
              <i
                className={`${
                  index === 2 && status ? "bi bi-dash" : "bi bi-plus"
                }`}
                data-class="bi bi-plus"
              ></i>
              <ul className="nested-list">
                <NavLink to="/service" onClick={() => setClick(false)}>
                  service
                </NavLink>
                <NavLink to="/serviceDetail" onClick={() => setClick(false)}>
                  service detail
                </NavLink>
              </ul>
            </li>
            <li onClick={(e) => changePlusToMins(e, 3)}>
              blog
              <i
                className={`${
                  index === 3 && status ? "bi bi-dash" : "bi bi-plus"
                }`}
                data-class="bi bi-plus"
              ></i>
              <ul className="nested-list">
                <NavLink to="/Blog" onClick={() => setClick(false)}>
                  blog
                </NavLink>
                <NavLink to="/BlogDetail" onClick={() => setClick(false)}>
                  blog details
                </NavLink>
              </ul>
            </li>
          </ul>
        </div>
        <Icons />
      </div>
      {showSearchPopUp && (
        <div className="search-page">
          <div className="back" ref={refBack}></div>
          <form action="" ref={refForm}>
            <fieldset>
              <input type="text" placeholder="Type to search" />
              <IoSearchOutline />
            </fieldset>
          </form>
        </div>
      )}
    </motion.div>
  );
}
export default NavBar;
