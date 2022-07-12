import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='.container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>

            </article>
          </div>

          <p>I am a Software Engineer with a background in healthcare and production. <br /> I have a passion for writing problem solving codes. <br /> I am excited to work with a team of engineers who prioritize efficiency and growth while staying updated on the latest trends and technologies. 
        </p>

        <a className='btn btn-primary' href="#contact">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default About