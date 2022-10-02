import React from 'react'
import "./Nav.css"
import {ReactComponent as Logo} from "../assets/svgs/logo.svg"
import "../assets/fonts/Fonts.css"

function Nav() {
  return (
    <div className='nav'>
        <div className="mainComp">
            <div className="logo"><Logo /></div>
            <div className="options">
                <div className="option">About</div>
                <div className="option">Workings</div>
                <div className="option">Team</div>
                <div className="option" id="speop">Get started</div>
            </div>
        </div>
    </div>
  )
}

export default Nav