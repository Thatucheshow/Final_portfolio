import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {ImCodepen} from 'react-icons/im'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/uche-okeke12/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Thatucheshow" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/thatrobi" target="_blank"><AiOutlineInstagram/></a>       
        <a href="https://codepen.io/your-work/" target="_blank"><ImCodepen/></a>       
    </div>
  )
}

export default HeaderSocials