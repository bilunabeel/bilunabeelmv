import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaInstagramSquare,FaGithubSquare} from 'react-icons/fa'


export default function HeaderSocial() {
  return (
    <div className='header__socials' >
        <a href="https://www.instagram.com/bilucodes/" > <FaInstagramSquare/> </a>
        <a href="https://www.linkedin.com/in/mohamed-nabeel-mv-3046361b4/"><AiFillLinkedin/></a>
        <a href="https://github.com/bilunabeel" > <FaGithubSquare/> </a>
    </div>
  )
}
