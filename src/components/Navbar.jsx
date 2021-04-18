import React, { useState } from "react"
import {Navbar} from "react-bootstrap"
import Modal from "./ModalSignIn"
import img1 from "./Assets/brandLogo.png"
import "../pages/Home.css"

const Navigation = () => {
  const [show, setShow] =useState(false)
  
  const callModal =() => {
    setShow(!show)
  }

  return(
    <>
    <Navbar className="navbar" bg="light" expand="lg">
      <div className="rectangle">
        <img src={img1} alt="logo" className="main-logo"/>
      </div>
      <Navbar.Brand className="title" href="#home">Meowme</Navbar.Brand>
      <input className= "search" type="search" placeholder=" search here..."/>
      <button className= "sign-in"  href="#ModalSignUp" onClick={callModal}>Sign In</button> 
    </Navbar>
    <Modal show ={show}/>
    </>

  ) 
}

export default Navigation
    