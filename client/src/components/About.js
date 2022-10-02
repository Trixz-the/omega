import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='about'>
        <div className="oneabt">
            <img src={require('../assets/images/about.png')} />
        </div>
        <div className="twoabt">
            <h1>About This Project</h1>
            <p>Omega is an AI driven software that takes in NTRS data and gives users a better, more readable, and a more comprehensive view of the record. It utilizes the best, most modern AI algorithms to facilitate the user experience. The main idea behind this project is to make a better user experience, where a user can easily access NTRS records and get a better look at its aspects.</p>
        </div>
    </div>
  )
}

export default About