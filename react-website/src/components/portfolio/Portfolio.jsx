import React from 'react'
import './portfolio.css'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h2>Some Things I've Built</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <h3>title</h3>
          <a href="https://github.com/sean-r-g/realestate-back-end" className='btn'>Github Backend</a>
          <a href="https://github.com/sean-r-g/realestate-front-end" className='btn'>Github Frontend</a>
          <a href="https://real-estate-front-end12.herokuapp.com/#" className=''>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio