import React, { useState } from "react"
import { ModalTitle } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'
import "./ModalSignIn.css"
import img1 from "./Assets/brandLogo.png"


const ModalSignIn = ({...props}) => {
    const {show} = props

    return(
        <Modal 
        show = {show}
        size="lg" 
        >
            <ModalTitle className="sign-in-title">
                <img src= {img1} alt="logo"
                className="logo"/>
                Meowme
            </ModalTitle>
            {/* <label className="tag">Full Name</label>
            <input type="text" placeholder="full name" className="sign-in-input"/> */}
            <label className="tag">Email</label>
            <input type="email" placeholder="email" className="sign-in-input"/>
            <label className="tag">Password</label>
            <input type="password" placeholder="password" className="sign-in-input"/>
            <button className="btn-sign-in">Sign In</button>
            <div className="modal-sign-in">
                <h5>Don't have an account?</h5>
                <button className="btn-register">Register</button>
            </div>
        </Modal>
    )
}
export default ModalSignIn