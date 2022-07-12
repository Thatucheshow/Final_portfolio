import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'


function Nav() {
  return (
   <nav>
     <a href="#"><AiOutlineHome/></a>
     <a href="#about"><AiOutlineUser/></a>
     <a href="#portfolio"><BiBook/></a>
     <a href="#contact"><AiOutlineMessage/></a>
   </nav>
  )
}

export default Nav