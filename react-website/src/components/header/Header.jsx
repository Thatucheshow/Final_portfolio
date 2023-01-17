import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.JPG'
import HeaderSocials from './HeaderSocials'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1>Uchechukwu Okeke</h1>
        <span style={{color:'darkgrey', fontWeight:'bold'}}>
          <Typewriter 
          words={['A Software Developer', 'Fitness Professional', 'Content Creator']}
          loop={false}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={80}
          delaySpeed={1000}
          />
        </span>
        {/* <h5 className='text-light'> A Software Developer 
        </h5> */}
        <CTA />
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header