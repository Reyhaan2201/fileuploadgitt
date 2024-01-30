import React from "react";
import "./navbar.css"
import {Link} from "react-router-dom";
import donut from "../images/donut.png";
import donut2 from "../images/donut-hover.png";
import profile from "../images/profile.png";
import cart from "../images/cart.png";
import { useState } from "react";
import propTypes from "prop-types";

// let images=[
//     {donutimg: donut}
// ]
export default function Navbar( props ) {
   const showstyle={
    color:"#f0639a"
   }
   const imgstyle={
    width: "30px",
    height: "30px"
   }
   const [ doimg, setdonut ]=useState(
    donut
   )
   const donuthover=()=>{
    setdonut(donut2)
   }
  return (
    <>
       <div className="container">
     <ul className="nav">
     <li className="nav-item" style={{padding: "0 10px"}}>
      <img src={doimg} alt="" onClick={donuthover} style={{width: "30px", height: "30px"}}  />
  </li>
  <li className="nav-item">
    <Link className="nav-link active" id="link" aria-current="page" to="/" style={{color: "#f0639a",fontSize: "27px", fontWeight: "bold"}}>{props.title}</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Menu" id="link" style={showstyle}>Menu</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/" id="link" style={showstyle}>Special Order</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/" id="link" style={showstyle}>About</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/" id="link" style={showstyle}>Reviews</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/" id="link" style={showstyle}>Contacts</Link>
  </li>
  <li className="nav-item" style={{display: "flex"}}>
    <Link className="nav-link" to="/"><img src={profile} alt="" style={imgstyle} /></Link>
    <Link className="nav-link" to="/"><img src={cart} alt="" style={imgstyle} /></Link>

  </li>
  
</ul>
</div>
    </>
  )
}


Navbar.propTypes={
  title: propTypes.string.isRequired
}