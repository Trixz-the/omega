import React from 'react'
import Main from './Main'
import Nav from './Nav'
import "./Home.css"
import About from './About'

function Home() {
  return (
    <div className='home'>
        <Nav />
        <Main />
        <About />
    </div>
  )
}

export default Home