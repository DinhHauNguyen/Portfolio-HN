import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import {BiCalendar} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>Personal journey</h5>
      <h2>My Qualification</h2>
      <div className="container services__container">
        {/* --------- Education --------- */}
        <article className="service">
          <div className="service__head">
            <h3>EDUCATION</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <div>
                <h4>Information Technology</h4>
                <p>HCMC University of Technology and Education</p>
                <BiCalendar/> <small className='service-light'>2017 - 2021</small>
              </div>
            </li>
          </ul>

        </article>
        {/* --------- Work --------------- */}
        <article className="service">
          <div className="service__head">
            <h3>WORKS</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <div>
                <h4>Software Engineer Intern</h4>
                <p>CyberSoft</p>
                <BiCalendar/> <small className='service-light'>05/2020 - 12/2020</small>
              </div>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <div>
                <h4>Software Engineer</h4>
                <p>TiTan Corporation</p>
                <BiCalendar/> <small className='service-light'>11/2021 - 07/2022</small>
              </div>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <div>
                <h4>Software Engineer</h4>
                <p>Hitachi Vantara VietNam</p>
                <BiCalendar/> <small className='service-light'>07/2022 - Present</small>
              </div>
            </li>
          </ul>

        </article>
        {/* -------------- OTHER QUALIFICATION ------------- */}
        <article className="service">
          <div className="service__head">
            <h3>OTHERS</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <div>
                <h4>Ielts</h4>
                <p>Loading...</p>
                {/* <BiCalendar/> <small className='service-light'>2021</small> */}
              </div>
            </li>
          </ul>

        </article>
      </div>

    </section>
  )
}

export default Services