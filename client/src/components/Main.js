import React from 'react'
import "./Main.css"
import {ReactComponent as Spline} from "../assets/svgs/spline.svg"
import {ReactComponent as Omega} from "../assets/svgs/omega.svg"

function Main() {
  return (
    <div className='main'>
        <div className="one">
            <div className="omega">
              <Omega />
            </div>
            <h1><span>NTRS</span> records made easy.</h1>
            <p>With <span id="omegaLogo">omega</span>, NTRS records are easier, clearer,and more accessible. With the help of advanced AI algorithms, NTRS records are enhanced and summarized to reach all audience.</p>
            <br />
            <a href="/records"><button>Get started</button></a>
        </div>
        <div className="two">
            <Spline />
        </div>
    </div>
  )
}

export default Main