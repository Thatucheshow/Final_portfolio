import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>

      <div className='container experience__container'>
        <div className='experience__frontend'>
            <h3>Frontend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>javaScript</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>
        </div>

        <div className='experience__backend'>
            <h3>Backend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default experience