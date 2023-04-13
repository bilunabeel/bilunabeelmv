import React from 'react';
import ME from '../../assets/me-about.jpg';
import {FiAward, FiUsers} from 'react-icons/fi';
import {AiOutlineProject} from 'react-icons/ai';
import './about.css'

export default function About () {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container  about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years of Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Non sunt maiores similique? Corrupti, vel. Accusamus nihil repudiandae magni,
             eveniet optio ea temporibus aliquam necessitatibus,
             a et numquam rem, aut doloribus.
          </p>
          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  );
}
