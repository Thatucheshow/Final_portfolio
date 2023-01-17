import React from 'react'
import './footer.css'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#"></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.instagram.com/robinuche"><AiOutlineInstagram/></a>
        <a href="https://www.linkedin.com/in/uche-okeke12/"><BsLinkedin/></a>
        <a href="https://github.com/Thatucheshow"><BsGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>
          &copy; Built by Uchechukwu Okeke <br />
          2022
        </small>
      </div>
    </footer>
  )
}

export default Footer