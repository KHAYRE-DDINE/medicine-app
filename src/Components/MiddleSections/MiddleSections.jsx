import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Team from "./Team/Team";
import Faq from "./Faq/Faq";
import Booking from "./Booking/Booking";
import Error from "./Error/Error";
import LoginRegister from "./LoginRegister/LoginRegister";
import ForgotPassword from "./LoginRegister/ForgotPassword";
import Register from "./LoginRegister/Register";
import Service from "./Services/Service";
import ServiceDetail from "./Services/ServiceDetail";
import Contact from "./Contact/Contact";
import Search from "./Search/Search";
import Blog from "./Blogs/Blog";
import BlogDetail from "./Blogs/BlogDetail";

function MiddleSections() {
  return (
    <div className="all-sections">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/LoginRegister" element={<LoginRegister />} />
        <Route
          path="/LoginRegister/forgot-password"
          element={<ForgotPassword />}
        />
        <Route path="/LoginRegister/register" element={<Register />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/ServiceDetail" element={<ServiceDetail />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogDetail" element={<BlogDetail />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default MiddleSections;
