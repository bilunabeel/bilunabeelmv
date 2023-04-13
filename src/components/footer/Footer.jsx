import React from 'react'
import './footer.css'
import {FaInstagramSquare,FaLinkedin,FaTwitterSquare,FaFacebookSquare} from 'react-icons/fa'


export default function Footer() {
  return (
    <footer>
        {/* <a className='footer__logo' href="">okey</a> */}
        <ul className='permalinks' >
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experiences</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
            <a href="https://www.facebook.com/nabeel.mv.372/"><FaFacebookSquare/></a>
            <a href="https://www.instagram.com/bilucodes/"><FaInstagramSquare/></a>
            <a href="https://www.linkedin.com/in/mohamed-nabeel-mv-3046361b4/"><FaLinkedin/></a>
            <a href="https://twitter.com/bilunabeelmv"><FaTwitterSquare/></a>
        </div>
        <div className="footer__copyright">
            <small>©Mohamed Nabeel MV. All rights reserved.</small>
        </div>
    </footer>
  )
}
