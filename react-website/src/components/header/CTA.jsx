import React from 'react'
import RESUME from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={RESUME} className='btn' target='_blank'> Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Chat</a>       
    </div>
  )
}

export default CTA