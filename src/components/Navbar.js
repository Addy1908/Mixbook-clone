import React from "react";
import "../css/index.css";
import logo from "../images/Capture.PNG";


export default function Navbar() {
  return (
    <>

    
   
      <div className="navbar">
        <nav id="navbar">
          {/* for logo */}
          <div id="logo">
            <img src={logo} alt="" />
          </div>

          
          <ul>

          
            <li className="list">
            <div class="dropdown">
            <a href=" #">PHOTO BOOKS</a>
  <div className="dropdown-content">
    <a href="# ">Link 1</a>
    <a href="# ">Link 2</a>
    <a href="# ">Link 3</a>
  </div>
</div>
             
            </li>

            <li className="list">
            <div class="dropdown">
            <a href=" #">CARDS</a>
  <div className="dropdown-content">
    <a href="# ">Link 1</a>
    <a href="# ">Link 2</a>
    <a href="# ">Link 3</a>
  </div>
</div>
            </li>
            <li className="list">
              <a href=" #"> CALENDERS</a>{" "}
            </li>
            <li className="list">
            <div class="dropdown">
            <a href=" #">HOME DECOR</a>
  <div className="dropdown-content">
    <a href="# ">Link 1</a>
    <a href="# ">Link 2</a>
    <a href="# ">Link 3</a>
  </div>
</div>
            </li>
            <li className="list">
            <div class="dropdown">
            <a href=" #">OCCASIONS</a>
  <div className="dropdown-content">
    <a href="# ">Link 1</a>
    <a href="# ">Link 2</a>
    <a href="# ">Link 3</a>
  </div>
</div>
            </li>
            <li className="list">
              <a href=" #"> DEALS</a>
            </li>

            <li className="list sign ">
             <strong> <a href=" #" style={{fontSize:"18px"}} className="log"> Sign Up</a></strong>
            </li>
            <li className="list log ">
              <a href=" #"> Log in</a>
            </li>
            <li className="list help ">
              <a href=" #"> Help</a>
            </li>
           
          </ul>
        </nav>
      </div>
    </>
  );
}
