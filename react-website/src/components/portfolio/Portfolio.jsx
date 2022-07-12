import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/realitive.jpg'
import IMG2 from '../../assets/sleepApp.jpg'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h2>Some Things I've Built</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Project Image" />
          </div>
          <h3>Realitive</h3>
          <a href="https://github.com/sean-r-g/realestate-back-end" className='btn'>Github Backend</a>
          <a href="https://github.com/sean-r-g/realestate-front-end" className='btn'>Github Frontend</a>
          <a href="https://real-estate-front-end12.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="Project Image" />
          </div>
          <h3>Sleep Tracker</h3>
          <a href="https://github.com/kaibrown28/sleepapp-backend" className='btn'>Github Backend</a>
          <a href="https://github.com/caseyoneil10/sleep_front_end" className='btn'>Github Frontend</a>
          <a href="https://protected-hamlet-59115.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Project Image" />
          </div>
          <h3>Realitive</h3>
          <a href="https://github.com/sean-r-g/realestate-back-end" className='btn'>Github Backend</a>
          <a href="https://github.com/sean-r-g/realestate-front-end" className='btn'>Github Frontend</a>
          <a href="https://real-estate-front-end12.herokuapp.com/#" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio