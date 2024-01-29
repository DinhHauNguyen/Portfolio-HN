import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* -------- PROJECT 1 ------------- */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Auvenir</h3>
          <div className="portfolio__item-cta">
            {/* <a href="https://github.com/DinhHauNguyen" className='btn' target='_blank'>Github</a> */}
            <a href="https://na.auvenir.com/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        {/* --------- PROJECT 2 ------------- */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Elearning Platform</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DinhHauNguyen/Elearning-project-HB" className='btn' target='_blank'>Github</a>
            <a href="https://highbrowcourses.web.app/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        {/* --------- PROJECT 3 ------------- */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Booking Movie</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DinhHauNguyen/CanveMovie" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/DinhHauNguyen/CanveMovie" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        {/* --------- PROJECT 4 ------------- */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Alaxala</h3>
          <div className="portfolio__item-cta">
            {/* <a href="https://github.com/DinhHauNguyen/CanveMovie" className='btn' target='_blank'>Github</a> */}
            <a href="http://203.178.142.174:2882/cyber-portal/login" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio