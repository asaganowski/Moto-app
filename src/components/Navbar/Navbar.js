import React, {useState} from "react";
import {

  NavLink,
  Link
} from "react-router-dom";
import "./Navbar.scss";



export default function Navbar() {

  const [menuMobile, setMenuMobile] = useState("inactive");

  function toggleMenu() {
    menuMobile === "active" ? setMenuMobile("inactive") : setMenuMobile("active");
      
  }

  return (

    <div className="navbar">
      <div className="nav">

    <div className="mobile">
        
          <Link to="/"> 
          <h3 className="workshopName">MotoMaster</h3>
          </Link>
        
          <i className="fas fa-bars mobile-menu" onClick={toggleMenu}/>
        </div>

          
      <ul className={`header ${menuMobile}`} >

        

        <li><NavLink to="/appointments" onClick={() => setMenuMobile("inactive")}>Your Appointments</NavLink></li>


        <li><NavLink to="/addAppointment" onClick={() => setMenuMobile("inactive")}><i className="far fa-calendar-plus" /> Make a reservation</NavLink></li>
        

      </ul>

      <Link to="/" onClick={() => setMenuMobile("inactive")} className={`${menuMobile}`}> <button className="reservation">
      <i className="fas fa-sign-in-alt"/> Login</button>
      </Link>

     

    </div>

    </div>
  );


}