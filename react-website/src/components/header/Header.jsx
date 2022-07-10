import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1>Uchechukwu Okeke</h1>
        <h5 className='text-light'>A Software Engineer with a background in healthcare and production. I have a passion for writing problem solving codes. I am excited to work with a team of engineers who prioritize efficiency and growth while staying updated on the latest trends and technologies. 
        </h5>
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