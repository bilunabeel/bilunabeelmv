import React from 'react';
import HeaderSocial from './HeaderSocial';
import CTA from './CTA';
import ME from '../../assets/me.png';
import './header.css';

export default function Header () {
  return (
    <header>
      <div className="container header__container">
        <div className="hello-bg">
          <h5>Hello I'm</h5>
          <div className="hello-arrow" />
        </div>
        <h1>Mohamed Nabeel.MV</h1>
        <h5 className="text-light">
          Full Stack Developer | UI/UX Design | Graphic Design
        </h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
}
